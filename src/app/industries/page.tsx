import IndustriesShowcase from "@/components/industries/IndustriesShowcase";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";

export default function IndustriesPage() {
  return (
    <PageShell warm>
      <PageIntro
        label="Industries"
        title="Industries We Serve"
        description="Flexible packaging applications presented as a clean reference grid for the sectors Trishala serves."
        align="center"
      />
      <IndustriesShowcase layout="grid" showLabels />
    </PageShell>
  );
}
