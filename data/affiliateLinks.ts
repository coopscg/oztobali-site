export interface AffiliateLink {
  name: string;
  description: string;
  // TODO: replace with your real affiliate tracking link once approved for each program.
  // These are plain, non-tracking links for now, not yet earning commission.
  url: string;
  category: 'accommodation' | 'activities' | 'money' | 'connectivity' | 'insurance' | 'property' | 'legal';
}

export const affiliateLinks: AffiliateLink[] = [
  {
    name: 'New Life Bali',
    description: 'AREBI-certified real estate agency, buying, selling and leasing across Bali',
    url: 'https://newlifebali.com/',
    category: 'property',
  },
  {
    name: 'Legal Indonesia',
    description: 'PT PMA company setup, KITAS applications and legal structuring for foreigners',
    url: 'https://legalindonesia.id/',
    category: 'legal',
  },
  {
    name: 'OFX',
    description: 'Large international transfers, strong rates once you move above a few thousand dollars',
    url: 'https://www.ofx.com/en-au/',
    category: 'money',
  },
  {
    name: 'Revolut',
    description: 'Multi-currency card and account, useful for everyday spending in IDR',
    url: 'https://www.revolut.com/',
    category: 'money',
  },
  {
    name: 'Booking.com',
    description: 'Hotels and villas, free cancellation on most listings',
    url: 'https://www.booking.com/',
    category: 'accommodation',
  },
  {
    name: 'Agoda',
    description: 'Often the strongest rates specifically for Southeast Asia',
    url: 'https://www.agoda.com/',
    category: 'accommodation',
  },
  {
    name: 'Klook',
    description: 'Day trips, activities and airport transfers, book ahead',
    url: 'https://www.klook.com/',
    category: 'activities',
  },
  {
    name: 'GetYourGuide',
    description: 'Tours and experiences with free cancellation options',
    url: 'https://www.getyourguide.com/',
    category: 'activities',
  },
  {
    name: 'Wise',
    description: 'Real exchange rate transfers between AUD and IDR, no hidden markup',
    url: 'https://wise.com/au/',
    category: 'money',
  },
  {
    name: 'Airalo',
    description: 'eSIM for Indonesia, set up data before you land',
    url: 'https://www.airalo.com/',
    category: 'connectivity',
  },
];

export function affiliateLinksByCategory(category: AffiliateLink['category']): AffiliateLink[] {
  return affiliateLinks.filter((link) => link.category === category);
}
