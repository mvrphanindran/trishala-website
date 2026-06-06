export type PackagingNavItem = {
  label: string;
  href: string;
};

export type PackagingNavGroup = {
  label: string;
  items: readonly PackagingNavItem[];
};

export const packagingSolutionsHref = "/packaging-solutions" as const;
export const packagingFormatsHref = `${packagingSolutionsHref}#packaging-formats` as const;
export const packagingApplicationsHref = `${packagingSolutionsHref}#packaging-applications` as const;

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
      { label: "Center Seal Pouch", href: anchor("center-seal-pouches") },
      { label: "Three Side Seal Pouch", href: anchor("three-side-seal-pouches") },
      { label: "Zipper Pouch", href: anchor("zipper-pouches") },
      { label: "Stand Up Pouch", href: anchor("stand-up-pouches") },
      { label: "Gusset Pouch", href: anchor("gusset-pouches") },
      { label: "Spouted Pouch", href: anchor("spouted-pouches") },
      { label: "Handled Pouch", href: anchor("handled-pouches") },
      { label: "3D Pouch", href: anchor("3d-pouches") },
    ],
  },
] as const;
