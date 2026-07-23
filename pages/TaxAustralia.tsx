import React from 'react';
import PageHero from '../components/PageHero';
import Disclaimer from '../components/Disclaimer';
import SourceList from '../components/SourceList';
import CTASection from '../components/CTASection';
import TaxSections from '../components/TaxSections';
import { useSEO } from '../hooks/useSEO';
import { taxAustraliaSEO } from '../seo/pages';
import { auTaxSections, LAST_VERIFIED_AU } from '../data/taxAustralia';

const TaxAustralia: React.FC = () => {
  useSEO(taxAustraliaSEO());

  return (
    <>
      <PageHero
        eyebrow="Taxation — Australia"
        title="Leaving Australia: ATO Rules & Your Exit"
        subtitle={`How the ATO decides if you're still a resident, what changes when you're not, and how to exit properly. Last verified ${LAST_VERIFIED_AU}.`}
      />

      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-4xl">
          <Disclaimer>
            This is general tax information, not personal tax advice. Your residency status depends on your full
            individual circumstances. Speak with a registered Australian tax agent before making decisions about
            your residency, superannuation, or Capital Gains Tax position.
          </Disclaimer>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="container mx-auto max-w-4xl">
          <TaxSections sections={auTaxSections} />

          <SourceList
            sources={[
              { label: 'ATO — Residency tests', url: 'https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/residency-tests' },
              { label: 'ATO — The domicile test', url: 'https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/residency-tests/residency-the-domicile-test' },
              { label: 'ATO — The 183-day test', url: 'https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/residency-tests/residency-the-183-day-test' },
              { label: 'Treasury — Modernising individual tax residency (consultation)', url: 'https://consult.treasury.gov.au/c2023-205344' },
              { label: 'ATO — How changing residency affects CGT', url: 'https://www.ato.gov.au/individuals-and-families/investments-and-assets/capital-gains-tax/foreign-residents-and-capital-gains-tax/how-changing-residency-affects-cgt' },
              { label: 'ATO — Main residence exemption for foreign residents', url: 'https://www.ato.gov.au/individuals-and-families/investments-and-assets/capital-gains-tax/foreign-residents-and-capital-gains-tax/main-residence-exemption-for-foreign-residents' },
              { label: 'ATO — Tax rates: foreign residents', url: 'https://www.ato.gov.au/tax-rates-and-codes/tax-rates-foreign-residents' },
              { label: 'ATO — Medicare levy exemption for foreign residents', url: 'https://www.ato.gov.au/individuals-and-families/medicare-and-private-health-insurance/medicare-levy/medicare-levy-exemption/foreign-residents-exemption-from-medicare-levy' },
              { label: 'ATO — Contribution caps', url: 'https://www.ato.gov.au/tax-rates-and-codes/key-superannuation-rates-and-thresholds/contributions-caps' },
              { label: 'Services Australia — Leaving Australia while on the Age Pension', url: 'https://www.servicesaustralia.gov.au/when-you-leave-australia-if-you-get-age-pension?context=22526' },
              { label: 'DSS Guide — 7.1.4 Portability extensions', url: 'https://guides.dss.gov.au/social-security-guide/7/1/4' },
              { label: 'ATO — Living overseas & remaining an Australian tax resident', url: 'https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/living-overseas-and-remaining-an-australian-tax-resident' },
              { label: 'AEC — Overseas elector enrolment', url: 'https://www.aec.gov.au/overseas/enrolment.htm' },
              { label: 'Australia–Indonesia Double Tax Agreement — full text (AustLII)', url: 'https://www.austlii.edu.au/cgi-bin/viewdoc/au/other/dfat/treaties/1992/40.html' },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Getting your exit right matters more than getting there"
        subtitle="A messy Australian tax exit can cost far more than any visa or flight. Talk to a registered tax agent early — we can point you toward the right questions to ask."
      />
    </>
  );
};

export default TaxAustralia;
