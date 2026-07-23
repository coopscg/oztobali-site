export interface PartnerTier {
  name: string;
  price: string;
  bestFor: string;
  features: string[];
  highlight?: boolean;
}

export const partnerTiers: PartnerTier[] = [
  {
    name: 'Directory Listing',
    price: 'From $99/month',
    bestFor: 'Established developers, agents & service providers wanting steady visibility',
    features: [
      'Listed on the relevant guide page (Developers, Visas, or Property)',
      'Direct link to your site',
      'Listed among other vetted, established operators',
    ],
  },
  {
    name: 'Featured Placement',
    price: 'From $199/month',
    bestFor: 'Businesses wanting top-of-page visibility and stronger trust signal',
    features: [
      'Everything in Directory Listing',
      'Featured badge + priority position on the page',
      'Short custom blurb in your own words',
      'Logo placement',
    ],
    highlight: true,
  },
  {
    name: 'Content Partnership',
    price: 'From $349/month',
    bestFor: 'Businesses wanting deeper association with a specific topic or audience',
    features: [
      'Everything in Featured Placement',
      'A dedicated guide or blog article featuring your business, written to the same research/citation standard as the rest of the site',
      'First-look placement in new content covering your category',
    ],
  },
];

export const audienceStats = [
  { label: 'Content pieces', value: '20+' },
  { label: 'Topics covered', value: 'Visas · Tax · Property · Culture · Holidays' },
  { label: 'Audience', value: 'Australians actively researching Bali' },
];
