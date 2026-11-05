import type { MetadataRoute } from "next";
import { industriesNavigation } from "@/lib/industries-navigation";
import { getPackagingApplicationItems } from "@/lib/packaging-applications-registry";
import { SITE_URL } from "@/lib/seo";

/** Every public page, so search engines and AI crawlers can find them all. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
    images?: string[],
  ): MetadataRoute.Sitemap[number] => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
    ...(images ? { images: images.map((src) => `${SITE_URL}${src}`) } : {}),
  });

  return [
    page("/", 1, "weekly"),
    page("/packaging-solutions", 0.9, "weekly"),
    page("/about", 0.9),
    page("/industries", 0.9),
    page("/infrastructure", 0.8),
    page("/quality", 0.8),
    page("/structures", 0.7),
    page("/sustainable-practices", 0.6),
    page("/contact", 0.8),
    ...getPackagingApplicationItems().map((item) =>
      page(`/applications/${item.slug}`, 0.8, "monthly", [item.image]),
    ),
    ...industriesNavigation.map((industry) => page(`/industries/${industry.slug}`, 0.8)),
    ...industriesNavigation.flatMap((industry) =>
      industry.segments.map((segment) => page(`/industries/${industry.slug}/${segment.slug}`, 0.6)),
    ),
  ];
}
