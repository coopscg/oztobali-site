import { HolidayPlace } from '../types';

export interface HolidayCategoryInfo {
  slug: string;
  label: string;
  eyebrow: string;
  intro: string;
  places: HolidayPlace[];
  tips: string[];
  image: string;
  imageAlt: string;
}

export const holidayCategories: HolidayCategoryInfo[] = [
  {
    slug: 'family',
    image: '/images/holiday-family-nusadua.jpg',
    imageAlt: 'Calm beachfront at Nusa Dua, Bali',
    label: 'Family Holidays',
    eyebrow: 'Family-Friendly',
    intro:
      'Bali works well for families once you know where to base yourselves — think shallow beach clubs, villa compounds with private pools, and short transfer times so you\'re not stuck in traffic with tired kids.',
    tips: [
      'Base yourself in Nusa Dua or Sanur for calm, shallow water and short transfers from the airport.',
      'Villa compounds with a private pool and fenced garden are far less stressful than hotel rooms with young children.',
      'Waterbom Bali (Kuta) is consistently rated one of the best water parks in Asia and is a reliable full-day activity.',
      'Book a driver for the day rather than individual taxis — much easier with prams, car seats, and beach gear.',
    ],
    places: [
      { name: 'Nusa Dua', area: 'South Bali', description: 'Gated resort area with calm, shallow water and manicured grounds — the lowest-stress base for young families.', goodFor: ['Toddlers', 'Resort pools', 'Calm beaches'], priceIndicator: '$$$' },
      { name: 'Sanur', area: 'East South Bali', description: 'A quieter, more local beach town with a flat coastal path perfect for prams and bikes.', goodFor: ['Walkable', 'Local feel', 'Sunrise beach'], priceIndicator: '$$' },
      { name: 'Ubud (villa compounds)', area: 'Central Bali', description: 'Rice-field villas with private pools, plus rice terrace walks and animal sanctuaries kids love.', goodFor: ['Nature', 'Private pools', 'Day trips'], priceIndicator: '$$' },
    ],
  },
  {
    slug: 'adventure',
    image: '/images/holiday-adventure-kelingking.jpg',
    imageAlt: 'Kelingking Beach cliff viewpoint, Nusa Penida, Bali',
    label: 'Adventure Holidays',
    eyebrow: 'Get Outside',
    intro:
      'From volcano sunrise treks to world-class surf breaks and waterfall canyoning, Bali rewards travellers willing to get up early and get a bit muddy.',
    tips: [
      'Mount Batur sunrise trek departs around 2–3am — book a licensed local guide, it\'s mandatory and supports the local community.',
      "Uluwatu and Bingin are the go-to breaks for experienced surfers; Canggu and Kuta are better for beginners with reef-free sandy bottoms.",
      'Nusa Penida day trips (Kelingking Beach, Angel\'s Billabong) are stunning but involve a rough 45–60 min boat crossing — not for anyone prone to seasickness.',
      'White-water rafting on the Ayung River and canyoning at Gitgit are popular half-day add-ons from Ubud.',
    ],
    places: [
      { name: 'Mount Batur', area: 'Kintamani', description: 'Active volcano sunrise trek, roughly 2 hours up with sweeping views over Lake Batur.', goodFor: ['Trekking', 'Sunrise views', 'Fitness'], priceIndicator: '$' },
      { name: 'Uluwatu / Bingin', area: 'Bukit Peninsula', description: 'World-renowned surf breaks along dramatic clifftop coastline.', goodFor: ['Surfing', 'Clifftop views', 'Sunset bars'], priceIndicator: '$$' },
      { name: 'Nusa Penida', area: 'Offshore island', description: 'Dramatic cliffs, snorkelling with manta rays, and some of Indonesia\'s most photographed viewpoints.', goodFor: ['Snorkelling', 'Photography', 'Day trips'], priceIndicator: '$$' },
    ],
  },
  {
    slug: 'party',
    image: '/images/holiday-party-kuta.jpg',
    imageAlt: 'Sunset over Kuta Beach, Bali',
    label: 'Party & Nightlife',
    eyebrow: 'After Dark',
    intro:
      "Bali's nightlife scene runs from sunset beach clubs to late-night clubbing, concentrated mainly in Seminyak, Canggu, and Kuta.",
    tips: [
      'Seminyak has the more polished beach club scene (think Potato Head, Ku De Ta); Canggu leans younger and more casual.',
      'Kuta/Legian is the budget-nightlife strip — cheaper drinks, later hours, rowdier crowd.',
      'Grab or Gojek (ride apps) are far safer and cheaper than arranging late-night transport informally.',
      "Indonesia has strict drug laws with severe penalties, including for small amounts — this is not worth testing.",
    ],
    places: [
      { name: 'Seminyak', area: 'South Bali', description: 'Upscale beach clubs, sunset cocktails, and Bali\'s most polished nightlife strip.', goodFor: ['Beach clubs', 'Sunset drinks', 'Fine dining'], priceIndicator: '$$$' },
      { name: 'Canggu', area: 'South Bali', description: 'Younger, more casual scene mixing surf culture with late-night bars and clubs.', goodFor: ['Nightlife', 'Live music', 'Surf culture'], priceIndicator: '$$' },
      { name: 'Kuta / Legian', area: 'South Bali', description: 'The original party strip — budget-friendly bars, clubs, and a younger backpacker crowd.', goodFor: ['Budget nightlife', 'Late-night bars'], priceIndicator: '$' },
    ],
  },
  {
    slug: 'shopping',
    image: '/images/holiday-shopping-ubud.jpg',
    imageAlt: 'Ubud Palace, Bali',
    label: 'Shopping Holidays',
    eyebrow: 'Retail Therapy',
    intro:
      'Bali shopping ranges from air-conditioned malls to sprawling art markets where haggling is expected and part of the fun.',
    tips: [
      'At traditional markets (Ubud Art Market, Sukawati), starting a counter-offer at 40-50% of the initial asking price is normal practice.',
      'Seminyak and Canggu have the best concentration of independent fashion boutiques and homewares stores.',
      'Beachwalk and Lippo Mall Kuta are the main air-conditioned mall options if you need a break from heat and haggling.',
      'Check baggage allowances before buying furniture or large homewares — many stores offer international shipping instead.',
    ],
    places: [
      { name: 'Ubud Art Market', area: 'Ubud', description: 'Traditional market for textiles, woodwork, and souvenirs — haggling expected.', goodFor: ['Souvenirs', 'Textiles', 'Local crafts'], priceIndicator: '$' },
      { name: 'Seminyak boutiques', area: 'Seminyak', description: 'Independent fashion, homewares and concept stores along Jalan Kayu Aya and surrounds.', goodFor: ['Fashion', 'Homewares', 'Design'], priceIndicator: '$$$' },
      { name: 'Sukawati Art Market', area: 'Gianyar', description: 'A sprawling, less touristy wholesale-style market popular with locals and bargain hunters.', goodFor: ['Bulk souvenirs', 'Bargains'], priceIndicator: '$' },
    ],
  },
  {
    slug: 'cultural',
    image: '/images/holiday-cultural-uluwatu.jpg',
    imageAlt: 'Pura Luhur Uluwatu clifftop temple, Bali',
    label: 'Cultural Holidays',
    eyebrow: 'Temples & Tradition',
    intro:
      'Bali\'s Hindu temple culture, ceremony calendar, and traditional arts scene reward travellers who slow down and go beyond the beach.',
    tips: [
      'A sarong and sash are required at most temples — many provide loaners, but bringing your own is respectful and practical.',
      'Check the Balinese calendar before you travel — Nyepi (Day of Silence) shuts the entire island down, including the airport, for 24 hours once a year.',
      'Ubud is the cultural heart of the island — traditional dance performances, the Ubud Palace, and the Neka Art Museum are all worth a full day.',
      "Avoid visiting temples during active ceremonies unless invited, and always ask before photographing people at prayer.",
    ],
    places: [
      { name: 'Ubud', area: 'Central Bali', description: 'Traditional dance, art galleries, and the spiritual/cultural centre of the island.', goodFor: ['Dance performances', 'Art', 'Yoga'], priceIndicator: '$$' },
      { name: 'Besakih Temple', area: 'Mount Agung', description: "Bali's largest and holiest temple complex, on the slopes of Mount Agung.", goodFor: ['Temples', 'Ceremony', 'History'], priceIndicator: '$' },
      { name: 'Tanah Lot', area: 'Tabanan', description: 'Iconic sea temple perched on a rock outcrop, famous for sunset views.', goodFor: ['Sunset', 'Photography', 'Temples'], priceIndicator: '$' },
    ],
  },
];
