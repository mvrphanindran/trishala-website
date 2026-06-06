import Image from "next/image";
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

        <header className="relative mx-auto max-w-[1380px] px-5 pb-10 pt-24 text-center md:px-8 md:pb-12 md:pt-28 lg:pb-14 lg:pt-32">
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
        <div className="space-y-4 md:space-y-6">
          {infrastructureCapabilities.map((capability, index) => (
            <InfrastructureCapabilitySection
              key={capability.id}
              capability={capability}
              index={index}
            />
          ))}
        </div>

        <section id="manufacturing-unit" className="pb-10 pt-8 md:pb-12 md:pt-10 lg:pb-16">
          <h2
            className="text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold tracking-[-0.04em]"
            style={{ color: v1.ink.navy }}
          >
            Our Manufacturing Unit
          </h2>
          <div className="relative mt-5 aspect-[21/9] w-full overflow-hidden md:mt-6">
            <Image
              src="/images/capabilities/factory.png"
              alt="Trishala manufacturing unit"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </section>
      </div>
    </PageShell>
  );
}
