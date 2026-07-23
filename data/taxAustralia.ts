export interface TaxSection {
  title: string;
  body: string;
  list?: string[];
  verify?: string;
}

export const LAST_VERIFIED_AU = '22 July 2026';

export const auTaxSections: TaxSection[] = [
  {
    title: 'How the ATO decides if you\'re still an Australian resident',
    body: "The ATO applies four tests — you're a resident if you meet any single one of them:",
    list: [
      'Resides test (primary test) — a "totality of circumstances" view: your family, employment, assets, and social ties.',
      'Domicile test — you\'re a resident if Australia is your permanent legal home, unless the ATO is satisfied your permanent place of abode is genuinely overseas.',
      "183-day test — present in Australia 183+ days in the income year, unless your usual place of abode is overseas and you don't intend to reside here.",
      'Commonwealth superannuation test — catches government employees posted abroad via certain super schemes (CSS/PSS).',
    ],
  },
  {
    title: 'A simpler residency test has been proposed — but it is not law',
    body: "Treasury consulted in 2023 on a simplified 'bright-line' framework (183 days present = automatic resident, with secondary objective tests otherwise), following a 2019 Board of Taxation recommendation. As of mid-2026 the government has not released a formal response or introduced legislation. The four tests above still apply — do not plan around the proposed 183-day rule as if it were current law.",
    verify: 'This is a proposal only. No start date or legislation exists as of publish time — recheck before relying on it.',
  },
  {
    title: 'What happens when you cease Australian tax residency',
    body: "Once you no longer meet any of the residency tests, you become a foreign resident for tax purposes. This triggers CGT Event I1 — a deemed disposal at market value of assets that aren't 'taxable Australian property' (Australian real estate stays taxable regardless of your residency). You can instead elect to defer the gain in your final resident-year tax return — this applies to your entire non-TAP portfolio (it's all-or-nothing), and deferred assets are treated as taxable Australian property until you actually sell them or become a resident again, with all growth (including growth after you left) taxed at eventual sale.",
  },
  {
    title: 'Foreign resident tax rates — no tax-free threshold',
    body: 'Once you\'re a foreign resident, Australian-sourced income is taxed from the first dollar — there is no tax-free threshold. Confirm the current-year brackets on the ATO rates page before relying on a specific figure, as they are periodically indexed.',
  },
  {
    title: 'The family home trap',
    body: "Since 12 December 2019, foreign residents generally lose the CGT main residence exemption on the family home if it's sold while they're a non-resident (limited transitional relief only applied to sales completed by 30 June 2020 for homes bought before 9 May 2017). If you plan to sell the family home eventually, becoming an Australian tax resident again before the sale can restore access to the exemption — timing this matters.",
  },
  {
    title: 'Medicare levy',
    body: 'Foreign residents for the full income year can claim a full Medicare levy exemption on their tax return (exemption category 2); those who are foreign residents for only part of the year can claim it pro-rata for that period.',
  },
  {
    title: 'Superannuation',
    body: "Moving overseas does not create an early-release right — preservation age and condition-of-release rules are unchanged no matter where you live. The Departing Australia Superannuation Payment (DASP) only applies to temporary-visa workers leaving Australia, not to citizens or permanent residents relocating abroad. Contribution caps still apply while you're overseas, and employer Super Guarantee contributions generally stop once you're working for a foreign (non-Australian) employer.",
  },
  {
    title: 'Age Pension portability (for retirees)',
    body: "The Age Pension can be paid indefinitely while you live overseas, but after 26 weeks' absence the rate may be proportionalised based on your 'Australian Working Life Residence' — broadly, the years you were an Australian resident between age 16 and pension age, out of a maximum 35. Under 35 years' residence means a reduced rate; 35+ years generally preserves the full rate. Payments after 26 weeks are handled by Services Australia's International Services team.",
  },
  {
    title: 'Doing the exit properly — what the ATO actually looks at',
    body: "The ATO weighs the whole picture, not one factor in isolation. Steps commonly used to evidence a genuine change of residency include: selling the family home (rather than just renting it out) or clearly showing it's not available for your own use, updating your electoral enrolment to overseas elector status, closing or deactivating Australian bank accounts and club/gym memberships you won't use, and cancelling private health insurance (while being aware of Medicare levy surcharge implications if you retain any Medicare entitlement and exceed income thresholds). Keep documentary evidence — your overseas lease, foreign employment contract, and shipping/removalist records all help substantiate the change if the ATO ever asks.",
    verify: 'The single biggest mistake people make is assuming that simply leaving is enough. The ATO can and does assess people as continuing residents years later if enough ties — property, family, recurring visits — remain in place.',
  },
  {
    title: 'The Australia–Indonesia Double Tax Agreement',
    body: "In force since 1992 (with BEPS Multilateral Instrument modifications applying from 2019), this treaty allocates taxing rights between the two countries across business profits, dividends, interest, royalties, pensions, and government service income, and prevents double taxation generally via the credit method — your country of residence gives you a credit for tax already paid in the source country. It does not exempt you from either country's residency rules; it's a relief mechanism for situations where both countries would otherwise tax the same income.",
  },
];
