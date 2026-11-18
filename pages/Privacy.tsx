import React from 'react';
import PageHero from '../components/PageHero';
import { useSEO } from '../hooks/useSEO';
import { privacySEO } from '../seo/pages';

const Privacy: React.FC = () => {
  useSEO(privacySEO());

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="What we collect, why, and what happens to it. Plain English, no fine print games."
      />
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-3xl space-y-8 text-[#B9CFC9] leading-relaxed">
          <p className="text-sm text-[#8FA69E]">Last updated 18 November 2026.</p>

          <div>
            <h2 className="text-xl font-bold text-[#F6EFE4] mb-3">What we collect</h2>
            <p>
              If you use our contact form, we collect your name, email address, what you're interested in (visas,
              property, tax, or holiday planning), your rough timeframe, and whatever you write in the message field.
              That's it, we don't ask for anything beyond what's needed to actually help you.
            </p>
            <p className="mt-3">
              We also use standard website analytics (Vercel Analytics, and Google Search Console once the site is
              submitted) to see aggregate traffic patterns, which pages get read, roughly where visitors come from.
              This data is not tied to your name or contact details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F6EFE4] mb-3">How the contact form works</h2>
            <p>
              When you submit our contact form, your details are sent by email to us and you automatically receive a
              confirmation email in reply, both handled through Resend, a transactional email service. Resend
              processes the email delivery on our behalf under its own privacy policy, but does not otherwise use
              your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F6EFE4] mb-3">Why we collect it, and who sees it</h2>
            <p>
              We use your enquiry to respond to you directly. Depending on what you've asked about, we may also pass
              your enquiry on to a relevant, vetted partner, for example a migration agent if you've asked about
              visas, or a property agent if you've asked about buying. We only do this when it's directly relevant to
              what you asked, and only to partners we'd genuinely recommend. We do not sell contact details, and we
              do not share them with anyone for unrelated marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F6EFE4] mb-3">How long we keep it</h2>
            <p>
              We keep enquiry data for as long as it's useful for following up with you, generally no more than 24
              months, unless you ask us to delete it sooner.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F6EFE4] mb-3">Your rights</h2>
            <p>
              You can ask us what data we hold about you, ask us to correct it, or ask us to delete it, at any time.
              Email oztobali1@gmail.com and we'll action it. If you're in Australia, this is consistent with the
              Australian Privacy Principles under the Privacy Act 1988.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F6EFE4] mb-3">Cookies and advertising</h2>
            <p>
              We use standard analytics that may set basic cookies to measure aggregate site usage.
            </p>
            <p className="mt-3">
              To keep OztoBali free, we may show ads served by Google AdSense. Third-party vendors, including Google,
              use cookies to serve ads based on your previous visits to this website and other websites. Google's use
              of advertising cookies enables it and its partners to serve ads to you based on your visits to this
              site and/or other sites on the internet. You can opt out of personalised advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#E3A857] underline">Google Ads Settings</a>,
              and learn more about how Google uses data at{' '}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-[#E3A857] underline">How Google uses information from sites that use its services</a>.
              You can also opt out of some third-party vendors' use of cookies for personalised advertising at{' '}
              <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#E3A857] underline">aboutads.info</a>.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#F6EFE4] mb-3">Affiliate links</h2>
            <p>
              Some links to booking, travel and money services are affiliate links. If you book or sign up through
              one, we may earn a commission at no extra cost to you. Those services may set their own cookies to
              track the referral, under their own privacy policies. Affiliate relationships never decide what we
              write or recommend.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F6EFE4] mb-3">Changes to this policy</h2>
            <p>
              If how we handle data changes in a meaningful way, we'll update this page and change the date at the
              top. This is a general policy for a small, growing site, not a substitute for legal advice if you have
              specific concerns.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#F6EFE4] mb-3">Contact</h2>
            <p>
              Questions about this policy or your data: oztobali1@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
