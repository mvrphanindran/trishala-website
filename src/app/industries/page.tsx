import AnchorHashScroll from "@/components/site/AnchorHashScroll";
import IndustriesShowcase from "@/components/industries/IndustriesShowcase";
import PageShell from "@/components/site/PageShell";

export default function IndustriesPage() {
  return (
    <PageShell warm>
      <AnchorHashScroll />
      <div className="pt-28 md:pt-32 lg:pt-36">
        <IndustriesShowcase layout="grid" showLabels={false} useAnchors />
      </div>
    </PageShell>
  );
}
