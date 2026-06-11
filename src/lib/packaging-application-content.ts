import {
  getPackagingApplicationBySlug,
  getPackagingApplicationItems,
  type PackagingApplicationItem,
} from "@/lib/packaging-applications-registry";

type ApplicationProfile = {
  intro: (title: string) => string;
  packagingBenefits: readonly string[];
  layerStructures: readonly string[];
  suitableFormats: readonly string[];
};

export type PackagingApplicationContent = {
  application: PackagingApplicationItem;
  heroTitle: string;
  intro: string;
  packagingBenefits: readonly string[];
  layerStructures: readonly string[];
  suitableFormats: readonly string[];
};

const snackProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging uses high-barrier snack laminates that help maintain crisp texture, control moisture pickup, and protect freshness through distribution.`,
  packagingBenefits: [
    "Retains crispness",
    "Prevents moisture ingress",
    "Protects against oxidation",
    "Preserves product freshness",
    "Extended shelf life",
  ],
  layerStructures: ["BOPP / MET BOPP / PE", "PET / MET PET / PE"],
  suitableFormats: [
    "Pillow Pouches",
    "Stand-Up Pouches",
    "Gusset Pouches",
    "Laminated Rolls",
  ],
};

const spicesProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging needs strong aroma and oxygen barrier performance so spice volatiles stay protected from filling through shelf storage.`,
  packagingBenefits: [
    "Aroma retention",
    "Moisture protection",
    "Oxygen barrier protection",
    "Product freshness preservation",
    "Extended shelf life",
  ],
  layerStructures: ["PET / MET PET / PE", "PET / ALU FOIL / PE"],
  suitableFormats: [
    "Pillow Pouches",
    "Stand-Up Pouches",
    "Sachets",
    "Laminated Rolls",
  ],
};

const teaProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging relies on high-barrier tea laminates that preserve aroma, limit moisture pickup, and keep the pack stable during storage.`,
  packagingBenefits: [
    "Aroma retention",
    "Moisture protection",
    "Freshness preservation",
    "Extended shelf life",
    "Product protection during storage",
  ],
  layerStructures: ["PET / ALU FOIL / PE", "PET / MET PET / PE"],
  suitableFormats: [
    "Pillow Pouches",
    "Stand-Up Pouches",
    "Side Gusset Pouches",
    "Laminated Rolls",
  ],
};

const coffeeProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging requires a stronger aroma and oxygen barrier so volatile flavour compounds remain protected during storage and transport.`,
  packagingBenefits: [
    "High aroma barrier",
    "Oxygen protection",
    "Moisture protection",
    "Flavor preservation",
    "Extended shelf life",
  ],
  layerStructures: ["PET / ALU FOIL / PE", "PET / BOPA / ALU FOIL / PE"],
  suitableFormats: [
    "Stand-Up Pouches",
    "Side Gusset Pouches",
    "Pillow Pouches",
    "Valve Pouches",
  ],
};

const chocolateProfile: ApplicationProfile = {
  intro: () =>
    "Chocolate packaging uses barrier laminates that help control oxygen and moisture exposure while supporting a premium retail presentation.",
  packagingBenefits: [
    "Flavor protection",
    "Fat bloom prevention",
    "Moisture protection",
    "Oxygen barrier protection",
    "Premium shelf presentation",
  ],
  layerStructures: ["PET / ALU FOIL / PE", "BOPP / MET BOPP / PE"],
  suitableFormats: [
    "Pillow Pouches",
    "Flow Wraps",
    "Stand-Up Pouches",
    "Gusset Pouches",
  ],
};

const dryFruitsProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging needs barrier protection against oxidation and moisture so natural oils, flavour, and crunch stay stable on shelf.`,
  packagingBenefits: [
    "Oxidation prevention",
    "Protection of natural oils",
    "Moisture barrier",
    "Freshness preservation",
    "Extended shelf life",
  ],
  layerStructures: ["PET / BOPA / PE", "PET / MET PET / PE"],
  suitableFormats: [
    "Stand-Up Pouches",
    "Zipper Pouches",
    "Gusset Pouches",
    "Pillow Pouches",
  ],
};

const petFoodProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging uses durable barrier laminates that protect aroma and freshness while standing up to handling and transport.`,
  packagingBenefits: [
    "Aroma retention",
    "Moisture protection",
    "Product freshness",
    "Durability during transport",
    "Extended shelf life",
  ],
  layerStructures: ["PET / BOPA / PE", "PET / MET PET / PE"],
  suitableFormats: [
    "Stand-Up Pouches",
    "Gusset Pouches",
    "Quad Seal Pouches",
    "Laminated Rolls",
  ],
};

const seedsProfile: ApplicationProfile = {
  intro: () =>
    "Seed packaging requires dependable moisture protection and durable handling so pack integrity remains stable through storage and movement.",
  packagingBenefits: [
    "Moisture protection",
    "Product integrity",
    "Durable handling",
    "Storage protection",
    "Reliable shelf life",
  ],
  layerStructures: ["PET / PE", "BOPA / PE"],
  suitableFormats: [
    "Pillow Pouches",
    "Stand-Up Pouches",
    "Sachets",
    "Laminated Rolls",
  ],
};

const fertilizersProfile: ApplicationProfile = {
  intro: () =>
    "Fertilizer packaging depends on tough pouch structures that resist moisture exposure and maintain pack durability during storage and transport.",
  packagingBenefits: [
    "Moisture resistance",
    "Strong package durability",
    "Secure storage",
    "Product protection",
    "Reliable transportation",
  ],
  layerStructures: ["PET / PE", "BOPA / PE"],
  suitableFormats: [
    "Pillow Pouches",
    "Gusset Pouches",
    "Heavy-Duty Pouches",
    "Laminated Rolls",
  ],
};

const pesticidesProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging requires chemically resistant laminate structures with dependable seal performance for safe storage, filling, and handling.`,
  packagingBenefits: [
    "Chemical resistance",
    "Leak resistance",
    "Product protection",
    "Secure handling",
    "Durable packaging performance",
  ],
  layerStructures: ["PET / BOPA / PE"],
  suitableFormats: [
    "Refill Pouches",
    "Spout Pouches",
    "Stand-Up Pouches",
    "Sachets",
  ],
};

const handwashProfile: ApplicationProfile = {
  intro: () =>
    "Handwash packaging uses liquid-compatible pouch laminates that provide leak control, dependable seals, and refill-ready handling performance.",
  packagingBenefits: [
    "Leak resistance",
    "Seal integrity",
    "Chemical compatibility",
    "Transportation durability",
    "Efficient refill packaging",
  ],
  layerStructures: ["PET / PE", "PET / BOPA / PE"],
  suitableFormats: [
    "Refill Pouches",
    "Spout Pouches",
    "Stand-Up Pouches",
    "Sachets",
  ],
};

const householdCleanersProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging relies on liquid-compatible laminates that resist leakage, maintain seal strength, and stay durable during transport.`,
  packagingBenefits: [
    "Chemical compatibility",
    "Leak resistance",
    "Strong sealing performance",
    "Product protection",
    "Durable transportation",
  ],
  layerStructures: ["PET / PE", "PET / BOPA / PE"],
  suitableFormats: [
    "Refill Pouches",
    "Spout Pouches",
    "Stand-Up Pouches",
    "Sachets",
  ],
};

const breakfastCerealsProfile: ApplicationProfile = {
  intro: () =>
    "Breakfast cereal packaging uses moisture- and oxygen-barrier laminates that help keep the product crisp and shelf-stable.",
  packagingBenefits: [
    "Retains crispness",
    "Prevents moisture ingress",
    "Protects against oxidation",
    "Preserves product freshness",
    "Extended shelf life",
  ],
  layerStructures: ["BOPP / MET BOPP / PE", "PET / MET PET / PE"],
  suitableFormats: [
    "Pillow Pouches",
    "Gusset Pouches",
    "Stand-Up Pouches",
    "Laminated Rolls",
  ],
};

