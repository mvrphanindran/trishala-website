import InfrastructureCapabilitySection from "@/components/infrastructure/InfrastructureCapabilitySection";
import PageShell from "@/components/site/PageShell";
import TextureBackdrop from "@/components/site/TextureBackdrop";
import {
  infrastructureCapabilities,
  infrastructureHero,
} from "@/lib/infrastructure-content";
import { v1 } from "@/lib/v1-tokens";

export default function InfrastructurePage() {
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

        <header className="relative mx-auto max-w-[1380px] px-5 pb-16 pt-28 text-center md:px-8 md:pb-20 md:pt-32 lg:pb-24 lg:pt-36">
          <p
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: v1.green.primary }}
          >
            Infrastructure
          </p>
          <h1
            className="mx-auto max-w-4xl text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em]"
            style={{ color: v1.ink.navy }}
          >
            {infrastructureHero.title}
          </h1>
          <p
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed md:text-lg"
            style={{ color: v1.ink.body }}
          >
            {infrastructureHero.subtitle}
          </p>
        </header>
      </section>

      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        {infrastructureCapabilities.map((capability, index) => (
          <div key={capability.id}>
            <InfrastructureCapabilitySection
              capability={capability}
              index={index}
            />
            {index < infrastructureCapabilities.length - 1 ? (
              <div className="h-8 md:h-10" aria-hidden />
            ) : null}
          </div>
        ))}
      </div>
    </PageShell>
  );
}
