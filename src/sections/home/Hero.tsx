import Link from "next/link";
import { brochureHref } from "@/lib/site-navigation";
import { packagingSolutionsHref } from "@/lib/packaging-solutions-navigation";
import { v1 } from "@/lib/v1-tokens";

const HERO_BG = "/images/hero/hero-background.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundRepeat: "no-repeat",
          // Preserve the image aspect ratio and avoid zoom/crop behavior.
          backgroundSize: "min(72vw, 980px) auto",
          // Shift artwork further right while keeping it fully visible.
          backgroundPosition: "right 2% center",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.16) 35%, rgba(255,255,255,0.30) 100%)",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 72% 54% at 50% 42%, rgba(255,255,255,0.10) 0%, transparent 72%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 px-5 py-14 md:px-8 md:py-16 lg:py-20">
        <div className="md:ml-[8%] md:w-[480px] lg:w-[520px]">
          <h1
            className="max-w-[38rem] text-left text-[clamp(2.25rem,5vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.04em]"
            style={{ color: v1.ink.navy }}
          >
            This Time,
            <br />
            Judge A Book
            <br />
            <span style={{ color: v1.green.primary }}>By Its Cover</span>
          </h1>

          <p
            className="mt-6 max-w-[30rem] text-left text-base leading-relaxed md:mt-8 md:text-lg"
            style={{ color: v1.ink.body }}
          >
            Packaging is the first conversation between your brand and your
            customer. We engineer flexible packaging solutions that create
            impact, protect products and build trust.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-start gap-4 md:mt-10">
            <Link
              href={brochureHref}
              className="inline-flex rounded-full px-7 py-3 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{
                background: v1.green.primary,
                boxShadow: v1.shadow.card,
              }}
            >
              Download Brochure
            </Link>
            <Link
              href={packagingSolutionsHref}
              className="inline-flex rounded-full px-7 py-3 text-sm font-bold transition-all hover:shadow-md"
              style={{
                color: v1.ink.navy,
                background: "rgba(255,255,255,0.85)",
                boxShadow: v1.shadow.soft,
              }}
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
