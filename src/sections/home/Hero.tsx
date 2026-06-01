import Link from "next/link";
import TextureBackdrop from "@/components/site/TextureBackdrop";
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
          background: `radial-gradient(ellipse 50% 45% at 50% 20%, ${v1.green.soft}, transparent 62%)`,
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-5 py-12 text-center md:px-8 md:py-16 lg:py-20">
        <h1
          className="mx-auto max-w-4xl text-[clamp(2.25rem,5vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.04em]"
          style={{ color: v1.ink.navy }}
        >
          This Time,
          <br />
          Judge A Book
          <br />
          <span style={{ color: v1.green.primary }}>By Its Cover.</span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:mt-8 md:text-lg"
          style={{ color: v1.ink.body }}
        >
          Premium flexible packaging solutions engineered for performance,
          consistency and reliability.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10">
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
    </section>
  );
}
