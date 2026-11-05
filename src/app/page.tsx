import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageShell from "@/components/site/PageShell";
import CompanyHighlights from "@/sections/home/CompanyHighlights";
import Hero from "@/sections/home/Hero";
import PackagingSolutionsCarousel from "@/sections/home/PackagingSolutionsCarousel";
import IndustriesWeServe from "@/sections/home/IndustriesWeServe";
import MaterialDiscipline from "@/sections/home/MaterialDiscipline";

export const metadata: Metadata = pageMetadata({
  title: "Flexible Packaging & Pouch Manufacturer in India | Trishala Laminates",
  absoluteTitle: true,
  description:
    "Flexible packaging manufacturer in Hyderabad, India. Printed laminate rolls, stand-up, zipper and spout pouches, and PE blown film for food, FMCG and agri brands.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <CompanyHighlights />
      <MaterialDiscipline />
      <IndustriesWeServe />
      <PackagingSolutionsCarousel />
    </PageShell>
  );
}
