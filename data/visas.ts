export interface VisaOption {
  code: string;
  name: string;
  forWhom: string;
  cost: string;
  duration: string;
  requirements: string[];
  notes?: string;
  verify?: string;
}

export const LAST_VERIFIED = '22 July 2026';

export const visaOptions: VisaOption[] = [
  {
    code: 'VOA / e-VOA',
    name: 'Visa on Arrival',
    forWhom: 'Short holidays and initial visits',
    cost: 'IDR 500,000 (~AUD 40)',
    duration: '30 days, extendable once for another 30 days (max 60)',
    requirements: ['Passport valid 6+ months', 'Return/onward ticket', 'Available to purchase online (e-VOA) before arrival'],
    notes: 'The default option for a holiday or a first look at Bali. Extension can usually be done online if bought as an e-VOA, otherwise in person at a local immigration office (Kantor Imigrasi).',
  },
  {
    code: 'C1 (formerly B211A)',
    name: 'Single-Entry Visit Visa',
    forWhom: 'Longer stays, house-hunting trips, remote work on offshore income',
    cost: 'Government fee ~IDR 2,000,000 (~AUD 160); agent-assisted total commonly AUD 280–400 for the visa, plus similar again per 60-day extension',
    duration: 'Initial 60 days, extendable twice (up to ~180 days total)',
    requirements: ['Local sponsor/agent (standard practice)', 'Proof of funds', 'No local employment or income from an Indonesian entity'],
    notes: "Indonesia has been recoding this visa from “B211A” to “C1” — you'll see both names used interchangeably in 2026. Does not grant the right to work for an Indonesian company or take local income.",
    verify: 'Confirm current naming (B211A vs C1) and extension process with a licensed agent before relying on this.',
  },
  {
    code: 'E23',
    name: 'Working KITAS',
    forWhom: 'Employees of an Indonesian-registered company',
    cost: 'Roughly AUD 2,750–5,350 all-in for the first year, including a mandatory ~AUD 1,840/year skills-development levy (DPKK)',
    duration: '1–2 years, renewed alongside employer work-permit (RPTKA)',
    requirements: ['Indonesian corporate sponsor', 'Approved work permit (RPTKA)', 'Relevant qualifications for the sponsored role'],
  },
  {
    code: 'E28A',
    name: 'Investor KITAS',
    forWhom: 'Directors/commissioners of a PT PMA (foreign investment company)',
    cost: 'Immigration fees from ~AUD 1,380; typical agency package AUD 1,620–1,780',
    duration: '1–2 years, renewable',
    requirements: ['Directorship in a PT PMA', 'Minimum IDR 10 billion (~AUD 800,000) in registered personal shares'],
    notes: 'Confers the right to legally work/direct within your own company — the main pathway for Australians setting up a business in Bali.',
  },
  {
    code: 'E31A',
    name: 'Spouse KITAS',
    forWhom: 'Married to an Indonesian citizen',
    cost: '~AUD 640 (varies by region)',
    duration: '1–2 years, sponsored by your Indonesian spouse',
    requirements: ['Legalised marriage certificate', "Spouse's KTP and Kartu Keluarga", 'Proof of funds ~USD 2,000'],
    notes: 'Does not grant work rights. Standard path to spouse KITAP after 2 years of registered marriage.',
  },
  {
    code: 'E33F',
    name: 'Retirement KITAS',
    forWhom: 'Retirees',
    cost: '~AUD 1,160–1,576/year',
    duration: '1 year, multiple entry, renewable annually',
    requirements: ['Minimum age (commonly cited as 55)', 'Proof of income ~USD 3,000/month or substantial savings', 'Health insurance', 'A Bali rental agreement', 'Employ one local staff member'],
    verify: 'Minimum age varies by source (55 vs a reported tightening toward 60) — confirm current threshold with a licensed agent.',
  },
  {
    code: 'E33G',
    name: 'Remote Worker (“Digital Nomad”) KITAS',
    forWhom: 'Remote workers/freelancers paid by an offshore employer or clients',
    cost: '~AUD 1,040 total (government + service fee)',
    duration: '1 year, renewable',
    requirements: ['Income earned outside Indonesia (reported threshold ~USD 60,000/year)', 'Minimum bank balance ~USD 2,000', 'No Indonesian-sourced income'],
    notes: 'The correct legal pathway for Australians working remotely from Bali for an Australian employer or clients — not a tourist or C1 visa.',
    verify: 'Some agents cite a multi-year exemption on Indonesian tax for foreign-sourced income under this visa — confirm with a tax adviser before relying on it.',
  },
  {
    code: 'E33 (Second Home)',
    name: 'Second Home Visa',
    forWhom: 'Financially independent movers not tied to a job, marriage, or business',
    cost: 'IDR 2 billion deposit (~AUD 159,000) held in your own name at a state bank, OR Indonesian property (Hak Pakai) worth USD 1 million+ (~AUD 1.5 million)',
    duration: '5 or 10 years',
    requirements: ['Clean immigration record', 'Passport valid 36+ months', 'Funds remain the applicant’s own property and earn interest'],
    notes: 'No employer, spouse, or business sponsor required. Immediate family can be included. A pathway toward KITAP after roughly 3 years.',
  },
  {
    code: 'KITAP',
    name: 'Permanent Stay Permit',
    forWhom: 'Long-term KITAS holders',
    cost: 'No reliable fixed figure found — get a current quote from a licensed agent',
    duration: '5 years, renewable indefinitely',
    requirements: ['3 continuous years on qualifying KITAS (investor/working)', 'or 2 years of registered marriage (spouse KITAS)'],
    verify: 'Exact holding period before eligibility varies by category and source (2–5 years cited) — confirm for your specific pathway.',
  },
];

export const regulatoryFlags = [
  {
    title: 'Active enforcement crackdown',
    body: 'A dedicated immigration task force has been actively targeting foreigners working, running paid workshops, or influencing on tourist/visit visas since early 2026, including monitoring of coworking spaces and social media. Thousands of enforcement actions, permit cancellations, and deportations have been recorded in 2026 alone. If you\'re working remotely from Bali, use the E33G Remote Worker KITAS — not a tourist or C1 visa.',
  },
  {
    title: 'Golden Visa (from July 2024)',
    body: 'A higher-tier visa for larger investors — 5 years from a reported USD 2.5 million company investment, 10 years at higher thresholds. Relevant mainly to significant business investors, not typical retirees or remote workers.',
  },
  {
    title: 'Visa code renaming in progress',
    body: 'Indonesia has been transitioning from older codes (like "B211A") to a new C-series/E-series system. You will see both old and new names used interchangeably through 2026 — don\'t assume a visa is different just because the name changed.',
  },
];
