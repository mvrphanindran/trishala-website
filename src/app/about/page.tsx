import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageShell from "@/components/site/PageShell";
import AboutPageContent from "@/sections/about/AboutPageContent";

export const metadata: Metadata = pageMetadata({
  title: "About Us: 20+ Years in Flexible Packaging",
  description:
    "Trishala Laminates has made flexible packaging since 2011, with industry roots since 2003: 250+ people, a 1,00,000 sq ft plant in Telangana and 800+ MT monthly output.",
  path: "/about",
  keywords: ["flexible packaging company India", "laminates manufacturer Hyderabad", "about Trishala Laminates"],
});

export default function AboutPage() {
  return (
    <PageShell warm>
      <AboutPageContent />
    </PageShell>
  );
}
