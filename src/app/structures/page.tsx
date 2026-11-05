import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";
import { laminateStructures } from "@/lib/catalog";
import { v1 } from "@/lib/v1-tokens";

function StructureVisual({ layers }: { layers: readonly string[] }) {
  return (
    <div className="flex h-full min-h-[200px] flex-col justify-center gap-3 px-8 py-10">
      {layers.map((layer, index) => (
        <div
          key={layer}
          className="flex items-center gap-4"
          style={{ opacity: 1 - index * 0.08 }}
        >
          <div
            className="h-10 flex-1 rounded-sm border"
            style={{
              background:
                index === 0
                  ? v1.silver.light
                  : index === layers.length - 1
                    ? v1.silver.light
                    : "#E2E6EC",
              borderColor: v1.silver.mid,
            }}
          />
          <span
            className="w-24 shrink-0 text-right text-[10px] font-bold uppercase tracking-[0.14em]"
            style={{ color: v1.ink.muted }}
          >
            {layer}
          </span>
        </div>
      ))}
    </div>
  );
}

export const metadata: Metadata = pageMetadata({
  title: "Laminate Structures: Multilayer Packaging Films",
  description:
    "Multilayer laminate structures such as PET/PE, BOPP/PE, PET/MET PET/PE and PET/ALU foil/PE, chosen for moisture, oxygen and light barrier in packaging.",
  path: "/structures",
  keywords: ["multilayer laminates", "laminate structures", "PET PE laminate", "BOPP laminate", "aluminium foil laminate", "barrier films"],
});

export default function StructuresPage() {
  return (
    <PageShell warm>
      <PageIntro
        label="Structures"
        title="Laminate Architecture"
        description="Barrier-ready film combinations for demanding applications."
      />

      <section className="mx-auto max-w-[1380px] px-5 pb-28 md:px-8 md:pb-40">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {laminateStructures.map((structure) => (
            <article
              key={structure.code}
              style={{
                border: `1px solid ${v1.silver.hairline}`,
                background: v1.ivory.base,
              }}
            >
              <StructureVisual layers={structure.layers} />
              <div
                className="border-t px-8 py-6"
                style={{ borderColor: v1.silver.hairline }}
              >
                <h2
                  className="text-xl font-extrabold tracking-tight md:text-2xl"
                  style={{ color: v1.ink.navy }}
                >
                  {structure.code}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
