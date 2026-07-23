import { TaxSection } from './taxAustralia';

export const LAST_VERIFIED_RENT = '22 July 2026';

export const rentingSections: TaxSection[] = [
  {
    title: 'How Bali leases actually work',
    body: "Bali's rental market runs on two parallel tracks: short/mid-term 'monthly' villa rentals aimed at digital nomads and tourists, and traditional Indonesian-style annual or multi-year leases. For the latter, paying the entire lease term upfront in one lump sum — 1, 2, 3, or even 5 years at once — is the cultural norm, not a red flag. It's standard Indonesian residential leasing practice, not something unique to foreigners. Monthly villa rentals are increasingly available in expat-heavy areas like Canggu, but landlords typically still expect one to three months paid in advance, with better rates for 6–12 month commitments.",
  },
  {
    title: 'Deposits, contracts and your legal protection',
    body: "Foreigners can legally rent in Bali with no ownership restriction on renting itself. Security deposits typically run 1–3 months' rent, refundable at lease end — but contracts frequently leave 'damage' assessment solely to the landlord with no independent inspection, which is the single most common dispute point. Get this tightened in the contract before you sign.",
    list: [
      'Insist on a bilingual (Bahasa Indonesia + English) written lease — Indonesian law prioritises the Indonesian-language version in any dispute.',
      'Have the contract explicitly cover the deposit return timeline and early-termination terms.',
      "Confirm in writing who holds legal responsibility for the property's building and zoning permits.",
      'Understand that court recourse for a rental dispute is slow and rarely used in practice by foreigners — good contract drafting up front matters far more than theoretical legal protection.',
    ],
  },
  {
    title: 'Where Australians actually rent, and roughly what it costs',
    body: "Canggu/Berawa remains the digital-nomad and surf hub, with 3-bedroom villas roughly IDR 35–37.5 million/month. Seminyak is more polished and central, from around IDR 27 million/month. Ubud sits in a similar band to Canggu, favoured for its quieter rice-field and jungle setting. Uluwatu and Sanur are generally considered better value — Uluwatu for cliff and surf position, Sanur for a calmer, more family- and retiree-oriented market.",
    verify: 'Treat these as indicative only — Bali villa rental pricing moves quickly with tourism cycles and varies enormously by exact location, size, and pool/staff inclusions. Always get a current agent quote before budgeting against a specific figure.',
  },
];
