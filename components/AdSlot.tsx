import React, { useEffect, useRef } from 'react';
import { ADSENSE_CLIENT, AD_SLOTS, AdSlotName, adsEnabled } from '../lib/ads';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const SCRIPT_ID = 'adsense-script';

function ensureScript() {
  if (typeof document === 'undefined' || document.getElementById(SCRIPT_ID)) return;
  const s = document.createElement('script');
  s.id = SCRIPT_ID;
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  document.head.appendChild(s);
}

interface AdSlotProps {
  slot: AdSlotName;
}

// Renders nothing until AdSense is configured in lib/ads.ts.
const AdSlot: React.FC<AdSlotProps> = ({ slot }) => {
  const pushed = useRef(false);
  const slotId = AD_SLOTS[slot];
  const active = adsEnabled() && slotId !== '';

  useEffect(() => {
    if (!active || pushed.current) return;
    ensureScript();
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // Ad blockers or a slow script load: fail silently, never break the page.
    }
  }, [active]);

  if (!active) return null;

  return (
    <div className="my-12" aria-label="Advertisement">
      <div className="text-[10px] uppercase tracking-widest text-[#8FA69E]/60 mb-2 text-center">Advertisement</div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight: 250 }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSlot;
