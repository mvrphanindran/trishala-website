"use client";

import Image from "next/image";
import { useRef } from "react";
import { packagingSolutionSections } from "@/lib/packaging-solutions-content";
import { v1 } from "@/lib/v1-tokens";

const carouselItems = packagingSolutionSections.map((section) => ({
  label: section.group === "rolls" ? "Laminated Rolls" : section.title,
  image: section.image ?? "",
}));

export default function PackagingSolutionsCarousel() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (direction: "left" | "right") => {
    const node = railRef.current;
    if (!node) return;
    const amount = Math.max(260, Math.round(node.clientWidth * 0.72));
    node.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-6 md:py-8 lg:py-10">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="mb-4 md:mb-5">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: v1.green.primary }}
          >
            Solutions
          </p>
          <h2
            className="mt-2 text-[clamp(1.35rem,2.8vw,2.05rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Flexible formats built for production and shelf presence.
          </h2>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll packaging solutions left"
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

          <div
            ref={railRef}
            className="flex gap-3 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-4 md:px-7 [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {carouselItems.map((item) => (
              <article
                key={item.label}
                className="group shrink-0 snap-start w-[min(58vw,210px)] md:w-[200px] lg:w-[220px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex flex-col items-center">
                  <div className="relative h-[180px] w-full md:h-[195px] lg:h-[210px]">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="(max-width: 768px) 58vw, 220px"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <h3 className="mt-2 text-center text-sm font-semibold leading-snug text-[#0B1B4D] md:text-[15px]">
                    {item.label}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll packaging solutions right"
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
