"use client";

import { useRef } from "react";
import IndustriesShowcase from "@/components/industries/IndustriesShowcase";
import { v1 } from "@/lib/v1-tokens";

export default function IndustriesWeServe() {
  const railRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (direction: "left" | "right") => {
    const node = railRef.current;
    if (!node) return;

    const containerWidth = node.clientWidth || node.offsetWidth || 0;
    const firstChild =
      node.children && (node.children[0] as HTMLElement | undefined);
    const childWidth = firstChild?.clientWidth ?? 0;

    const amount = Math.max(
      260,
      Math.round(containerWidth * 0.6 || childWidth || 260),
    );

    node.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-7 md:py-9 lg:py-11">
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

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll industries left"
            onClick={() => scrollByCards("left")}
            className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-[0_12px_28px_rgba(11,27,77,0.14)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-[#00B140] active:scale-95 md:h-11 md:w-11 md:-translate-x-1/2"
            style={{ color: v1.ink.navy }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M14.5 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="min-w-0">
            <IndustriesShowcase
              layout="rail"
              showLabels={false}
              railRef={railRef}
            />
          </div>

          <button
            type="button"
            aria-label="Scroll industries right"
            onClick={() => scrollByCards("right")}
            className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-[0_12px_28px_rgba(11,27,77,0.14)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-[#00B140] active:scale-95 md:h-11 md:w-11 md:translate-x-1/2"
            style={{ color: v1.ink.navy }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M9.5 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
