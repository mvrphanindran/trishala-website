"use client";

import AboutHashScroll from "@/components/about/AboutHashScroll";
import AboutVideo from "@/components/about/AboutVideo";
import PageIntro from "@/components/site/PageIntro";
import { brochureHref } from "@/lib/site-navigation";
import { v1 } from "@/lib/v1-tokens";
import Link from "next/link";
import { useMemo, useState } from "react";

const purposeCards = [
  {
    title: "Mission",
    body: "To provide reliable, high-quality and innovative flexible packaging through operational excellence, responsible manufacturing and customer-focused service.",
  },
  {
    title: "Vision",
    body: "To become the most trusted flexible packaging partner by delivering packaging solutions that elevate brands and create lasting value.",
  },
  {
    title: "Operational Excellence",
    body: "Every process is driven by precision, consistency, and manufacturing discipline to ensure dependable packaging performance.",
  },
  {
    title: "Customer Commitment",
    body: "Long-term relationships are built through responsiveness, reliability, and solution-oriented partnerships.",
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
    year: "2014-2018",
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

export default function AboutPageContent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const items = useMemo(() => timeline, []);

  return (
    <>
      <AboutHashScroll />
      <PageIntro label="About Us" title="About Trishala" />

      <section id="about-trishala" className="scroll-mt-[88px] py-8 md:py-10 lg:py-12">
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
            Our Journey
          </h2>

          <div className="mt-10 hidden lg:block" onMouseLeave={() => setActiveIndex(null)}>
            <div className="relative">
              <div
                className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2"
                style={{ background: v1.silver.hairline }}
                aria-hidden
              />

              <div className="grid grid-cols-5 items-center gap-6">
                {items.map((step, index) => {
                  const isActive = index === activeIndex;
                  const isFirst = index === 0;
                  const isLast = index === items.length - 1;
                  const tooltipPositionClass = isFirst
                    ? "left-0"
                    : isLast
                      ? "right-0"
                      : "left-1/2";
                  const tooltipTransform = isActive
                    ? isFirst || isLast
                      ? "translateY(0)"
                      : "translate(-50%,0)"
                    : isFirst || isLast
                      ? "translateY(-8px)"
                      : "translate(-50%,-8px)";
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
                        className={`pointer-events-none absolute top-full mt-7 w-[min(340px,calc(100vw-2rem))] rounded-2xl p-6 transition-[opacity,transform] duration-300 ${tooltipPositionClass}`}
                        style={{
                          background: v1.canvas,
                          boxShadow: v1.shadow.soft,
                          opacity: isActive ? 1 : 0,
                          transform: tooltipTransform,
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

      <section className="pt-4 pb-8 md:pt-5 md:pb-10 lg:pt-6 lg:pb-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {purposeCards.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl p-7 md:p-8"
                style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
              >
                <h3
                  className="text-[clamp(0.95rem,1.3vw,1.05rem)] font-bold uppercase tracking-[0.14em]"
                  style={{ color: v1.green.primary }}
                >
                  {value.title}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed md:text-[17px] lg:text-[18px]" style={{ color: v1.ink.body }}>
                  {value.body}
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
            className="mt-7 flex flex-col items-start justify-center rounded-2xl p-8 md:mt-8"
            style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
          >
            <p className="max-w-2xl text-base leading-relaxed" style={{ color: v1.ink.body }}>
              View the Trishala Laminates company brochure for an overview of
              capabilities, packaging formats, and manufacturing strengths.
            </p>
            <Link
              href={brochureHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full px-7 py-3 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{
                background: v1.green.primary,
                boxShadow: v1.shadow.card,
              }}
            >
              Company Brochure
            </Link>
          </div>
        </div>
      </section>

      <AboutVideo />
    </>
  );
}
