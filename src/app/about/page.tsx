import Image from "next/image";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";
import { v1 } from "@/lib/v1-tokens";

const infrastructure = [
  {
    title: "Rotogravure Printing",
    image: "/images/hero/printing-machine.png",
  },
  {
    title: "Extrusion Line",
    image: "/images/hero/extrusion-machine.png",
  },
  {
    title: "Blown Film Line",
    image: "/images/hero/blownfilm-line.png",
  },
] as const;

const metrics = [
  { value: "10+", label: "Years" },
  { value: "500+", label: "SKUs" },
  { value: "9+", label: "Industries" },
] as const;

export default function AboutPage() {
  return (
    <PageShell warm>
      <PageIntro
        label="About Us"
        title="Manufacturing At Scale"
        description="Integrated capability across printing, lamination, and conversion."
      />

      <section className="mx-auto max-w-[1380px] px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid grid-cols-3 gap-8 border-y py-12 md:gap-16 md:py-16">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center md:text-left">
              <p
                className="text-3xl font-extrabold md:text-4xl"
                style={{ color: v1.green.primary }}
              >
                {metric.value}
              </p>
              <p
                className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ color: v1.ink.muted }}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="infrastructure"
        className="scroll-mt-32 border-t py-20 md:py-32"
        style={{
          borderColor: v1.silver.hairline,
          background: v1.ivory.base,
        }}
      >
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <p
            className="mb-12 text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: v1.green.primary }}
          >
            Infrastructure
          </p>

          <div className="flex flex-col gap-12 md:gap-16">
            {infrastructure.map((item, index) => (
              <article
                key={item.title}
                className={`grid items-stretch gap-0 overflow-hidden lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
                style={{ border: `1px solid ${v1.silver.hairline}` }}
              >
                <div className="relative min-h-[280px] md:min-h-[400px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="flex flex-col justify-center px-8 py-12 md:px-14"
                  style={{ background: v1.ivory.rich }}
                >
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.28em]"
                    style={{ color: v1.silver.dark }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl"
                    style={{ color: v1.ink.navy }}
                  >
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 py-20 md:px-8 md:py-28">
        <p
          className="max-w-2xl text-lg leading-relaxed md:text-xl"
          style={{ color: v1.ink.body }}
        >
          Trishala Laminates delivers premium flexible packaging structures for
          FMCG, food, and specialty applications—combining scale, precision, and
          presentation.
        </p>
      </section>
    </PageShell>
  );
}
