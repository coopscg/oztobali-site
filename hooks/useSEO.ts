import { useEffect } from 'react';
import { buildSEOTags, SEOInput } from '../seo/tags';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSEO(options: SEOInput) {
  const { title, description, path, type, image, jsonLd } = options;

  useEffect(() => {
    const tags = buildSEOTags({
      title,
      description,
      path: path ?? window.location.pathname,
      type,
      image,
      jsonLd,
    });

    document.title = tags.title;
    setCanonical(tags.canonical);
    tags.metaTags.forEach(({ attr, key, content }) => setMeta(attr, key, content));

    const containerId = 'seo-json-ld-container';
    document.getElementById(containerId)?.remove();

    if (tags.jsonLdBlocks.length > 0) {
      const container = document.createElement('div');
      container.id = containerId;
      container.style.display = 'none';
      tags.jsonLdBlocks.forEach((block) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = block;
        container.appendChild(script);
      });
      document.head.appendChild(container);
    }

    return () => {
      document.getElementById(containerId)?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, type, image, JSON.stringify(jsonLd)]);
}

export { SITE_URL, DEFAULT_OG_IMAGE } from '../seo/tags';
