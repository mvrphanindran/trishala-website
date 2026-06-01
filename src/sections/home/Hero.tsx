import Link from "next/link";
import TextureBackdrop from "@/components/site/TextureBackdrop";
import HeroVisual from "@/sections/home/HeroVisual";
import { v1 } from "@/lib/v1-tokens";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100dvh-72px)] flex-col overflow-hidden lg:min-h-[calc(100dvh-80px)]"
      style={{ background: v1.ivory.base }}
    >
      <TextureBackdrop variant="hero" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 55% 50% at 88% 40%, ${v1.green.soft}, transparent 58%)`,
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1380px] flex-1 items-center px-5 py-10 md:px-8 md:py-14 lg:grid lg:grid-cols-[42%_58%] lg:gap-8 lg:py-16">
        <div className="flex flex-col justify-center lg:pr-6">
          <h1
            className="text-[clamp(2.25rem,4.8vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em]"
            style={{ color: v1.ink.navy }}
          >
            This Time,
            <br />
            Judge A Product
            <br />
            <span style={{ color: v1.green.primary }}>By Its Packaging.</span>
          </h1>

          <p
            className="mt-6 max-w-md text-base leading-relaxed md:mt-8 md:text-lg"
            style={{ color: v1.ink.body }}
          >
            Premium flexible packaging solutions engineered for performance,
            consistency and reliability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full px-7 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{
                background: v1.green.primary,
                boxShadow: "0 10px 28px rgba(0, 177, 64, 0.2)",
              }}
            >
              Get Quote
            </Link>
            <Link
              href="/industries"
              className="inline-flex rounded-full border px-7 py-3 text-sm font-bold transition-colors hover:text-[#00B140]"
              style={{
                color: v1.ink.navy,
                borderColor: v1.silver.hairline,
              }}
            >
              Explore Industries
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-1 items-center lg:mt-0 lg:min-h-[min(72vh,760px)]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
