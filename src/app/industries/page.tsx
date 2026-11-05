import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import IndustriesShowcase from "@/components/industries/IndustriesShowcase";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve: Packaging by Sector",
  description:
    "Flexible packaging for FMCG, agriculture, snacks, spices, tea and coffee, dry fruits and nuts, household cleaning and pet food, engineered for each product's shelf life.",
  path: "/industries",
  keywords: ["FMCG packaging", "agriculture packaging", "snack packaging", "spice packaging", "pet food packaging"],
});

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
