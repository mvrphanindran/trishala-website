/** Industry slug → packaging visual (public/images/industries/) */
export const industryCardImages = {
  fmcg: "/images/industries/fmcg-packaging.png",
  agriculture: "/images/industries/agriculture-packaging.png",
  "pet-food": "/images/industries/pet-food-packaging.png",
  snacks: "/images/industries/snack-packaging.png",
  "spices-and-seasonings": "/images/industries/spices-packaging.png",
  "household-and-cleaning": "/images/industries/household-cleaning.png",
  "dry-fruits-and-nuts": "/images/industries/dryfruits.png",
  "tea-and-coffee": "/images/industries/coffee.png",
} as const;

export type IndustryImageSlug = keyof typeof industryCardImages;

export function getIndustryImage(slug: string): string | undefined {
  return industryCardImages[slug as IndustryImageSlug];
}

/** Display order for the Industries catalogue page */
export const industriesCatalogue = [
  { slug: "fmcg", label: "FMCG" },
  { slug: "agriculture", label: "Agriculture Products" },
  { slug: "snacks", label: "Snacks" },
  { slug: "spices-and-seasonings", label: "Spices & Seasonings" },
  { slug: "tea-and-coffee", label: "Tea & Coffee" },
  { slug: "dry-fruits-and-nuts", label: "Dry Fruits & Nuts" },
  {
    slug: "household-and-cleaning",
    label: "Household & Cleaning Products",
  },
  { slug: "pet-food", label: "Pet Food" },
] as const;
