import IndustriesShowcase from "@/components/industries/IndustriesShowcase";
import { v1 } from "@/lib/v1-tokens";

const whyTrishalaCards = [
  "Advanced manufacturing infrastructure",
  "Consistent print quality",
  "Multi-layer flexible packaging expertise",
  "Reliable production capacity",
  "Timely delivery",
  "Long-term customer partnerships",
] as const;

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

          <IndustriesShowcase layout="premium-gallery" showLabels={false} />
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: v1.green.primary }}
          >
            Why Trishala
          </p>
          <h2
            className="mt-2 text-[clamp(1.45rem,2.8vw,2.05rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Why Trishala
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {whyTrishalaCards.map((point) => (
              <article
                key={point}
                className="rounded-2xl p-4 md:p-5"
                style={{
                  background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
                  boxShadow: v1.shadow.soft,
                }}
              >
                <p
                  className="text-sm leading-relaxed md:text-[15px]"
                  style={{ color: v1.ink.body }}
                >
                  {point}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
