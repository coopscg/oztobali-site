import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp } from '../lib/motion';
import MagneticButton from './MagneticButton';

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaTo?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  ctaLabel = 'Ask us a question',
  ctaTo = '/contact',
}) => {
  return (
    <section className="px-6 py-24">
      <motion.div
        {...fadeUp}
        className="container mx-auto max-w-4xl relative overflow-hidden bg-gradient-to-br from-teal to-ink border border-gold/15 rounded-[32px] p-10 md:p-16 text-center"
      >
        <div className="absolute top-[-30%] right-[-10%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <h2 className="relative font-display text-3xl md:text-5xl font-bold text-cream mb-4">{title}</h2>
        <p className="relative text-sage text-lg font-light max-w-2xl mx-auto mb-9">{subtitle}</p>
        <MagneticButton className="relative">
          <Link
            to={ctaTo}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-ink font-bold rounded-full hover:bg-cream transition-colors duration-300"
          >
            {ctaLabel} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </MagneticButton>
      </motion.div>
    </section>
  );
};

export default CTASection;
