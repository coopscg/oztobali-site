import { AffiliateLink } from './affiliateLinks';

export interface PlannerLink {
  label: string;
  to: string;
}

export interface PlannerStep {
  id: string;
  title: string;
  when: string;
  summary: string;
  points: string[];
  links: PlannerLink[];
  affiliates?: AffiliateLink['category'][];
}

export interface PlannerTrack {
  slug: 'holiday' | 'move';
  label: string;
  title: string;
  intro: string;
  steps: PlannerStep[];
}

export const PLANNER_LAST_REVIEWED = '18 November 2026';

const holiday: PlannerTrack = {
  slug: 'holiday',
  label: 'Holiday',
  title: 'Plan your Bali holiday, step by step',
  intro:
    "Never been to Bali? Start at step 1 and work down. Each step tells you when to do it, the key facts, and where to read more. Tick steps off as you go and your progress saves on this device.",
  steps: [
    {
      id: 'dates',
      title: 'Pick when to go',
      when: '6 to 12 months before',
      summary:
        'Bali is warm all year, so "when" is really about rain, crowds and price. The dry season runs roughly April to October, the wet season roughly November to March.',
      points: [
        'July, August and the Christmas to New Year fortnight are the busiest and most expensive, driven by Australian school holidays.',
        'May, June and September are the sweet spot for most people: dry weather, fewer crowds, better prices.',
        "Check the date of Nyepi (Bali's Day of Silence, early March in 2027). The airport closes and everyone stays indoors for 24 hours.",
      ],
      links: [{ label: 'Best time to visit Bali: month by month', to: '/blog/best-time-to-visit-bali' }],
    },
    {
      id: 'style',
      title: 'Decide what kind of trip it is',
      when: '6 to 12 months before',
      summary:
        "Bali does very different holidays depending on where you stay. Work out what you want first and the rest of the planning gets easy.",
      points: [
        'Families: calm water and easy logistics in Nusa Dua and Sanur.',
        'Adventure: surfing, volcano sunrise treks, diving and day trips to Nusa Penida.',
        'Nightlife: beach clubs and bars in Seminyak, Canggu and Kuta.',
        'Culture and slowing down: temples, rice terraces and wellness in and around Ubud.',
      ],
      links: [
        { label: 'Family holidays', to: '/holidays/family' },
        { label: 'Adventure', to: '/holidays/adventure' },
        { label: 'Partying', to: '/holidays/party' },
        { label: 'Cultural', to: '/holidays/cultural' },
        { label: 'Shopping', to: '/holidays/shopping' },
      ],
    },
    {
      id: 'passport',
      title: 'Check your passport',
      when: 'As soon as you decide to go',
      summary:
        'Your passport needs at least 6 months left on it from the day you arrive, plus 2 blank pages. Airlines will refuse to board you if it falls short.',
      points: [
        'Renewing an Australian passport can take several weeks, longer in busy periods.',
        "Do this before you book anything else: every booking and form asks for your passport number.",
      ],
      links: [{ label: 'Bali entry requirements for Australians', to: '/blog/bali-entry-requirements-australians-2026' }],
    },
    {
      id: 'flights',
      title: 'Book flights',
      when: '3 to 6 months before',
      summary:
        'There are direct flights to Bali (Denpasar, airport code DPS) from every major Australian capital, so you rarely need a connection.',
      points: [
        'Rough direct flight times: Darwin 2.5 hours, Perth 3.5 hours, Adelaide 5 hours, Brisbane, Sydney and Melbourne around 6 hours.',
        'Budget airlines often charge extra for checked bags and meals, so compare the total price, not the headline fare.',
        'Book early for school holidays. Fares around July and Christmas climb fast.',
      ],
      links: [{ label: 'Best time to visit (and when it is cheapest)', to: '/blog/best-time-to-visit-bali' }],
    },
    {
      id: 'stay',
      title: 'Book where you will stay',
      when: '3 to 6 months before',
      summary:
        'Choose the area first, then the hotel or villa. Bali traffic is slow, so staying close to what you want to do matters more than the room itself.',
      points: [
        'Splitting a longer trip between two areas (say, beach then Ubud) is common and worth it.',
        'Read recent reviews for noise, pool size, and whether "villa" means private or shared.',
        'Choose free cancellation where you can, so you can still change plans.',
      ],
      links: [{ label: 'Holiday guides by area and style', to: '/holidays' }],
      affiliates: ['accommodation'],
    },
    {
      id: 'insurance',
      title: 'Get travel insurance and see a travel doctor',
      when: '6 to 12 weeks before',
      summary:
        "Travel insurance with medical evacuation cover is essential. The Australian Government can't pay your hospital bills in Bali.",
      points: [
        'Riding a scooter? Most policies only pay if you hold a motorcycle licence plus an International Driving Permit, and some need a scooter add-on.',
        'No vaccines are legally required from Australia, but hepatitis A and typhoid are commonly recommended. Some courses need weeks, so book the GP early.',
      ],
      links: [
        { label: 'Scooters and travel insurance', to: '/blog/bali-scooter-licence-travel-insurance' },
        { label: 'Health section of the Bali checklist', to: '/travel-checklist' },
      ],
    },
    {
      id: 'visa',
      title: 'Apply for your visa online',
      when: '2 to 4 weeks before',
      summary:
        "Australians need a Visa on Arrival for a holiday: IDR 500,000 (about AUD 40 to 50), valid for 30 days. Apply online before you fly and skip the visa queue.",
      points: [
        'Use only the official site, evisa.imigrasi.go.id. Look-alike sites charge double.',
        'A tourist visa does not allow any work, including remote work for an Australian employer.',
      ],
      links: [{ label: 'Visa, levy and arrival card in the right order', to: '/blog/bali-entry-requirements-australians-2026' }],
    },
    {
      id: 'money',
      title: 'Sort money and your phone',
      when: '2 weeks before',
      summary:
        "Bali runs on Indonesian rupiah (IDR). Cards are widely accepted in tourist areas, but you'll still want cash for markets, drivers and small warungs.",
      points: [
        'A travel card or account with low foreign exchange fees saves real money compared with a standard bank card.',
        'Use ATMs inside banks or shops rather than standalone street machines, and count cash before you leave a money changer.',
        'An eSIM set up before you fly means you have data, maps and ride-hail apps the moment you land.',
      ],
      links: [],
      affiliates: ['money', 'connectivity'],
    },
    {
      id: 'activities',
      title: 'Plan and pre-book the big activities',
      when: '2 to 4 weeks before',
      summary:
        'Popular tours like Nusa Penida day trips, volcano sunrise treks and water parks can sell out in peak season. Pre-book the ones you really want and leave the rest loose.',
      points: [
        "Don't over-plan. Bali traffic means two big outings a day is usually one too many.",
        'Temples need covered shoulders and knees. A sarong is often provided or available to rent at the entrance.',
      ],
      links: [
        { label: 'Adventure holidays', to: '/holidays/adventure' },
        { label: 'Bali culture and temple etiquette', to: '/culture' },
      ],
      affiliates: ['activities'],
    },
    {
      id: 'final-week',
      title: 'Final week paperwork',
      when: '3 to 7 days before',
      summary:
        'Two more official forms. Pay the Bali tourist levy (IDR 150,000) and, in the last 3 days, fill in the free All Indonesia arrival card.',
      points: [
        'Levy: lovebali.baliprov.go.id. Arrival card: allindonesia.imigrasi.go.id. Both end in .go.id. Anything else is not the government.',
        'The arrival card is free. If a site asks you to pay for it, close the tab.',
        'Screenshot your visa, levy voucher and arrival card QR codes into one album on your phone.',
      ],
      links: [
        { label: 'The arrival card scam', to: '/blog/indonesia-arrival-card-scam-websites' },
        { label: 'Full Bali checklist', to: '/travel-checklist' },
      ],
    },
    {
      id: 'arrival',
      title: 'Land and get to your hotel',
      when: 'Arrival day',
      summary:
        "With your e-VOA, levy and arrival card done, you'll mostly walk through. Then the main job is getting to your hotel without being overcharged.",
      points: [
        "Pre-booking a hotel or private transfer is the least stressful option after a long flight.",
        'Ride-hail apps such as Grab and Gojek operate from designated pickup areas at the airport. Follow the signs rather than accepting offers in the arrivals hall.',
        'South Bali traffic is heavy, especially late afternoon. Allow plenty of time, even for short distances.',
      ],
      links: [],
      affiliates: ['activities'],
    },
    {
      id: 'safety',
      title: 'Stay safe while you are there',
      when: 'During your trip',
      summary: 'Most Bali trips go perfectly. The ones that go wrong usually involve the same few things.',
      points: [
        'Drinks: methanol poisoning from fake or home-made spirits has killed and blinded Australians. Be wary of cheap spirits and cocktails.',
        "Scooters: don't ride without the right licence, an International Driving Permit and a proper helmet.",
        "Water: don't drink tap water. Animals: keep away from stray dogs and monkeys, and get any bite or scratch treated the same day.",
        "Drugs: Indonesia's drug laws are among the harshest in the world, including the death penalty.",
      ],
      links: [{ label: 'Safety section of the Bali checklist', to: '/travel-checklist' }],
    },
    {
      id: 'home',
      title: 'Coming home',
      when: 'End of your trip',
      summary:
        'Know your duty free limits before you shop on the last day: 2.25 litres of alcohol, 25 cigarettes and AUD 900 of general goods per adult.',
      points: [
        'Go over a limit and you pay duty on everything in that category, not just the extra.',
        'Declare wooden carvings, seeds and food at Australian biosecurity. If in doubt, declare it.',
      ],
      links: [{ label: 'Duty free between Bali and Australia', to: '/blog/bali-duty-free-allowance-australia' }],
    },
  ],
};

