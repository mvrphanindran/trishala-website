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

export const qualityPillars = [
  {
    title: "Quality Assurance",
    detail: "Documented standards across every production batch.",
  },
  {
    title: "Quality Control",
    detail: "In-line monitoring for consistency and compliance.",
  },
  {
    title: "Inspection",
    detail: "Multi-stage visual and dimensional verification.",
  },
  {
    title: "Testing",
    detail: "Barrier, seal, and mechanical performance validation.",
  },
] as const;
