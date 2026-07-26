import { TaxSection } from './taxAustralia';

export const LAST_VERIFIED_CHECKLIST = '26 July 2026';

export const checklistSections: TaxSection[] = [
  {
    title: 'Visa and entry',
    body: 'The e-VOA (electronic Visa on Arrival) costs IDR 500,000 (about AUD 40), is valid for 30 days, and can be extended once for a further 30 days at a local immigration office. Apply online in advance at the official portal to skip the arrival queue.',
    list: [
      'Passport must have at least 6 months validity remaining from your entry date, plus 2 blank pages. Airlines can deny boarding over this even if immigration would let you through.',
      'Indonesian immigration can ask for proof of onward or return travel, and airlines increasingly check this at check-in in Australia before you board.',
      'Since 1 October 2025, Indonesia requires every international arrival to complete a unified digital arrival card, "All Indonesia", combining immigration, customs and health declarations in one form. Complete it online up to 3 days before you land.',
    ],
    verify: 'Use only the official domains: evisa.imigrasi.go.id for the visa, allindonesia.imigrasi.go.id for the arrival card. Look-alike scam sites exist for both.',
  },
  {
    title: 'Vaccinations and health',
    body: "Nothing is legally required for Australians flying direct from Australia. That doesn't mean nothing is recommended.",
    list: [
      'Make sure routine vaccines are current: MMR, tetanus/DTP, and polio.',
      'Hepatitis A and Typhoid are commonly recommended for Indonesia by Australian travel doctors.',
      'Rabies is often discussed too, given documented circulation in Bali since 2008 (dogs and monkeys specifically) — worth raising if you plan to spend time outside resort areas.',
      'Japanese Encephalitis is generally only relevant for extended stays in rural or rice-farming areas, not a standard short resort holiday.',
      'Yellow fever is not required arriving from Australia. It only applies if you\'re arriving in Indonesia from a yellow-fever-risk country, relevant only if Bali is one leg of a longer multi-country trip.',
    ],
    verify: 'Book a GP or travel health clinic appointment 6 to 12 weeks before you fly, multi-dose vaccine courses need that lead time. This is general information, not a substitute for a personal risk assessment from a travel doctor.',
  },
  {
    title: 'The Bali tourist levy',
    body: 'A one-off IDR 150,000 (about AUD 15) fee per foreign visitor, separate from your visa cost, introduced to fund environmental and cultural preservation. Pay online in advance for a QR voucher, or at a BRI bank counter in arrivals if you haven\'t paid ahead. KITAS and KITAP holders are exempt.',
    verify: 'Use only the official domain (lovebali.baliprov.go.id) — scam look-alike payment sites have targeted this exact levy.',
  },
  {
    title: 'Duty-free and customs',
    body: 'Rules apply both directions, and they\'re not symmetrical.',
    list: [
      'Into Indonesia: broadly 1 litre of alcohol and 200 cigarettes (or 50 cigars, or 100g of tobacco) per adult, plus personal effects up to roughly USD 500 before you need to declare.',
      'Back into Australia: 2.25 litres of alcohol and 25 cigarettes (or 25g of tobacco) per adult, plus AUD 900 in general goods (AUD 450 if you\'re under 18). Go over the general goods limit and duty applies to the full value, not just the amount over. Families travelling together can pool their individual allowances.',
      'Cash: Australia requires declaring AUD 10,000 or more (cash or equivalent) entering or leaving. Indonesia\'s threshold is broadly IDR 100,000,000, with foreign-banknote amounts over roughly IDR 1 billion needing separate Bank Indonesia permission.',
    ],
    verify: 'Confirm exact current figures against Indonesian customs (beacukai.go.id) and the Australian Border Force (abf.gov.au) before you pack or travel with large sums, these are periodically revised.',
  },
  {
    title: 'Getting around and other essentials',
    body: 'A few things that catch first-time visitors out.',
    list: [
      'Scooters: your Australian licence alone is not enough. You need an International Driving Permit with the motorcycle endorsement, arranged in Australia before you fly through your state motoring club. Ride without one and your travel insurance may not pay out if something goes wrong.',
      'Tap water is not safe to drink, bottled or filtered only, including for brushing teeth.',
      'Dengue is the main mosquito-borne risk. No vaccine is broadly recommended for a short stay, so repellent and covering up at dawn and dusk matter.',
      'Travel insurance covering medical evacuation is essential, not optional, Bali hospital and evacuation costs for a serious incident can be very high.',
    ],
    verify: 'DFAT currently rates Indonesia, including Bali, at "exercise a high degree of caution" (the second-lowest of four levels), citing terrorism risk in tourist areas. Papua sits at a higher level and is unrelated to Bali. This can change with no warning, always check the live Smartraveller page before you travel rather than relying on any fixed rating, including this one.',
  },
];