const move: PlannerTrack = {
  slug: 'move',
  label: 'Moving to Bali',
  title: 'Move to Bali from Australia, step by step',
  intro:
    "Thinking about living in Bali for a few months or for good? These are the decisions in the order that saves you the most money and stress. Tick steps off as you go and your progress saves on this device.",
  steps: [
    {
      id: 'right-fit',
      title: 'Work out if Bali really fits',
      when: '12 months or more before',
      summary:
        'Living in Bali is very different from holidaying there. Spend real time on the costs people forget and, ideally, do a longer trial stay first.',
      points: [
        'Budget for visa renewals, international health insurance, flights home and schooling, not just rent and food.',
        'Try the area you are considering for a month in the wet season, not just the dry season.',
      ],
      links: [
        { label: 'Cost of living in Bali for Australians', to: '/blog/cost-of-living-bali-for-australians' },
        { label: 'Bali culture and daily life', to: '/culture' },
      ],
    },
    {
      id: 'visa',
      title: 'Choose the right visa',
      when: '6 to 12 months before',
      summary:
        "Pick the visa that matches what you'll actually be doing: retiring, working remotely, running a business or joining a spouse. Choosing on price alone is the most common mistake.",
      points: [
        'Remote work for an Australian employer needs the Remote Worker KITAS, not a tourist visa.',
        'The Second Home Visa gives 5 or 10 years but needs a large deposit or property.',
      ],
      links: [
        { label: 'Visas and residency: every option with costs', to: '/visas-residency' },
        { label: 'KITAS vs Second Home Visa', to: '/blog/kitas-vs-second-home-visa' },
      ],
      affiliates: ['legal'],
    },
    {
      id: 'au-tax',
      title: 'Plan your exit from the Australian tax system',
      when: '6 to 12 months before',
      summary:
        "Leaving Australia doesn't automatically make you a non-resident for tax. Get this right before you go: it affects your super, your home and any shares.",
      points: [
        'Becoming a foreign resident can trigger capital gains tax on some assets, and can affect the main residence exemption on your home.',
        'Talk to a registered tax agent before you move, not after.',
      ],
      links: [
        { label: 'Australian tax and leaving Australia', to: '/taxation/australia' },
        { label: 'The Australian tax exit checklist', to: '/blog/australian-tax-exit-checklist' },
      ],
    },
    {
      id: 'id-tax',
      title: 'Understand Indonesian tax',
      when: '3 to 6 months before',
      summary:
        'Spend 183 days or more in Indonesia in a 12-month period, or move there with intent to stay, and you can become an Indonesian tax resident.',
      points: [
        'KITAS holders generally need an Indonesian tax number (NPWP).',
        'The Australia and Indonesia tax treaty helps prevent being taxed twice, but only if you set things up properly.',
      ],
      links: [{ label: 'Indonesian tax for Australians', to: '/taxation/indonesia' }],
    },
    {
      id: 'home',
      title: 'Find somewhere to live',
      when: '1 to 3 months before',
      summary:
        "Most new arrivals rent. Bali leases are often paid a year or more upfront, so read the contract carefully and see the place in person before paying.",
      points: [
        'Start with a short stay in the area, then sign a longer lease once you know the street, noise and traffic.',
        'Get everything in writing, including who pays for repairs, pool and garden.',
      ],
      links: [{ label: 'Renting in Bali', to: '/property/renting' }],
      affiliates: ['accommodation'],
    },
    {
      id: 'buy',
      title: 'Thinking of buying? Slow down',
      when: 'Only after living there a while',
      summary:
        "Foreigners can't own freehold land in Bali. Leasehold and Hak Pakai are the legal options, and nominee arrangements are now a criminal offence in Bali.",
      points: [
        'Use a licensed notary (PPAT), check the land certificate with the land office and confirm zoning before any money moves.',
        'Pressure to move fast is the most common sign of a bad deal.',
      ],
      links: [
        { label: 'Buying property in Bali', to: '/property/buying' },
        { label: 'Five Bali property scams', to: '/blog/bali-property-scams-to-avoid' },
        { label: 'The nominee trap', to: '/blog/nominee-land-arrangements-now-illegal' },
      ],
      affiliates: ['property'],
    },
    {
      id: 'money',
      title: 'Set up money and transfers',
      when: '1 to 3 months before',
      summary:
        'Moving larger sums from Australia to Indonesia is where bank fees quietly eat thousands. Compare specialist transfer services against your bank.',
      points: [
        'Keep an Australian bank account open. You will almost certainly still need it.',
        'Large cash amounts must be declared at both borders. Transfers are safer and leave a paper trail.',
      ],
      links: [],
      affiliates: ['money'],
    },
    {
      id: 'health',
      title: 'Sort health insurance',
      when: '1 to 2 months before',
      summary:
        "Medicare doesn't cover you in Indonesia, and travel insurance isn't designed for living overseas. Long-term residents need international health insurance.",
      points: [
        'Check that cover includes medical evacuation to Singapore or Australia for serious cases.',
        'Bring copies of prescriptions, and check that your regular medicines are legal in Indonesia.',
      ],
      links: [],
      affiliates: ['insurance'],
    },
    {
      id: 'logistics',
      title: 'Handle the moving logistics',
      when: '1 to 3 months before',
      summary:
        "Most people move to Bali with suitcases rather than a container. Furniture is cheap locally and shipping household goods involves import paperwork.",
      points: [
        "Pets: bringing animals to Bali is tightly restricted because of rabies controls. Talk to a specialist pet relocation company early.",
        'Kids: Bali has several international schools, mainly around Canggu, Ubud and Sanur. Waitlists are common.',
        'Driving: an International Driving Permit covers a visit, but long-term residents should get an Indonesian licence.',
      ],
      links: [],
    },
    {
      id: 'settle',
      title: 'Arrive and settle in',
      when: 'First month',
      summary:
        "Your first month sets the tone. Get your paperwork registered, meet the neighbours and learn how your local community works.",
      points: [
        'Keep your passport, KITAS and important documents safe, with digital copies stored somewhere secure.',
        'Introduce yourself to your landlord and the local banjar (village community). Ceremonies and community rules shape daily life.',
        'Learn some basic Bahasa Indonesia. It changes how people respond to you.',
      ],
      links: [{ label: 'Bali culture and etiquette', to: '/culture' }],
    },
  ],
};

export const plannerTracks: PlannerTrack[] = [holiday, move];

export function getTrack(slug: string): PlannerTrack | undefined {
  return plannerTracks.find((t) => t.slug === slug);
}
