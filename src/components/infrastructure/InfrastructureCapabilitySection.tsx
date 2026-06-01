import Image from "next/image";
import type { InfrastructureCapability } from "@/lib/infrastructure-content";
import { v1 } from "@/lib/v1-tokens";

type InfrastructureCapabilitySectionProps = {
  capability: InfrastructureCapability;
  index: number;
};

function InfoCards({ capability }: { capability: InfrastructureCapability }) {
  return (
    <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
      {capability.cards.map((card) => (
        <div
          key={card.title}
          className="p-5 md:p-6"
          style={{
            background: v1.ivory.rich,
            border: `1px solid ${v1.silver.hairline}`,
          }}
        >
          <h3
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: v1.green.primary }}
          >
            {card.title}
          </h3>
          <ul className="mt-3 space-y-2">
            {card.items.map((item) => (
              <li
                key={item}
                className="text-sm leading-snug"
                style={{ color: v1.ink.body }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function SectionHeader({
  capability,
  index,
}: {
  capability: InfrastructureCapability;
  index: number;
}) {
  return (
    <>
      <span
        className="text-[11px] font-bold uppercase tracking-[0.28em]"
        style={{ color: v1.green.primary }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h2
        className="mt-4 text-[clamp(1.5rem,2.8vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em]"
        style={{ color: v1.ink.navy }}
      >
        {capability.title}
      </h2>
      <p
        className="mt-5 max-w-xl text-base leading-relaxed"
        style={{ color: v1.ink.body }}
      >
        {capability.summary}
      </p>
    </>
  );
}

function ImageStack({ capability }: { capability: InfrastructureCapability }) {
  const gallery = capability.gallery ?? [];

  return (
    <div className="flex flex-col gap-4">
      {gallery.map((item, imageIndex) => (
        <div
          key={item.src}
          className="relative min-h-[200px] w-full overflow-hidden md:min-h-[220px] lg:min-h-[240px]"
          style={{
            border: `1px solid ${v1.silver.hairline}`,
            background: v1.ivory.panel,
          }}
        >
          <Image
            src={item.src}
            alt={item.caption}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-contain p-3 md:p-4 lg:p-5"
            priority={imageIndex === 0}
          />
        </div>
      ))}
    </div>
  );
}

export default function InfrastructureCapabilitySection({
  capability,
  index,
}: InfrastructureCapabilitySectionProps) {
  const hasGallery = Boolean(capability.gallery?.length);
  const imageFirst = index % 2 === 0;

  return (
    <article className="py-16 md:py-20 lg:py-24">
      <div
        className={`grid items-start gap-10 lg:gap-12 xl:gap-14 ${
          hasGallery
            ? "lg:grid-cols-[45%_55%]"
            : `lg:grid-cols-2 ${imageFirst ? "" : "lg:[&>div:first-child]:order-2"}`
        }`}
      >
        {hasGallery ? (
          <ImageStack capability={capability} />
        ) : capability.image ? (
          <div
            className="relative min-h-[280px] overflow-hidden md:min-h-[380px] lg:min-h-[440px]"
            style={{
              border: `1px solid ${v1.silver.hairline}`,
              background: v1.ivory.panel,
            }}
          >
            <Image
              src={capability.image}
              alt={capability.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4 md:p-6 lg:p-8"
              priority={index < 2}
            />
          </div>
        ) : null}

        <div>
          <SectionHeader capability={capability} index={index} />
          <div className="mt-8">
            <InfoCards capability={capability} />
          </div>
        </div>
      </div>
    </article>
  );
}
