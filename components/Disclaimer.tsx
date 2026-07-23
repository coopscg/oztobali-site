import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface DisclaimerProps {
  children: React.ReactNode;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ children }) => {
  return (
    <div className="flex gap-4 bg-[#D9714E]/10 border border-[#D9714E]/25 rounded-2xl p-5 md:p-6 my-10">
      <AlertTriangle className="w-5 h-5 text-[#D9714E] shrink-0 mt-0.5" />
      <p className="text-sm text-[#E8D9C8] leading-relaxed">{children}</p>
    </div>
  );
};

export default Disclaimer;
