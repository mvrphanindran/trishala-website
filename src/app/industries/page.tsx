import IndustriesCatalogue from "@/components/industries/IndustriesCatalogue";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";

export default function IndustriesPage() {
  return (
    <PageShell warm>
      <PageIntro
        label="Industries"
        title="Industries We Serve"
        description="Explore packaging applications by market."
      />

      <IndustriesCatalogue />
    </PageShell>
  );
}
