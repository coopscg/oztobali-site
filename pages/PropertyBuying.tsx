import React from 'react';
import PageHero from '../components/PageHero';
import Disclaimer from '../components/Disclaimer';
import SourceList from '../components/SourceList';
import CTASection from '../components/CTASection';
import TaxSections from '../components/TaxSections';
import { useSEO } from '../hooks/useSEO';
import { propertyBuyingSEO } from '../seo/pages';
import { buyingSections, LAST_VERIFIED_BUY } from '../data/propertyBuying';

const PropertyBuying: React.FC = () => {
  useSEO(propertyBuyingSEO());

  return (
    <>
      <PageHero
        eyebrow="Property — Buying"
        title="Buying Property in Bali: What You Can Actually Own"
        subtitle={`Hak Pakai, leasehold, PT PMA — and why nominee arrangements are now a criminal offence in Bali. Last verified ${LAST_VERIFIED_BUY}.`}
      />

      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-4xl">
          <Disclaimer>
            This is the highest-risk topic on this site to get wrong. Nothing here is legal advice — Indonesian land
            law is complex, changes rapidly, and enforcement varies by regency. Consult a licensed Indonesian notary
            (PPAT) and an Indonesia-qualified lawyer before signing anything or moving any money.
          </Disclaimer>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="container mx-auto max-w-4xl">
          <TaxSections sections={buyingSections} />

          <SourceList
            sources={[
              { label: 'Emerhub — Nominee Land Arrangements', url: 'https://emerhub.com/bali/nominee-arrangements/' },
              { label: 'UNCTAD Investment Policy Hub — GR 18/2021 (Hak Pakai)', url: 'https://investmentpolicy.unctad.org/investment-policy-monitor/measures/3701/new-regulation-expands-strata-title-rights-for-foreign-citizens-and-legal-entities' },
              { label: 'PermitIndo — Land Rights in Indonesia for Foreigners', url: 'https://www.permitindo.com/news/land-rights-in-indonesia-for-foreigners' },
              { label: 'Bali Villa Realty — Leasehold Property Investments', url: 'https://balivillarealty.com/blog/leasehold-property-investments-in-bali/' },
              { label: 'AseanBriefing — Indonesia Minimum Investment Requirements', url: 'https://www.aseanbriefing.com/news/indonesias-minimum-investment-requirements-what-foreign-investors-need-to-plan-before-entry/' },
              { label: 'Emerhub — Minimum Capital Requirements for PT PMA', url: 'https://emerhub.com/indonesia/minimum-capital-requirement-for-setting-up-pt-pma/' },
              { label: 'Putranto Alliance — Risks of Nominee in Property Transactions', url: 'https://putranto-alliance.com/risks-of-nominee-in-property-transactions/' },
              { label: 'Emerhub — Bali Criminalizes Rice Field Conversions (Perda 4/2026)', url: 'https://emerhub.com/news/bali-criminalizes-rice-field-conversions/' },
              { label: 'Seven Stones Indonesia — Bali Officially Bans Nominee Practice', url: 'https://realestate.sevenstonesindonesia.com/bali-officially-bans-nominee-practice-for-land-ownership/' },
              { label: 'Travel Weekly Asia — Locals weep as Bali villas face the wrecking ball', url: 'https://www.travelweekly-asia.com/Destination-Travel/Locals-weep-as-Bali-villas-face-the-wrecking-ball' },
              { label: 'Rumavi — Bali Airbnb Regulations Guide (PBG/SLF/KKPR)', url: 'https://rumavi.com/en/property-guides/bali-airbnb-regulations-q4-2025-complete-guide-to-legal-villa-rentals-short-term-rental-licenses' },
              { label: 'Indoned Consultancy — Due Diligence Checklist for Foreigners', url: 'https://www.indoned.id/due-diligence-checklist-for-foreigners-buying-property-in-bali/' },
              { label: 'Seven Stones Indonesia — How to Verify Land Ownership in Bali', url: 'https://realestate.sevenstonesindonesia.com/how-to-verify-land-ownership-in-bali-before-buying-property/' },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Thinking about buying? Start with due diligence, not a deposit"
        subtitle="Talk to us before you talk to a seller's preferred notary — we'll help you understand which structure actually fits your situation."
      />
    </>
  );
};

export default PropertyBuying;
