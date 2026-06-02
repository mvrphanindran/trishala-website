import Link from "next/link";
import { notFound } from "next/navigation";
import IndustryDetailBlocks from "@/components/industries/IndustryDetailBlocks";
import IndustryVisual from "@/components/industries/IndustryVisual";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";
import { getIndustryDetail } from "@/lib/industry-detail-content";
import { getIndustryImage } from "@/lib/industry-images";
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

  const imageSrc = getIndustryImage(industry.slug);
  const detail = getIndustryDetail(industry.slug);

  return (
    <PageShell warm>
      <PageIntro
        label="Industries"
        title={industry.label}
        description="Select a segment to explore packaging applications."
      />

      <section className="mx-auto max-w-[1380px] px-5 pb-28 md:px-8 md:pb-36">
        {imageSrc ? (
          <IndustryVisual
            slug={industry.slug}
            alt={industry.label}
            sizes="(max-width: 1024px) 100vw, 66vw"
            aspectClassName="aspect-[16/9] max-h-[min(52vh,480px)]"
            className="mb-8 md:mb-10"
          />
        ) : null}

        {detail ? (
          <p
            className="mb-8 max-w-3xl text-base leading-relaxed md:mb-10 md:text-lg"
            style={{ color: v1.ink.body }}
          >
            {detail.description}
          </p>
        ) : null}

        {detail ? <IndustryDetailBlocks detail={detail} /> : null}

        <h2
          className="mb-6 text-[11px] font-bold uppercase tracking-[0.22em]"
          style={{ color: v1.green.primary }}
        >
          Segments
        </h2>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {industry.segments.map((segment) => (
            <li key={segment.slug}>
              <Link
                href={segmentHref(industry.slug, segment.slug)}
                className="flex min-h-[120px] items-center px-8 py-8 text-lg font-bold transition-colors hover:text-[#00B140]"
                style={{
                  color: v1.ink.navy,
                  background: v1.canvas,
                  boxShadow: v1.shadow.soft,
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
