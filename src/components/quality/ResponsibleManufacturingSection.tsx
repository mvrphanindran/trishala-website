import Image from "next/image";
import { v1 } from "@/lib/v1-tokens";

const highlights = [
  {
    title: "Optimized Material Utilization",
    body: "Focused planning and controlled conversion help reduce waste and improve resource use.",
  },
  {
    title: "Controlled Production Processes",
    body: "Measured operations support consistency, process discipline, and efficient output.",
  },
  {
    title: "Continuous Improvement Culture",
    body: "Ongoing review and refinement strengthen manufacturing performance over time.",
  },
] as const;

export default function ResponsibleManufacturingSection() {
  return (
    <section className="py-6 md:py-8 lg:py-10">
      <div className="grid items-center gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:gap-10">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F8FAFC] md:aspect-[16/10]">
          <Image
            src="/images/capabilities/factory.png"
            alt="Trishala manufacturing unit"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: v1.green.primary }}
          >
            Sustainable Solutions
          </p>
          <h2
            className="mt-3 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold tracking-[-0.04em]"
            style={{ color: v1.ink.navy }}
          >
            Responsible Manufacturing
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
            At Trishala Laminates, sustainability begins with responsible manufacturing. Through process optimization, efficient material utilization, production monitoring, and waste reduction initiatives, we continuously improve operational performance while supporting environmentally conscious manufacturing practices. Our commitment to quality, efficiency, and continuous improvement enables us to deliver reliable flexible packaging solutions while maintaining responsible production standards.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3 md:gap-5">
            {highlights.map((item) => (
              <div key={item.title} className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: v1.green.primary }}>
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed md:text-[15px]" style={{ color: v1.ink.body }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
