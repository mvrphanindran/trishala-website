import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";
import { industries } from "@/lib/catalog";
import { v1 } from "@/lib/v1-tokens";

export default function IndustriesPage() {
  return (
    <PageShell warm>
      <PageIntro
        label="Industries"
        title="Markets We Serve"
        description="Flexible packaging across high-demand consumer categories."
      />

      <section className="mx-auto max-w-[1380px] px-5 pb-32 md:px-8 md:pb-40">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((name, index) => (
            <article
              key={name}
              className="flex min-h-[200px] flex-col justify-end p-10 md:min-h-[240px]"
              style={{
                background:
                  index % 2 === 0 ? v1.ivory.rich : v1.ivory.base,
                border: `1px solid ${v1.silver.hairline}`,
              }}
            >
              <span
                className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em]"
                style={{ color: v1.green.primary }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2
                className="text-xl font-extrabold tracking-tight md:text-2xl"
                style={{ color: v1.ink.navy }}
              >
                {name}
              </h2>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
