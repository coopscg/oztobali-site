export const SITE_URL = 'https://oztobali.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/oztobali-og.jpg`;
export const SITE_NAME = 'OztoBali';

export interface SEOInput {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
  jsonLd?: object | object[];
}

export interface SEOTags {
  title: string;
  canonical: string;
  metaTags: { attr: 'name' | 'property'; key: string; content: string }[];
  jsonLdBlocks: string[];
}

export function buildSEOTags(input: SEOInput): SEOTags {
  const { title, description, path, type = 'website', image = DEFAULT_OG_IMAGE, jsonLd } = input;
  const url = `${SITE_URL}${path}`;

  const metaTags: SEOTags['metaTags'] = [
    { attr: 'name', key: 'description', content: description },
    { attr: 'property', key: 'og:title', content: title },
    { attr: 'property', key: 'og:description', content: description },
    { attr: 'property', key: 'og:type', content: type },
    { attr: 'property', key: 'og:url', content: url },
    { attr: 'property', key: 'og:image', content: image },
    { attr: 'property', key: 'og:site_name', content: SITE_NAME },
    { attr: 'name', key: 'twitter:card', content: 'summary_large_image' },
    { attr: 'name', key: 'twitter:title', content: title },
    { attr: 'name', key: 'twitter:description', content: description },
    { attr: 'name', key: 'twitter:image', content: image },
  ];

  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return {
    title,
    canonical: url,
    metaTags,
    jsonLdBlocks: jsonLdArray.map((obj) => JSON.stringify(obj)),
  };
}
