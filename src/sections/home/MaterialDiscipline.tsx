import { HOME_IMAGES } from "@/sections/home/home-images";
import HomeImageSlot from "@/sections/home/HomeImageSlot";
import { v1 } from "@/lib/v1-tokens";

export default function MaterialDiscipline() {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-24"
      style={{ background: v1.ivory.rich }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: v1.silver.gradient, opacity: 0.5 }}
      />

      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12">
          <div>
            <h2
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em]"
              style={{ color: v1.ink.navy }}
            >
              Built With
              <br />
              Material Discipline
            </h2>

            <p
              className="mt-6 max-w-md text-base leading-relaxed"
              style={{ color: v1.ink.body }}
            >
              Lean film structures.
              <br />
              Optimized material usage.
              <br />
              Packaging engineered for product protection and operational
              consistency.
            </p>
          </div>

          <div
            className="relative min-h-[320px] overflow-hidden md:min-h-[420px] lg:min-h-[520px]"
            style={{
              border: `1px solid ${v1.silver.hairline}`,
              background: v1.ivory.panel,
            }}
          >
            <HomeImageSlot
              src={HOME_IMAGES.materialDiscipline}
              alt="Flexible packaging formats"
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="p-4 md:p-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
