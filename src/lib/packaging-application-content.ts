import {
  getPackagingApplicationBySlug,
  getPackagingApplicationItems,
  type PackagingApplicationItem,
} from "@/lib/packaging-applications-registry";

type ThemeProfile = {
  intro: (title: string) => string;
  relatedProducts: readonly string[];
  packagingRequirements: readonly string[];
  recommendedMaterials: readonly string[];
  layerStructures: readonly string[];
  suitableFormats?: readonly string[];
  whyIntro: (title: string) => string;
  whyPoints: readonly string[];
};

export type PackagingApplicationContent = {
  application: PackagingApplicationItem;
  heroTitle: string;
  intro: string;
  relatedProducts: readonly string[];
  packagingRequirements: readonly string[];
  recommendedMaterials: readonly string[];
  layerStructures: readonly string[];
  suitableFormats: readonly string[];
  whyTitle: string;
  whyIntro: string;
  whyPoints: readonly string[];
};

const profiles: Record<string, ThemeProfile> = {
  snack: {
    intro: (title) =>
      `High-barrier flexible packaging solutions designed to preserve freshness, crunch, aroma retention and shelf appeal for ${title.toLowerCase()} applications.`,
    relatedProducts: ["Potato Chips", "Mixtures"],
    packagingRequirements: [
      "Aroma retention",
      "Grease resistance",
      "Nitrogen flush compatibility",
      "High-speed packing compatibility",
    ],
    recommendedMaterials: [
      "BOPP",
      "MET BOPP",
      "PET",
      "CPP",
      "PE",
      "Nylon",
      "Aluminium Foil",
    ],
    layerStructures: [
      "BOPP / MET BOPP / PE",
      "PET / MET PET / PE",
      "PET / ALU / PE",
    ],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the laminate has to lock in crunch, resist oil migration, and stay reliable on fast-moving packing lines.`,
    whyPoints: [
      "Supports crisp texture retention through strong moisture and oxygen control.",
      "Runs cleanly on high-speed form-fill-seal equipment with dependable seal integrity.",
      "Delivers strong retail graphics that keep the brand visible on crowded shelves.",
    ],
  },
  tea: {
    intro: (title) =>
      `High-barrier flexible packaging solutions that preserve fragrance, moisture control, and long shelf life for ${title.toLowerCase()} formats.`,
    relatedProducts: ["Tea Powder", "Premium Tea", "Green Tea", "Instant Tea"],
    packagingRequirements: [
      "Fragrance preservation",
      "Moisture protection",
      "Oxygen protection",
      "Shelf-life enhancement",
    ],
    recommendedMaterials: [
      "PET",
      "BOPP",
      "MET PET",
      "PE",
      "CPP",
      "Nylon",
      "Aluminium Foil",
    ],
    layerStructures: [
      "PET / MET PET / PE",
      "BOPP / MET BOPP / PE",
      "PET / ALU / PE",
    ],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the structure has to guard aroma and deliver a calm, premium shelf presence from filling to final pour.`,
    whyPoints: [
      "Protects fragrance and volatile notes with tight moisture and oxygen barriers.",
      "Maintains consistent seals for long shelf life and stable retail distribution.",
      "Keeps the pack visually premium while supporting high-volume conversion lines.",
    ],
  },
  coffee: {
    intro: (title) =>
      `Flexible laminates built to protect aroma, manage moisture, and support premium print presentation for ${title.toLowerCase()} products.`,
    relatedProducts: ["Coffee Powder", "Coffee Beans", "Instant Coffee"],
    packagingRequirements: [
      "Aroma barrier",
      "Degassing compatibility",
      "Premium print quality",
      "Moisture resistance",
    ],
    recommendedMaterials: [
      "PET",
      "MET PET",
      "BOPP",
      "PE",
      "CPP",
      "Nylon",
      "Aluminium Foil",
    ],
    layerStructures: [
      "PET / MET PET / PE",
      "PET / ALU / PE",
      "BOPP / MET BOPP / PE",
    ],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the laminate needs to protect aroma while giving the brand a premium, unmistakable shelf signature.`,
    whyPoints: [
      "Creates a strong aroma barrier so the coffee profile stays intact until opening.",
      "Supports premium artwork and a polished finish suited to specialty coffee lines.",
      "Balances sealing consistency with the handling demands of retail and export packs.",
    ],
  },
  petFood: {
    intro: (title) =>
      `Durable multilayer structures engineered for heavy fills, puncture resistance, and dependable shelf durability in ${title.toLowerCase()} packaging.`,
    relatedProducts: ["Dry Pet Food", "Treats", "Nutritional Mixes"],
    packagingRequirements: [
      "Heavy-duty laminate",
      "Puncture resistance",
      "Freshness lock",
      "Shelf durability",
    ],
    recommendedMaterials: [
      "PET",
      "MET PET",
      "Nylon",
      "PE",
      "CPP",
      "Aluminium Foil",
    ],
    layerStructures: [
      "PET / Nylon / PE",
      "PET / MET PET / PE",
      "PET / ALU / PE",
    ],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the pack has to feel strong in hand, stay durable in transit, and keep the contents protected from the factory to the pantry.`,
    whyPoints: [
      "Handles heavier fills without losing puncture resistance or panel stability.",
      "Keeps freshness locked in for storage, transport, and repeated handling.",
      "Supports sharp branding that still reads clearly on large-format packs.",
    ],
  },
  frozen: {
    intro: (title) =>
      `Low-temperature flexible packaging engineered for seal integrity, moisture resistance, and cold-chain performance in ${title.toLowerCase()} formats.`,
    relatedProducts: [
      "Frozen Vegetables",
      "Frozen Corn",
      "Frozen Peas",
      "Ready-to-Cook Packs",
    ],
    packagingRequirements: [
      "Low-temperature performance",
      "Seal integrity",
      "Moisture resistance",
      "Freeze-thaw stability",
    ],
    recommendedMaterials: [
      "PET",
      "PE",
      "CPP",
      "Nylon",
      "MET PET",
      "Aluminium Foil",
    ],
    layerStructures: ["PET / PE", "PET / Nylon / PE", "PET / ALU / PE"],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the pack must stay dependable in cold-chain conditions while keeping seals and print quality intact.`,
    whyPoints: [
      "Maintains seal integrity through low-temperature storage and distribution cycles.",
      "Resists moisture ingress so frozen product quality stays protected.",
      "Balances strength and clarity for a retail-ready frozen food presentation.",
    ],
  },
  rice: {
    intro: (title) =>
      `Load-bearing laminates built for ${title.toLowerCase()} packs, consistent stacking, and durable print performance across storage and transport.`,
    relatedProducts: ["Basmati Rice", "Parboiled Rice", "Premium Rice"],
    packagingRequirements: [
      "Load-bearing strength",
      "High-volume production",
      "Print durability",
      "Stack stability",
    ],
    recommendedMaterials: [
      "BOPP",
      "PET",
      "PE",
      "CPP",
      "MET PET",
      "Aluminium Foil",
    ],
    layerStructures: ["BOPP / PE", "PET / MET PET / PE", "PET / ALU / PE"],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the structure needs to travel well, stack well, and keep the brand visible across long distribution cycles.`,
    whyPoints: [
      "Supports bulk pack weights with dependable handling strength.",
      "Preserves print clarity through warehousing, stacking, and retail movement.",
      "Helps keep the pack tidy and premium in both domestic and export channels.",
    ],
  },
  pulses: {
    intro: (title) =>
      `Flexible packaging tailored for ${title.toLowerCase()} where product visibility, strength, and shelf presentation matter.`,
    relatedProducts: ["Toor Dal", "Moong Dal", "Chana Dal"],
    packagingRequirements: [
      "Product visibility",
      "Strength",
      "Shelf presentation",
      "Dust control",
    ],
    recommendedMaterials: ["BOPP", "PET", "PE", "CPP", "MET PET", "Nylon"],
    layerStructures: ["BOPP / PE", "PET / MET PET / PE", "PET / ALU / PE"],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the laminate should feel clean, sturdy, and retail-ready while protecting the contents during handling.`,
    whyPoints: [
      "Offers a clear shelf look that helps customers see the product with confidence.",
      "Builds in strength for handling, stacking, and retail distribution.",
      "Maintains print durability without compromising on pack neatness.",
    ],
  },
  dryNuts: {
    intro: (title) =>
      `Premium flexible packaging that balances freshness retention, rich presentation, and reseal convenience for ${title.toLowerCase()} formats.`,
    relatedProducts: ["Almonds", "Cashews", "Pistachios", "Mixed Nuts"],
    packagingRequirements: [
      "Freshness retention",
      "Premium presentation",
      "Light barrier",
      "Reseal convenience",
    ],
    recommendedMaterials: [
      "PET",
      "MET PET",
      "BOPP",
      "PE",
      "Aluminium Foil",
      "CPP",
    ],
    layerStructures: [
      "PET / MET PET / PE",
      "PET / ALU / PE",
      "BOPP / MET BOPP / PE",
    ],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the pack should look premium on shelf while keeping the contents protected from light and moisture.`,
    whyPoints: [
      "Maintains crisp, fresh quality through effective barrier performance.",
      "Supports premium branding that elevates the pack above commodity presentation.",
      "Allows flexible laminate choices for reseal and convenience formats.",
    ],
  },
  readyMix: {
    intro: (title) =>
      `Flexible laminates designed for ${title.toLowerCase()} with strong barrier performance and reliable dispensing on fast packing lines.`,
    relatedProducts: ["Instant Meals", "Soup Mixes", "Masala Mixes"],
    packagingRequirements: [
      "Portion control",
      "Fast sealing",
      "Shelf stability",
      "Flavour protection",
    ],
    recommendedMaterials: ["PET", "MET PET", "PE", "CPP", "Aluminium Foil"],
    layerStructures: [
      "PET / MET PET / PE",
      "PET / ALU / PE",
      "BOPP / MET BOPP / PE",
    ],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the structure must keep recipes stable while helping the line move quickly and cleanly.`,
    whyPoints: [
      "Keeps mixes stable during storage, transport, and dispensing.",
      "Supports fast packing lines where seal reliability matters at speed.",
      "Balances shelf appearance with practical pack performance.",
    ],
  },
  gravy: {
    intro: (title) =>
      `Flexible laminates created for ${title.toLowerCase()} packs that need moisture control, flavour stability, and dependable dispensing.`,
    relatedProducts: ["Gravy Mixes", "Curry Mixes", "Sauce Bases"],
    packagingRequirements: [
      "Moisture control",
      "Flavour stability",
      "Seal security",
      "Easy dispensing",
    ],
    recommendedMaterials: ["PET", "MET PET", "PE", "CPP", "Aluminium Foil"],
    layerStructures: [
      "PET / ALU / PE",
      "PET / MET PET / PE",
      "BOPP / MET BOPP / PE",
    ],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the pack has to keep the formulation stable while still feeling clean and premium in hand.`,
    whyPoints: [
      "Keeps spice blends and gravy bases protected from moisture pickup.",
      "Provides a secure seal for clean filling and dependable shelf life.",
      "Maintains strong print appeal for formats that compete in retail sachets and pouches.",
    ],
  },
  condiment: {
    intro: (title) =>
      `Flexible sachet and pouch structures tuned for ${title.toLowerCase()} formats with clean dispensing and seal security.`,
    relatedProducts: ["Sauce Portions", "Dip Packs", "Meal Toppings"],
    packagingRequirements: [
      "Seal security",
      "Controlled dispensing",
      "Barrier performance",
      "Retail clarity",
    ],
    recommendedMaterials: ["PET", "MET PET", "PE", "CPP", "Aluminium Foil"],
    layerStructures: [
      "PET / ALU / PE",
      "PET / MET PET / PE",
      "BOPP / MET BOPP / PE",
    ],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the packaging must stay leak-resistant, stable, and clean enough for foodservice and retail use.`,
    whyPoints: [
      "Helps maintain product integrity in small-format wet or semi-wet packs.",
      "Supports clean dispensing and a dependable consumer experience.",
      "Offers branding space without sacrificing functional protection.",
    ],
  },
  oil: {
    intro: (title) =>
      `Flexible liquid packaging with controlled pouring, strong seal security, and barrier performance for ${title.toLowerCase()} products.`,
    relatedProducts: ["Refill Pouches", "Blended Oils", "Cooking Refills"],
    packagingRequirements: [
      "Leak resistance",
      "Oxygen barrier",
      "Pour control",
      "Print durability",
    ],
    recommendedMaterials: ["PET", "MET PET", "PE", "Nylon", "Aluminium Foil"],
    layerStructures: [
      "PET / ALU / PE",
      "PET / Nylon / PE",
      "PET / MET PET / PE",
    ],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the laminate must protect the product during pouring, storage, and long-distance handling.`,
    whyPoints: [
      "Improves leak resistance for refill and pour-friendly formats.",
      "Helps maintain product quality by reducing oxygen exposure.",
      "Keeps the print finish durable in a category where handling is frequent.",
    ],
  },
  household: {
    intro: (title) =>
      `Robust flexible packaging for ${title.toLowerCase()} with moisture defense, structural stability, and dependable shelf performance.`,
    relatedProducts: [
      "Detergent Powders",
      "Cleaning Refills",
      "Surface Care Packs",
    ],
    packagingRequirements: [
      "Moisture defense",
      "Bulk handling",
      "Seal endurance",
      "Shelf stability",
    ],
    recommendedMaterials: ["BOPP", "PET", "PE", "CPP", "MET PET"],
    layerStructures: ["BOPP / PE", "PET / MET PET / PE", "PET / ALU / PE"],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the pack must resist humidity, stay strong in transit, and keep its structure on shelf.`,
    whyPoints: [
      "Supports heavy handling without losing pack form or seal reliability.",
      "Defends against moisture so cleaning performance stays stable.",
      "Preserves strong branding for a product family that competes on shelf presence.",
    ],
  },
  pantryStaples: {
    intro: (title) =>
      `Flexible packaging for ${title.toLowerCase()} that balances freshness, shelf presentation, and dependable pack integrity.`,
    relatedProducts: ["Whole Grains", "Healthy Mixes", "Everyday Staples"],
    packagingRequirements: [
      "Storage stability",
      "Print durability",
      "Shelf presentation",
      "Moisture control",
    ],
    recommendedMaterials: ["BOPP", "PET", "PE", "CPP", "MET PET"],
    layerStructures: ["BOPP / PE", "PET / MET PET / PE", "PET / ALU / PE"],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the laminate needs to present a clean pantry-friendly look while protecting the contents from handling and humidity.`,
    whyPoints: [
      "Keeps everyday pantry staples looking neat and market-ready.",
      "Balances barrier needs with practical filling and shelf performance.",
      "Supports broad retail usage without overcomplicating the pack structure.",
    ],
  },
  sweets: {
    intro: (title) =>
      `Flexible packaging that gives ${title.toLowerCase()} a premium presentation while protecting texture and flavour stability.`,
    relatedProducts: ["Gift Packs", "Share Packs", "Seasonal Packs"],
    packagingRequirements: [
      "Premium presentation",
      "Freshness retention",
      "Moisture protection",
      "Print clarity",
    ],
    recommendedMaterials: [
      "PET",
      "BOPP",
      "MET PET",
      "PE",
      "CPP",
      "Aluminium Foil",
    ],
    layerStructures: [
      "BOPP / MET BOPP / PE",
      "PET / MET PET / PE",
      "PET / ALU / PE",
    ],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the pack should feel premium, protect product texture, and present the brand with confidence.`,
    whyPoints: [
      "Creates a polished shelf presence suited to gifting and premium retail.",
      "Helps preserve texture and flavour during storage and transport.",
      "Delivers sharp print reproduction that supports branded packs.",
    ],
  },
  agro: {
    intro: (title) =>
      `Durable flexible packaging for agro inputs with product protection, print durability, and dependable handling for ${title.toLowerCase()} products.`,
    relatedProducts: ["Seeds", "Fertilisers", "Pesticides"],
    packagingRequirements: [
      "Load-bearing strength",
      "Dust control",
      "Print durability",
      "Chemical resistance",
    ],
    recommendedMaterials: ["BOPP", "PET", "PE", "CPP", "MET PET", "Nylon"],
    layerStructures: ["BOPP / PE", "PET / MET PET / PE", "PET / ALU / PE"],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the structure has to tolerate handling, stacking, and distribution while keeping product identity clear.`,
    whyPoints: [
      "Supports rugged handling for agricultural storage and transport.",
      "Keeps the pack readable and durable across distribution cycles.",
      "Offers a dependable laminate framework for a demanding product category.",
    ],
  },
  generic: {
    intro: (title) =>
      `Flexible packaging engineered for ${title.toLowerCase()} with dependable barrier performance, strong shelf presentation, and production efficiency.`,
    relatedProducts: ["Flexible Pouches", "Printed Rolls", "Retail Packs"],
    packagingRequirements: [
      "Barrier performance",
      "Seal reliability",
      "Shelf presentation",
      "Production efficiency",
    ],
    recommendedMaterials: ["PET", "BOPP", "PE", "CPP", "MET PET"],
    layerStructures: ["PET / PE", "PET / MET PET / PE", "BOPP / PE"],
    whyIntro: (title) =>
      `For ${title.toLowerCase()}, the pack should balance practicality, shelf appeal, and dependable line performance.`,
    whyPoints: [
      "Gives the application a clean, professional packaging face.",
      "Supports dependable seals and everyday production efficiency.",
      "Keeps the design system consistent across the range of applications.",
    ],
  },
};

