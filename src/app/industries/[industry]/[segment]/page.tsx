import Link from "next/link";
import { notFound } from "next/navigation";
import IndustryVisual from "@/components/industries/IndustryVisual";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";
import { getIndustryDetail } from "@/lib/industry-detail-content";
import { getIndustryImage } from "@/lib/industry-images";
import {
  getSegmentBySlug,
  industriesNavigation,
  industryHref,
} from "@/lib/industries-navigation";
import { v1 } from "@/lib/v1-tokens";

type SegmentPageProps = {
  params: Promise<{ industry: string; segment: string }>;
};

export function generateStaticParams() {
  return industriesNavigation.flatMap((industry) =>
    industry.segments.map((segment) => ({
      industry: industry.slug,
      segment: segment.slug,
    })),
  );
}

export default async function SegmentPage({ params }: SegmentPageProps) {
  const { industry: industrySlug, segment: segmentSlug } = await params;
  const match = getSegmentBySlug(industrySlug, segmentSlug);

  if (!match) {
    notFound();
  }

  const { industry, segment } = match;
  const imageSrc = getIndustryImage(industry.slug);
  const detail = getIndustryDetail(industry.slug);

  return (
    <PageShell warm>
      <PageIntro
        label={industry.label}
        title={segment.label}
        description="Application-focused packaging guidance aligned to product sensitivity, handling, and shelf-life objectives."
      />

      <section className="mx-auto max-w-[1380px] px-5 pb-12 md:px-8 md:pb-16">
        {imageSrc ? (
          <IndustryVisual
            slug={industry.slug}
            alt={`${industry.label} packaging`}
            sizes="(max-width: 1024px) 100vw, 66vw"
            aspectClassName="aspect-[16/9] max-h-[min(48vh,440px)]"
            className="mb-6"
          />
        ) : null}

        <Link
          href={industryHref(industry.slug)}
          className="text-sm font-bold uppercase tracking-[0.12em] transition-colors hover:text-[#00B140]"
          style={{ color: v1.green.primary }}
        >
          ← Back to {industry.label}
        </Link>
        <p
          className="mt-6 max-w-3xl text-base leading-relaxed md:text-lg"
          style={{ color: v1.ink.body }}
        >
          {segment.label} packaging requires stable sealing, format reliability,
          and structure selection aligned to product sensitivity, handling, and
          shelf-life objectives.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="rounded-2xl p-6" style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
              Packaging Requirements
            </h2>
            <ul className="mt-4 space-y-2">
              {(detail?.packagingRequirements ?? []).slice(0, 4).map((item) => (
                <li key={item} className="text-sm" style={{ color: v1.ink.body }}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl p-6" style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
              Key Benefits
            </h2>
            <ul className="mt-4 space-y-2">
              {(detail?.benefits ?? []).map((item) => (
                <li key={item} className="text-sm" style={{ color: v1.ink.body }}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
