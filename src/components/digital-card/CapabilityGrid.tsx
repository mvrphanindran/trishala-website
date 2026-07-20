import { companyCapabilities } from "@/data/digital-card-content";
import { v1 } from "@/lib/v1-tokens";

export default function CapabilityGrid() {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="max-w-5xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: v1.green.primary }}>
          Capabilities
        </p>
        <h2
          className="mt-3 text-[clamp(1.55rem,2.8vw,2.15rem)] font-extrabold tracking-[-0.04em]"
          style={{ color: v1.ink.navy }}
        >
          Manufacturing Capability
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {companyCapabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#EBEEF2] bg-white p-5"
              style={{ boxShadow: v1.shadow.soft }}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.16em]" style={{ color: v1.green.primary }}>
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed md:text-[15px]" style={{ color: v1.ink.body }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
