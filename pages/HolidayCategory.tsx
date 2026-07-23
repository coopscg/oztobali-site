import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { useSEO } from '../hooks/useSEO';
import { holidayCategorySEO } from '../seo/pages';
import { holidayCategories } from '../data/holidayPlaces';

const HolidayCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const cat = holidayCategories.find((c) => c.slug === category);

  if (!cat) return <Navigate to="/holidays" replace />;

  useSEO(holidayCategorySEO(cat));

  return (
    <>
      <PageHero eyebrow={cat.eyebrow} title={cat.label} subtitle={cat.intro} />

      <section className="px-6 py-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[#F6EFE4] mb-6">Where to base yourself</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {cat.places.map((place, i) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white/[0.03] border border-white/5 rounded-3xl p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-[#F6EFE4]">{place.name}</h3>
                  <span className="text-xs font-bold text-[#E3A857]">{place.priceIndicator}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#8FA69E] mb-3">
                  <MapPin className="w-3.5 h-3.5" /> {place.area}
                </div>
                <p className="text-sm text-[#B9CFC9] leading-relaxed mb-4">{place.description}</p>
                <div className="flex flex-wrap gap-2">
                  {place.goodFor.map((tag) => (
                    <span key={tag} className="text-xs bg-[#E3A857]/10 text-[#E3A857] px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#0B4F4A]/20 border border-[#0B4F4A]/40 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-[#E3A857] mb-5">Practical tips</h2>
            <ul className="space-y-3">
              {cat.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2.5 text-sm text-[#B9CFC9] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#4FAF9E' }} />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <Link to="/holidays" className="text-sm font-semibold text-[#E3A857] hover:text-[#F6EFE4] transition-colors">
              ← Back to all holiday guides
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Loved it enough to think about staying longer?"
        subtitle="See what it actually takes to live in Bali long-term — visas, tax, and property, explained plainly."
        ctaTo="/visas-residency"
        ctaLabel="See visas & residency"
      />
    </>
  );
};

export default HolidayCategory;
