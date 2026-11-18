import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useSpring, MotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { easePremium } from '../lib/motion';
import MagneticButton from './MagneticButton';

interface Chapter {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  to: string;
  ctaLabel: string;
}

const chapters: Chapter[] = [
  {
    eyebrow: '01 / Getting In',
    title: 'The paperwork that actually matters',
    description:
      "VOA, C1, KITAS, Second Home: the right visa depends entirely on why you're going. We break down real costs and requirements for every pathway Australians actually use.",
    image: '/images/visas-immigration-hall.jpg',
    imageAlt: "Immigration arrival hall at Bali's Ngurah Rai International Airport",
    to: '/visas-residency',
    ctaLabel: 'See visas & residency',
  },
  {
    eyebrow: '02 / Putting Down Roots',
    title: 'What you can actually own',
    description:
      'Foreigners cannot own freehold land in Indonesia. Hak Pakai, leasehold, and PT PMA are the real structures, and nominee arrangements are now a criminal offence in Bali.',
    image: '/images/property-villa-pool.jpg',
    imageAlt: 'A private villa pool surrounded by tropical landscaping in Bali',
    to: '/property/buying',
    ctaLabel: 'See property in Bali',
  },
  {
    eyebrow: '03 / Two Tax Systems',
    title: 'Sorted on both sides of the ditch',
    description:
      "The ATO decides if you're still an Australian tax resident. Indonesia decides separately, on its own 183-day rule. Get either one wrong and it costs real money.",
    image: '/images/sanur-beach-morning.jpg',
    imageAlt: 'Morning light over Sanur Beach, Bali',
    to: '/taxation/australia',
    ctaLabel: 'See tax & exit rules',
  },
  {
    eyebrow: '04 / Everyday Life',
    title: 'Respect looks like specific things',
    description:
      'Tri Hita Karana, the banjar system, the ceremony calendar. This is the everyday etiquette that separates a considerate long-term guest from a tourist who never left.',
    image: '/images/culture-ceremony-bratan.jpg',
    imageAlt: 'A Balinese Hindu ceremony at Pura Ulun Danu Bratan temple',
    to: '/culture',
    ctaLabel: 'See culture & etiquette',
  },
  {
    eyebrow: '05 / Just Visiting',
    title: 'Or maybe it starts as a holiday',
    description:
      "Not ready to move? Start smaller. Family trip, adventure trip, a week doing nothing. Every kind of Bali holiday, sorted by what you're actually after.",
    image: '/images/holiday-adventure-kelingking.jpg',
    imageAlt: 'Kelingking Beach cliffs on Nusa Penida, near Bali',
    to: '/holidays',
    ctaLabel: 'See holiday guides',
  },
];

const N = chapters.length;

const ChapterLayer: React.FC<{
  chapter: Chapter;
  index: number;
  progress: MotionValue<number>;
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
}> = ({ chapter, index, progress, parallaxX, parallaxY }) => {
  const imageOpacity = useTransform(progress, (p: number) => 1 - Math.min(Math.abs(p - index), 1));
  const imageScale = useTransform(progress, (p: number) => 1 + Math.min(Math.abs(p - index), 1) * 0.14);
  const contentOpacity = useTransform(progress, (p: number) => {
    const d = Math.abs(p - index);
    return d < 0.55 ? 1 - d / 0.55 : 0;
  });
  const contentY = useTransform(progress, (p: number) => {
    const d = p - index;
    return Math.max(-40, Math.min(40, d * 90));
  });
  const numberOpacity = useTransform(progress, (p: number) => {
    const d = Math.abs(p - index);
    return d < 0.7 ? 1 - d / 0.7 : 0;
  });
  const pointerEvents = useTransform(progress, (p: number) =>
    Math.abs(p - index) < 0.5 ? 'auto' : 'none'
  ) as MotionValue<'auto' | 'none'>;

  return (
    <>
      <motion.div
        className="absolute inset-[-3%]"
        style={{ opacity: imageOpacity, scale: imageScale, x: parallaxX, y: parallaxY }}
      >
        <img
          src={chapter.image}
          alt={chapter.imageAlt}
          className="w-full h-full object-cover"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      </motion.div>

      <motion.div
        style={{ opacity: numberOpacity }}
        className="absolute inset-0 top-28 left-6 md:left-12 font-display text-[18vw] md:text-[10vw] leading-none font-bold text-cream/[0.06] select-none pointer-events-none"
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY, pointerEvents }}
        className="absolute inset-0 z-10 flex items-center container mx-auto px-6 md:px-12"
      >
        <div className="max-w-xl">
          <span className="inline-block text-gold font-bold tracking-widest uppercase mb-5 text-xs md:text-sm">
            {chapter.eyebrow}
          </span>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6 leading-[1.05]">
            {chapter.title}
          </h3>
          <p className="text-sage text-base md:text-lg font-light leading-relaxed mb-8 max-w-lg">
            {chapter.description}
          </p>
          <MagneticButton strength={0.4}>
            <Link
              to={chapter.to}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-cream/10 backdrop-blur border border-cream/20 text-cream font-bold rounded-full hover:bg-gold hover:text-ink hover:border-gold transition-colors duration-300"
            >
              {chapter.ctaLabel} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
        </div>
      </motion.div>
    </>
  );
};

const ScrollStory: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [storyInView, setStoryInView] = useState(false);

  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, N - 1]);

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const parallaxX = useSpring(mvX, { stiffness: 50, damping: 20 });
  const parallaxY = useSpring(mvY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const io = new IntersectionObserver(([entry]) => setStoryInView(entry.isIntersecting), { threshold: 0.02 });
    io.observe(wrapper);

    const unsub = progress.on('change', (p) => setActiveIndex(Math.round(p)));

    return () => {
      io.disconnect();
      unsub();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mvX.set(nx * -22);
    mvY.set(ny * -22);
  };

  const goToChapter = (i: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const pageTop = window.scrollY + rect.top;
    const scrollRange = rect.height - window.innerHeight;
    const target = pageTop + (i / (N - 1)) * scrollRange;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  return (
    <section aria-label="What moving to Bali actually involves" className="relative">
      <div className="text-center px-6 pt-24 pb-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easePremium }}
          className="inline-block text-gold font-bold tracking-widest uppercase mb-4 text-sm"
        >
          The Whole Picture
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: easePremium }}
          className="font-display text-3xl md:text-5xl font-bold text-cream max-w-2xl mx-auto"
        >
          Keep scrolling. It flows straight through, chapter to chapter.
        </motion.h2>
      </div>

      <div ref={wrapperRef} className="relative h-[650vh]">
        <div onMouseMove={handleMouseMove} className="sticky top-0 h-screen overflow-hidden">
          {chapters.map((chapter, i) => (
            <ChapterLayer
              key={chapter.title}
              chapter={chapter}
              index={i}
              progress={progress}
              parallaxX={parallaxX}
              parallaxY={parallaxY}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      <div
        className={`hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4 transition-opacity duration-500 ${
          storyInView ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {chapters.map((chapter, i) => (
          <button
            key={chapter.title}
            onClick={() => goToChapter(i)}
            aria-label={`Jump to ${chapter.title}`}
            className="group relative flex items-center justify-end"
          >
            <span className="absolute right-full mr-3 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-cream bg-ink/90 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none">
              {chapter.title}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-2.5 h-2.5 bg-gold' : 'w-1.5 h-1.5 bg-cream/30 group-hover:bg-cream/60'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ScrollStory;
