export type IndustryDetail = {
  overview: string;
  packagingRequirements: readonly string[];
  recommendedPackagingFormats: readonly string[];
  typicalMaterialStructures: readonly string[];
  benefits: readonly string[];
  applications: readonly string[];
  industrySpecificChallenges: readonly string[];
  whyTrishala: string;
  contactCta: string;
};

export const industryDetailContent: Record<string, IndustryDetail> = {
  fmcg: {
    overview:
      "Fast-moving consumer goods packaging demands high print quality, production consistency, shelf visibility, and supply chain durability. Trishala develops flexible packaging structures engineered for performance across detergents, powders, personal care products, and household consumables.",
    packagingRequirements: [
      "High print consistency for brand presentation",
      "Reliable seal integrity at high machine speeds",
      "Balanced oxygen and moisture barrier",
      "Good puncture resistance for transport",
    ],
    recommendedPackagingFormats: [
      "Printed Rolls",
      "Center Seal Pouches",
      "Stand Up Pouches",
      "Laminated Structures",
    ],
    typicalMaterialStructures: ["BOPP/MET PET/PE", "PET/PE", "PET/ALU/PE"],
    benefits: [
      "Improved shelf appeal",
      "Stable machine performance",
      "Extended product freshness",
      "Operational packaging consistency",
    ],
    applications: ["Food & Beverages", "Daily essentials", "Home care", "Personal hygiene", "Handwash", "Chocolates"],
    industrySpecificChallenges: [
      "Frequent SKU changes with tight lead times",
      "High-speed packing line compatibility",
      "Durability across warehousing and transit",
    ],
    whyTrishala:
      "Trishala combines print discipline, process control, and scalable production to deliver dependable FMCG packaging outcomes.",
    contactCta: "Discuss FMCG packaging requirements",
  },
  agriculture: {
    overview:
      "Durable packaging for agriculture products that supports long storage cycles and rough handling across logistics and retail channels.",
    packagingRequirements: [
      "Moisture resistance in variable environments",
      "Strong seals under heavy product loads",
      "High puncture resistance",
      "Legible branding and handling instructions",
    ],
    recommendedPackagingFormats: [
      "Heavy-duty Bags",
      "Center Seal Pouches",
      "Gusset Pouches",
      "Printed Rolls",
    ],
    typicalMaterialStructures: ["PET/PE", "PET/NYLON/PE", "BOPP/PE"],
    benefits: [
      "Reduced leakage risk",
      "Better product stability in storage",
      "Reliable transport performance",
      "Improved pack integrity",
    ],
    applications: ["Fertilizers", "Pesticides", "Seeds", "Crop nutrition inputs"],
    industrySpecificChallenges: [
      "Exposure to moisture and rough logistics",
      "Need for robust seal and puncture resistance",
      "Large-volume handling requirements",
    ],
    whyTrishala:
      "Trishala provides heavy-duty flexible packaging structures optimized for agricultural storage, movement, and field-level distribution.",
    contactCta: "Connect for agriculture packaging solutions",
  },
  snacks: {
    overview:
      "Packaging solutions designed to preserve freshness, flavour, crunch, and shelf life while maintaining strong visual appeal.",
    packagingRequirements: [
      "Strong oxygen and moisture barrier",
      "Excellent seal reliability",
      "Grease resistance",
      "Fast machine runnability",
    ],
    recommendedPackagingFormats: ["Pillow Pouches", "Printed Rolls", "Stand Up Pouches"],
    typicalMaterialStructures: ["BOPP/MET PET/PE", "PET/MET PET/PE"],
    benefits: [
      "Longer freshness retention",
      "Crisp texture protection",
      "High-speed conversion support",
      "Eye-catching shelf presentation",
    ],
    applications: ["Potato chips", "Namkeen", "Extruded snacks", "Roasted snacks"],
    industrySpecificChallenges: [
      "Crispness loss due to moisture ingress",
      "Grease resistance requirements",
      "High-speed line stability for pillow packs",
    ],
    whyTrishala:
      "Trishala delivers snack-focused barrier laminates and consistent conversion quality for strong shelf performance.",
    contactCta: "Request snack packaging consultation",
  },
  "spices-and-seasonings": {
    overview:
      "High-barrier packaging protecting aroma, flavour retention, and moisture resistance.",
    packagingRequirements: [
      "High aroma and moisture barrier",
      "Strong side-seal performance",
      "Powder leak prevention",
      "Clear print for SKU differentiation",
    ],
    recommendedPackagingFormats: [
      "Center Seal Pouches",
      "Stand Up Pouches",
      "Printed Rolls",
    ],
    typicalMaterialStructures: ["PET/MET PET/PE", "PET/ALU/PE"],
    benefits: [
      "Aroma preservation",
      "Improved shelf life",
      "Consistent filling behavior",
      "Reduced leakage and contamination",
    ],
    applications: ["Turmeric", "Chilli powder", "Coriander", "Blended masalas"],
    industrySpecificChallenges: [
      "Aroma leakage in low-barrier packs",
      "Powder migration affecting seals",
      "Humidity-driven caking risk",
    ],
    whyTrishala:
      "Trishala focuses on aroma-safe laminate structures and process consistency for spices and seasoning categories.",
    contactCta: "Enquire for spices packaging structures",
  },
  "tea-and-coffee": {
    overview:
      "Premium packaging structures supporting aroma retention, oxygen barrier performance, and product freshness.",
    packagingRequirements: [
      "High oxygen barrier for flavour retention",
      "Strong moisture barrier performance",
      "Reliable seals for fine powders and granules",
      "Premium print and finish quality",
    ],
    recommendedPackagingFormats: [
      "Laminated Pouches",
      "Barrier Rolls",
      "Premium Stand Up Pouches",
    ],
    typicalMaterialStructures: ["PET/ALU/PE", "PET/MET PET/PE"],
    benefits: [
      "Aroma lock performance",
      "Longer shelf stability",
      "Premium shelf presentation",
      "Consistent machine handling",
    ],
    applications: ["Tea leaves", "Premixes", "Coffee powder", "Instant coffee"],
    industrySpecificChallenges: [
      "Aroma degradation due to oxygen ingress",
      "Moisture sensitivity across supply chain",
      "Need for premium shelf presentation",
    ],
    whyTrishala:
      "Trishala combines barrier engineering and print quality to support premium tea and coffee packaging outcomes.",
    contactCta: "Speak with us for tea and coffee packaging",
  },
  "dry-fruits-and-nuts": {
    overview:
      "High-barrier packaging engineered for premium presentation and extended shelf stability.",
    packagingRequirements: [
      "Oxygen and moisture barrier",
      "Reclosability for repeat use",
      "Puncture resistance for hard products",
      "High-quality print and finish",
    ],
    recommendedPackagingFormats: [
      "Zipper Pouches",
      "Window Pouches",
      "Stand Up Pouches",
    ],
    typicalMaterialStructures: ["PET/MET PET/PE", "PET/ALU/PE"],
    benefits: [
      "Enhanced freshness retention",
      "Premium on-shelf look",
      "Consumer convenience",
      "Improved product protection",
    ],
    applications: ["Almonds", "Cashews", "Raisins", "Mixed nut blends"],
    industrySpecificChallenges: [
      "Oxidation-sensitive premium products",
      "Need for reclosable convenience",
      "Visual quality expectations for retail",
    ],
    whyTrishala:
      "Trishala delivers premium-ready barrier pouches for dry fruit categories with a focus on freshness and presentation.",
    contactCta: "Get dry fruits packaging recommendations",
  },
  "household-and-cleaning": {
    overview:
      "Packaging solutions for detergents, cleaning products, powders, and refill formats.",
    packagingRequirements: [
      "Resistance to active chemicals",
      "High seal and leak performance",
      "Durability in storage and transit",
      "Format flexibility for refill packs",
    ],
    recommendedPackagingFormats: [
      "Stand Up Pouch",
      "Handled Pouch",
      "Center Seal",
      "Printed Rolls",
    ],
    typicalMaterialStructures: ["PET/PE", "PET/NYLON/PE"],
    benefits: [
      "Leak reduction",
      "Better handling durability",
      "Reliable pack integrity",
      "Support for refill packaging models",
    ],
    applications: ["Laundry care", "Dishwashing", "Surface cleaners", "Disinfectant products"],
    industrySpecificChallenges: [
      "Chemical compatibility of laminate structures",
      "Leak-proof seals in transport",
      "High handling durability for refill products",
    ],
    whyTrishala:
      "Trishala builds durable laminate and pouch solutions for high-usage household and cleaning categories.",
    contactCta: "Plan household packaging with Trishala",
  },
  "pet-food": {
    overview:
      "Durable barrier packaging preserving nutrition, aroma, and freshness throughout distribution.",
    packagingRequirements: [
      "Strong barrier against odour migration",
      "Grease and puncture resistance",
      "Large-format sealing consistency",
      "Shelf-ready print quality",
    ],
    recommendedPackagingFormats: [
      "Stand Up Pouch",
      "Gusset Pouch",
      "Zipper Pouch",
      "Handled Pouch",
    ],
    typicalMaterialStructures: ["PET/MET PET/PE", "PET/ALU/PE", "PET/NYLON/PE"],
    benefits: [
      "Aroma and freshness control",
      "Durability for larger packs",
      "Convenient consumer use",
      "Improved visual branding impact",
    ],
    applications: ["Dry food", "Wet food", "Pet treats", "Nutritional mixes"],
    industrySpecificChallenges: [
      "Odour migration and aroma retention",
      "Grease and puncture resistance needs",
      "Durable large pack handling",
    ],
    whyTrishala:
      "Trishala offers robust barrier structures for pet food formats with reliable sealing and shelf-ready output.",
    contactCta: "Consult us for pet food packaging",
  },
};

export function getIndustryDetail(slug: string): IndustryDetail | undefined {
  return industryDetailContent[slug];
}
