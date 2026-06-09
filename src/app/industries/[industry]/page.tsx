import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import IndustryVisual from "@/components/industries/IndustryVisual";
import PageShell from "@/components/site/PageShell";
import { getIndustryApplicationItems } from "@/lib/industry-application-links";
import { getIndustryImage } from "@/lib/industry-images";
import {
  getIndustryBySlug,
  industriesNavigation,
} from "@/lib/industries-navigation";
import { v1 } from "@/lib/v1-tokens";

type IndustryPageProps = {
  params: Promise<{ industry: string }>;
};

export function generateStaticParams() {
  return industriesNavigation.map((item) => ({ industry: item.slug }));
}

function ApplicationGallery({ industrySlug }: { industrySlug: string }) {
  const applications = getIndustryApplicationItems(industrySlug);

  if (!applications.length) {
    return null;
  }

  return (
    <section className="mx-auto max-w-[1380px] px-5 pb-12 md:px-8 md:pb-16">
      <div className="mb-5 md:mb-7">
        <p
          className="text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{ color: v1.green.primary }}
        >
          Packaging Applications
        </p>
        <h2
          className="mt-3 text-[clamp(1.35rem,2.6vw,1.95rem)] font-extrabold tracking-[-0.03em]"
          style={{ color: v1.ink.navy }}
        >
          Relevant Packaging Applications
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {applications.map((item) => (
          <Link key={item.href} href={item.href} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-3 text-center text-sm font-semibold leading-snug text-[#0B1B4D] md:text-[15px]">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { industry: industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);

  if (!industry) {
    notFound();
  }

  const imageSrc = getIndustryImage(industry.slug);

  return (
    <PageShell warm>
      <section className="mx-auto max-w-[1380px] px-5 pt-10 pb-10 md:px-8 md:pt-12 md:pb-12">
        {imageSrc ? (
          <IndustryVisual
            slug={industry.slug}
            alt={industry.label}
            sizes="(max-width: 1024px) 100vw, 100vw"
            aspectClassName="aspect-[16/9]"
            className="w-full"
            priority
          />
        ) : null}
      </section>

      <ApplicationGallery industrySlug={industry.slug} />
    </PageShell>
  );
}
