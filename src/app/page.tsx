import PageShell from "@/components/site/PageShell";
import Hero from "@/sections/home/Hero";
import MaterialDiscipline from "@/sections/home/MaterialDiscipline";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <MaterialDiscipline />
    </PageShell>
  );
}
