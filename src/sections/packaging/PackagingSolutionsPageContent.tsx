"use client";

import AnchorHashScroll from "@/components/site/AnchorHashScroll";
import PageIntro from "@/components/site/PageIntro";
import { v1 } from "@/lib/v1-tokens";

const pouchSections = [
  {
    id: "center-seal",
    title: "Center Seal Pouch",
    description:
      "Reliable center-seal format built for efficient filling and dependable sealing consistency.",
    applications: ["Snacks", "Spices", "Agriculture inputs"],
  },
  {
    id: "three-side-seal",
    title: "Three Side Seal Pouch",
    description:
      "Compact pouch for controlled quantities with high seal integrity and excellent print visibility.",
    applications: ["Spices", "Premixes", "Personal care sachets"],
  },
  {
    id: "standup-pouch",
    title: "Stand Up Pouch",
    description:
      "Shelf-ready pouch format designed for premium presentation and product convenience.",
    applications: ["Dry fruits", "Tea & coffee", "Household refills"],
  },
  {
    id: "zipper",
    title: "Zipper Pouch",
    description:
      "Reclosable pouch structure supporting freshness retention and repeated consumer use.",
    applications: ["Dry fruits", "Pet treats", "Nutritional mixes"],
  },
  {
    id: "gusset",
    title: "Gusset Pouch",
    description:
      "High-capacity pouch design suitable for heavier fills and improved shelf stability.",
    applications: ["Rice", "Pet food", "Agriculture products"],
  },
  {
    id: "reusable",
    title: "Reusable Pouch",
    description:
      "Durable reusable format tailored for repeat handling and long-use product categories.",
    applications: ["Household products", "Personal care", "Pet nutrition"],
  },
  {
    id: "handled",
    title: "Handled Pouch",
    description:
      "Convenience-focused pouch with easy carry handling for larger pack sizes.",
    applications: ["Bulk household packs", "Pet food", "Family-size packs"],
  },
  {
    id: "3d-pouch",
    title: "3D Pouch",
    description:
      "Distinctive pouch format that supports premium shelf differentiation and brand recall.",
    applications: ["Premium retail", "Specialty products", "Promotional packs"],
  },
] as const;

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex min-h-[220px] items-center justify-center rounded-2xl border-2 border-dashed p-6 md:min-h-[260px]"
      style={{ borderColor: v1.silver.hairline, background: v1.canvas }}
    >
      <div className="text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
          Image To Be Added
        </p>
        <p className="mt-2 text-sm font-semibold" style={{ color: v1.ink.navy }}>
          {label}
        </p>
      </div>
    </div>
  );
}

export default function PackagingSolutionsPageContent() {
  return (
    <>
      <AnchorHashScroll />

      <PageIntro
        label="Packaging Solutions"
        title="Packaging Solutions"
        description="Flexible packaging formats engineered for product protection, operational efficiency, shelf appeal, and market performance."
        align="center"
      />

      <div className="mx-auto max-w-[1380px] px-5 pb-14 md:px-8 md:pb-16">
        <section id="printed-rolls" className="scroll-mt-[88px] py-5 md:py-7">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Printed Rolls
          </h2>
          <div className="mt-5 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.1fr_1fr]">
            <ImagePlaceholder label="[ Printed Rolls Image Placeholder ]" />
            <div>
              <p className="text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
                High-quality printed flexible packaging rolls manufactured for
                automated packaging applications across FMCG, food, agriculture,
                household, and personal care industries.
              </p>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
                Applications
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-1 text-sm" style={{ color: v1.ink.body }}>
                <li>Snacks</li>
                <li>Spices</li>
                <li>Tea &amp; Coffee</li>
                <li>Agriculture</li>
                <li>Household Products</li>
                <li>Personal Care</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="laminated-rolls" className="scroll-mt-[88px] py-5 md:py-7">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Laminated Rolls
          </h2>
          <div className="mt-5 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.1fr_1fr]">
            <ImagePlaceholder label="[ Laminated Rolls Image Placeholder ]" />
            <div>
              <p className="text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
                Multi-layer laminated structures designed to provide barrier
                protection, seal integrity, product freshness, and process
                consistency.
              </p>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
                Applications
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-1 text-sm" style={{ color: v1.ink.body }}>
                <li>Frozen Foods</li>
                <li>Rice Packaging</li>
                <li>Dry Fruits</li>
                <li>Beverage Powders</li>
                <li>FMCG Packaging</li>
              </ul>
            </div>
          </div>
        </section>

        {pouchSections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-[88px] py-5 md:py-7">
            <h2
              className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
              style={{ color: v1.ink.navy }}
            >
              {section.title}
            </h2>
            <div className="mt-5 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.1fr_1fr]">
              <ImagePlaceholder label={`[ ${section.title} Placeholder ]`} />
              <div>
                <p className="text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
                  {section.description}
                </p>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
                  Applications
                </p>
                <ul className="mt-2 grid grid-cols-1 gap-1 text-sm" style={{ color: v1.ink.body }}>
                  {section.applications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <section className="py-7 md:py-9">
          <div className="rounded-2xl p-6 md:p-8" style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}>
            <h2
              className="text-[clamp(1.25rem,2.5vw,1.8rem)] font-extrabold tracking-[-0.03em]"
              style={{ color: v1.ink.navy }}
            >
              Contact Trishala For Packaging Solutions
            </h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: v1.ink.body }}>
              Connect with our team to discuss format selection, structure guidance,
              and packaging development aligned to your product and market needs.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
