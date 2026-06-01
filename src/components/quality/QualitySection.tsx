import Image from "next/image";
import type { QualitySectionContent } from "@/lib/quality-content";
import { v1 } from "@/lib/v1-tokens";

type QualitySectionProps = {
  section: QualitySectionContent;
  index: number;
};

function BulletList({
  intro,
  items,
}: {
  intro?: string;
  items: readonly string[];
}) {
  if (!items.length) return null;

  return (
    <div className="mt-8">
      {intro ? (
        <p
          className="text-sm font-semibold"
          style={{ color: v1.ink.navy }}
        >
          {intro}
        </p>
      ) : null}
      <ul className={intro ? "mt-4 space-y-3" : "space-y-3"}>
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-base leading-relaxed"
            style={{ color: v1.ink.body }}
          >
            <span
              className="mt-2.5 h-px w-5 shrink-0"
              style={{ background: v1.green.primary }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImagePanel({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative min-h-[280px] overflow-hidden md:min-h-[380px] lg:min-h-[440px]"
      style={{
        border: `1px solid ${v1.silver.hairline}`,
        background: v1.ivory.panel,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 45vw"
        className="object-contain p-4 md:p-6 lg:p-8"
      />
    </div>
  );
}

function ImageStack({
  gallery,
}: {
  gallery: NonNullable<QualitySectionContent["gallery"]>;
}) {
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
            alt={item.alt}
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

export default function QualitySection({ section, index }: QualitySectionProps) {
  const hasGallery = Boolean(section.gallery?.length);
  const imageFirst = index % 2 === 0;

  const media = hasGallery ? (
    <ImageStack gallery={section.gallery!} />
  ) : section.image ? (
    <ImagePanel src={section.image} alt={section.title} />
  ) : null;

  return (
    <article className="py-16 md:py-20 lg:py-24">
      <div
        className={`grid items-start gap-10 lg:gap-12 xl:gap-14 ${
          hasGallery
            ? "lg:grid-cols-[45%_55%]"
            : `lg:grid-cols-2 ${imageFirst ? "" : "lg:[&>div:first-child]:order-2"}`
        }`}
      >
        {media}

        <div>
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
            {section.title}
          </h2>
          <div className="mt-5 max-w-xl space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed"
                style={{ color: v1.ink.body }}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <BulletList intro={section.listIntro} items={section.listItems} />
          {section.closingParagraphs?.length ? (
            <div className="mt-8 max-w-xl space-y-4">
              {section.closingParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed"
                  style={{ color: v1.ink.body }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
