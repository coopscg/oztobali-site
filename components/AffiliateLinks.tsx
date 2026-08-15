import React from 'react';
import { ExternalLink } from 'lucide-react';
import { affiliateLinksByCategory, AffiliateLink } from '../data/affiliateLinks';

interface AffiliateLinksProps {
  categories: AffiliateLink['category'][];
  title?: string;
}

const AffiliateLinks: React.FC<AffiliateLinksProps> = ({ categories, title = 'Useful for this' }) => {
  const links = categories.flatMap((c) => affiliateLinksByCategory(c));
  if (links.length === 0) return null;

  return (
    <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 my-10">
      <h3 className="text-xs font-bold uppercase tracking-widest text-[#8FA69E] mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-2 bg-black/20 rounded-xl p-3.5 hover:bg-black/30 transition-colors"
          >
            <div>
              <div className="text-sm font-semibold text-[#F6EFE4]">{link.name}</div>
              <div className="text-xs text-[#8FA69E] mt-0.5">{link.description}</div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#8FA69E] group-hover:text-[#E3A857] transition-colors shrink-0 mt-0.5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AffiliateLinks;
