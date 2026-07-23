import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  image?: string;
  imageAlt?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, subtitle, image, imageAlt }) => {
  if (image) {
    return (
      <section className="relative px-6 pt-44 pb-24 overflow-hidden min-h-[440px] flex items-end">
        <img
          src={image}
          alt={imageAlt ?? ''}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062420] via-[#062420]/80 to-[#062420]/20" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center pt-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-[#E3A857] font-bold tracking-widest uppercase mb-4 text-sm"
          >
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-[#F6EFE4] mb-6 leading-[1.05]"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#E8D9C8] text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-6 pt-40 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#E3A857]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-[#E3A857] font-bold tracking-widest uppercase mb-4 text-sm"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-[#F6EFE4] mb-6 leading-[1.05]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#B9CFC9] text-lg md:text-xl font-light max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
