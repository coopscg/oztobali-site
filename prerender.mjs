import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const ssrDir = path.join(__dirname, 'dist-ssr');

const ssrEntryFile = fs.readdirSync(ssrDir).find((f) => f.endsWith('.js'));
if (!ssrEntryFile) {
  throw new Error(`No SSR entry bundle found in ${ssrDir}`);
}

const { render, getAllRoutes, getSEOForRoute, buildSEOTags, SITE_URL, SITE_NAME, blogPosts } = await import(
  pathToFileURL(path.join(ssrDir, ssrEntryFile)).href
);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const routes = getAllRoutes();

function injectHead(html, tags) {
  let out = html;

  out = out.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(tags.title)}</title>`);
  out = out.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(tags.metaTags.find((t) => t.key === 'description').content)}" />`
  );
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(tags.canonical)}" />`
  );

  const extraMeta = tags.metaTags
    .filter((t) => t.key !== 'description')
    .map((t) => `  <meta ${t.attr}="${t.key}" content="${escapeAttr(t.content)}" />`)
    .join('\n');

  const jsonLdScripts = tags.jsonLdBlocks
    .map((block) => `  <script type="application/ld+json">${block}</script>`)
    .join('\n');

  out = out.replace('</head>', `${extraMeta}\n${jsonLdScripts}\n</head>`);
  return out;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

for (const route of routes) {
  const appHtml = render(route);
  const seoInput = getSEOForRoute(route);
  const tags = buildSEOTags(seoInput);

  let pageHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  pageHtml = injectHead(pageHtml, tags);

  const outPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.replace(/^\//, ''), 'index.html');

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, pageHtml);
  console.log('Prerendered:', route, '->', path.relative(distDir, outPath));
}

// Regenerate sitemap.xml from the same route list (single source of truth)
const sitemapEntries = routes
  .map((route) => {
    const priority = route === '/' ? '1.0' : route.startsWith('/blog/') ? '0.6' : '0.8';
    const changefreq = route === '/' || route === '/blog' ? 'weekly' : 'monthly';
    return `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('Regenerated sitemap.xml with', routes.length, 'routes');

// Generate rss.xml from the blog posts, newest first
function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
const rssItems = sortedPosts
  .map((post) => {
    const url = `${SITE_URL}/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();
    return `    <item>\n      <title>${escapeXml(post.title)}</title>\n      <link>${url}</link>\n      <guid>${url}</guid>\n      <description>${escapeXml(post.description)}</description>\n      <pubDate>${pubDate}</pubDate>\n      <category>${escapeXml(post.category)}</category>\n    </item>`;
  })
  .join('\n');
const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>${escapeXml(SITE_NAME)} Blog</title>\n    <link>${SITE_URL}/blog</link>\n    <description>Practical, sourced guides for Australians moving to, living in, and holidaying in Bali.</description>\n    <language>en-AU</language>\n${rssItems}\n  </channel>\n</rss>\n`;
fs.writeFileSync(path.join(distDir, 'rss.xml'), rss);
console.log('Generated rss.xml with', sortedPosts.length, 'posts');

// Clean up the SSR-only build output
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log('Prerendering complete.');
