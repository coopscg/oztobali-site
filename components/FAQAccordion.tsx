import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/faqs';

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="inline-block text-[#E3A857] font-bold tracking-widest uppercase mb-4 text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F6EFE4]">Before you ask on a Facebook group</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-[#F6EFE4]">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-[#E3A857] shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-[#B9CFC9] leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
