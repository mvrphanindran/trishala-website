export type IndustryDetail = {
  description: string;
  applications: readonly string[];
  packagingFormats: readonly string[];
  materialStructures: readonly string[];
};

export const industryDetailContent: Record<string, IndustryDetail> = {
  fmcg: {
    description:
      "Flexible packaging for fast-moving consumer goods — engineered for shelf appeal, product protection, and efficient filling across food, beverage, and daily-use categories.",
    applications: [
      "Food & Beverages",
      "Personal Care",
      "Household & Cleaning Products",
      "Ready-to-Eat Meals",
      "Condiments & Sauces",
      "Health & Nutrition",
    ],
    packagingFormats: [
      "Pillow Pouch",
      "Stand Up Pouch",
      "Three Side Seal",
      "Center Seal",
      "Laminate Roll Stock",
    ],
    materialStructures: [
      "PET + MET PET + PE",
      "BOPP + PE",
      "PET + PE",
      "PET + ALU FOIL + PE",
    ],
  },
  agriculture: {
    description:
      "Durable laminated packaging for agriculture inputs — designed for moisture protection, handling strength, and reliable performance in field and retail environments.",
    applications: [
      "Fertilizers",
      "Pesticides",
      "Insecticides",
      "Seeds",
      "Crop Medicines",
      "Agrochemical Powders",
    ],
    packagingFormats: [
      "Pillow Pouch",
      "Center Seal",
      "Three Side Seal",
      "Laminate Roll Stock",
    ],
    materialStructures: [
      "PET + MET PET + PE",
      "BOPP + PE",
      "PET + ALU FOIL + PE",
      "PET + PE",
    ],
  },
  snacks: {
    description:
      "High-barrier, visually impactful packaging for snack products — supporting freshness, crispness protection, and strong brand presentation on shelf.",
    applications: [
      "Potato Chips",
      "Banana Chips",
      "Namkeen",
      "Extruded Snacks",
      "Popcorn",
      "Corn Puffs",
      "Trail Mixes",
      "Roasted Snacks",
    ],
    packagingFormats: [
      "Pillow Pouch",
      "Center Seal",
      "Stand Up Pouch",
    ],
    materialStructures: [
      "PET + MET PET + PE",
      "BOPP + PE",
      "PET + PE",
    ],
  },
  "spices-and-seasonings": {
    description:
      "Aroma-retentive packaging for spices and seasonings — built for barrier performance, powder handling, and consistent seal integrity across retail formats.",
    applications: [
      "Turmeric",
      "Chilli Powder",
      "Coriander Powder",
      "Cumin Powder",
      "Garam Masala",
      "Pepper",
      "Mixed Seasonings",
    ],
    packagingFormats: [
      "Pillow Pouch",
      "Center Seal",
      "Stand Up Pouch",
      "Three Side Seal",
    ],
    materialStructures: [
      "PET + MET PET + PE",
      "BOPP + MET BOPP + PE",
      "PET + PE",
    ],
  },
  "tea-and-coffee": {
    description:
      "Protective laminates for tea and coffee — preserving aroma, flavour, and product integrity through moisture and oxygen barrier structures.",
    applications: [
      "Tea Leaves",
      "Tea Premixes",
      "Coffee Powder",
      "Coffee Beans",
      "Instant Coffee",
    ],
    packagingFormats: [
      "Pillow Pouch",
      "Center Seal",
      "Stand Up Pouch",
      "Laminate Roll Stock",
    ],
    materialStructures: [
      "PET + MET PET + PE",
      "PET + ALU FOIL + PE",
      "BOPP + MET BOPP + PE",
    ],
  },
  "dry-fruits-and-nuts": {
    description:
      "Premium flexible packaging for dry fruits and nuts — combining product visibility, barrier protection, and shelf-stable performance for value-added categories.",
    applications: [
      "Almonds",
      "Cashews",
      "Pistachios",
      "Raisins",
      "Mixed Nuts",
    ],
    packagingFormats: [
      "Stand Up Pouch",
      "Pillow Pouch",
      "Center Seal",
      "Zipper Pouch",
    ],
    materialStructures: [
      "PET + MET PET + PE",
      "BOPP + MET BOPP + PE",
      "PET + PE",
    ],
  },
  "personal-care": {
    description:
      "Flexible packaging for personal care applications — supporting product protection, print quality, and format versatility for hair and skin care lines.",
    applications: [
      "Hair Care",
      "Skin & Body Care",
      "Sachets & Samples",
      "Travel Packs",
    ],
    packagingFormats: [
      "Pillow Pouch",
      "Three Side Seal",
      "Stand Up Pouch",
      "Laminate Roll Stock",
    ],
    materialStructures: [
      "PET + PE",
      "PET + MET PET + PE",
      "BOPP + PE",
    ],
  },
  "household-and-cleaning": {
    description:
      "Robust packaging for household and cleaning products — engineered for chemical resistance, durability, and reliable conversion across pouch and roll formats.",
    applications: [
      "Laundry Care",
      "Dishwashing",
      "Surface Cleaning",
      "Disinfectants",
    ],
    packagingFormats: [
      "Pillow Pouch",
      "Stand Up Pouch",
      "Center Seal",
      "Laminate Roll Stock",
    ],
    materialStructures: [
      "PET + PE",
      "PET + MET PET + PE",
      "BOPP + PE",
    ],
  },
  "pet-food": {
    description:
      "High-performance packaging for pet food — delivering barrier protection, grease resistance, and retail-ready presentation for dry, wet, and treat formats.",
    applications: [
      "Dry Pet Food",
      "Wet Pet Food",
      "Pet Treats",
    ],
    packagingFormats: [
      "Stand Up Pouch",
      "Pillow Pouch",
      "Center Seal",
      "Zipper Pouch",
    ],
    materialStructures: [
      "PET + MET PET + PE",
      "PET + ALU FOIL + PE",
      "BOPP + PE",
    ],
  },
};

export function getIndustryDetail(slug: string): IndustryDetail | undefined {
  return industryDetailContent[slug];
}
