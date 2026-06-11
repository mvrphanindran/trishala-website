import { getPackagingApplicationBySlug } from "@/lib/packaging-applications-registry";

export type IndustryApplicationItem = {
  title: string;
  href: string;
  image: string;
};

const industryApplicationItems: Record<
  string,
  readonly IndustryApplicationItem[]
> = {
  fmcg: [
    {
      title: "Breakfast Cereals",
      href: "/applications/breakfast-cereals",
      image: getImage("breakfast-cereals"),
    },
    {
      title: "Biscuits & Confectioneries",
      href: "/applications/biscuits-and-confectioneries",
      image: getImage("biscuits-and-confectioneries"),
    },
    {
      title: "Chocolate Packaging",
      href: "/applications/chocolates",
      image: getImage("chocolates"),
    },
    {
      title: "Cooking Oils",
      href: "/applications/cooking-oils",
      image: getImage("cooking-oils"),
    },
    {
      title: "Detergents",
      href: "/applications/detergents",
      image: getImage("detergents"),
    },
    {
      title: "Handwash Packaging",
      href: "/applications/handwash",
      image: getImage("handwash"),
    },
    {
      title: "Instant Foods",
      href: "/applications/instant-foods",
      image: getImage("instant-foods"),
    },
    {
      title: "Ketchup",
      href: "/applications/ketchup",
      image: getImage("ketchup"),
    },
    {
      title: "Mayonnaise",
      href: "/applications/mayonnaise",
      image: getImage("mayonnaise"),
    },
    {
      title: "Sugars",
      href: "/applications/sugars",
      image: getImage("sugars"),
    },
    {
      title: "Ready Mix Gravy",
      href: "/applications/ready-mix-gravy",
      image: getImage("ready-mix-gravy"),
    },
    {
      title: "Ready Mix Foods",
      href: "/applications/ready-mix-foods",
      image: getImage("ready-mix-foods"),
    },
    {
      title: "Batters",
      href: "/applications/batters",
      image: getImage("batters"),
    },
    {
      title: "Flours",
      href: "/applications/flours",
      image: getImage("flours"),
    },
  ],
  agriculture: [
    {
      title: "Fertilizers",
      href: "/applications/fertilizers",
      image: getImage("fertilizers"),
    },
    {
      title: "Pesticides & Insecticides",
      href: "/applications/pesticides-and-insecticides",
      image: getImage("pesticides-and-insecticides"),
    },
    { title: "Seeds", href: "/applications/seeds", image: getImage("seeds") },
  ],
  snacks: [
    {
      title: "Potato Chips",
      href: "/applications/potato-chips",
      image: getImage("potato-chips"),
    },
    {
      title: "Namkeen",
      href: "/applications/namkeen",
      image: getImage("namkeen"),
    },
    {
      title: "Extruded Snacks",
      href: "/applications/extruded-snacks",
      image: getImage("extruded-snacks"),
    },
  ],
  "spices-and-seasonings": [
    {
      title: "Turmeric Powder",
      href: "/applications/turmeric-powder",
      image: getImage("turmeric-powder"),
    },
    {
      title: "Chilli Powder",
      href: "/applications/chilli-powder",
      image: getImage("chilli-powder"),
    },
    {
      title: "Masala Powder",
      href: "/applications/masala-powder",
      image: getImage("masala-powder"),
    },
  ],
  "tea-and-coffee": [
    { title: "Tea", href: "/applications/tea", image: getImage("tea-powder") },
    {
      title: "Coffee",
      href: "/applications/coffee",
      image: getImage("coffee-powder"),
    },
  ],
  "dry-fruits-and-nuts": [
    {
      title: "Cashew",
      href: "/applications/cashew",
      image: getImage("cashew"),
    },
    {
      title: "Almonds",
      href: "/applications/almonds",
      image: getImage("almonds"),
    },
    {
      title: "Pistachios",
      href: "/applications/pistachios",
      image: getImage("pistachios"),
    },
    {
      title: "Processed Nuts",
      href: "/applications/processed-nuts",
      image: getImage("processed-nuts"),
    },
  ],
  "household-and-cleaning": [
    {
      title: "Floor Cleaner",
      href: "/applications/floor-cleaner",
      image: getImage("floor-cleaner"),
    },
    {
      title: "Dish Wash Liquid",
      href: "/applications/dish-wash-liquid",
      image: getImage("dish-wash-liquid"),
    },
    {
      title: "Detergents",
      href: "/applications/detergents",
      image: getImage("detergents"),
    },
  ],
  "personal-care": [],
  "pet-food": [
    {
      title: "Pet Food Packaging",
      href: "/applications/pet-food-packaging",
      image: getImage("pet-food"),
    },
  ],
} as const;

function getImage(slug: string): string {
  return getPackagingApplicationBySlug(slug)!.image;
}

export function getIndustryApplicationItems(
  industrySlug: string,
): readonly IndustryApplicationItem[] {
  return industryApplicationItems[industrySlug] ?? [];
}
