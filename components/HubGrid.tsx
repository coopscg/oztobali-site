import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stamp, Landmark, Receipt, KeyRound, Building2, Users, Sparkles, Palmtree,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUpDelay, easeSoft } from '../lib/motion';

const hubs = [
  { icon: Stamp, title: 'Visas & Residency', desc: 'KITAS, KITAP, Second Home Visa and what they actually cost.', to: '/visas-residency', image: '/images/visas-immigration-hall.jpg' },
  { icon: Landmark, title: 'Australian Tax & Exit', desc: 'ATO residency rules and doing your exit properly.', to: '/taxation/australia', image: '/images/goldcoast-skyline.jpg' },
  { icon: Receipt, title: 'Indonesian Tax', desc: 'NPWP, tax residency, and rates once you’re there.', to: '/taxation/indonesia', image: '/images/canggu-beach.jpg' },
  { icon: KeyRound, title: 'Renting in Bali', desc: 'Lease norms, deposits, and where expats actually live.', to: '/property/renting', image: '/images/property-villa-pool.jpg' },
  { icon: Building2, title: 'Buying in Bali', desc: 'Hak Pakai, leasehold, PT PMA, and the nominee trap.', to: '/property/buying', image: '/images/property-ricefield-land.jpg' },
  { icon: Users, title: 'Trusted Developers', desc: 'Builders with a real, delivered track record.', to: '/property/developers', image: '/images/holiday-cultural-uluwatu.jpg' },
  { icon: Sparkles, title: 'Bali Culture', desc: 'Ceremony, custom, and what respect looks like day to day.', to: '/culture', image: '/images/culture-canang-sari.jpg' },
  { icon: Palmtree, title: 'Holiday Guides', desc: 'Family, adventure, party, shopping, cultural, sorted by vibe.', to: '/holidays', image: '/images/holiday-family-nusadua.jpg' },
];

const HubGrid: React.FC = () => {
  return (
    <section id="guides" className="px-6 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-gold font-bold tracking-widest uppercase mb-4 text-sm">Everything In One Place</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream">Pick where you're at</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hubs.map((hub, i) => (
            <motion.div key={hub.title} {...fadeUpDelay(i, 0.06)}>
              <Link
                to={hub.to}
                className="group block h-full bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 hover:bg-white/[0.05] hover:-translate-y-1.5 transition-all duration-500"
                style={{ transitionTimingFunction: `cubic-bezier(${easeSoft.join(',')})` }}
              >
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={hub.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ transitionTimingFunction: `cubic-bezier(${easeSoft.join(',')})` }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute bottom-2 left-2 w-9 h-9 rounded-lg bg-ink/80 backdrop-blur flex items-center justify-center">
                    <hub.icon className="w-4 h-4 text-gold" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-cream mb-1.5">{hub.title}</h3>
                  <p className="text-sm text-sage-dim leading-snug">{hub.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubGrid;
