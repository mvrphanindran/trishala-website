import { HOME_IMAGES } from "@/sections/home/home-images";
import HomeImageSlot from "@/sections/home/HomeImageSlot";
import { v1 } from "@/lib/v1-tokens";

const visuals = [
  {
    src: HOME_IMAGES.environmental.primary,
    alt: "Packaging film layers",
    className: "min-h-[280px] lg:min-h-[360px]",
    cover: true,
  },
  {
    src: HOME_IMAGES.environmental.secondary,
    alt: "Material structure detail",
    className: "min-h-[220px]",
    cover: true,
  },
  {
    src: HOME_IMAGES.environmental.detail,
    alt: "Responsible manufacturing materials",
    className: "min-h-[220px]",
    cover: true,
  },
] as const;

export default function EnvironmentalResponsibility() {
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
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12 lg:items-start">
          <div>
            <p
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em]"
              style={{ color: v1.green.primary }}
            >
              Responsible Manufacturing
            </p>

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
              Lean film structures. Measured resource use. Packaging engineered
              to protect product integrity.
            </p>

            <ul
              className="mt-8 space-y-3 border-t pt-8"
              style={{ borderColor: v1.silver.hairline }}
            >
              {["Film efficiency", "Layer optimization", "Process control"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em]"
                    style={{ color: v1.ink.muted }}
                  >
                    <span
                      className="h-px w-6 shrink-0"
                      style={{ background: v1.green.primary }}
                    />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div
              className={`relative overflow-hidden sm:col-span-2 ${visuals[0].className}`}
              style={{
                border: `1px solid ${v1.silver.hairline}`,
                background: v1.ivory.panel,
              }}
            >
              <HomeImageSlot
                src={visuals[0].src}
                alt={visuals[0].alt}
                objectFit="cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            {visuals.slice(1).map((visual) => (
              <div
                key={visual.src}
                className={`relative overflow-hidden ${visual.className}`}
                style={{
                  border: `1px solid ${v1.silver.hairline}`,
                  background: v1.ivory.panel,
                }}
              >
                <HomeImageSlot
                  src={visual.src}
                  alt={visual.alt}
                  objectFit="cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
