import Link from "next/link";
import { notFound } from "next/navigation";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";
import {
  getIndustryBySlug,
  industriesNavigation,
  segmentHref,
} from "@/lib/industries-navigation";
import { v1 } from "@/lib/v1-tokens";

type IndustryPageProps = {
  params: Promise<{ industry: string }>;
};

export function generateStaticParams() {
  return industriesNavigation.map((item) => ({ industry: item.slug }));
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { industry: industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);

  if (!industry) {
    notFound();
  }

  return (
    <PageShell warm>
      <PageIntro
        label="Industries"
        title={industry.label}
        description="Select a segment to explore packaging applications."
      />

      <section className="mx-auto max-w-[1380px] px-5 pb-32 md:px-8 md:pb-40">
        <ul className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {industry.segments.map((segment) => (
            <li key={segment.slug}>
              <Link
                href={segmentHref(industry.slug, segment.slug)}
                className="flex min-h-[120px] items-center px-8 py-8 text-lg font-bold transition-colors hover:text-[#00B140]"
                style={{
                  color: v1.ink.navy,
                  background: v1.ivory.rich,
                  border: `1px solid ${v1.silver.hairline}`,
                }}
              >
                {segment.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
