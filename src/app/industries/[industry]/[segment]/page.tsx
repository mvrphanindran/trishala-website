import Link from "next/link";
import { notFound } from "next/navigation";
import IndustryVisual from "@/components/industries/IndustryVisual";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";
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

  return (
    <PageShell warm>
      <PageIntro
        label={industry.label}
        title={segment.label}
        description="Packaging solutions tailored for this application."
      />

      <section className="mx-auto max-w-[1380px] px-5 pb-32 md:px-8 md:pb-40">
        {imageSrc ? (
          <IndustryVisual
            slug={industry.slug}
            alt={`${industry.label} packaging`}
            sizes="(max-width: 1024px) 100vw, 66vw"
            aspectClassName="aspect-[16/9] max-h-[min(48vh,440px)]"
            className="mb-10"
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
          className="mt-10 max-w-2xl text-lg leading-relaxed"
          style={{ color: v1.ink.body }}
        >
          Detailed content for {segment.label} will be published here.
        </p>
      </section>
    </PageShell>
  );
}
