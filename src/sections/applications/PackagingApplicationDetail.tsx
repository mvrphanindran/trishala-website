import Image from "next/image";
import { v1 } from "@/lib/v1-tokens";
import type { PackagingApplicationContent } from "@/lib/packaging-application-content";

type PackagingApplicationDetailProps = {
  content: PackagingApplicationContent;
};

function SpecCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <article className="rounded-2xl bg-white p-6 md:p-7" style={{ boxShadow: v1.shadow.soft }}>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm leading-snug md:text-[15px]" style={{ color: v1.ink.body }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function ProductTag({ label }: { label: string }) {
  return (
    <span
      className="inline-flex rounded-full px-4 py-2 text-sm font-medium"
      style={{
        background: "rgba(0, 177, 64, 0.06)",
        color: v1.ink.navy,
      }}
    >
      {label}
    </span>
  );
}

export default function PackagingApplicationDetail({ content }: PackagingApplicationDetailProps) {
  return (
    <div className="pb-14 md:pb-20">
      <section className="mx-auto max-w-[1380px] px-5 pt-8 md:px-8 md:pt-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-12">
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={content.application.image}
              alt={content.application.title}
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-contain"
              priority
            />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: v1.green.primary }}>
              Packaging Application
            </p>
            <h1
              className="mt-2 text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-[-0.05em]"
              style={{ color: v1.ink.navy }}
            >
              {content.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
              {content.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 pt-8 md:px-8 md:pt-12">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: v1.green.primary }}>
            Related Products
          </p>
          <h2 className="mt-2 text-[clamp(1.45rem,2.8vw,2.05rem)] font-extrabold tracking-[-0.03em]" style={{ color: v1.ink.navy }}>
            Related Products
          </h2>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {content.relatedProducts.map((item) => (
            <ProductTag key={item} label={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 pt-10 md:px-8 md:pt-14">
        <div className="grid gap-5 md:grid-cols-3">
          <SpecCard title="Packaging Requirements" items={content.packagingRequirements} />
          <SpecCard title="Recommended Materials" items={content.recommendedMaterials} />
          <SpecCard title="Typical Layer Structure" items={content.layerStructures} />
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <div
            className="grid gap-6 rounded-[28px] px-6 py-7 md:px-8 md:py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
            style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)" }}
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: v1.green.primary }}>
                Why Trishala For This Application?
              </p>
              <h2
                className="mt-2 text-[clamp(1.45rem,2.8vw,2.05rem)] font-extrabold tracking-[-0.03em]"
                style={{ color: v1.ink.navy }}
              >
                {content.whyTitle}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
                {content.whyIntro}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {content.whyPoints.map((point, index) => (
                <div key={point} className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed md:text-[15px]" style={{ color: v1.ink.body }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
