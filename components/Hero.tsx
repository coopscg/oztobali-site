import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { easePremium } from '../lib/motion';
import MagneticButton from './MagneticButton';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [heroWidth, setHeroWidth] = useState(1440);

  const clipWidth = useMotionValue(720);
  const springClip = useSpring(clipWidth, { stiffness: 90, damping: 26, mass: 0.6 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const update = () => {
      const w = el.getBoundingClientRect().width;
      setHeroWidth(w);
      clipWidth.set(w / 2);
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    let raf = 0;
    if (!isFinePointer) {
      const start = performance.now();
      const animate = (t: number) => {
        const elapsed = (t - start) / 1000;
        const w = el.getBoundingClientRect().width;
        const wave = Math.sin(elapsed * 0.4) * 0.16;
        clipWidth.set(w * (0.5 + wave));
        raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
    }

    return () => {
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current || !window.matchMedia('(pointer: fine)').matches) return;
    const rect = heroRef.current.getBoundingClientRect();
    clipWidth.set(e.clientX - rect.left);
  };

  const handleMouseLeave = () => {
    clipWidth.set(heroWidth / 2);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100vh] overflow-hidden flex items-center"
    >
      {/* Base layer: Bali */}
      <img
        src="/images/home-hero-tanahlot.jpg"
        alt="Tanah Lot sea temple at sunset, Bali"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Clipped layer: Gold Coast */}
      <motion.div
        style={{ width: springClip }}
        className="absolute inset-y-0 left-0 h-full overflow-hidden"
      >
        <img
          src="/images/goldcoast-skyline.jpg"
          alt="Gold Coast skyline of highrises"
          style={{ width: heroWidth }}
          className="absolute inset-y-0 left-0 h-full object-cover max-w-none"
          loading="eager"
        />
      </motion.div>

      {/* Divider line + handle */}
      <motion.div
        style={{ left: springClip }}
        className="absolute inset-y-0 z-20 w-px bg-gold/70 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ink/70 backdrop-blur border border-gold/50 flex items-center justify-center">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3.5 bg-gold/80 rounded-full" />
            <div className="w-0.5 h-3.5 bg-gold/80 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Scrim for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink z-10" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gold/10 rounded-full blur-[160px] pointer-events-none z-10" />

      {/* Side labels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute top-28 left-6 md:left-12 z-20 text-xs font-bold tracking-[0.25em] uppercase text-cream/60"
      >
        Gold Coast
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute top-28 right-6 md:right-12 z-20 text-xs font-bold tracking-[0.25em] uppercase text-cream/60"
      >
        Bali
      </motion.div>

      <div className="container mx-auto max-w-5xl relative z-20 text-center px-6 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: easePremium }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold/20 text-gold text-sm font-semibold mb-8"
        >
          <MapPin className="w-4 h-4" /> Built for Australians, about Bali
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, ease: easePremium }}
          className="font-display text-6xl md:text-8xl font-bold tracking-tight text-cream mb-6 leading-[0.98]"
        >
          Your Straight-Talking Guide<br /> <span className="text-gold">From Oz to Bali</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, ease: easePremium }}
          className="text-sage text-lg md:text-xl font-light max-w-2xl mx-auto mb-10"
        >
          Whether you're planning a holiday or planning your exit: visas, residency costs, property rules,
          tax on both sides of the ditch, culture, and the best places to stay. Sourced, plain-English, and
          built for Australians actually making the move.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, ease: easePremium }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <Link
              to="/visas-residency"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-bold rounded-full hover:bg-cream transition-colors duration-300"
            >
              Start With Visas & Residency <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              to="/holidays"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-cream font-bold rounded-full hover:bg-white/10 transition-colors duration-300"
            >
              Just Here for a Holiday?
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-sage-dim text-xs font-medium tracking-widest uppercase"
      >
        <span>Move your cursor, or just scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
