import React from 'react';
import PageHero from '../components/PageHero';
import Disclaimer from '../components/Disclaimer';
import SourceList from '../components/SourceList';
import CTASection from '../components/CTASection';
import TaxSections from '../components/TaxSections';
import { useSEO } from '../hooks/useSEO';
import { taxIndonesiaSEO } from '../seo/pages';
import { idTaxSections, LAST_VERIFIED_ID } from '../data/taxIndonesia';

const TaxIndonesia: React.FC = () => {
  useSEO(taxIndonesiaSEO());

  return (
    <>
      <PageHero
        eyebrow="Taxation — Indonesia"
        title="Indonesian Tax Rules for Australians"
        subtitle={`NPWP registration, tax residency, current rates, and the "foreign income exemption" claims worth double-checking. Last verified ${LAST_VERIFIED_ID}.`}
      />

      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-4xl">
          <Disclaimer>
            This is general information, not personal tax advice. Indonesian tax rules are complex and change
            regularly (CoreTax system changes, NPWP format updates). Confirm your obligations with a registered
            Indonesian pajak (tax) consultant before acting.
          </Disclaimer>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="container mx-auto max-w-4xl">
          <TaxSections sections={idTaxSections} />

          <SourceList
            sources={[
              { label: 'PwC Indonesia — Individual Residence', url: 'https://taxsummaries.pwc.com/indonesia/individual/residence' },
              { label: 'Direktorat Jenderal Pajak — Tax Return Reporting for Foreign Citizens', url: 'https://www.pajak.go.id/en/artikel/tax-return-reporting-foreign-citizens-indonesia' },
              { label: 'Emerhub — Indonesian Tax for Expats (4-Year Exemption & DTA)', url: 'https://emerhub.com/indonesia/indonesian-tax-for-expats-4-year-exemption-and-dta/' },
              { label: 'TBrights — NPWP and KITAS relationship', url: 'https://tbrights.com/the-relation-of-tax-identification-number-npwp-and-limited-stay-permit-card-kitas/' },
              { label: 'PwC Indonesia — Personal Income Tax rates', url: 'https://taxsummaries.pwc.com/indonesia/individual/taxes-on-personal-income' },
              { label: 'Indonesia Business Post — Government rules out new tax amnesty', url: 'https://indonesiabusinesspost.com/6626/policy/indonesia-rules-out-new-tax-amnesty-as-government-shifts-focus-to-long-term-tax-compliance' },
              { label: 'MUC — Six-month asset repatriation window', url: 'https://muc.co.id/en/article/purbaya-grants-six-month-window-for-tax-asset-repatriation' },
              { label: 'MUC — Tax Amnesty Volume III drafting status', url: 'https://muc.co.id/en/article/revealed-government-drafting-plans-for-tax-amnesty-vol-iii' },
              { label: 'Australia–Indonesia Double Tax Agreement — full text (AustLII)', url: 'https://www.austlii.edu.au/cgi-bin/viewdoc/au/other/dfat/treaties/1992/40.html' },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Don't rely on expat-forum tax advice"
        subtitle="The rules around foreign-income exemptions and NPWP obligations are more specific than most Facebook groups suggest. Get proper advice before you're 183 days in."
      />
    </>
  );
};

export default TaxIndonesia;
