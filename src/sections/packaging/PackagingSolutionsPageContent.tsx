import IndustriesShowcase from "@/components/industries/IndustriesShowcase";
import { v1 } from "@/lib/v1-tokens";

export default function PackagingSolutionsPageContent() {
  return (
    <>
      <section className="mx-auto max-w-[1380px] px-5 pt-10 pb-8 md:px-8 md:pt-12 md:pb-10">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{ color: v1.green.primary }}
        >
          Solutions
        </p>
        <h1
          className="mt-4 text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.04em]"
          style={{ color: v1.ink.navy }}
        >
          Solutions
        </h1>
        <p
          className="mt-5 max-w-3xl text-base leading-relaxed md:text-lg"
          style={{ color: v1.ink.body }}
        >
          Flexible packaging solutions engineered for product protection,
          operational efficiency, shelf appeal, and market performance.
        </p>
      </section>

      <section id="industries-we-serve" className="py-6 md:py-8 lg:py-10">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <div className="mb-5 md:mb-7">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.32em]"
              style={{ color: v1.green.primary }}
            >
              Industries
            </p>
            <h2
              className="mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
              style={{ color: v1.ink.navy }}
            >
              Industries We Serve
            </h2>
          </div>

          <IndustriesShowcase layout="list" />
        </div>
      </section>
    </>
  );
}
