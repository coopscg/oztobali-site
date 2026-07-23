import React from 'react';
import { Link } from 'react-router-dom';
import {
  Stamp, Landmark, Receipt, KeyRound, Building2, Users, Sparkles, Palmtree,
} from 'lucide-react';
import { motion } from 'framer-motion';

const hubs = [
  { icon: Stamp, title: 'Visas & Residency', desc: 'KITAS, KITAP, Second Home Visa and what they actually cost.', to: '/visas-residency' },
  { icon: Landmark, title: 'Australian Tax & Exit', desc: 'ATO residency rules and doing your exit properly.', to: '/taxation/australia' },
  { icon: Receipt, title: 'Indonesian Tax', desc: 'NPWP, tax residency, and rates once you’re there.', to: '/taxation/indonesia' },
  { icon: KeyRound, title: 'Renting in Bali', desc: 'Lease norms, deposits, and where expats actually live.', to: '/property/renting' },
  { icon: Building2, title: 'Buying in Bali', desc: 'Hak Pakai, leasehold, PT PMA — and the nominee trap.', to: '/property/buying' },
  { icon: Users, title: 'Trusted Developers', desc: 'Builders with a real, delivered track record.', to: '/property/developers' },
  { icon: Sparkles, title: 'Bali Culture', desc: 'Ceremony, custom, and what respect looks like day to day.', to: '/culture' },
  { icon: Palmtree, title: 'Holiday Guides', desc: 'Family, adventure, party, shopping, cultural — sorted by vibe.', to: '/holidays' },
];

const HubGrid: React.FC = () => {
  return (
    <section id="guides" className="px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-[#E3A857] font-bold tracking-widest uppercase mb-4 text-sm">Everything In One Place</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F6EFE4]">Pick where you're at</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hubs.map((hub, i) => (
            <motion.div
              key={hub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={hub.to}
                className="group block h-full bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:border-[#E3A857]/30 hover:bg-white/[0.05] transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E3A857]/10 flex items-center justify-center mb-4 group-hover:bg-[#E3A857]/20 transition-colors">
                  <hub.icon className="w-5 h-5 text-[#E3A857]" />
                </div>
                <h3 className="font-bold text-[#F6EFE4] mb-1.5">{hub.title}</h3>
                <p className="text-sm text-[#8FA69E] leading-snug">{hub.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HubGrid;
