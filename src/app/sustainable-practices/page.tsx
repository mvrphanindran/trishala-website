import type { Metadata } from "next";
import ResponsibleManufacturingSection from "@/components/quality/ResponsibleManufacturingSection";
import PageShell from "@/components/site/PageShell";
import PageIntro from "@/components/site/PageIntro";
import { v1 } from "@/lib/v1-tokens";

const operationalEfficiencyPoints = [
  {
    title: "Process Consistency",
    body: "Measured operations and disciplined production practices support dependable output across flexible packaging manufacturing.",
  },
  {
    title: "Material Optimization",
    body: "Focused planning and controlled conversion help improve material utilization and reduce avoidable production loss.",
  },
  {
    title: "Production Discipline",
    body: "Operational monitoring and process control strengthen manufacturing reliability, quality consistency, and day-to-day efficiency.",
  },
] as const;

const wasteReductionPoints = [
  {
    title: "Manufacturing Efficiency",
    body: "Continuous review of production performance helps improve efficiency while supporting responsible use of manufacturing inputs.",
  },
  {
    title: "Resource Utilization",
    body: "Trishala emphasizes practical resource optimization through better planning, controlled processes, and continual refinement.",
  },
] as const;

const longTermCommitmentPoints = [
  {
    title: "Sustainable Growth",
    body: "Long-term growth is supported through operational discipline, process improvement, and thoughtful manufacturing expansion.",
  },
  {
    title: "Customer Responsibility",
    body: "Responsible manufacturing supports reliable packaging supply, stable quality, and stronger long-term customer partnerships.",
  },
  {
    title: "Continuous Improvement",
    body: "Ongoing refinement across systems, processes, and operations remains central to Trishala's manufacturing approach.",
  },
] as const;

export const metadata: Metadata = {
  title: "Sustainable Practices",
  description:
    "Responsible manufacturing and sustainable operational practices supporting efficient flexible packaging production.",
};

export default function SustainablePracticesPage() {
  return (
    <PageShell warm>
      <PageIntro
        label="Sustainable Practices"
        title="Sustainable Practices"
        description="Responsible manufacturing practices focused on operational efficiency, process consistency, resource optimization, and long-term improvement."
      />

      <section className="mx-auto max-w-[1380px] px-5 py-4 md:px-8 md:py-6">
        <div className="max-w-4xl">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: v1.green.primary }}
          >
            Introduction
          </p>
          <p
            className="mt-4 text-base leading-relaxed md:text-lg"
            style={{ color: v1.ink.body }}
          >
            Trishala Laminates approaches sustainability through responsible
            manufacturing, operational discipline, and continuous improvement.
            The focus remains on efficient production practices, better resource
            use, process consistency, and dependable long-term manufacturing
            performance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 md:px-8">
        <ResponsibleManufacturingSection />
      </section>

      <section className="mx-auto max-w-[1380px] px-5 py-6 md:px-8 md:py-8 lg:py-10">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{ color: v1.green.primary }}
        >
          Operational Efficiency
        </p>
        <h2
          className="mt-3 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold tracking-[-0.04em]"
          style={{ color: v1.ink.navy }}
        >
          Operational Efficiency
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-5">
          {operationalEfficiencyPoints.map((item) => (
            <div key={item.title} className="min-w-0">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.24em]"
                style={{ color: v1.green.primary }}
              >
                {item.title}
              </p>
              <p
                className="mt-2 text-sm leading-relaxed md:text-[15px]"
                style={{ color: v1.ink.body }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 py-6 md:px-8 md:py-8 lg:py-10">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{ color: v1.green.primary }}
        >
          Waste Reduction
        </p>
        <h2
          className="mt-3 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold tracking-[-0.04em]"
          style={{ color: v1.ink.navy }}
        >
          Waste Reduction
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5">
          {wasteReductionPoints.map((item) => (
            <div key={item.title} className="min-w-0">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.24em]"
                style={{ color: v1.green.primary }}
              >
                {item.title}
              </p>
              <p
                className="mt-2 text-sm leading-relaxed md:text-[15px]"
                style={{ color: v1.ink.body }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 pb-12 pt-6 md:px-8 md:pb-16 md:pt-8 lg:pb-20 lg:pt-10">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{ color: v1.green.primary }}
        >
          Long-Term Commitment
        </p>
        <h2
          className="mt-3 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold tracking-[-0.04em]"
          style={{ color: v1.ink.navy }}
        >
          Long-Term Commitment
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-5">
          {longTermCommitmentPoints.map((item) => (
            <div key={item.title} className="min-w-0">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.24em]"
                style={{ color: v1.green.primary }}
              >
                {item.title}
              </p>
              <p
                className="mt-2 text-sm leading-relaxed md:text-[15px]"
                style={{ color: v1.ink.body }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
