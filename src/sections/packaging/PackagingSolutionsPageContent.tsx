import Image from "next/image";
import AnchorHashScroll from "@/components/site/AnchorHashScroll";
import PageIntro from "@/components/site/PageIntro";
import { packagingSolutionSections } from "@/lib/packaging-solutions-content";
import { v1 } from "@/lib/v1-tokens";

export default function PackagingSolutionsPageContent() {
  return (
    <>
      <AnchorHashScroll />

      <PageIntro
        label="Packaging Solutions"
        title="Packaging Solutions"
        description="Printed laminate rolls and pouch formats engineered for performance and shelf impact."
        align="center"
      />

      <div className="mx-auto max-w-[1380px] px-5 pb-28 md:px-8 md:pb-36">
        <div className="flex flex-col gap-20 md:gap-28">
          {packagingSolutionSections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className={`scroll-mt-[88px] grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              {section.image ? (
                <div className="relative min-h-[280px] md:min-h-[400px] lg:min-h-[480px]">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4 md:p-6"
                    priority={index < 2}
                  />
                </div>
              ) : (
                <div
                  className="flex min-h-[200px] items-center justify-center rounded-2xl md:min-h-[400px]"
                  style={{
                    background: v1.canvas,
                    boxShadow: v1.shadow.soft,
                  }}
                >
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: v1.ink.muted }}
                  >
                    Visual — {section.title}
                  </span>
                </div>
              )}

              <div>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: v1.green.primary }}
                >
                  {section.group === "rolls" ? "Rolls" : "Pouches"}
                </span>
                <h2
                  className="mt-4 text-[clamp(1.5rem,3vw,2.75rem)] font-extrabold tracking-[-0.03em]"
                  style={{ color: v1.ink.navy }}
                >
                  {section.title}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
