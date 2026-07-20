import { companyDescription, companyName } from "@/data/digital-card-content";
import { v1 } from "@/lib/v1-tokens";

export default function AboutCompany() {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="max-w-4xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: v1.green.primary }}>
          About Trishala
        </p>
        <h2
          className="mt-3 text-[clamp(1.55rem,2.8vw,2.15rem)] font-extrabold tracking-[-0.04em]"
          style={{ color: v1.ink.navy }}
        >
          {companyName}
        </h2>
        <div className="mt-4 space-y-4">
          {companyDescription.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
