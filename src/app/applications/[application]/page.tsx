import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/site/JsonLd";
import { breadcrumbJsonLd, listText, pageMetadata, serviceJsonLd, snippet } from "@/lib/seo";
import PageShell from "@/components/site/PageShell";
import PackagingApplicationDetail from "@/sections/applications/PackagingApplicationDetail";
import { getPackagingApplicationContent } from "@/lib/packaging-application-content";
import { getPackagingApplicationItems } from "@/lib/packaging-applications-registry";

type ApplicationPageProps = {
  params: Promise<{ application: string }>;
};

export function generateStaticParams() {
  return getPackagingApplicationItems().map((item) => ({ application: item.slug }));
}

export async function generateMetadata({ params }: ApplicationPageProps): Promise<Metadata> {
  const { application: slug } = await params;
  const content = getPackagingApplicationContent(slug);
  if (!content) return {};
  const name = content.application.title;
  return pageMetadata({
    title: `${name} Packaging: Pouches & Laminate Rolls`,
    description: snippet(
      `${content.intro} Available as ${listText(content.suitableFormats)} from Trishala Laminates, India.`,
    ),
    path: `/applications/${slug}`,
    image: content.application.image,
    keywords: [
      `${name.toLowerCase()} packaging`,
      `${name.toLowerCase()} pouches`,
      `${name.toLowerCase()} packaging manufacturer`,
      ...content.suitableFormats.map((f) => f.toLowerCase()),
      ...content.layerStructures,
    ],
  });
}

export default async function ApplicationPage({ params }: ApplicationPageProps) {
  const { application: slug } = await params;
  const content = getPackagingApplicationContent(slug);

  if (!content) {
    notFound();
  }

  return (
    <PageShell warm>
      <JsonLd
        data={breadcrumbJsonLd([
          ["Home", "/"],
          ["Packaging Solutions", "/packaging-solutions"],
          [content.application.title, `/applications/${slug}`],
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: `${content.application.title} packaging`,
          description: content.intro,
          path: `/applications/${slug}`,
        })}
      />
      <PackagingApplicationDetail content={content} />
    </PageShell>
  );
}
