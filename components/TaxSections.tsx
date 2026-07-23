import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { TaxSection } from '../data/taxAustralia';

interface TaxSectionsProps {
  sections: TaxSection[];
}

const TaxSections: React.FC<TaxSectionsProps> = ({ sections }) => {
  return (
    <div className="space-y-6">
      {sections.map((section, i) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: Math.min(i * 0.04, 0.3) }}
          className="bg-white/[0.03] border border-white/5 rounded-3xl p-7 md:p-8"
        >
          <h3 className="text-xl font-bold text-[#F6EFE4] mb-3">{section.title}</h3>
          <p className="text-[#B9CFC9] text-sm leading-relaxed mb-4">{section.body}</p>
          {section.list && (
            <ul className="space-y-2 mb-2">
              {section.list.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#B9CFC9]">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#4FAF9E' }} />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {section.verify && (
            <div className="flex items-start gap-2 text-xs text-[#D9714E] bg-[#D9714E]/10 rounded-xl p-3 mt-3">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              {section.verify}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default TaxSections;
