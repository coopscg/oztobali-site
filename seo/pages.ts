import { SITE_URL, DEFAULT_OG_IMAGE, SEOInput } from './tags';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { faqs } from '../data/faqs';
import { holidayCategories, HolidayCategoryInfo } from '../data/holidayPlaces';
import { developers } from '../data/developers';

export function homeSEO(): SEOInput {
  return {
    title: 'OztoBali | The Australian\'s Guide to Moving to & Living in Bali',
    description:
      'Everything Australians need to move to, live in, and holiday in Bali: visas & residency costs, property rules, tax obligations in Australia and Indonesia, culture, and the best places to stay.',
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  };
}

export function visasResidencySEO(): SEOInput {
  return {
    title: 'Bali Visas & Residency Costs for Australians | OztoBali',
    description:
      'KITAS, KITAP, Second Home Visa, and every other visa pathway Australians use to holiday, work remotely, retire, or invest in Bali — with real 2026 costs and sources.',
    path: '/visas-residency',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Visas & Residency', item: `${SITE_URL}/visas-residency` },
      ],
    },
  };
}

export function taxAustraliaSEO(): SEOInput {
  return {
    title: 'Leaving Australia: ATO Tax Residency Rules & Your Exit | OztoBali',
    description:
      'How the ATO decides if you\'re still an Australian tax resident, what changes when you\'re not (CGT, Medicare levy, super), and how to exit properly.',
    path: '/taxation/australia',
  };
}

export function taxIndonesiaSEO(): SEOInput {
  return {
    title: 'Indonesian Tax Rules for Australians in Bali | OztoBali',
    description:
      'NPWP registration, Indonesian tax residency (the 183-day rule), current income tax rates, and the limits of the foreign-income exemption for expats.',
    path: '/taxation/indonesia',
  };
}

export function propertyRentingSEO(): SEOInput {
  return {
    title: 'Renting in Bali: Lease Rules, Deposits & Best Areas | OztoBali',
    description:
      'How Bali leases actually work, what protects you as a tenant, and where Australians rent — Canggu, Seminyak, Ubud, Uluwatu and Sanur compared.',
    path: '/property/renting',
  };
}

export function propertyBuyingSEO(): SEOInput {
  return {
    title: 'Buying Property in Bali: Hak Pakai, Leasehold & the Nominee Trap | OztoBali',
    description:
      'What Australians can legally own in Bali — Hak Pakai, leasehold, and PT PMA structures — and why nominee arrangements are now a criminal offence.',
    path: '/property/buying',
  };
}

export function propertyDevelopersSEO(): SEOInput {
  return {
    title: 'Trusted Bali Property Developers With a Track Record | OztoBali',
    description:
      'Established Bali developers and builders with genuinely delivered projects — from luxury villa groups to large-scale resort developers.',
    path: '/property/developers',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: developers.map((dev, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: dev.name,
        url: dev.website,
      })),
    },
  };
}

export function cultureSEO(): SEOInput {
  return {
    title: 'Bali Culture & Way of Life for Australians | OztoBali',
    description:
      'Tri Hita Karana, the banjar system, the ceremony calendar, and the everyday etiquette Australians need to understand and respect in Bali.',
    path: '/culture',
  };
}

export function holidaysSEO(): SEOInput {
  return {
    title: 'Bali Holiday Guides: Family, Adventure, Party, Shopping & Culture | OztoBali',
    description:
      'Find the right kind of Bali holiday — family-friendly, adventure, nightlife, shopping, or cultural — with areas, prices and practical tips for each.',
    path: '/holidays',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: holidayCategories.map((cat, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: cat.label,
        url: `${SITE_URL}/holidays/${cat.slug}`,
      })),
    },
  };
}

export function holidayCategorySEO(cat: HolidayCategoryInfo): SEOInput {
  return {
    title: `${cat.label} in Bali: Where to Go & What to Know | OztoBali`,
    description: cat.intro,
    path: `/holidays/${cat.slug}`,
  };
}

export function privacySEO(): SEOInput {
  return {
    title: 'Privacy Policy | OztoBali',
    description: 'What OztoBali collects, why, and what happens to it.',
    path: '/privacy',
  };
}

