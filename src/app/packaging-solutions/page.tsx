import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageShell from "@/components/site/PageShell";
import PackagingSolutionsPageContent from "@/sections/packaging/PackagingSolutionsPageContent";

export const metadata: Metadata = pageMetadata({
  title: "Packaging Solutions: Laminate Rolls & Pouches",
  description:
    "Flexible packaging for snacks, spices, tea, coffee, nuts, grains, pet food, fertilizers, detergents and more, as printed laminate rolls, stand-up, zipper and spout pouches.",
  path: "/packaging-solutions",
  keywords: ["printed laminate rolls", "stand up pouches", "zipper pouches", "spout pouches", "food packaging pouches", "packaging covers"],
});

export default function PackagingSolutionsPage() {
  return (
    <PageShell warm>
      <PackagingSolutionsPageContent />
    </PageShell>
  );
}
