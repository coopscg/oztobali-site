import React from 'react';
import PageHero from '../components/PageHero';
import SourceList from '../components/SourceList';
import CTASection from '../components/CTASection';
import TaxSections from '../components/TaxSections';
import { useSEO } from '../hooks/useSEO';
import { cultureSEO } from '../seo/pages';
import { cultureSections } from '../data/culture';

const Culture: React.FC = () => {
  useSEO(cultureSEO());

  return (
    <>
      <PageHero
        eyebrow="Culture"
        title="Bali Culture & Way of Life"
        subtitle="What Australians need to understand and respect — from daily offerings to the island-wide Day of Silence."
      />

      <section className="px-6 py-8">
        <div className="container mx-auto max-w-4xl">
          <TaxSections sections={cultureSections} />

          <SourceList
            sources={[
              { label: 'Wikipedia — Nyepi', url: 'https://en.wikipedia.org/wiki/Nyepi' },
              { label: 'PublicHolidays.co.id — Bali Hindu New Year', url: 'https://publicholidays.co.id/bali-hindu-new-year/' },
              { label: 'UNESCO — Subak System, Bali Cultural Landscape', url: 'https://whc.unesco.org/en/list/1194/' },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Culture shock is real — plan for it"
        subtitle="Whether you're visiting for two weeks or moving for good, understanding local custom up front makes everything else easier."
        ctaLabel="Get our settling-in checklist"
      />
    </>
  );
};

export default Culture;
