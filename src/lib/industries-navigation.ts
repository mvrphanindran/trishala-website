export type IndustrySegment = {
  label: string;
  slug: string;
};

export type IndustryCategory = {
  label: string;
  slug: string;
  segments: readonly IndustrySegment[];
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function segment(label: string): IndustrySegment {
  return { label, slug: slugify(label) };
}

export const industriesNavigation: readonly IndustryCategory[] = [
  {
    label: "FMCG",
    slug: "fmcg",
    segments: [
      segment("Food & Beverages"),
      segment("Personal Care"),
      segment("Household & Cleaning Products"),
    ],
  },
  {
    label: "Agriculture Products",
    slug: "agriculture",
    segments: [
      segment("Fertilizers"),
      segment("Pesticides"),
      segment("Insecticides"),
      segment("Seeds"),
      segment("Crop Medicines"),
    ],
  },
  {
    label: "Snacks",
    slug: "snacks",
    segments: [
      segment("Potato Chips"),
      segment("Banana Chips"),
      segment("Namkeen"),
      segment("Extruded Snacks"),
      segment("Popcorn"),
      segment("Corn Puffs"),
      segment("Trail Mixes"),
      segment("Roasted Snacks"),
    ],
  },
  {
    label: "Spices & Seasonings",
    slug: "spices-and-seasonings",
    segments: [
      segment("Turmeric"),
      segment("Chilli Powder"),
      segment("Coriander Powder"),
      segment("Cumin Powder"),
      segment("Garam Masala"),
      segment("Pepper"),
      segment("Mixed Seasonings"),
    ],
  },
  {
    label: "Tea & Coffee",
    slug: "tea-and-coffee",
    segments: [
      segment("Tea Leaves"),
      segment("Tea Premixes"),
      segment("Coffee Powder"),
      segment("Coffee Beans"),
      segment("Instant Coffee"),
    ],
  },
  {
    label: "Dry Fruits & Nuts",
    slug: "dry-fruits-and-nuts",
    segments: [
      segment("Almonds"),
      segment("Cashews"),
      segment("Pistachios"),
      segment("Raisins"),
      segment("Mixed Nuts"),
    ],
  },
  {
    label: "Personal Care",
    slug: "personal-care",
    segments: [segment("Hair Care"), segment("Skin & Body Care")],
  },
  {
    label: "Household & Cleaning",
    slug: "household-and-cleaning",
    segments: [
      segment("Laundry Care"),
      segment("Dishwashing"),
      segment("Surface Cleaning"),
      segment("Disinfectants"),
    ],
  },
  {
    label: "Pet Food",
    slug: "pet-food",
    segments: [
      segment("Dry Pet Food"),
      segment("Wet Pet Food"),
      segment("Pet Treats"),
    ],
  },
] as const;

export function industryHref(slug: string): string {
  return `/industries/${slug}`;
}

export function industrySectionHref(slug: string): string {
  return `/industries#${slug}`;
}

export function segmentHref(industrySlug: string, segmentSlug: string): string {
  return `/industries/${industrySlug}/${segmentSlug}`;
}

export function getIndustryBySlug(slug: string): IndustryCategory | undefined {
  return industriesNavigation.find((item) => item.slug === slug);
}

export function getSegmentBySlug(
  industrySlug: string,
  segmentSlug: string,
): { industry: IndustryCategory; segment: IndustrySegment } | undefined {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return undefined;

  const segmentItem = industry.segments.find((item) => item.slug === segmentSlug);
  if (!segmentItem) return undefined;

  return { industry, segment: segmentItem };
}
