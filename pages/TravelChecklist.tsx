import React from 'react';
import PageHero from '../components/PageHero';
import Disclaimer from '../components/Disclaimer';
import SourceList from '../components/SourceList';
import CTASection from '../components/CTASection';
import TaxSections from '../components/TaxSections';
import AffiliateLinks from '../components/AffiliateLinks';
import { useSEO } from '../hooks/useSEO';
import { travelChecklistSEO } from '../seo/pages';
import { checklistSections, LAST_VERIFIED_CHECKLIST } from '../data/travelChecklist';

const TravelChecklist: React.FC = () => {
  useSEO(travelChecklistSEO());

  return (
    <>
      <PageHero
        eyebrow="Before You Fly"
        title="New Traveller Checklist"
        subtitle={`Visas, vaccinations, the tourist levy, and duty-free rules both directions. Last verified ${LAST_VERIFIED_CHECKLIST}.`}
        image="/images/visas-immigration-hall.jpg"
        imageAlt="Immigration arrival hall at Bali's Ngurah Rai International Airport"
      />

      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-4xl">
          <Disclaimer>
            General information only, not medical, legal or immigration advice. Visa costs, entry rules, and travel
            advisories change without much notice. Confirm vaccinations with your own travel doctor and check the
            official government sources linked below before you fly.
          </Disclaimer>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="container mx-auto max-w-4xl">
          <TaxSections sections={checklistSections} />

          <AffiliateLinks categories={['money', 'connectivity', 'insurance']} title="Sort this before you fly" />

          <SourceList
            sources={[
              { label: 'Official eVisa Indonesia', url: 'https://evisa.imigrasi.go.id' },
              { label: 'All Indonesia — unified arrival card', url: 'https://allindonesia.imigrasi.go.id' },
              { label: 'Australian Immunisation Handbook — travel recommendations', url: 'https://immunisationhandbook.health.gov.au' },
              { label: 'Smartraveller — Indonesia travel advice', url: 'https://www.smartraveller.gov.au/destinations/asia/indonesia' },
              { label: 'Smartraveller — travel insurance', url: 'https://www.smartraveller.gov.au/before-you-go/the-basics/travel-insurance' },
              { label: 'Bali tourist levy — official portal', url: 'https://lovebali.baliprov.go.id' },
              { label: 'Indonesian Directorate General of Customs and Excise', url: 'https://www.beacukai.go.id' },
              { label: 'Australian Border Force — duty free', url: 'https://www.abf.gov.au/entering-and-leaving-australia/duty-free' },
              { label: 'AUSTRAC — moving money overseas', url: 'https://www.austrac.gov.au/general-public/moving-money-overseas' },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Sorted for the flight, thinking about more than a holiday?"
        subtitle="See what it actually takes to live in Bali long-term, visas, tax, and property, explained plainly."
        ctaTo="/visas-residency"
        ctaLabel="See visas & residency"
      />
    </>
  );
};

export default TravelChecklist;
