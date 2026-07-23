import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaTo?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  ctaLabel = 'Talk to us about your move',
  ctaTo = '/contact',
}) => {
  return (
    <section className="px-6 py-20">
      <div className="container mx-auto max-w-4xl bg-gradient-to-br from-[#0B4F4A] to-[#062420] border border-[#E3A857]/15 rounded-[32px] p-10 md:p-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F6EFE4] mb-4">{title}</h2>
        <p className="text-[#B9CFC9] text-lg font-light max-w-2xl mx-auto mb-8">{subtitle}</p>
        <Link
          to={ctaTo}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#E3A857] text-[#062420] font-bold rounded-full hover:bg-[#F6EFE4] transition-all transform active:scale-95"
        >
          {ctaLabel} <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
