export type PackagingSolutionSection = {
  id: string;
  title: string;
  image?: string;
  group: "rolls" | "pouches";
};

export const packagingSolutionSections: readonly PackagingSolutionSection[] = [
  {
    id: "printed-laminated-rolls",
    title: "Printed and Laminated Rolls",
    image: "/images/products/laminate-roll.png",
    group: "rolls",
  },
  {
    id: "center-seal",
    title: "Center Seal Pouch",
    image: "/images/products/center-seal.png",
    group: "pouches",
  },
  {
    id: "three-side-seal",
    title: "Three Side Seal Pouch",
    group: "pouches",
  },
  {
    id: "zipper",
    title: "Zipper Pouch",
    group: "pouches",
  },
  {
    id: "standup-pouch",
    title: "Stand Up Pouch",
    image: "/images/products/standup-pouch.png",
    group: "pouches",
  },
  {
    id: "gusset",
    title: "Gusset Pouch",
    group: "pouches",
  },
  {
    id: "reusable",
    title: "Reusable Pouch",
    group: "pouches",
  },
  {
    id: "handled",
    title: "Handled Pouch",
    group: "pouches",
  },
  {
    id: "3d-pouch",
    title: "3D Pouch",
    group: "pouches",
  },
  {
    id: "spout",
    title: "Spout Pouch",
    image: "/images/products/spout-pouch.png",
    group: "pouches",
  },
] as const;
