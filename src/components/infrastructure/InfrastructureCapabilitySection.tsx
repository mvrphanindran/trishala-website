import Image from "next/image";
import type { InfrastructureCapability } from "@/lib/infrastructure-content";
import { v1 } from "@/lib/v1-tokens";

type InfrastructureCapabilitySectionProps = {
  capability: InfrastructureCapability;
  index: number;
};

function getLeadImage(capability: InfrastructureCapability) {
  const galleryImage = capability.gallery?.[0];

  return {
    src: capability.image ?? galleryImage?.src,
    alt: capability.title,
  };
}

function TechnicalPanel({ capability }: { capability: InfrastructureCapability }) {
  const rows = [
    { label: "Application", value: capability.spec.application },
    { label: "Process Type", value: capability.spec.processType },
    { label: "Output Capacity", value: capability.spec.capability },
    ...capability.details,
  ];

  return (
    <aside className="pl-0 md:pl-2">
      <p className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: v1.green.primary }}>
        Technical Information
      </p>
      <dl className="mt-4 grid gap-4">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-1 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-4">
            <dt className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: v1.ink.muted }}>
              {row.label}
            </dt>
            <dd className="text-sm font-semibold leading-snug md:text-[15px]" style={{ color: v1.ink.navy }}>
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

export default function InfrastructureCapabilitySection({
  capability,
  index,
}: InfrastructureCapabilitySectionProps) {
  const leadImage = getLeadImage(capability);

  return (
    <article className="py-7 md:py-9">
      <div className="min-w-0">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.28em]"
          style={{ color: v1.green.primary }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2
          className="mt-3 text-[clamp(1.45rem,2.5vw,2.1rem)] font-extrabold leading-[1.06] tracking-[-0.04em]"
          style={{ color: v1.ink.navy }}
        >
          {capability.title}
        </h2>
        <p
          className="mt-3 max-w-2xl text-[15px] leading-relaxed md:text-base"
          style={{ color: v1.ink.body }}
        >
          {capability.summary}
        </p>
      </div>

      <div className="mt-5 grid items-start gap-5 lg:grid-cols-[minmax(0,1.22fr)_minmax(340px,0.78fr)] lg:gap-8">
        <div
          className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[16/9]"
          style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F7F9FB 100%)" }}
        >
          {leadImage.src ? (
            <Image
              src={leadImage.src}
              alt={leadImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 68vw"
              className="object-contain p-2 md:p-4 lg:p-5"
              priority={index < 2}
            />
          ) : null}
        </div>

        <TechnicalPanel capability={capability} />
      </div>
    </article>
  );
}