const biscuitsProfile: ApplicationProfile = {
  intro: () =>
    "Biscuits and confectionery packaging uses barrier laminates that help control moisture uptake while preserving freshness and presentation.",
  packagingBenefits: [
    "Retains crispness",
    "Moisture protection",
    "Protects against oxidation",
    "Freshness preservation",
    "Extended shelf life",
  ],
  layerStructures: ["BOPP / MET BOPP / PE", "PET / MET PET / PE"],
  suitableFormats: [
    "Flow Wraps",
    "Pillow Pouches",
    "Stand-Up Pouches",
    "Laminated Rolls",
  ],
};

const pantryStaplesProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging uses dependable dry-food laminates that protect against moisture pickup and support clean handling across storage and retail.`,
  packagingBenefits: [
    "Moisture protection",
    "Product integrity",
    "Storage protection",
    "Durable handling",
    "Reliable shelf life",
  ],
  layerStructures: ["PET / PE", "BOPP / PE"],
  suitableFormats: [
    "Pillow Pouches",
    "Stand-Up Pouches",
    "Gusset Pouches",
    "Laminated Rolls",
  ],
};

const readyMixProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging uses barrier laminates that preserve flavour systems, manage moisture exposure, and support consistent shelf life.`,
  packagingBenefits: [
    "Flavor protection",
    "Moisture protection",
    "Oxygen barrier protection",
    "Freshness preservation",
    "Extended shelf life",
  ],
  layerStructures: ["PET / MET PET / PE", "PET / ALU FOIL / PE"],
  suitableFormats: [
    "Pillow Pouches",
    "Stand-Up Pouches",
    "Sachets",
    "Laminated Rolls",
  ],
};

const condimentsProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging uses liquid and semi-liquid pouch structures that support seal security, leak control, and hygienic dispensing.`,
  packagingBenefits: [
    "Leak resistance",
    "Seal integrity",
    "Product freshness",
    "Hygienic dispensing",
    "Durable transportation",
  ],
  layerStructures: ["PET / PE", "PET / MET PET / PE"],
  suitableFormats: [
    "Sachets",
    "Spout Pouches",
    "Stand-Up Pouches",
    "Laminated Rolls",
  ],
};

const cookingOilsProfile: ApplicationProfile = {
  intro: () =>
    "Cooking oil packaging requires liquid-compatible laminates that provide seal security, leak resistance, and barrier protection during storage and transport.",
  packagingBenefits: [
    "Leak resistance",
    "Oxygen barrier protection",
    "Seal integrity",
    "Product protection",
    "Transportation durability",
  ],
  layerStructures: ["PET / ALU FOIL / PE", "PET / BOPA / PE"],
  suitableFormats: [
    "Spout Pouches",
    "Refill Pouches",
    "Pillow Pouches",
    "Sachets",
  ],
};

const frozenProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging uses freezer-compatible laminate structures that maintain seal strength and moisture protection in cold-chain conditions.`,
  packagingBenefits: [
    "Low-temperature durability",
    "Moisture protection",
    "Seal integrity",
    "Product freshness",
    "Transportation durability",
  ],
  layerStructures: ["PET / PE", "PET / BOPA / PE"],
  suitableFormats: [
    "Pillow Pouches",
    "Stand-Up Pouches",
    "Gusset Pouches",
    "Laminated Rolls",
  ],
};

const fallbackProfile: ApplicationProfile = {
  intro: (title) =>
    `${title} packaging uses application-appropriate flexible laminates selected for barrier performance, pack integrity, and shelf stability.`,
  packagingBenefits: [
    "Product protection",
    "Moisture resistance",
    "Seal reliability",
    "Storage stability",
    "Transport durability",
  ],
  layerStructures: ["PET / PE", "PET / MET PET / PE"],
  suitableFormats: [
    "Pillow Pouches",
    "Stand-Up Pouches",
    "Gusset Pouches",
    "Laminated Rolls",
  ],
};

