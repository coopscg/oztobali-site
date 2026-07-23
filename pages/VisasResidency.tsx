import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import PageHero from '../components/PageHero';
import Disclaimer from '../components/Disclaimer';
import SourceList from '../components/SourceList';
import CTASection from '../components/CTASection';
import { useSEO } from '../hooks/useSEO';
import { visasResidencySEO } from '../seo/pages';
import { visaOptions, regulatoryFlags, LAST_VERIFIED } from '../data/visas';

const VisasResidency: React.FC = () => {
  useSEO(visasResidencySEO());

  return (
    <>
      <PageHero
        eyebrow="Immigration"
        title="Bali Visas & Residency, Explained"
        subtitle={`Every visa an Australian actually uses to holiday, work remotely, retire, or invest in Bali — with real costs. Last verified ${LAST_VERIFIED}.`}
      />

      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-4xl">
          <Disclaimer>
            Indonesian immigration rules have changed frequently through 2025–2026, including an active enforcement
            crackdown on foreigners working on the wrong visa type. This page is general information, not migration
            advice — confirm current requirements with a licensed Indonesian immigration agent or via{' '}
            <a href="https://evisa.imigrasi.go.id" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-white">
              evisa.imigrasi.go.id
            </a>{' '}
            before applying.
          </Disclaimer>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="container mx-auto max-w-4xl space-y-6">
          {visaOptions.map((visa, i) => (
            <motion.div
              key={visa.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.04, 0.3) }}
              className="bg-white/[0.03] border border-white/5 rounded-3xl p-7 md:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E3A857] bg-[#E3A857]/10 px-3 py-1 rounded-full">
                  {visa.code}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#F6EFE4]">{visa.name}</h3>
              </div>
              <p className="text-[#B9CFC9] text-sm mb-5">{visa.forWhom}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="bg-black/20 rounded-2xl p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#8FA69E] mb-1">Cost</div>
                  <div className="text-[#F6EFE4] text-sm font-medium">{visa.cost}</div>
                </div>
                <div className="bg-black/20 rounded-2xl p-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#8FA69E] mb-1">Duration</div>
                  <div className="text-[#F6EFE4] text-sm font-medium">{visa.duration}</div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {visa.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2 text-sm text-[#B9CFC9]">
                    <CheckCircle2 className="w-4 h-4 text-[#0B4F4A] mt-0.5 shrink-0" style={{ color: '#4FAF9E' }} />
                    {req}
                  </li>
                ))}
              </ul>

              {visa.notes && <p className="text-sm text-[#8FA69E] leading-relaxed mb-3">{visa.notes}</p>}

              {visa.verify && (
                <div className="flex items-start gap-2 text-xs text-[#D9714E] bg-[#D9714E]/10 rounded-xl p-3 mt-3">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  {visa.verify}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F6EFE4] mb-8">What's changed recently</h2>
          <div className="space-y-5">
            {regulatoryFlags.map((flag) => (
              <div key={flag.title} className="bg-[#0B4F4A]/20 border border-[#0B4F4A]/40 rounded-2xl p-6">
                <h3 className="font-bold text-[#E3A857] mb-2">{flag.title}</h3>
                <p className="text-sm text-[#B9CFC9] leading-relaxed">{flag.body}</p>
              </div>
            ))}
          </div>

          <SourceList
            sources={[
              { label: 'Official eVisa Indonesia — eVOA info', url: 'https://evisa.imigrasi.go.id/front/info/evoa' },
              { label: "Let's Move Indonesia — B211A vs C1", url: 'https://www.letsmoveindonesia.com/single-entry-tourist-visa-indonesia-b211a-visa-and-differences-from-the-new-tourist-visit-visa-c1/' },
              { label: 'Emerhub — Second Home Visa', url: 'https://emerhub.com/indonesia/visas/second-home-visa/' },
              { label: 'Emerhub — Spouse KITAS', url: 'https://emerhub.com/indonesia/visas/spouse-kitas/' },
              { label: 'RoamHub — Remote Worker (E33G) KITAS', url: 'https://roamhub.io/nomad-visa/indonesia-kitas/' },
              { label: "Let's Move Indonesia — Retirement Visa", url: 'https://www.letsmoveindonesia.com/indonesia-retirement-visa/' },
              { label: 'Cekindo — KITAP Guide', url: 'https://www.cekindo.com/blog/kitap-stay-permit-indonesia' },
              { label: 'ivisa.com — 2026 Bali Visa Crackdown', url: 'https://www.ivisa.com/news/2026-05-13-id-bali-visa-crackdown-influencers-volunteers' },
              { label: 'Emerhub — Golden Visa', url: 'https://emerhub.com/indonesia/golden-visa/' },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Not sure which visa fits your situation?"
        subtitle="Every pathway has trade-offs between cost, duration, and what it actually lets you do. Get in touch and we'll point you toward the right questions to ask a licensed agent."
      />
    </>
  );
};

export default VisasResidency;
