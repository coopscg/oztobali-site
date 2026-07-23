import { TaxSection } from './taxAustralia';

export const LAST_VERIFIED_BUY = '22 July 2026';

export const buyingSections: TaxSection[] = [
  {
    title: 'The rule everything else is built around: foreigners cannot own freehold land',
    body: "Under Indonesia's Basic Agrarian Law (UU No. 5/1960), Hak Milik — freehold title — can only be held by Indonesian citizens. This is the foundational rule underneath every structure discussed below. If a listing is marketed to you as \"freehold,\" it's describing a leasehold or Hak Pakai arrangement, not true freehold in your name.",
  },
  {
    title: 'Hak Pakai (Right to Use) — the legitimate direct-ownership option',
    body: "Hak Pakai is a government-registered title a foreign individual can hold directly in their own name, provided they hold a qualifying stay permit (KITAS/KITAP) and the property meets a minimum value threshold — roughly IDR 2–5 billion (~AUD 250,000–620,000) in Bali, varying by regulation and location. Under Government Regulation 18/2021, it runs on a '30+20+30' cycle: an initial 30-year term, a 20-year extension, and a further 30-year renewal — up to 80 years of continuous legal use if properly maintained. It can also be held through a PT PMA company rather than personally.",
  },
  {
    title: 'Leasehold (Hak Sewa) — the most common route for foreigners',
    body: "This is a private lease contract between you and the Indonesian landowner (who keeps Hak Milik), typically for 25–30 years with negotiated extension options — sometimes structured to reach 50–80 years total. It requires no residency permit and is open to any foreign buyer, which is why the large majority of foreign-marketed Bali villas use this structure.",
    verify: 'Many agents advertise these deals using the word "freehold" loosely, or to describe the Hak Milik status of the underlying land — which is irrelevant to what you actually receive as the foreign buyer. Always clarify in writing exactly what title or right is being transferred to you.',
  },
  {
    title: 'PT PMA — the company structure for running a rental or hospitality business',
    body: 'A PT PMA is a limited liability company with foreign shareholding, used when you want to hold Hak Guna Bangunan (Right to Build) or run a rental/hospitality business rather than just own a personal home. Under the current risk-based licensing framework, the total investment plan per business line generally needs to exceed IDR 10 billion (~AUD 1.25 million), excluding land and buildings for most sectors — though property development/rental is a notable exception where land and building value can count toward that figure. The minimum paid-up capital at incorporation was separately reduced to IDR 2.5 billion (~AUD 315,000), lowering the up-front cash requirement.',
    verify: 'PT PMA is generally the right structure if the property will generate rental income or form part of a portfolio — it gives clear legal standing for commercial operation but comes with ongoing company compliance, tax and reporting obligations. Get current thresholds confirmed by a licensed corporate services firm before committing capital.',
  },
  {
    title: 'Nominee structures — now a criminal offence in Bali, not just legally risky',
    body: "A nominee arrangement — using an Indonesian citizen's name to hold Hak Milik \"on behalf of\" a foreigner via a private side agreement — is void under Article 26(2) of the Basic Agrarian Law. Indonesian courts treat the registered name on the land certificate as the sole legal owner, and have annulled nominee-based claims when disputes reach litigation. Documented failure modes include the nominee reselling the property to a third party, the nominee's death triggering inheritance by heirs who owe the foreign \"beneficial owner\" nothing, and the nominee's personal debts exposing the property to creditor claims.",
    list: [
      'As of Perda No. 4/2026 (signed by Bali\'s Governor, 24 February 2026), nominee land arrangements are now a criminal offence in Bali — not just void under civil law — exposing the foreign investor, the Indonesian nominee, and any facilitator to prosecution.',
      'The same regulation restricts converting productive rice-field land (LP2B) for villa or commercial construction.',
      'No Indonesian or Bali-focused law firm we reviewed offers a way to make a nominee agreement legally safe. Leasehold, Hak Pakai and PT PMA exist specifically so that a nominee is never necessary.',
    ],
    verify: "Perda 4/2026 is only five months old at time of writing — specific enforcement mechanics and penalty figures reported by secondary sites vary in detail. Verify current wording with a Bali-licensed lawyer before treating any specific penalty figure as certain.",
  },
  {
    title: 'The zoning and licensing crackdown is real and physical, not just paperwork',
    body: "Bali has moved from administrative warnings to actual enforcement against illegal foreign-linked developments. In July 2025, Badung Regency authorities demolished roughly 48 structures at Bingin Beach (Uluwatu) — bars, villas and restaurants — citing unpermitted construction in protected coastal zones, nominee schemes involving foreign business partners, and zoning breaches; Australian nationals were among the foreign business partners named in press coverage. Bali's building-permit regime has also shifted from the old IMB system to a PBG (Building Approval) + SLF (Certificate of Worthiness) system, with a KKPR zoning-approval check now required before any villa rental licence can be issued — land zoned 'green' (agricultural) or residential-only will not clear licensing for commercial/tourist use.",
  },
  {
    title: 'Due diligence before you buy anything',
    body: 'These are the minimum steps recommended across the sources reviewed — treat this as a floor, not a ceiling.',
    list: [
      'Verify the certificate type and current registered owner directly with the local Kantor Pertanahan/BPN land office (a formal "pengecekan sertifikat" certificate check) — confirms title type, checks for existing mortgages/liens, and confirms it isn\'t already disputed.',
      'Confirm zoning (KKPR) status to ensure the land is legally usable for your intended purpose — residential vs. tourism/commercial.',
      'Use a licensed PPAT (Land Deed Official) for the AJB deed of sale — this is a legal requirement, not optional.',
      'Check for unregistered adat (customary) claims by consulting the local desa adat and neighbouring landowners — customary disputes are a common cause of collapsed deals specific to Bali.',
      "Route funds through the notary's escrow account rather than paying the seller directly, releasing funds only once the deed is signed and registration is underway.",
    ],
  },
];