const customApplicationProfiles: Record<string, ThemeProfile> = {
  "turmeric-powder": {
    intro: () =>
      "High-barrier flexible packaging designed to preserve aroma, colour, and shelf life for turmeric powder.",
    relatedProducts: ["Turmeric Powder", "Haldi Powder", "Spice Mixes"],
    packagingRequirements: [
      "Aroma retention",
      "Moisture protection",
      "Colour preservation",
      "Shelf-life enhancement",
    ],
    recommendedMaterials: ["PET", "MET PET", "PE"],
    layerStructures: ["PET / MET PET / PE", "PET / PE"],
    suitableFormats: ["Pillow Pouch", "Stand Up Pouch", "Laminated Roll"],
    whyIntro: () =>
      "For turmeric powder, the pack must protect colour strength and aroma while staying reliable on high-speed production lines.",
    whyPoints: [
      "Helps maintain a vibrant pack appearance by controlling moisture and oxygen exposure.",
      "Runs cleanly on automated filling equipment with dependable sealing performance.",
      "Supports shelf-ready branding for spice lines competing in retail and export channels.",
    ],
  },
  "chilli-powder": {
    intro: () =>
      "Flexible packaging designed to protect aroma, retain oil content, and resist moisture for chilli powder.",
    relatedProducts: ["Chilli Powder", "Red Chilli Powder", "Spice Blends"],
    packagingRequirements: [
      "Aroma barrier",
      "Oil retention",
      "Moisture resistance",
    ],
    recommendedMaterials: ["PET", "MET PET", "PE"],
    layerStructures: ["PET / MET PET / PE"],
    suitableFormats: ["Pillow Pouch", "Stand Up Pouch", "Center Seal Pouch"],
    whyIntro: () =>
      "For chilli powder, the laminate has to hold flavour, reduce moisture pickup, and keep the pack looking crisp on shelf.",
    whyPoints: [
      "Supports strong barrier performance for a category that is sensitive to humidity and aroma loss.",
      "Keeps the structure dependable for fast packing and stable shelf presentation.",
      "Delivers sharp graphics that help the product stand out in spice assortments.",
    ],
  },
  "masala-powder": {
    intro: () =>
      "Flexible packaging designed to protect flavour, manage moisture, and keep masala powder shelf-stable.",
    relatedProducts: ["Masala Powder", "Garam Masala", "Mixed Spices"],
    packagingRequirements: [
      "Flavour retention",
      "Moisture barrier",
      "Shelf stability",
    ],
    recommendedMaterials: ["PET", "MET PET", "PE"],
    layerStructures: ["PET / MET PET / PE", "PET / PE"],
    suitableFormats: ["Pillow Pouch", "Stand Up Pouch", "Printed Roll"],
    whyIntro: () =>
      "For masala powder, the pack needs to protect the spice profile while keeping the brand premium and production-friendly.",
    whyPoints: [
      "Helps protect volatile flavour notes from moisture and oxygen exposure.",
      "Supports clean filling and consistent sealing on high-volume lines.",
      "Maintains premium retail appeal across modern trade and general trade packs.",
    ],
  },
  cashew: {
    intro: () =>
      "Premium barrier packaging built to protect cashews from oxygen and moisture while preserving freshness.",
    relatedProducts: ["Cashew", "Whole Nuts", "Premium Dry Fruits"],
    packagingRequirements: [
      "Oxygen barrier",
      "Moisture protection",
      "Freshness retention",
    ],
    recommendedMaterials: ["PET", "MET PET", "PE", "Nylon"],
    layerStructures: ["PET / Nylon / PE", "PET / MET PET / PE"],
    suitableFormats: ["Stand Up Pouch", "Vacuum Pouch", "Zipper Pouch"],
    whyIntro: () =>
      "For cashews, the structure must preserve freshness and protect the product during handling, storage, and retail display.",
    whyPoints: [
      "Provides reliable barrier performance for premium nut packs.",
      "Supports re-closable and vacuum-style formats for freshness retention.",
      "Delivers a polished presentation suited to premium dry fruit merchandising.",
    ],
  },
  almonds: {
    intro: () =>
      "Premium flexible packaging that protects almonds from oxidation and keeps freshness intact.",
    relatedProducts: ["Almonds", "Premium Nuts", "Snack Packs"],
    packagingRequirements: [
      "Oxidation protection",
      "Freshness retention",
      "Shelf-life enhancement",
    ],
    recommendedMaterials: ["PET", "MET PET", "PE"],
    layerStructures: ["PET / MET PET / PE", "PET / ALU / PE"],
    suitableFormats: ["Stand Up Pouch", "Zipper Pouch"],
    whyIntro: () =>
      "For almonds, the laminate should keep the pack fresh, attractive, and reliable across retail and storage environments.",
    whyPoints: [
      "Helps slow oxidation so product quality stays protected over time.",
      "Supports premium resealable formats for better consumer convenience.",
      "Maintains a clean, high-end appearance for premium nut assortments.",
    ],
  },
  pistachios: {
    intro: () =>
      "Premium flexible packaging that keeps pistachios fresh while protecting against moisture and flavour loss.",
    relatedProducts: ["Pistachios", "Premium Nuts", "Dry Fruit Packs"],
    packagingRequirements: [
      "Freshness retention",
      "Moisture barrier",
      "Shelf-life protection",
    ],
    recommendedMaterials: ["PET", "MET PET", "PE"],
    layerStructures: ["PET / MET PET / PE", "PET / ALU / PE"],
    suitableFormats: ["Stand Up Pouch", "Zipper Pouch"],
    whyIntro: () =>
      "For pistachios, the pack must preserve freshness and maintain a premium shelf presence throughout distribution.",
    whyPoints: [
      "Provides dependable barrier performance for moisture-sensitive dry fruit packs.",
      "Works well with premium zipper formats for repeat use and freshness control.",
      "Keeps the product visually attractive for retail and gifting applications.",
    ],
  },
  "hand-wash": {
    intro: () =>
      "Leak-resistant flexible packaging for hand wash refill packs with chemical compatibility and strong seal integrity.",
    relatedProducts: ["Hand Wash Refills", "Liquid Care Packs", "Refill Packs"],
    packagingRequirements: [
      "Leak resistance",
      "Chemical compatibility",
      "Seal integrity",
    ],
    recommendedMaterials: ["PET", "PE", "Nylon"],
    layerStructures: ["PET / PE", "PET / Nylon / PE"],
    suitableFormats: ["Spout Pouch", "Refill Pouch"],
    whyIntro: () =>
      "For hand wash, the pack needs to stay leak-resistant, easy to handle, and stable across refill and storage cycles.",
    whyPoints: [
      "Supports dependable sealing for liquid refills and repeat handling.",
      "Offers chemical compatibility suited to personal care formulations.",
      "Helps create a premium, practical refill experience for consumers.",
    ],
  },
  "floor-cleaner": {
    intro: () =>
      "Chemical-resistant flexible packaging for floor cleaner refill packs with reliable sealing and leak prevention.",
    relatedProducts: [
      "Floor Cleaner Refills",
      "Surface Care Packs",
      "Cleaning Liquids",
    ],
    packagingRequirements: [
      "Chemical resistance",
      "Leak prevention",
      "Seal strength",
    ],
    recommendedMaterials: ["PET", "PE", "Nylon"],
    layerStructures: ["PET / PE", "PET / Nylon / PE"],
    suitableFormats: ["Spout Pouch", "Refill Pouch"],
    whyIntro: () =>
      "For floor cleaner, the laminate must handle liquid fill, protect against leaks, and stay durable in storage and transit.",
    whyPoints: [
      "Provides strong seal reliability for liquid cleaning products.",
      "Helps resist chemical interaction typical of household cleaning formulations.",
      "Keeps the pack sturdy and retail-ready for refill channel merchandising.",
    ],
  },
  "dish-wash-liquid": {
    intro: () =>
      "Durable flexible packaging for dish wash liquid with leak resistance, chemical compatibility, and dependable seals.",
    relatedProducts: [
      "Dish Wash Refills",
      "Liquid Cleaners",
      "Kitchen Care Packs",
    ],
    packagingRequirements: [
      "Leak resistance",
      "Chemical compatibility",
      "Durability",
    ],
    recommendedMaterials: ["PET", "PE", "Nylon"],
    layerStructures: ["PET / PE", "PET / Nylon / PE"],
    suitableFormats: ["Spout Pouch", "Refill Pouch"],
    whyIntro: () =>
      "For dish wash liquid, the structure needs to stay dependable through handling, transport, and consumer dispensing.",
    whyPoints: [
      "Protects product integrity with reliable seal and leak performance.",
      "Supports a practical refill format suited to household detergent channels.",
      "Maintains clear, premium presentation for the cleaning aisle.",
    ],
  },
} as const;

