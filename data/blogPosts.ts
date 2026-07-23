import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'kitas-vs-second-home-visa',
    title: 'KITAS vs Second Home Visa: Which One Actually Fits an Australian Moving to Bali?',
    description:
      'Retirement KITAS, Remote Worker KITAS, or the Second Home Visa — a plain-English comparison for Australians deciding how to legally live in Bali long-term.',
    category: 'Visas',
    date: '2026-07-10',
    readTime: '6 min read',
    excerpt: "The right visa depends less on how long you're staying and more on where your money and income actually come from.",
    content: [
      { type: 'p', text: "Every few weeks someone asks the same question in Bali expat groups: \"which visa should I actually get?\" The honest answer is that it depends on your income source, your capital, and whether you're bringing family — not just how long you plan to stay." },
      { type: 'h2', text: 'If your income is a pension or savings-based retirement' },
      { type: 'p', text: "The Retirement KITAS (E33F) is built for this — but it requires proof of roughly USD 3,000/month in income or substantial savings, health insurance, a Bali rental agreement, and employing one local staff member. It's renewed annually, which means annual paperwork, but the ongoing cost is modest compared to the Second Home Visa's deposit requirement." },
      { type: 'h2', text: "If you're working remotely for an Australian employer or clients" },
      { type: 'p', text: "This is the Remote Worker KITAS (E33G) — not a tourist visa, and not the C1/B211A visa, even though plenty of people still use those illegally. Indonesia has been actively enforcing against exactly this since early 2026, with immigration task forces monitoring coworking spaces and social media. The E33G requires your income to come from outside Indonesia, a reported threshold around USD 60,000/year, and a minimum bank balance around USD 2,000." },
      { type: 'h2', text: "If you've got significant capital and don't want annual renewals" },
      {
        type: 'ul',
        items: [
          'The Second Home Visa gives you 5 or 10 years of residency in one hit, with no employer, spouse, or business sponsor required.',
          'It requires either an IDR 2 billion deposit (~AUD 159,000) in your own name at a state bank, or Indonesian property worth USD 1 million+.',
          "Your money stays yours and earns interest — it's a deposit, not a fee.",
          'Immediate family (spouse, children, parents) can be included on the same visa.',
        ],
      },
      { type: 'h2', text: "The mistake we see most often" },
      { type: 'p', text: "People choose based on cost alone and end up on the wrong visa for their actual activity — working on a tourist visa because it's cheaper, or getting a Retirement KITAS while still earning active consulting income. Match the visa to what you're actually doing in Bali, not just your budget. Full cost breakdowns for every pathway are on our Visas & Residency guide." },
    ],
  },
  {
    slug: 'nominee-land-arrangements-now-illegal',
    title: "The Nominee Trap: Why 'Buying' Bali Land Through a Local Friend Is Now a Crime",
    description:
      "Nominee land arrangements have always been legally void in Indonesia. As of February 2026, they're a criminal offence in Bali. Here's what changed.",
    category: 'Property',
    date: '2026-07-15',
    readTime: '5 min read',
    excerpt: "It was always a bad idea. Now it can get you, your Indonesian 'nominee', and anyone who helped arrange it prosecuted.",
    content: [
      { type: 'p', text: "For decades, some foreigners bought Bali land by putting the Hak Milik (freehold) certificate in the name of an Indonesian friend, partner, or hired nominee, with a private side agreement establishing the foreigner as the \"real\" owner. Lawyers have always warned against this. As of 2026, the warning has teeth." },
      { type: 'h2', text: 'Why it never actually worked legally' },
      { type: 'p', text: "Article 26(2) of Indonesia's Basic Agrarian Law makes this kind of arrangement void from the start. Indonesian courts recognise the person named on the certificate as the sole legal owner — full stop. The private side agreement between the foreigner and the nominee has no standing." },
      { type: 'h2', text: 'How it actually goes wrong in practice' },
      {
        type: 'ul',
        items: [
          "The nominee sells the property to someone else — legally, they're entitled to.",
          "The nominee dies, and the property passes to their heirs, who owe the foreign 'beneficial owner' nothing.",
          "The nominee runs into personal debt or bankruptcy, and creditors can claim the property.",
        ],
      },
      { type: 'h2', text: "What changed in February 2026" },
      { type: 'p', text: "Bali's Governor signed Perda No. 4/2026, which for the first time makes nominee land arrangements a criminal offence in Bali specifically — not just void under civil law. That exposes the foreign investor, the Indonesian nominee, and anyone who facilitated the arrangement (agents, lawyers) to prosecution. The same regulation also restricts converting productive rice-field land for villa or commercial construction." },
      { type: 'h2', text: 'What to use instead' },
      { type: 'p', text: "Leasehold (Hak Sewa), Hak Pakai, and a properly structured PT PMA all exist specifically so a nominee is never necessary. Every licensed Indonesian notary and lawyer we found in researching this recommends one of these three, full stop — see our Buying in Bali guide for how each one actually works." },
    ],
  },
  {
    slug: 'australian-tax-exit-checklist',
    title: "Doing Your Australian Tax Exit Properly Before You Leave for Bali",
    description:
      "Leaving Australia doesn't automatically make you a non-resident for tax purposes. Here's what the ATO actually looks at.",
    category: 'Tax',
    date: '2026-07-18',
    readTime: '5 min read',
    excerpt: "The ATO doesn't just check a calendar. It checks whether you've actually let go.",
    content: [
      { type: 'p', text: "A surprising number of people who've been living in Bali for years are still, technically, Australian tax residents — because they never properly severed the ties the ATO looks at. Simply being overseas for a long time isn't the test." },
      { type: 'h2', text: 'What the ATO actually weighs' },
      { type: 'p', text: "The ATO applies several tests (resides, domicile, 183-day, and a superannuation test for certain government employees) and looks at the totality of your circumstances — not one factor in isolation. Family location, where your main assets sit, ongoing employment ties, and how often you return all matter." },
      { type: 'h2', text: 'Steps that actually count as evidence' },
      {
        type: 'ul',
        items: [
          "Selling the family home, rather than just renting it out — or being able to clearly show it's not available for your own use.",
          'Updating your electoral enrolment to overseas elector status.',
          "Closing or deactivating Australian bank accounts and memberships you won't use.",
          'Cancelling private health insurance (while checking Medicare levy surcharge implications first).',
          'Keeping documentary evidence — your Bali lease, any foreign employment contract, and shipping records.',
        ],
      },
      { type: 'h2', text: "The CGT trap on your family home" },
      { type: 'p', text: "Since December 2019, foreign residents generally lose the CGT main residence exemption if they sell the family home while a non-resident. If you're planning to eventually sell it, the timing of your residency status matters — get advice before you list it, not after." },
      { type: 'h2', text: "One reform that isn't law yet" },
      { type: 'p', text: "You may have read about a proposed simplified 183-day residency test. As of mid-2026 this remains a Treasury proposal only — no legislation has been introduced. Don't plan your exit around a rule that doesn't exist yet. Full detail is on our Australian Tax & Exit guide." },
    ],
  },
  {
    slug: 'cost-of-living-bali-for-australians',
    title: 'Cost of Living in Bali for Australians: A Realistic Monthly Budget',
    description:
      'What it actually costs an Australian to live in Bali per month — day-to-day expenses, the costs people forget to budget for, and how it compares to home.',
    category: 'Lifestyle',
    date: '2026-07-20',
    readTime: '6 min read',
    excerpt: "Day-to-day living is genuinely cheap. It's everything outside daily spending that catches people out.",
    content: [
      { type: 'p', text: "Every Bali cost-of-living article leads with how cheap the coffee and the massages are. That's true, and it's also not the number that determines whether your move actually works financially. Here's a more complete picture." },
      { type: 'h2', text: 'The genuinely cheap stuff' },
      {
        type: 'ul',
        items: [
          'Local food (warungs): AUD 2–5 per meal.',
          'A full-time household driver or staff member: often AUD 300–500/month.',
          'Local-brand groceries and produce: a fraction of Australian supermarket prices.',
          'Scooter rental: roughly AUD 60–100/month.',
        ],
      },
      { type: 'h2', text: "What people forget to budget for" },
      {
        type: 'ul',
        items: [
          'International health insurance — genuinely necessary, and not cheap if you want a policy that covers medical evacuation.',
          'Visa costs and renewals — annual for most KITAS categories, plus agent fees most people pay rather than navigating immigration offices solo.',
          'Imported goods and Western-brand groceries — priced close to or above Australian prices in expat supermarkets.',
          'Flights home — even budget fares add up if you\'re returning for family events multiple times a year.',
          "School fees, if you're relocating with kids — international schools in Bali are not the cheap option.",
        ],
      },
      { type: 'h2', text: 'Rough monthly figures by lifestyle' },
      { type: 'p', text: "A single remote worker living simply in Canggu or Ubud, renting a modest villa room and eating mostly local food, can realistically get by on AUD 1,500–2,500/month all-in, insurance included. A couple in a private villa with a pool, eating out regularly and running a scooter each, is more realistically AUD 3,000–4,500/month. A family of four wanting an international school and a car with driver is a different order of magnitude — often AUD 6,000–10,000+/month once school fees are in." },
      { type: 'h2', text: 'The honest comparison to Australia' },
      { type: 'p', text: "For most day-to-day costs, yes, Bali is significantly cheaper than any Australian capital city. But the gap narrows fast once visas, insurance, flights, and (for families) schooling enter the picture. Budget for the whole picture, not just the exchange rate on a plate of nasi goreng." },
    ],
  },
  {
    slug: 'bali-property-scams-to-avoid',
    title: 'Bali Property Scams to Avoid (And How to Spot Them Early)',
    description:
      'The real property scams and traps Australians run into in Bali — from nominee schemes to fake certificates — and how to protect yourself.',
    category: 'Property',
    date: '2026-07-21',
    readTime: '6 min read',
    excerpt: "Most Bali property disasters aren't exotic scams — they're skipped due diligence on very ordinary paperwork.",
    content: [
      { type: 'p', text: "Bali property horror stories tend to follow a small number of repeating patterns. None of them require sophisticated fraud to pull off — they rely on buyers skipping basic verification because everyone's in a hurry and the deal feels too good to slow down." },
      { type: 'h2', text: '1. The nominee scheme' },
      { type: 'p', text: "Covered in depth in our Buying in Bali guide — using an Indonesian nominee to hold freehold title on your behalf is legally void, and as of February 2026 it's a criminal offence in Bali specifically. If anyone offers you this as a solution rather than flagging it as a serious risk, that's your answer about their credibility." },
      { type: 'h2', text: '2. The certificate that isn\'t what it looks like' },
      { type: 'p', text: "Land certificates can be forged, outdated, or attached to a different parcel than the one you're actually looking at. Always verify directly with the local Kantor Pertanahan/BPN office yourself (or through your own independent notary, not the seller's) — never rely on a photocopy the seller or agent hands you." },
      { type: 'h2', text: "3. The zoning surprise" },
      { type: 'p', text: "A block of land can be perfectly legitimate but zoned in a way that never allows the villa rental business you're planning. Since Bali introduced the KKPR zoning-approval requirement ahead of any commercial licence, confirming zoning before you buy — not after — is non-negotiable." },
      { type: 'h2', text: '4. Paying the seller directly' },
      { type: 'p', text: "Funds should move through a notary's escrow account, released only once the deed is signed and registration is underway — never wired straight to a seller's personal account based on trust or time pressure." },
      { type: 'h2', text: "5. Unregistered adat (customary) claims" },
      { type: 'p', text: "Bali-specific: some land carries customary claims from the local desa adat that don't always show up cleanly in the formal certificate system. Ask your notary specifically about this, and speak to neighbouring landowners if anything feels rushed." },
      { type: 'h2', text: 'The pattern behind all five' },
      { type: 'p', text: "Every one of these traps is beatable with unhurried, independent due diligence — a licensed PPAT notary, a direct BPN certificate check, and confirmed zoning, done before any money moves. The common thread in every horror story we found researching this is pressure to move fast. Slow down instead." },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
