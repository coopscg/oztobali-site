import { NavItem } from '../types';

export const navItems: NavItem[] = [
  {
    label: 'Move to Bali',
    children: [
      { label: 'Step-by-Step Moving Guide', to: '/plan/move', description: 'Everything in order, from visa to settling in' },
      { label: 'Visas & Residency', to: '/visas-residency', description: 'KITAS, KITAP, Second Home Visa & costs' },
      { label: 'Australian Tax & Exit', to: '/taxation/australia', description: 'ATO residency rules & leaving Australia' },
      { label: 'Indonesian Tax', to: '/taxation/indonesia', description: 'NPWP, tax residency & rates for expats' },
    ],
  },
  {
    label: 'Property',
    children: [
      { label: 'Renting in Bali', to: '/property/renting', description: 'Leases, deposits & popular areas' },
      { label: 'Buying in Bali', to: '/property/buying', description: 'Hak Pakai, leasehold & nominee risk' },
      { label: 'Established Developers', to: '/property/developers', description: 'Established builders with a track record' },
    ],
  },
  { label: 'Culture', to: '/culture' },
  {
    label: 'Holidays',
    children: [
      { label: 'Step-by-Step Trip Planner', to: '/plan/holiday', description: 'From picking dates to coming home' },
      { label: 'All Holiday Guides', to: '/holidays', description: 'Find the right trip for you' },
      { label: 'New Traveller Checklist', to: '/travel-checklist', description: 'Visas, vaccinations & duty-free' },
      { label: 'Family', to: '/holidays/family' },
      { label: 'Adventure', to: '/holidays/adventure' },
      { label: 'Partying', to: '/holidays/party' },
      { label: 'Shopping', to: '/holidays/shopping' },
      { label: 'Cultural', to: '/holidays/cultural' },
    ],
  },
  { label: 'Blog', to: '/blog' },
];
