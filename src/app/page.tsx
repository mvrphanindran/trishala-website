import PageShell from "@/components/site/PageShell";
import CompanyHighlights from "@/sections/home/CompanyHighlights";
import Hero from "@/sections/home/Hero";
import PackagingSolutionsCarousel from "@/sections/home/PackagingSolutionsCarousel";
import IndustriesWeServe from "@/sections/home/IndustriesWeServe";
import MaterialDiscipline from "@/sections/home/MaterialDiscipline";

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
