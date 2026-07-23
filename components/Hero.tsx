import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-6 pt-40 pb-24 overflow-hidden">
      <img
        src="/images/home-hero-tanahlot.jpg"
        alt="Tanah Lot sea temple at sunset, Bali"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#062420] via-[#062420]/85 to-[#062420]" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-[#E3A857]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#0B4F4A]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#E3A857]/20 text-[#E3A857] text-sm font-semibold mb-8"
        >
          <MapPin className="w-4 h-4" /> Built for Australians, about Bali
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-[#F6EFE4] mb-6 leading-[1.02]"
        >
          Your Straight-Talking Guide<br /> <span className="text-[#E3A857]">From Oz to Bali</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#B9CFC9] text-lg md:text-xl font-light max-w-2xl mx-auto mb-10"
        >
          Whether you're planning a holiday or planning your exit — visas, residency costs, property rules,
          tax on both sides of the ditch, culture, and the best places to stay. Sourced, plain-English, and
          built for Australians actually making the move.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/visas-residency"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E3A857] text-[#062420] font-bold rounded-full hover:bg-[#F6EFE4] transition-all transform active:scale-95"
          >
            Start With Visas & Residency <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/holidays"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-[#F6EFE4] font-bold rounded-full hover:bg-white/10 transition-all"
          >
            Just Here for a Holiday?
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
