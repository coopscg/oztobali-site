import { NavItem } from '../types';

export const navItems: NavItem[] = [
  {
    label: 'Move to Bali',
    children: [
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
      { label: 'Trusted Developers', to: '/property/developers', description: 'Established builders with a track record' },
    ],
  },
  { label: 'Culture', to: '/culture' },
  {
    label: 'Holidays',
    children: [
      { label: 'All Holiday Guides', to: '/holidays', description: 'Find the right trip for you' },
      { label: 'Family', to: '/holidays/family' },
      { label: 'Adventure', to: '/holidays/adventure' },
      { label: 'Partying', to: '/holidays/party' },
      { label: 'Shopping', to: '/holidays/shopping' },
      { label: 'Cultural', to: '/holidays/cultural' },
    ],
  },
  { label: 'Blog', to: '/blog' },
];
