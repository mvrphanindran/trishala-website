import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";
import { industriesNavigation, industryHref } from "@/lib/industries-navigation";
import { v1 } from "@/lib/v1-tokens";

export default function IndustriesPage() {
  return (
    <PageShell warm>
      <PageIntro
        label="Industries"
        title="Industries We Serve"
        description="Explore packaging applications by market."
      />

      <section className="mx-auto max-w-[1380px] px-5 pb-32 md:px-8 md:pb-40">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industriesNavigation.map((industry) => (
            <li key={industry.slug}>
              <Link
                href={industryHref(industry.slug)}
                className="flex min-h-[140px] items-end p-8 text-lg font-extrabold tracking-tight transition-colors hover:text-[#00B140]"
                style={{
                  color: v1.ink.navy,
                  background: v1.ivory.rich,
                  border: `1px solid ${v1.silver.hairline}`,
                }}
              >
                {industry.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
