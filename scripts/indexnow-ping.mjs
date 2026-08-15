// Notifies Bing/Yandex via IndexNow that URLs have changed, for faster indexing than waiting on a crawl.
// Only run this once oztobali.com is actually live, pinging a domain that doesn't resolve yet does nothing useful.
// Usage: node scripts/indexnow-ping.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://oztobali.com';
const KEY = 'abcc73484f5542e8a8c8ee92d03217e1';

const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE_URL).host,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList,
  }),
});

console.log('IndexNow ping:', res.status, res.statusText, `(${urlList.length} URLs)`);
if (!res.ok) {
  const body = await res.text().catch(() => '');
  console.error(body);
  process.exit(1);
}
