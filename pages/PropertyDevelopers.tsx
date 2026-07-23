import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import Disclaimer from '../components/Disclaimer';
import CTASection from '../components/CTASection';
import { useSEO } from '../hooks/useSEO';
import { propertyDevelopersSEO } from '../seo/pages';
import { developers, developerVerifyNote } from '../data/developers';

const PropertyDevelopers: React.FC = () => {
  useSEO(propertyDevelopersSEO());

  return (
    <>
      <PageHero
        eyebrow="Property — Developers"
        title="Bali Developers With a Real Track Record"
        subtitle="Established builders who have actually delivered completed projects — not just marketing renders."
      />

      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-4xl">
          <Disclaimer>{developerVerifyNote}</Disclaimer>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {developers.map((dev, i) => (
            <motion.div
              key={dev.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.05, 0.3) }}
              className="bg-white/[0.03] border border-white/5 rounded-3xl p-7"
            >
              <h3 className="text-xl font-bold text-[#F6EFE4] mb-2">{dev.name}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#8FA69E] mb-4">
                <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {dev.areas.join(', ')}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {dev.founded}</span>
              </div>
              <p className="text-sm text-[#B9CFC9] leading-relaxed mb-4">{dev.trackRecord}</p>
              <div className="mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E3A857] mb-2">Notable Projects</div>
                <ul className="space-y-1">
                  {dev.notableProjects.map((p) => (
                    <li key={p} className="text-sm text-[#B9CFC9]">• {p}</li>
                  ))}
                </ul>
              </div>
              {dev.website && (
                <a
                  href={dev.website}
                  target="_blank"
                  rel="noopener noreferrer sponsored nofollow"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E3A857] hover:text-[#F6EFE4] transition-colors"
                >
                  Visit website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection
        title="Considering a specific developer or project?"
        subtitle="We can't vouch for any individual sale — but we can help you know what questions and due diligence to insist on first."
      />
    </>
  );
};

export default PropertyDevelopers;
