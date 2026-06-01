import QualitySection from "@/components/quality/QualitySection";
import PageShell from "@/components/site/PageShell";
import TextureBackdrop from "@/components/site/TextureBackdrop";
import {
  qualityHero,
  qualitySections,
} from "@/lib/quality-content";
import { v1 } from "@/lib/v1-tokens";

export default function QualityPage() {
  return (
    <PageShell warm>
      <section
        className="relative overflow-hidden border-b"
        style={{
          borderColor: v1.silver.hairline,
          background: v1.ivory.base,
        }}
      >
        <TextureBackdrop variant="hero" />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 50% 45% at 50% 0%, ${v1.green.soft}, transparent 62%)`,
          }}
        />

        <header className="relative mx-auto max-w-[1380px] px-5 pb-16 pt-28 text-center md:px-8 md:pb-20 md:pt-32 lg:pb-24 lg:pt-36">
          <p
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: v1.green.primary }}
          >
            {qualityHero.label}
          </p>
          <h1
            className="mx-auto max-w-4xl text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em]"
            style={{ color: v1.ink.navy }}
          >
            {qualityHero.title}
          </h1>
          <p
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed md:text-lg"
            style={{ color: v1.ink.body }}
          >
            {qualityHero.subtitle}
          </p>
        </header>
      </section>

      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        {qualitySections.map((section, index) => (
          <div key={section.id}>
            <QualitySection section={section} index={index} />
            {index < qualitySections.length - 1 ? (
              <div
                className="h-px w-full"
                style={{
                  background: v1.silver.gradient,
                  opacity: 0.55,
                }}
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