function themeForSlug(slug: string): keyof typeof profiles {
  if (/(tea)/.test(slug)) return "tea";
  if (/(coffee)/.test(slug)) return "coffee";
  if (slug === "pet-food") return "petFood";
  if (slug.includes("frozen")) return "frozen";
  if (slug.includes("rice")) return "rice";
  if (slug.includes("puls")) return "pulses";
  if (slug.includes("processed-nuts")) return "dryNuts";
  if (
    slug.includes("potato-chips") ||
    slug.includes("namkeen") ||
    slug.includes("extruded-snacks") ||
    slug.includes("instant-noodles") ||
    slug.includes("biscuits")
  ) {
    return "snack";
  }
  if (slug.includes("ready-mix-gravy")) return "gravy";
  if (
    slug.includes("ready-mix-foods") ||
    slug.includes("instant-foods") ||
    slug.includes("batters")
  )
    return "readyMix";
  if (slug.includes("ketchup") || slug.includes("mayonnaise"))
    return "condiment";
  if (slug.includes("cooking-oils")) return "oil";
  if (slug.includes("detergents")) return "household";
  if (
    slug.includes("grains") ||
    slug.includes("millets") ||
    slug.includes("flours") ||
    slug.includes("breakfast-cereals") ||
    slug.includes("sugars")
  ) {
    return "pantryStaples";
  }
  if (slug.includes("chocolates") || slug.includes("confectioneries"))
    return "sweets";
  if (
    slug.includes("seeds") ||
    slug.includes("fertilizers") ||
    slug.includes("pesticides")
  )
    return "agro";
  return "generic";
}

export function getPackagingApplicationContent(
  slug: string,
): PackagingApplicationContent | undefined {
  const application = getPackagingApplicationBySlug(slug);
  if (!application) return undefined;

  const customProfile = customApplicationProfiles[application.slug];
  const profile = customProfile ?? profiles[themeForSlug(application.slug)];

  return {
    application,
    heroTitle: `${application.title} Packaging`,
    intro: profile.intro(application.title),
    relatedProducts: profile.relatedProducts,
    packagingRequirements: profile.packagingRequirements,
    recommendedMaterials: profile.recommendedMaterials,
    layerStructures: profile.layerStructures,
    suitableFormats: profile.suitableFormats ?? [],
    whyTitle: `Why Trishala For ${application.title}?`,
    whyIntro: profile.whyIntro(application.title),
    whyPoints: profile.whyPoints,
  };
}

export function getPackagingApplicationSlugs(): readonly string[] {
  return getPackagingApplicationItems().map((item) => item.slug);
}
