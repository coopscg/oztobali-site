import React from 'react';
import PageHero from '../components/PageHero';
import { useSEO } from '../hooks/useSEO';
import { creditsSEO } from '../seo/pages';
import { imageCredits } from '../data/imageCredits';

const Credits: React.FC = () => {
  useSEO(creditsSEO());

  return (
    <>
      <PageHero
        eyebrow="Attribution"
        title="Photo Credits"
        subtitle="Every photo on this site is real, freely licensed Bali photography — credited here in full."
      />
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-3xl">
          <ul className="divide-y divide-white/5">
            {imageCredits.map((c) => (
              <li key={c.file} className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <div className="font-semibold text-[#F6EFE4]">{c.title}</div>
                  <div className="text-sm text-[#8FA69E]">
                    by {c.author} · {c.license}
                  </div>
                </div>
                <a
                  href={c.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm text-[#E3A857] hover:text-[#F6EFE4] transition-colors shrink-0"
                >
                  View source
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Credits;