const snacks = new Set([
  "potato-chips",
  "banana-chips",
  "namkeen",
  "extruded-snacks",
  "corn-puffs",
  "popcorn",
  "roasted-snacks",
]);
const spices = new Set([
  "turmeric-powder",
  "chilli-powder",
  "coriander-powder",
  "cumin-powder",
  "masala-powder",
  "pepper",
  "mixed-seasonings",
]);
const tea = new Set(["tea-powder", "tea", "tea-leaves", "tea-premixes"]);
const coffee = new Set([
  "coffee-powder",
  "coffee",
  "coffee-beans",
  "instant-coffee",
]);
const chocolates = new Set(["chocolates"]);
const dryFruits = new Set([
  "almonds",
  "cashew",
  "pistachios",
  "processed-nuts",
  "raisins",
  "mixed-nuts",
]);
const petFood = new Set(["pet-food", "dry-pet-food", "wet-pet-food", "pet-treats"]);
const seeds = new Set(["seeds"]);
const fertilizers = new Set(["fertilizers"]);
const pesticides = new Set([
  "pesticides",
  "insecticides",
  "crop-medicines",
  "pesticides-and-insecticides",
]);
const handwash = new Set(["handwash"]);
const householdCleaners = new Set([
  "dish-wash-liquid",
  "surface-cleaner",
  "floor-cleaner",
  "detergents",
  "liquid-detergent",
]);
const breakfastCereals = new Set(["breakfast-cereals"]);
const biscuits = new Set(["biscuits-and-confectioneries"]);
const pantryStaples = new Set([
  "grains",
  "millets",
  "pulses",
  "flours",
  "sugars",
  "rice-pouches",
]);
const readyMix = new Set([
  "instant-foods",
  "instant-noodles",
  "ready-mix-foods",
  "ready-mix-gravy",
  "batters",
]);
const condiments = new Set(["ketchup", "mayonnaise"]);
const cookingOils = new Set(["cooking-oils"]);
const frozenFoods = new Set(["frozen-corn", "frozen-peas"]);

function getApplicationProfile(slug: string): ApplicationProfile {
  if (snacks.has(slug)) return snackProfile;
  if (spices.has(slug)) return spicesProfile;
  if (tea.has(slug)) return teaProfile;
  if (coffee.has(slug)) return coffeeProfile;
  if (chocolates.has(slug)) return chocolateProfile;
  if (dryFruits.has(slug)) return dryFruitsProfile;
  if (petFood.has(slug)) return petFoodProfile;
  if (seeds.has(slug)) return seedsProfile;
  if (fertilizers.has(slug)) return fertilizersProfile;
  if (pesticides.has(slug)) return pesticidesProfile;
  if (handwash.has(slug)) return handwashProfile;
  if (householdCleaners.has(slug)) return householdCleanersProfile;
  if (breakfastCereals.has(slug)) return breakfastCerealsProfile;
  if (biscuits.has(slug)) return biscuitsProfile;
  if (pantryStaples.has(slug)) return pantryStaplesProfile;
  if (readyMix.has(slug)) return readyMixProfile;
  if (condiments.has(slug)) return condimentsProfile;
  if (cookingOils.has(slug)) return cookingOilsProfile;
  if (frozenFoods.has(slug)) return frozenProfile;
  return fallbackProfile;
}

export function getPackagingApplicationContent(
  slug: string,
): PackagingApplicationContent | undefined {
  const application = getPackagingApplicationBySlug(slug);
  if (!application) return undefined;

  const profile = getApplicationProfile(application.slug);

  return {
    application,
    heroTitle: `${application.title} Packaging`,
    intro: profile.intro(application.title),
    packagingBenefits: profile.packagingBenefits,
    layerStructures: profile.layerStructures,
    suitableFormats: profile.suitableFormats,
  };
}

export function getPackagingApplicationSlugs(): readonly string[] {
  return getPackagingApplicationItems().map((item) => item.slug);
}
