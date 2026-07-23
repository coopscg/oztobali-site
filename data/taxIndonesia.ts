import { TaxSection } from './taxAustralia';

export const LAST_VERIFIED_ID = '22 July 2026';

export const idTaxSections: TaxSection[] = [
  {
    title: 'When you become an Indonesian tax resident',
    body: "Under PMK 18/2021, a foreign national becomes an Indonesian tax resident (a 'domestic tax subject') if they are present in Indonesia for more than 183 days in any rolling 12-month period, or if they're present during a tax year with a clear intent to reside — for example, holding a KITAS signalling an intended long-term stay, even before hitting 183 days. Residents are taxed on worldwide income. Non-residents face a flat 20% withholding tax on Indonesian-sourced income only, subject to relief under the Australia–Indonesia tax treaty.",
  },
  {
    title: 'The NPWP (tax ID) requirement',
    body: "Foreigners holding a KITAS or KITAP who meet the residency criteria above must register for an NPWP (Indonesian tax ID), generally within the first month of becoming eligible. Registration requires your passport, KITAS/ITAS, and proof of income or employment. Once registered, obligations include annual (and for some, monthly) tax return filing, and — for employees — payroll withholding handled by the employer.",
    verify: "Indonesian banks have increasingly required an NPWP for full account services following the 2025 CoreTax system rollout, and the NPWP format itself moved to 16 digits in 2025. This is a genuine compliance trap: many retirees and remote workers assume a tourist-style presence carries no filing duty, but crossing 183 days — or simply holding a KITAS that signals intent to reside — can trigger it.",
  },
  {
    title: 'Personal income tax rates for residents (2025/26)',
    body: 'Progressive rates apply: 5% up to IDR 60 million, 15% from IDR 60–250 million, 25% from IDR 250–500 million, 30% from IDR 500 million–5 billion, and 35% above IDR 5 billion (the top 35% bracket was introduced by the 2021 Harmonised Tax Law). Monthly payroll withholding has used a simplified "Average Effective Rate" system since 1 January 2024, reconciled annually.',
  },
  {
    title: 'The foreign-income concession is narrower than expat forums suggest',
    body: "PMK 18/2021 allows qualifying new resident foreigners with specific expertise — certified skills, five or more years' experience, and a knowledge-transfer commitment, subject to Directorate General of Taxes approval — to elect to be taxed only on Indonesian-sourced income for their first four tax years as a resident.",
    verify: "This is not a general retiree or digital-nomad exemption. It requires an approved expertise category and a formal application. Without that approval, resident foreigners — including most retirees on a Retirement KITAS or Second Home Visa — are taxed on worldwide income once resident, with DTA credit relief available for tax already paid in Australia. Be wary of any blanket claim that 'foreign income is tax-free' in Bali.",
  },
  {
    title: 'No new tax amnesty — despite what you may have heard',
    body: "Indonesia ran tax amnesties in 2016 and a Voluntary Disclosure Program in 2022. As of mid/late-2026, the Finance Minister has stated no new amnesty is currently planned, while a possible 'Tax Amnesty Volume III' remains only a drafting item on the government's legislative priority list — it has not been enacted. There is no dedicated low-tax 'retiree visa' tax regime in Indonesia comparable to some other Southeast Asian countries — the Second Home Visa is an immigration product, not a tax concession.",
    verify: "Treat any 'amnesty' or 'tax-free retirement' marketing claims aimed at expats with real caution, and verify directly against pajak.go.id before acting.",
  },
];
