import Link from "next/link";
import { brochureHref } from "@/lib/site-navigation";
import { packagingSolutionsHref } from "@/lib/packaging-solutions-navigation";
import { v1 } from "@/lib/v1-tokens";
import HeroMotion from "./HeroMotion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-[1380px] items-center gap-8 px-5 py-14 md:grid-cols-2 md:gap-6 md:px-8 md:py-16 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:gap-8 lg:py-16 xl:grid-cols-[minmax(0,540px)_minmax(0,1fr)] xl:gap-16">
        <div className="lg:pl-[6%]">
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
              target="_blank"
              rel="noopener noreferrer"
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

        <div className="mx-auto w-full max-w-[560px] md:max-w-none">
          <HeroMotion />
        </div>
      </div>
    </section>
  );
}
