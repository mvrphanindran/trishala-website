import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import QualityMachineSection from "@/components/quality/QualityMachineSection";
import PageShell from "@/components/site/PageShell";
import TextureBackdrop from "@/components/site/TextureBackdrop";
import {
  qualityHero,
  qualityLaboratory,
  qualityMachines,
} from "@/lib/quality-content";
import { v1 } from "@/lib/v1-tokens";

export const metadata: Metadata = pageMetadata({
  title: "Quality Testing & Inspection Laboratory",
  description:
    "Our in-house quality lab tests flexible laminates and pouches with tensile, coefficient of friction, vacuum leak and colour matching equipment for consistent output.",
  path: "/quality",
  keywords: ["packaging quality testing", "laminate testing", "pouch leak testing"],
});

export default function QualityPage() {
  return (
    <PageShell warm>
      <section className="relative overflow-hidden">
        <TextureBackdrop variant="hero" />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 50% 45% at 50% 0%, ${v1.green.soft}, transparent 62%)`,
          }}
        />

        <header className="relative mx-auto max-w-[1380px] px-5 pb-10 pt-24 md:px-8 md:pb-12 md:pt-28 lg:pb-14 lg:pt-32">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: v1.green.primary }}
          >
            Quality
          </p>
          <h1
            className="mt-4 max-w-4xl text-[clamp(2rem,4.2vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-0.04em]"
            style={{ color: v1.ink.navy }}
          >
            {qualityHero.title}
          </h1>
          <p
            className="mt-5 max-w-3xl text-base leading-relaxed md:text-lg"
            style={{ color: v1.ink.body }}
          >
            {qualityHero.subtitle}
          </p>
        </header>
      </section>

      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="space-y-4 md:space-y-6">
          {qualityMachines.map((machine, index) => (
            <QualityMachineSection
              key={machine.id}
              machine={machine}
              index={index}
              emphasizeMedia={machine.id === "vacuum-leak-tester"}
            />
          ))}
        </div>

        <section className="py-5 md:py-7">
          <div
            className="max-w-4xl rounded-2xl px-5 py-5 md:px-6 md:py-6"
            style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)" }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.32em]"
              style={{ color: v1.green.primary }}
            >
              Additional Systems
            </p>
            <p
              className="mt-3 text-base leading-relaxed md:text-lg"
              style={{ color: v1.ink.body }}
            >
              Alongside the equipment shown above, Trishala operates additional quality control and inspection systems throughout the production process to support consistency, product integrity, and customer satisfaction.
            </p>
          </div>
        </section>

        <section className="pb-12 pt-6 md:pb-16 md:pt-8 lg:pb-20">
          <h2
            className="text-[clamp(1.55rem,2.9vw,2.25rem)] font-extrabold tracking-[-0.04em]"
            style={{ color: v1.ink.navy }}
          >
            {qualityLaboratory.title}
          </h2>
          <div className="relative mt-5 aspect-[21/9] w-full overflow-hidden bg-[#F8FAFC] md:mt-6">
            <Image
              src={qualityLaboratory.image}
              alt={qualityLaboratory.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <p
            className="mt-4 max-w-[1100px] text-base leading-relaxed md:text-lg"
            style={{ color: v1.ink.body }}
          >
            {qualityLaboratory.description}
          </p>
        </section>
      </div>
    </PageShell>
  );
}
