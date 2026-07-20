import Link from "next/link";
import { companyBrochureHref } from "@/data/digital-card-content";
import { v1 } from "@/lib/v1-tokens";

export default function BrochureSection() {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="max-w-4xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: v1.green.primary }}>
          Downloads
        </p>
        <h2
          className="mt-3 text-[clamp(1.55rem,2.8vw,2.15rem)] font-extrabold tracking-[-0.04em]"
          style={{ color: v1.ink.navy }}
        >
          Company Brochure
        </h2>
        <div className="mt-5 flex flex-col items-start gap-4 rounded-2xl bg-white p-6" style={{ boxShadow: v1.shadow.soft }}>
          <p className="max-w-2xl text-base leading-relaxed" style={{ color: v1.ink.body }}>
            Download the company brochure for a concise overview of Trishala Laminates, its capabilities, and manufacturing strengths.
          </p>
          <Link
            href={companyBrochureHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: v1.green.primary }}
          >
            Download Company Brochure
          </Link>
        </div>
      </div>
    </section>
  );
}
