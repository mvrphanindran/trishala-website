import Link from "next/link";
import TextureBackdrop from "@/components/site/TextureBackdrop";
import HeroVisual from "@/sections/home/HeroVisual";
import { v1 } from "@/lib/v1-tokens";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: v1.ivory.base }}
    >
      <TextureBackdrop variant="hero" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 55% 50% at 88% 40%, ${v1.green.soft}, transparent 58%)`,
        }}
      />

      <div className="relative mx-auto grid max-w-[1380px] items-center gap-8 px-5 py-10 md:gap-10 md:px-8 md:py-14 lg:grid-cols-[45%_55%] lg:gap-6 lg:py-16">
        <div className="flex flex-col justify-center lg:pr-4">
          <h1
            className="text-[clamp(2.25rem,4.8vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em]"
            style={{ color: v1.ink.navy }}
          >
            This time,
            <br />
            Judge a book
            <br />
            <span style={{ color: v1.green.primary }}>by its cover.</span>
          </h1>

          <p
            className="mt-6 max-w-sm text-base leading-relaxed md:mt-8 md:text-lg"
            style={{ color: v1.ink.body }}
          >
            Premium flexible packaging for global brands.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex w-fit rounded-full px-7 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 md:mt-10"
            style={{
              background: v1.green.primary,
              boxShadow: "0 10px 28px rgba(0, 177, 64, 0.2)",
            }}
          >
            View Products
          </Link>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
