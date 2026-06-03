export type PackagingSolutionSection = {
  id: string;
  title: string;
  image?: string;
  group: "rolls" | "pouches";
  description: string;
  applications: readonly string[];
};

export const packagingSolutionSections: readonly PackagingSolutionSection[] = [
  {
    id: "printed-laminated-rolls",
    title: "Rolls",
    image: "/images/products/printed-laminate-roll.png",
    group: "rolls",
    description:
      "High-quality printed and laminated flexible packaging rolls engineered for automated packing systems and consistent shelf presentation.",
    applications: [
      "Snacks and namkeen",
      "Spices and masala",
      "Tea and coffee",
      "Personal care sachets",
    ],
  },
  {
    id: "center-seal",
    title: "Center Seal Pouch",
    image: "/images/products/center-seal-pouch.png",
    group: "pouches",
    description:
      "Versatile center-seal format designed for reliable sealing performance and efficient high-volume packing.",
    applications: ["Snacks", "Spices", "Household powders", "Agri inputs"],
  },
  {
    id: "three-side-seal",
    title: "Three Side Seal Pouch",
    image: "/images/products/three-side-seal-pouch.png",
    group: "pouches",
    description:
      "Compact pouch format suited for single-serve and controlled-portion products requiring strong seal integrity.",
    applications: ["Condiments", "Powders", "Personal care", "Trial packs"],
  },
  {
    id: "zipper",
    title: "Zipper Pouch",
    image: "/images/products/zipper-pouch.png",
    group: "pouches",
    description:
      "Re-closable pouch solution for premium products requiring freshness retention after first use.",
    applications: ["Dry fruits", "Pet treats", "Premium snacks", "Nutraceuticals"],
  },
  {
    id: "standup-pouch",
    title: "Stand Up Pouch",
    image: "/images/products/stand-up-pouch.png",
    group: "pouches",
    description:
      "Shelf-forward format with strong visual impact and structural stability for modern retail channels.",
    applications: ["Spices", "Dry fruits", "Tea and coffee", "Detergent refills"],
  },
  {
    id: "gusset",
    title: "Gusset Pouch",
    image: "/images/products/Gusset-Pouch.png",
    group: "pouches",
    description:
      "High-capacity format with expanded volume and dependable load-bearing structure for bulk packs.",
    applications: ["Rice", "Pet food", "Pulse and grain packs", "Agri products"],
  },
  {
    id: "spouted-pouch",
    title: "Spouted Pouch",
    image: "/images/products/spout-pouch.png",
    group: "pouches",
    description:
      "Convenient spouted pouch format designed for controlled pouring, product convenience, and strong shelf presence.",
    applications: ["Household products", "Personal care refills", "Pet nutrition", "Dry ingredients"],
  },
  {
    id: "handled",
    title: "Handled Pouch",
    image: "/images/products/handled-pouch.png",
    group: "pouches",
    description:
      "Convenient carry-friendly pouch for larger pack sizes where handling comfort and shelf appearance both matter.",
    applications: ["Family-size snacks", "Bulk dry food", "Cleaning products", "Pet food"],
  },
  {
    id: "3d-pouch",
    title: "3D Pouch",
    image: "/images/products/3d-pouch.png",
    group: "pouches",
    description:
      "Distinctive shaped pouch format that supports strong brand differentiation and premium shelf presence.",
    applications: ["Specialty products", "Kids formats", "Premium gifting packs", "Seasonal packs"],
  },
] as const;
