import AnchorHashScroll from "@/components/site/AnchorHashScroll";
import IndustriesShowcase from "@/components/industries/IndustriesShowcase";
import PageShell from "@/components/site/PageShell";

export default function IndustriesPage() {
  return (
    <PageShell warm>
      <AnchorHashScroll />
      <div className="pt-20 md:pt-24 lg:pt-28">
        <IndustriesShowcase layout="grid" showLabels />
      </div>
    </PageShell>
  );
}
