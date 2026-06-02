"use client";

import Link from "next/link";
import { useRef } from "react";
import IndustriesShowcase from "@/components/industries/IndustriesShowcase";
import { industriesHref } from "@/lib/site-navigation";
import { v1 } from "@/lib/v1-tokens";

export default function IndustriesWeServe() {
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
    <section className="relative py-7 md:py-9 lg:py-11">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            type="button"
            aria-label="Scroll industries left"
            onClick={() => scrollByCards("left")}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors hover:text-[#00B140]"
            style={{ color: v1.ink.navy, boxShadow: v1.shadow.soft }}
          >
            ←
          </button>
          <div className="min-w-0 flex-1">
            <IndustriesShowcase layout="rail" showLabels={false} railRef={railRef} />
          </div>
          <button
            type="button"
            aria-label="Scroll industries right"
            onClick={() => scrollByCards("right")}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors hover:text-[#00B140]"
            style={{ color: v1.ink.navy, boxShadow: v1.shadow.soft }}
          >
            →
          </button>
        </div>

        <div className="mt-5 flex justify-center md:mt-7">
          <Link
            href={industriesHref}
            className="inline-flex rounded-full px-8 py-3 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
            style={{
              background: v1.green.primary,
              boxShadow: v1.shadow.card,
            }}
          >
            More Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
