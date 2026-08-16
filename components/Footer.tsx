import React from 'react';
import { Link } from 'react-router-dom';
import { Palmtree, Mail } from 'lucide-react';
import { navItems } from '../data/nav';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#041815] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#E3A857] flex items-center justify-center">
                <Palmtree className="w-5 h-5 text-[#062420]" strokeWidth={2.5} />
              </div>
              <span className="font-black tracking-tight text-lg text-[#F6EFE4]">OZTOBALI</span>
            </Link>
            <p className="text-sm text-[#8FA69E] max-w-sm leading-relaxed">
              An independent guide for Australians moving to, living in, and holidaying in Bali —
              visas, property, tax and culture, explained plainly and sourced honestly.
            </p>
            <div className="flex items-center gap-2 mt-5 text-sm text-[#8FA69E]">
              <Mail className="w-4 h-4" />
              <a href="mailto:oztobali1@gmail.com" className="hover:text-[#E3A857] transition-colors">oztobali1@gmail.com</a>
            </div>
          </div>

          {navItems.map((item) => (
            <div key={item.label}>
              <h4 className="text-sm font-bold text-[#F6EFE4] mb-4">{item.label}</h4>
              <ul className="space-y-2.5">
                {(item.children ?? (item.to ? [{ label: item.label, to: item.to }] : [])).map((child) => (
                  <li key={child.label}>
                    <Link to={child.to} className="text-sm text-[#8FA69E] hover:text-[#E3A857] transition-colors">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 text-xs text-[#5E7871] leading-relaxed space-y-2">
          <p>
            <strong className="text-[#8FA69E]">Not financial, legal, tax or migration advice.</strong> OztoBali
            provides general information only. Visa, tax, and property rules for Indonesia and Australia change
            regularly and depend on individual circumstances — always confirm current requirements with a registered
            migration agent, a licensed Indonesian notary (PPAT), a registered Australian tax agent, and official
            government sources before acting.
          </p>
          <p>
            © {new Date().getFullYear()} OztoBali. All rights reserved. ·{' '}
            <Link to="/credits" className="hover:text-[#8FA69E] transition-colors underline">Photo credits</Link> ·{' '}
            <Link to="/partner" className="hover:text-[#8FA69E] transition-colors underline">Partner with us</Link> ·{' '}
            <a href="/rss.xml" className="hover:text-[#8FA69E] transition-colors underline">RSS</a> ·{' '}
            <Link to="/privacy" className="hover:text-[#8FA69E] transition-colors underline">Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
