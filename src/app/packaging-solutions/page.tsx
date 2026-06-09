import type { Metadata } from "next";
import PageShell from "@/components/site/PageShell";
import PackagingSolutionsPageContent from "@/sections/packaging/PackagingSolutionsPageContent";

export const metadata: Metadata = {
  title: "Solutions",
};

export default function PackagingSolutionsPage() {
  return (
    <PageShell warm>
      <PackagingSolutionsPageContent />
    </PageShell>
  );
}
