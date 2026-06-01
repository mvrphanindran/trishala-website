import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";
import { qualityPillars } from "@/lib/catalog";
import { v1 } from "@/lib/v1-tokens";

export default function QualityPage() {
  return (
    <PageShell>
      <PageIntro
        label="Quality"
        title="Assurance At Every Stage"
        description="Rigorous control from substrate to finished pack."
      />

      <section className="mx-auto max-w-[1380px] px-5 pb-28 md:px-8 md:pb-40">
        <div className="grid grid-cols-1 gap-px md:grid-cols-2">
          {qualityPillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="flex min-h-[280px] flex-col justify-between p-10 md:p-14"
              style={{
                background: index % 2 === 0 ? v1.ivory.rich : v1.ivory.base,
                border: `1px solid ${v1.silver.hairline}`,
              }}
            >
              <span
                className="text-[11px] font-bold uppercase tracking-[0.28em]"
                style={{ color: v1.green.primary }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2
                  className="text-2xl font-extrabold tracking-tight md:text-3xl"
                  style={{ color: v1.ink.navy }}
                >
                  {pillar.title}
                </h2>
                <p
                  className="mt-4 max-w-sm text-sm leading-relaxed"
                  style={{ color: v1.ink.muted }}
                >
                  {pillar.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-16 flex min-h-[320px] items-end border p-10 md:mt-24 md:min-h-[400px] md:p-14"
          style={{
            borderColor: v1.silver.hairline,
            background: `linear-gradient(160deg, ${v1.ivory.rich} 0%, ${v1.ivory.panel} 100%)`,
          }}
        >
          <p
            className="max-w-lg text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Consistency you can certify.
            <br />
            <span style={{ color: v1.green.primary }}>Batch after batch.</span>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
