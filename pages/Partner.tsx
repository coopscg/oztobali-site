import React from 'react';
import { Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { useSEO } from '../hooks/useSEO';
import { partnerSEO } from '../seo/pages';
import { partnerTiers, audienceStats } from '../data/partnerTiers';

const Partner: React.FC = () => {
  useSEO(partnerSEO());

  return (
    <>
      <PageHero
        eyebrow="For Businesses"
        title="Reach Australians Moving to Bali"
        subtitle="OztoBali is built for one audience: Australians actively researching visas, property, tax, and the move to Bali. Get in front of them directly."
      />

      <section className="px-6 py-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {audienceStats.map((stat) => (
              <div key={stat.label} className="text-center bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                <div className="text-2xl font-bold text-[#E3A857] mb-1">{stat.value}</div>
                <div className="text-xs text-[#8FA69E] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 border ${
                  tier.highlight
                    ? 'bg-gradient-to-br from-[#0B4F4A] to-[#062420] border-[#E3A857]/40'
                    : 'bg-white/[0.03] border-white/5'
                }`}
              >
                {tier.highlight && (
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#E3A857] mb-3">Most Popular</span>
                )}
                <h3 className="text-xl font-bold text-[#F6EFE4] mb-1">{tier.name}</h3>
                <div className="text-2xl font-bold text-[#E3A857] mb-4">{tier.price}</div>
                <p className="text-sm text-[#B9CFC9] mb-6">{tier.bestFor}</p>
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#B9CFC9]">
                      <Check className="w-4 h-4 text-[#E3A857] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#8FA69E] mt-10">
            All placements are clearly labeled as sponsored — we don't compromise reader trust for anyone.
          </p>
        </div>
      </section>

      <CTASection
        title="Let's talk about your business"
        subtitle="Tell us what you do and who you want to reach — we'll suggest the right placement."
        ctaLabel="Get in touch"
      />
    </>
  );
};

export default Partner;
