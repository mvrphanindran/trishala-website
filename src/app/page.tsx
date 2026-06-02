import PageShell from "@/components/site/PageShell";
import Hero from "@/sections/home/Hero";
import IndustriesWeServe from "@/sections/home/IndustriesWeServe";
import MaterialDiscipline from "@/sections/home/MaterialDiscipline";
import OurPurpose from "@/sections/home/OurPurpose";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <MaterialDiscipline />
      <OurPurpose />
      <IndustriesWeServe />
    </PageShell>
  );
}
