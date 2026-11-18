import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Check, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import Disclaimer from '../components/Disclaimer';
import AffiliateLinks from '../components/AffiliateLinks';
import AdSlot from '../components/AdSlot';
import { useSEO } from '../hooks/useSEO';
import { plannerSEO } from '../seo/pages';
import { getTrack, plannerTracks, PLANNER_LAST_REVIEWED } from '../data/tripPlanner';

const storageKey = (slug: string) => `oztobali-planner-${slug}`;

function loadDone(slug: string): string[] {
  try {
    const raw = window.localStorage.getItem(storageKey(slug));
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

const Planner: React.FC = () => {
  const { track: slug = 'holiday' } = useParams<{ track: string }>();
  const track = getTrack(slug);
  useSEO(plannerSEO(track?.slug ?? 'holiday'));

  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    if (track) setDone(loadDone(track.slug));
  }, [track?.slug]);

  if (!track) return <Navigate to="/plan/holiday" replace />;

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        window.localStorage.setItem(storageKey(track.slug), JSON.stringify(next));
      } catch {
        // Private browsing or blocked storage: progress just won't persist.
      }
      return next;
    });
  };

  const total = track.steps.length;
  const count = track.steps.filter((s) => done.includes(s.id)).length;
  const pct = Math.round((count / total) * 100);

  return (
    <>
      <PageHero
        eyebrow="Step-by-step guide"
        title={track.title}
        subtitle={track.intro}
        image={track.slug === 'holiday' ? '/images/home-hero-tanahlot.jpg' : '/images/property-villa-pool.jpg'}
        imageAlt={track.slug === 'holiday' ? 'Tanah Lot temple at sunset, Bali' : 'Villa pool in Bali'}
      />

      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-3xl">
          {/* Track switcher */}
          <div className="flex gap-2 p-1.5 bg-white/[0.04] border border-white/10 rounded-full w-fit mb-8" role="tablist">
            {plannerTracks.map((t) => (
              <Link
                key={t.slug}
                to={`/plan/${t.slug}`}
                role="tab"
                aria-selected={t.slug === track.slug}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  t.slug === track.slug ? 'bg-[#E3A857] text-[#062420]' : 'text-[#B9CFC9] hover:text-[#F6EFE4]'
                }`}
              >
                {t.label}
              </Link>
            ))}
          </div>

          {/* Progress */}
          <div className="sticky top-24 z-20 bg-[#062420] shadow-lg shadow-black/30 border border-white/10 rounded-2xl px-5 py-4 mb-12">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-bold text-[#F6EFE4]">Your progress</span>
              <span className="text-[#8FA69E]">
                {count} of {total} steps done
              </span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#E3A857] rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
            </div>
          </div>

          {/* Steps */}
          <ol className="relative space-y-6">
            {track.steps.map((step, i) => {
              const isDone = done.includes(step.id);
              return (
                <React.Fragment key={step.id}>
                  {i === 4 && <AdSlot slot="inArticle" />}
                  <li
                    id={step.id}
                    className={`relative scroll-mt-44 rounded-3xl border p-5 md:p-8 transition-colors ${
                      isDone ? 'bg-[#0B4F4A]/30 border-[#E3A857]/30' : 'bg-white/[0.03] border-white/10'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <span
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black ${
                          isDone ? 'bg-[#E3A857] text-[#062420]' : 'bg-white/10 text-[#F6EFE4]'
                        }`}
                        aria-hidden="true"
                      >
                        {isDone ? <Check className="w-5 h-5" /> : i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#E3A857] mb-2">
                          <Clock className="w-3.5 h-3.5" /> {step.when}
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#F6EFE4] mb-3">
                          <span className="sr-only">Step {i + 1}: </span>
                          {step.title}
                        </h2>
                        <p className="text-[#B9CFC9] text-lg font-light leading-relaxed mb-4">{step.summary}</p>
                        {step.points.length > 0 && (
                          <ul className="space-y-2 mb-5">
                            {step.points.map((p) => (
                              <li key={p} className="flex items-start gap-3 text-[#B9CFC9] leading-relaxed">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#E3A857] flex-shrink-0" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        )}
                        {step.links.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-2">
                            {step.links.map((l) => (
                              <Link
                                key={l.to + l.label}
                                to={l.to}
                                className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] text-sm text-[#F6EFE4] hover:bg-[#E3A857] hover:text-[#062420] transition-colors"
                              >
                                {l.label} <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            ))}
                          </div>
                        )}
                        {step.affiliates && <AffiliateLinks categories={step.affiliates} title="Book or compare" />}
                        <button
                          type="button"
                          onClick={() => toggle(step.id)}
                          aria-pressed={isDone}
                          className={`mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold border transition-colors ${
                            isDone
                              ? 'border-[#E3A857] text-[#E3A857] hover:bg-[#E3A857]/10'
                              : 'border-white/20 text-[#F6EFE4] hover:border-[#E3A857] hover:text-[#E3A857]'
                          }`}
                        >
                          <Check className="w-4 h-4" /> {isDone ? 'Done' : 'Mark as done'}
                        </button>
                      </div>
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
          </ol>

          {count === total && (
            <div className="mt-10 text-center bg-gradient-to-br from-[#0B4F4A] to-[#062420] border border-[#E3A857]/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-[#F6EFE4] mb-2">You're all set. Selamat jalan!</h2>
              <p className="text-[#B9CFC9]">That's "safe travels" in Indonesian.</p>
            </div>
          )}

          <div className="mt-12">
            <Disclaimer>
              General information only, not legal, tax, migration or medical advice. Rules in Indonesia change often.
              Each step links to a detailed guide with official sources. Guide last reviewed {PLANNER_LAST_REVIEWED}.
            </Disclaimer>
          </div>

          <AdSlot slot="endOfArticle" />
        </div>
      </section>
    </>
  );
};

export default Planner;
