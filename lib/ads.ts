// Google AdSense settings.
//
// Ads stay completely switched off (nothing loads, nothing shows) until
// ADSENSE_CLIENT is filled in. Once AdSense approves the site:
//   1. Paste the publisher ID below, e.g. 'ca-pub-1234567890123456'
//   2. Paste the ad unit slot IDs from the AdSense dashboard into AD_SLOTS
//   3. Push. ads.txt is generated automatically at build time.
export const ADSENSE_CLIENT = '';

export const AD_SLOTS = {
  inArticle: '',
  endOfArticle: '',
} as const;

export type AdSlotName = keyof typeof AD_SLOTS;

export const adsEnabled = (): boolean => ADSENSE_CLIENT.startsWith('ca-pub-');
