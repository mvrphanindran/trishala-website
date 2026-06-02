import AboutHashScroll from "@/components/about/AboutHashScroll";
import PageIntro from "@/components/site/PageIntro";
import { v1 } from "@/lib/v1-tokens";
import { useMemo, useState } from "react";
import Image from "next/image";

const values = [
  {
    title: "Operational Excellence",
    body: "Every process is driven by precision, consistency, and manufacturing discipline to ensure dependable packaging performance.",
  },
  {
    title: "Customer Commitment",
    body: "Long-term relationships are built through responsiveness, reliability, and solution-oriented partnerships.",
  },
  {
    title: "Continuous Improvement",
    body: "Technology upgrades, process refinement, and workforce development remain central to our growth journey.",
  },
  {
    title: "Quality Without Compromise",
    body: "Every packaging structure is monitored and evaluated to meet performance expectations and industry standards.",
  },
] as const;

const timeline = [
  {
    year: "2003",
    title: "Foundation",
    body: "Entered the flexible packaging industry with a strong focus on quality-driven manufacturing and packaging reliability.",
  },
  {
    year: "2011",
    title: "Trishala Established",
    body: "Trishala Laminates was established with advanced printing and lamination capabilities for flexible packaging solutions.",
  },
  {
    year: "2014–2018",
    title: "Capacity & Capability Expansion",
    body: "Expanded manufacturing infrastructure, introduced advanced pouching solutions, and strengthened multi-industry packaging capabilities.",
  },
  {
    year: "2022",
    title: "Strengthening Operations",
    body: "Enhanced process systems, machinery infrastructure, and operational efficiency to support growing customer requirements.",
  },
  {
    year: "2024",
    title: "Scaling With Confidence",
    body: "Focused on scalable manufacturing growth, process consistency, and long-term industrial packaging partnerships.",
  },
] as const;

const achievements = [
  {
    title: "20+ Years of Experience",
    body: "Serving packaging requirements with operational expertise and manufacturing reliability.",
  },
  {
    title: "50+ Experts",
    body: "Skilled workforce supporting production, quality, and customer success.",
  },
  {
    title: "10,000+ Metric Tons Annual Production",
    body: "Scalable manufacturing capability supporting diverse packaging sectors.",
  },
  {
    title: "Assured Quality",
    body: "Continuous inspection, monitoring, and process control across every production stage.",
  },
] as const;

const galleryImages: readonly { src: string; alt: string }[] = [];

