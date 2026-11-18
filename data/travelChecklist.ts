import { TaxSection } from './taxAustralia';

export const LAST_VERIFIED_CHECKLIST = '18 November 2026';

export const checklistSections: TaxSection[] = [
  {
    title: 'Visa and entry',
    body: 'Australians need a visa for a Bali holiday. The e-VOA (electronic Visa on Arrival) costs IDR 500,000 (about AUD 40 to 50) and is valid for 30 days. Apply online before you fly to skip the visa queue on arrival. You can extend it once for a further 30 days: you start the extension online on the same portal, but you still need to attend an immigration office in person for photos and fingerprints.',
    list: [
      'Passport must have at least 6 months validity remaining from your entry date, plus 2 blank pages. Airlines can deny boarding over this even if immigration would let you through.',
      'Indonesian immigration can ask for proof of onward or return travel, and airlines may check this at check-in in Australia before you board.',
      'Since 1 October 2025, every international arrival must complete the free "All Indonesia" digital arrival card, which combines immigration, customs and health declarations in one form. Submit it in the 3 days before you land and save the QR code.',
      'A visa on arrival is a tourist visa. It does not allow any work in Indonesia, including remote work for an Australian employer.',
    ],
    verify: 'Use only the official domains: evisa.imigrasi.go.id for the visa and allindonesia.imigrasi.go.id for the arrival card. The arrival card is free, so any site charging for it is a scam.',
  },
  {
    title: 'The Bali tourist levy',
    body: "A one-off IDR 150,000 (about AUD 12 to 15) fee per foreign visitor, per entry, separate from your visa. Children pay it too. Pay online at the official Love Bali portal before you fly and you'll get a QR voucher by email. Don't plan on paying at the airport.",
    list: [
      'If you leave Indonesia and come back, for example a side trip to Singapore, you pay it again.',
      'KITAS and KITAP holders and a few other groups are exempt, but you may need to apply for the exemption through the Love Bali portal at least 5 days before you arrive. Don\'t assume your card alone gets you through.',
    ],
    verify: 'Use only the official domain, lovebali.baliprov.go.id. Look-alike payment sites have charged up to three times the real fee.',
  },
  {
    title: 'Vaccinations and health',
    body: "Nothing is legally required for Australians flying direct from Australia. That doesn't mean nothing is recommended.",
    list: [
      'Make sure routine vaccines are current: MMR, tetanus/DTP, and polio.',
      'Hepatitis A and typhoid are commonly recommended for Indonesia by Australian travel doctors.',
      'Rabies has circulated in Bali since 2008, mainly through dogs and monkeys. Worth raising with your doctor if you plan to spend time outside resort areas, and get any bite or scratch treated the same day.',
      'Japanese encephalitis is generally only relevant for longer stays in rural or rice-farming areas, not a standard short resort holiday.',
      "Yellow fever is not required arriving from Australia. It only applies if you're arriving in Indonesia from a yellow-fever-risk country, which matters only if Bali is one leg of a longer multi-country trip.",
    ],
    verify: 'Book a GP or travel health clinic appointment 6 to 12 weeks before you fly, because some vaccine courses need that lead time. This is general information, not a substitute for a personal risk assessment from a travel doctor.',
  },
  {
    title: 'Duty free and customs',
    body: "The rules apply in both directions, and they're not the same.",
    list: [
      'Into Indonesia: 1 litre of alcohol and 200 cigarettes (or 25 cigars, or 100g of tobacco) per adult, plus personal goods up to about USD 500. Excess alcohol can be confiscated rather than simply taxed.',
      "Back into Australia: 2.25 litres of alcohol and 25 cigarettes (or 25g of tobacco) per adult, plus AUD 900 in general goods (AUD 450 if you're under 18). Go over a limit and duty applies to everything in that category, not just the amount over.",
      'Families travelling together can combine their general goods allowances (two adults and two kids get AUD 2,700 between them), but not alcohol or tobacco. Under 18s get no alcohol or tobacco allowance.',
      "Cash: Australia requires you to declare AUD 10,000 or more (cash or equivalent) entering or leaving. Indonesia's declaration threshold is broadly IDR 100,000,000, and foreign banknotes worth IDR 1 billion or more need separate Bank Indonesia approval.",
    ],
    verify: 'Confirm current figures with Indonesian customs (beacukai.go.id) and the Australian Border Force (abf.gov.au) before you pack, especially if you travel with large sums. These limits are revised from time to time.',
  },
  {
    title: 'Safety and getting around',
    body: 'The things that most often turn a good Bali trip into a bad one.',
    list: [
      'Scooters: your Australian licence alone is not enough. You need a motorcycle licence at home plus an International Driving Permit showing the motorcycle class, arranged in Australia before you fly. Ride without them and your travel insurance may refuse the whole claim.',
      'Drinks: methanol poisoning from counterfeit or home-made spirits has killed and blinded Australians in Indonesia. Be wary of cheap cocktails and spirits, buy from reputable venues and shops, and get medical help fast if you feel unwell after drinking.',
      'Tap water is not safe to drink. Use bottled or filtered water, including for brushing your teeth.',
      'Dengue is the main mosquito-borne risk. There is no vaccine broadly recommended for a short stay, so use repellent and cover up, especially at dawn and dusk.',
      "Travel insurance that covers medical evacuation is essential, not optional. Bali hospital and evacuation costs for a serious incident can run to tens of thousands of dollars, and the Australian Government can't pay them for you.",
    ],
    verify: 'Smartraveller currently rates Indonesia, including Bali, at "exercise a high degree of caution", level 2 of 4. Two Papua provinces, far from Bali, sit at a higher level. Ratings can change without warning, so check the live Smartraveller page before you travel rather than relying on any fixed rating, including this one.',
  },
];

export interface RelatedGuide {
  label: string;
  to: string;
}

export const checklistGuides: RelatedGuide[] = [
  { label: 'Bali entry requirements: visa, levy and arrival card in the right order', to: '/blog/bali-entry-requirements-australians-2026' },
  { label: 'The arrival card scam: how to spot a fake site', to: '/blog/indonesia-arrival-card-scam-websites' },
  { label: "Scooters in Bali: why your travel insurance may not pay", to: '/blog/bali-scooter-licence-travel-insurance' },
  { label: 'Duty free between Bali and Australia, both ways', to: '/blog/bali-duty-free-allowance-australia' },
  { label: 'Staying longer? KITAS vs Second Home Visa', to: '/blog/kitas-vs-second-home-visa' },
];
