/**
 * Homepage image paths — replace files under public/images/hero/ (and products when ready).
 * Filenames are the single source of truth for easy swaps.
 */
export const HOME_IMAGES = {
  /** Primary hero visual — drop file at public/images/hero/hero-visual.png */
  hero: "/images/hero/hero-visual.png",

  environmental: {
    primary: "/images/hero/env-primary.png",
    secondary: "/images/hero/env-secondary.png",
    detail: "/images/hero/env-detail.png",
  },

  products: {
    standUp: "/images/products/standup-pouch.png",
    spout: "/images/products/spout-pouch.png",
    laminate: "/images/products/laminate-roll.png",
  },
} as const;