export default function AboutPageContent() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const items = useMemo(() => timeline, []);

  return (
    <>
      <AboutHashScroll />
      <PageIntro label="About Us" title="About Trishala" />

      <section className="py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <div className="space-y-5">
            <p className="text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
              Trishala Laminates is a leading flexible packaging manufacturer delivering
              high-performance packaging solutions for diverse industries across India.
              Built on operational consistency, manufacturing expertise, and
              customer-focused partnerships, the company specializes in printed rolls,
              laminated structures, and pouching solutions engineered for product
              protection, shelf appeal, and supply chain reliability.
            </p>
            <p className="text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
              With a strong manufacturing foundation, modern infrastructure, and a
              commitment to continuous improvement, Trishala serves brands across FMCG,
              agriculture, snacks, spices, tea &amp; coffee, personal care, household
              products, pet food, and specialty packaging segments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Our Values
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl p-7 md:p-8"
                style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
              >
                <h3
                  className="text-[11px] font-bold uppercase tracking-[0.24em]"
                  style={{ color: v1.green.primary }}
                >
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed" style={{ color: v1.ink.body }}>
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Our Journey
          </h2>

          <div className="mt-10 hidden lg:block" onMouseLeave={() => setActiveIndex(0)}>
            <div className="relative">
              <div
                className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
                style={{ background: v1.silver.hairline }}
                aria-hidden
              />

              <div className="grid grid-cols-5 items-center gap-6">
                {items.map((step, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div key={step.year} className="relative">
                      <button
                        type="button"
                        className="group mx-auto flex w-full flex-col items-center"
                        onMouseEnter={() => setActiveIndex(index)}
                        onFocus={() => setActiveIndex(index)}
                        aria-label={`${step.year}: ${step.title}`}
                      >
                        <span
                          className="mb-3 text-xs font-extrabold tracking-[0.18em]"
                          style={{ color: isActive ? v1.green.primary : v1.ink.muted }}
                        >
                          {step.year}
                        </span>
                        <span
                          className="relative grid h-5 w-5 place-items-center rounded-full transition-[transform,background-color] duration-300"
                          style={{
                            background: isActive ? v1.green.primary : "white",
                            border: `2px solid ${isActive ? v1.green.primary : v1.silver.hairline}`,
                            transform: isActive ? "scale(1.15)" : "scale(1)",
                          }}
                          aria-hidden
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: isActive ? "white" : v1.green.primary }}
                          />
                        </span>
                        <span
                          className="mt-3 text-center text-[13px] font-bold tracking-tight"
                          style={{ color: isActive ? v1.ink.navy : v1.ink.body }}
                        >
                          {step.title}
                        </span>
                      </button>

                      <div
                        className="pointer-events-none absolute left-1/2 top-full mt-7 w-[min(340px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl p-6 transition-[opacity,transform] duration-300"
                        style={{
                          background: v1.canvas,
                          boxShadow: v1.shadow.soft,
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? "translate(-50%,0)" : "translate(-50%,-8px)",
                        }}
                        aria-hidden={!isActive}
                      >
                        <p className="text-sm leading-relaxed" style={{ color: v1.ink.body }}>
                          {step.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <ol className="mt-8 space-y-5 lg:hidden">
            {items.map((step, index) => {
              const isOpen = index === activeIndex;
              return (
                <li key={step.year} className="relative pl-7">
                  <div
                    className="absolute left-2 top-0 h-full w-px"
                    style={{ background: v1.silver.hairline }}
                    aria-hidden
                  />
                  <button
                    type="button"
                    className="group flex w-full items-start gap-4 rounded-2xl p-6 text-left"
                    style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isOpen}
                  >
                    <span
                      className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full"
                      style={{
                        background: isOpen ? v1.green.primary : "white",
                        border: `2px solid ${isOpen ? v1.green.primary : v1.silver.hairline}`,
                      }}
                      aria-hidden
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: isOpen ? "white" : v1.green.primary }}
                      />
                    </span>
                    <span className="block">
                      <span
                        className="block text-sm font-bold tracking-[0.12em]"
                        style={{ color: v1.green.primary }}
                      >
                        {step.year}
                      </span>
                      <span
                        className="mt-1 block text-lg font-extrabold tracking-tight"
                        style={{ color: v1.ink.navy }}
                      >
                        {step.title}
                      </span>
                      <span
                        className="mt-3 block overflow-hidden text-sm leading-relaxed transition-[max-height,opacity] duration-300"
                        style={{
                          color: v1.ink.body,
                          maxHeight: isOpen ? "180px" : "0px",
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        {step.body}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Achievements
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl p-6 md:p-7"
                style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
              >
                <h3 className="text-lg font-extrabold leading-snug" style={{ color: v1.ink.navy }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: v1.ink.body }}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="brochure" className="scroll-mt-[88px] py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Brochure
          </h2>
          <div
            className="mt-7 flex min-h-[220px] items-center justify-center rounded-2xl p-8 md:mt-8"
            style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
          >
            <p className="text-sm" style={{ color: v1.ink.muted }}>
              Corporate brochure asset placeholder — PDF upload-ready area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
                style={{ color: v1.ink.navy }}
              >
                Gallery
              </h2>
              <p className="mt-2 text-sm md:text-base" style={{ color: v1.ink.muted }}>
                Inside Trishala Laminates
              </p>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
            {(galleryImages.length > 0 ? galleryImages : Array.from({ length: 6 })).map(
              (item, index) => {
                const src = typeof item === "object" ? item.src : undefined;
                const alt = typeof item === "object" ? item.alt : "Gallery image placeholder";
                const key = typeof item === "object" ? item.src : `placeholder-${index}`;

                return (
                  <div
                    key={key}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
                    style={{
                      background: v1.canvas,
                      border: `1px solid ${v1.silver.hairline}`,
                      boxShadow: v1.shadow.soft,
                    }}
                  >
                    {src ? (
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="absolute inset-0" />
                    )}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.03), 0 12px 35px rgba(15,23,42,0.12)" }}
                      aria-hidden
                    />
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section id="careers" className="scroll-mt-[88px] py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Careers at Trishala
          </h2>
          <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
            At Trishala Laminates, people are the foundation of our success. We
            continuously seek passionate professionals who value operational
            excellence, manufacturing innovation, teamwork, and long-term growth.
            Whether on the production floor, in quality assurance, engineering, sales,
            or administration, every individual contributes to building packaging
            solutions trusted across industries.
          </p>
          <p className="mt-4 text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
            Join us in shaping the future of flexible packaging through commitment,
            collaboration, and continuous learning.
          </p>
        </div>
      </section>
    </>
  );
}


