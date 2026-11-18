import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useSEO } from '../hooks/useSEO';
import { aboutSEO } from '../seo/pages';

const About: React.FC = () => {
  useSEO(aboutSEO());

  const h2 = 'text-xl font-bold text-[#F6EFE4] mb-3';
  const a = 'text-[#E3A857] hover:text-[#F6EFE4] transition-colors underline';

  return (
    <>
      <PageHero
        eyebrow="About"
        title="About OztoBali"
        subtitle="A free, independent guide for Australians getting from Oz to Bali, whether that's for two weeks or for good."
      />
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-3xl space-y-10 text-[#B9CFC9] text-lg font-light leading-relaxed">
          <div>
            <h2 className={h2}>Why this site exists</h2>
            <p>
              Most Bali information online is written for Americans or Europeans, is years out of date, or is a travel
              blog quoting another travel blog. Australians have their own questions: what the ATO thinks when you
              leave, which visa actually fits, what the Smartraveller warnings mean in practice, and how much things
              cost in dollars we recognise. OztoBali answers those questions in plain English, for free.
            </p>
          </div>

          <div>
            <h2 className={h2}>Who it's for</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>Australians planning a Bali holiday, especially a first one.</li>
              <li>People thinking about living in Bali for a few months or a few years.</li>
              <li>Retirees, remote workers and families weighing up a move.</li>
              <li>Anyone looking at renting or buying property in Bali and wanting to avoid the common traps.</li>
            </ul>
          </div>

          <div>
            <h2 className={h2}>How we research</h2>
            <p>
              Every visa, tax, legal and health claim on this site links to where it came from, and we go to the
              primary source wherever one exists: Smartraveller, the ATO, the Australian Border Force, and official
              Indonesian government websites ending in .go.id. Fact-heavy pages show the date they were last checked.
              Rules in Indonesia change often, so if you spot something out of date, please{' '}
              <Link to="/contact" className={a}>tell us</Link> and we'll fix it.
            </p>
          </div>

          <div>
            <h2 className={h2}>What we're not</h2>
            <p>
              We're not lawyers, tax agents, migration agents or financial advisers, and nothing here is personal
              advice. For decisions involving visas, tax or property, use our guides to get your bearings and then
              talk to a licensed professional.
            </p>
          </div>

          <div>
            <h2 className={h2}>How the site is funded</h2>
            <p>
              OztoBali is free to read. To keep it that way, we may show advertising, and some links to booking and
              travel services are affiliate links, which means we may earn a small commission if you book through
              them, at no extra cost to you. Advertisers and affiliate partners never decide what we write, and we
              only link to services we'd be comfortable using ourselves. More detail is in our{' '}
              <Link to="/privacy" className={a}>privacy policy</Link>.
            </p>
          </div>

          <div>
            <h2 className={h2}>Get in touch</h2>
            <p>
              Questions, corrections or story ideas: use our <Link to="/contact" className={a}>contact page</Link> or
              email <a href="mailto:oztobali1@gmail.com" className={a}>oztobali1@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
