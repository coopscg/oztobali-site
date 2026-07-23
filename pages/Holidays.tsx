import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { useSEO } from '../hooks/useSEO';
import { holidaysSEO } from '../seo/pages';
import { holidayCategories } from '../data/holidayPlaces';

const Holidays: React.FC = () => {
  useSEO(holidaysSEO());

  return (
    <>
      <PageHero
        eyebrow="Holidays"
        title="Find Your Kind of Bali Holiday"
        subtitle="Bali isn't one holiday — it's five. Pick the vibe you're after and we'll point you to the right areas."
      />

      <section className="px-6 py-8 pb-24">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          {holidayCategories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`/holidays/${cat.slug}`}
                className="group block h-full bg-white/[0.03] border border-white/5 rounded-3xl p-8 hover:border-[#E3A857]/30 hover:bg-white/[0.05] transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#E3A857]">{cat.eyebrow}</span>
                <h2 className="text-2xl font-bold text-[#F6EFE4] mt-2 mb-3">{cat.label}</h2>
                <p className="text-sm text-[#B9CFC9] leading-relaxed mb-5">{cat.intro}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E3A857] group-hover:gap-2.5 transition-all">
                  Explore {cat.label} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection
        title="Planning a holiday that might turn into more?"
        subtitle="A lot of our readers came for two weeks and started looking at visas by the end of the trip. We've got you covered either way."
        ctaTo="/visas-residency"
        ctaLabel="See visas & residency options"
      />
    </>
  );
};

export default Holidays;
