export type PackagingNavItem = {
  label: string;
  href: string;
};

export type PackagingNavGroup = {
  label: string;
  items: readonly PackagingNavItem[];
};

export const packagingSolutionsHref = "/packaging-solutions" as const;

function anchor(id: string): string {
  return `${packagingSolutionsHref}#${id}`;
}

export const packagingSolutionsNavigation: readonly PackagingNavGroup[] = [
  {
    label: "Rolls",
    items: [
      {
        label: "Rolls",
        href: anchor("laminated-rolls"),
      },
    ],
  },
  {
    label: "Pouches",
    items: [
      { label: "Center Seal Pouch", href: anchor("center-seal") },
      { label: "Three Side Seal Pouch", href: anchor("three-side-seal") },
      { label: "Zipper Pouch", href: anchor("zipper") },
      { label: "Stand Up Pouch", href: anchor("standup-pouch") },
      { label: "Gusset Pouch", href: anchor("gusset") },
      { label: "Spouted Pouch", href: anchor("spouted-pouch") },
      { label: "Handled Pouch", href: anchor("handled") },
      { label: "3D Pouch", href: anchor("3d-pouch") },
    ],
  },
] as const;
