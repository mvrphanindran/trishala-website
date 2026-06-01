export const coreProducts = [
  {
    title: "Stand Up Pouch",
    plural: "Stand Up Pouches",
    image: "/images/products/standup-pouch.png",
  },
  {
    title: "Spout Pouch",
    plural: "Spout Pouches",
    image: "/images/products/spout-pouch.png",
  },
  {
    title: "Printed Laminate Roll",
    plural: "Printed Laminate Rolls",
    image: "/images/products/laminate-roll.png",
  },
  {
    title: "Center Seal Pouch",
    plural: "Center Seal Pouches",
    image: "/images/products/center-seal.png",
  },
] as const;

export const laminateStructures = [
  { code: "PET / PE", layers: ["PET", "PE"] },
  { code: "BOPP / PE", layers: ["BOPP", "PE"] },
  { code: "PET / MET PET / PE", layers: ["PET", "MET PET", "PE"] },
  { code: "PET / ALU FOIL / PE", layers: ["PET", "ALU FOIL", "PE"] },
] as const;

export const industries = [
  "FMCG",
  "Snacks",
  "Spices",
  "Tea & Coffee",
  "Agriculture",
  "Pet Food",
] as const;

export { qualitySections as qualityPillars } from "@/lib/site-images";
