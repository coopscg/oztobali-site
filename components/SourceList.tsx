import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface Source {
  label: string;
  url: string;
}

interface SourceListProps {
  sources: Source[];
}

const SourceList: React.FC<SourceListProps> = ({ sources }) => {
  return (
    <div className="border-t border-white/10 pt-8 mt-16">
      <h3 className="text-sm font-bold uppercase tracking-widest text-[#8FA69E] mb-4">Sources & Further Reading</h3>
      <ul className="space-y-2">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 text-sm text-[#B9CFC9] hover:text-[#E3A857] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              {source.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourceList;
