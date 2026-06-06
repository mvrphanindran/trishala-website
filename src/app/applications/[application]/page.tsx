import { notFound } from "next/navigation";
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

export default async function ApplicationPage({ params }: ApplicationPageProps) {
  const { application: slug } = await params;
  const content = getPackagingApplicationContent(slug);

  if (!content) {
    notFound();
  }

  return (
    <PageShell warm>
      <PackagingApplicationDetail content={content} />
    </PageShell>
  );
}