export function travelChecklistSEO(): SEOInput {
  return {
    title: 'New Traveller Checklist: Visas, Vaccinations & Duty-Free | OztoBali',
    description:
      'Everything a first-time Australian traveller needs before flying to Bali: e-VOA visa, vaccinations, the Bali tourist levy, and duty-free rules both directions.',
    path: '/travel-checklist',
  };
}

export function partnerSEO(): SEOInput {
  return {
    title: 'Partner With OztoBali | Advertise to Australians Moving to Bali',
    description:
      'Reach Australians actively researching visas, property, and moving to Bali. Directory listings, featured placements, and content partnerships.',
    path: '/partner',
  };
}

export function creditsSEO(): SEOInput {
  return {
    title: 'Photo Credits | OztoBali',
    description: 'Attribution for the freely licensed Bali photography used across this site.',
    path: '/credits',
  };
}

export function contactSEO(): SEOInput {
  return {
    title: 'Contact Us | OztoBali',
    description: 'Get in touch about visas, property, tax, or planning your move to Bali.',
    path: '/contact',
  };
}

export function blogIndexSEO(): SEOInput {
  return {
    title: 'Guides & Answers for Australians Moving to Bali | OztoBali Blog',
    description:
      'Practical, sourced answers to the questions Australians actually ask before moving to or investing in Bali.',
    path: '/blog',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'OztoBali Blog',
      url: `${SITE_URL}/blog`,
      blogPost: blogPosts.map((post) => ({
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        url: `${SITE_URL}/blog/${post.slug}`,
      })),
    },
  };
}

export function postSEO(post: BlogPost): SEOInput {
  return {
    title: `${post.title} | OztoBali`,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        image: DEFAULT_OG_IMAGE,
        author: { '@type': 'Organization', name: 'OztoBali' },
        publisher: {
          '@type': 'Organization',
          name: 'OztoBali',
          logo: { '@type': 'ImageObject', url: DEFAULT_OG_IMAGE },
        },
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
        ],
      },
    ],
  };
}

export function notFoundSEO(): SEOInput {
  return {
    title: 'Page Not Found | OztoBali',
    description: 'This page could not be found.',
    path: '/blog',
  };
}

export function getAllRoutes(): string[] {
  return [
    '/',
    '/visas-residency',
    '/taxation/australia',
    '/taxation/indonesia',
    '/property/renting',
    '/property/buying',
    '/property/developers',
    '/culture',
    '/holidays',
    ...holidayCategories.map((c) => `/holidays/${c.slug}`),
    '/blog',
    ...blogPosts.map((post) => `/blog/${post.slug}`),
    '/contact',
    '/credits',
    '/partner',
    '/travel-checklist',
    '/privacy',
  ];
}

export function getSEOForRoute(path: string): SEOInput {
  if (path === '/') return homeSEO();
  if (path === '/visas-residency') return visasResidencySEO();
  if (path === '/taxation/australia') return taxAustraliaSEO();
  if (path === '/taxation/indonesia') return taxIndonesiaSEO();
  if (path === '/property/renting') return propertyRentingSEO();
  if (path === '/property/buying') return propertyBuyingSEO();
  if (path === '/property/developers') return propertyDevelopersSEO();
  if (path === '/culture') return cultureSEO();
  if (path === '/holidays') return holidaysSEO();
  if (path === '/contact') return contactSEO();
  if (path === '/credits') return creditsSEO();
  if (path === '/partner') return partnerSEO();
  if (path === '/travel-checklist') return travelChecklistSEO();
  if (path === '/privacy') return privacySEO();
  if (path === '/blog') return blogIndexSEO();
  if (path.startsWith('/holidays/')) {
    const slug = path.replace('/holidays/', '');
    const cat = holidayCategories.find((c) => c.slug === slug);
    return cat ? holidayCategorySEO(cat) : notFoundSEO();
  }
  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    const post = blogPosts.find((p) => p.slug === slug);
    return post ? postSEO(post) : notFoundSEO();
  }
  return notFoundSEO();
}
