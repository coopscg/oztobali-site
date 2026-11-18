import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpDelay } from '../lib/motion';

const stats = [
  { value: '4hrs', label: 'Flight from most AU east coast cities' },
  { value: '2', label: 'Countries’ tax rules you need to get right' },
  { value: '30yrs', label: 'Max leasehold term typically offered to foreigners' },
  { value: '183', label: 'Days that decide your tax residency, both sides' },
];

const StatBar: React.FC = () => {
  return (
    <section className="px-6 py-4 relative z-10 -mt-16">
      <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 bg-ink/70 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 md:p-10 shadow-2xl shadow-black/30">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} {...fadeUpDelay(i, 0.1)} className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">{stat.value}</div>
            <div className="text-xs md:text-sm text-sage-dim leading-snug">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatBar;
