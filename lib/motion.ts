export const easePremium = [0.16, 1, 0.3, 1] as const;
export const easeSoft = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: easePremium },
};

export function fadeUpDelay(i: number, step = 0.08, cap = 0.4) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, delay: Math.min(i * step, cap), ease: easePremium },
  };
}
