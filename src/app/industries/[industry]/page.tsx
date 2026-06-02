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
import { contactHref } from "@/lib/site-navigation";
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
        description="Comprehensive packaging solutions tailored for this industry."
      />

      <section className="mx-auto max-w-[1380px] px-5 pb-12 md:px-8 md:pb-16">
        {imageSrc ? (
          <IndustryVisual
            slug={industry.slug}
            alt={industry.label}
            sizes="(max-width: 1024px) 100vw, 66vw"
            aspectClassName="aspect-[16/9] max-h-[min(48vh,440px)]"
            className="mb-6 md:mb-8"
          />
        ) : null}

        {detail ? (
          <p
            className="mb-6 max-w-4xl text-base leading-relaxed md:mb-8 md:text-lg"
            style={{ color: v1.ink.body }}
          >
            {detail.overview}
          </p>
        ) : null}

        {detail ? <IndustryDetailBlocks detail={detail} /> : null}

        {detail ? (
          <div className="mb-8 grid grid-cols-1 gap-4 md:mb-10 md:grid-cols-2">
            <article
              className="rounded-2xl p-6"
              style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
            >
              <h2
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: v1.green.primary }}
              >
                Industry-Specific Challenges
              </h2>
              <ul className="mt-4 space-y-2.5">
                {detail.industrySpecificChallenges.map((item) => (
                  <li key={item} className="text-sm leading-relaxed" style={{ color: v1.ink.body }}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article
              className="rounded-2xl p-6"
              style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
            >
              <h2
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: v1.green.primary }}
              >
                Why Trishala
              </h2>
              <p className="mt-4 text-sm leading-relaxed md:text-base" style={{ color: v1.ink.body }}>
                {detail.whyTrishala}
              </p>
              <Link
                href={contactHref}
                className="mt-6 inline-flex rounded-full px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ background: v1.green.primary }}
              >
                {detail.contactCta}
              </Link>
            </article>
          </div>
        ) : null}

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {industry.segments.map((segment) => (
            <li key={segment.slug}>
              <Link
                href={segmentHref(industry.slug, segment.slug)}
                className="flex min-h-[108px] items-center rounded-2xl px-6 py-6 text-lg font-bold transition-colors hover:text-[#00B140]"
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
