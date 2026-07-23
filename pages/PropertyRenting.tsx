import React from 'react';
import PageHero from '../components/PageHero';
import Disclaimer from '../components/Disclaimer';
import SourceList from '../components/SourceList';
import CTASection from '../components/CTASection';
import TaxSections from '../components/TaxSections';
import { useSEO } from '../hooks/useSEO';
import { propertyRentingSEO } from '../seo/pages';
import { rentingSections, LAST_VERIFIED_RENT } from '../data/propertyRenting';

const PropertyRenting: React.FC = () => {
  useSEO(propertyRentingSEO());

  return (
    <>
      <PageHero
        eyebrow="Property — Renting"
        title="Renting in Bali, Done Properly"
        subtitle={`Lease norms, deposits, and what actually protects you as a tenant. Last verified ${LAST_VERIFIED_RENT}.`}
      />

      <section className="px-6 pb-8">
        <div className="container mx-auto max-w-4xl">
          <Disclaimer>
            General information only, not legal advice. Have any lease reviewed by an Indonesia-qualified lawyer
            before signing, especially for multi-year terms paid upfront.
          </Disclaimer>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="container mx-auto max-w-4xl">
          <TaxSections sections={rentingSections} />

          <SourceList
            sources={[
              { label: 'Rumah123 — Lease Agreements in Indonesia for Expatriates', url: 'https://www.rumah123.com/en/property-guide/lease-agreements-in-indonesia-for-expatriates/' },
              { label: 'Cekindo — Renting a Property in Bali', url: 'https://www.cekindo.com/blog/renting-property-bali-agreement' },
              { label: 'BVR Property — Tenant Rights and Responsibilities in Indonesia', url: 'https://bvrproperty.com/blogpost/tenant-rights-and-responsibilities' },
              { label: 'Bali Home Immo — Villas for Rent', url: 'https://bali-home-immo.com/realestate-property/for-rent/villa' },
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Ready to start looking?"
        subtitle="Get in touch and we'll point you toward what to check before you sign anything — including the one clause most Bali leases get wrong."
      />
    </>
  );
};

export default PropertyRenting;
