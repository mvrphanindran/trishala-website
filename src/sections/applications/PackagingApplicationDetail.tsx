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
    <article
      className="h-fit rounded-2xl bg-white p-4 md:p-5"
      style={{ boxShadow: v1.shadow.soft }}
    >
      <h3
        className="text-[11px] font-bold uppercase tracking-[0.22em]"
        style={{ color: v1.green.primary }}
      >
        {title}
      </h3>
      <ul
        className="mt-4 space-y-2.5 text-sm leading-snug md:text-[15px]"
        style={{ color: v1.ink.body }}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function PackagingApplicationDetail({
  content,
}: PackagingApplicationDetailProps) {
  return (
    <div className="pb-14 md:pb-20">
      <section className="mx-auto max-w-[1380px] px-5 pt-8 md:px-8 md:pt-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-12">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] lg:max-w-[500px]">
            <Image
              src={content.application.image}
              alt={content.application.title}
              fill
              sizes="(max-width: 1024px) min(100vw, 420px), 500px"
              className="object-contain"
              priority
            />
          </div>

          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.32em]"
              style={{ color: v1.green.primary }}
            >
              Packaging Application
            </p>
            <h1
              className="mt-2 text-[clamp(2rem,4vw,3.5rem)] font-extrabold tracking-[-0.05em]"
              style={{ color: v1.ink.navy }}
            >
              {content.heroTitle}
            </h1>
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: v1.ink.body }}
            >
              {content.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 pt-10 md:px-8 md:pt-14">
        <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
          <SpecCard
            title="Packaging Benefits"
            items={content.packagingBenefits}
          />
          <SpecCard
            title="Typical Material Structures"
            items={content.layerStructures}
          />
          <SpecCard
            title="Suitable Packaging Formats"
            items={content.suitableFormats}
          />
        </div>
      </section>
    </div>
  );
}
