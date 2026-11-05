import type { Metadata } from "next";

/**
 * Single source of truth for search-engine and AI-search information:
 * company facts, keywords, per-page metadata and structured data (JSON-LD).
 */
export const SITE_URL = "https://www.trishalalaminates.in";
export const SITE_NAME = "Trishala Laminates";
export const LEGAL_NAME = "Trishala Laminates Private Limited";
export const OG_IMAGE = { url: "/og-image.jpg", width: 1731, height: 909 } as const;

export const company = {
  phone: "+91-9391002657",
  email: "naman@trishalalaminates.in",
  founded: "2011",
  industrySince: "2003",
  employees: 250,
  facilitySqFt: "100000",
  monthlyCapacity: "800+ metric tonnes per month",
  corporateOffice: {
    streetAddress: "Plot No. 16/A, IDA Nacharam Road No. 9, IDA Nacharam",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500076",
    addressCountry: "IN",
  },
  manufacturingUnit: {
    streetAddress: "Tuniki Bollaram",
    addressLocality: "Tuniki Bollaram",
    addressRegion: "Telangana",
    postalCode: "502279",
    addressCountry: "IN",
  },
} as const;

export const SITE_DESCRIPTION =
  "Trishala Laminates is a flexible packaging manufacturer in Hyderabad, India, making printed laminate rolls, laminated pouches, stand-up and zipper pouches, spout pouches and PE blown film for food, FMCG, agriculture, pet food and industrial brands.";

/** What the company makes and does: used for keywords and structured data. */
export const coreTopics = [
  "Flexible packaging",
  "Flexible laminates",
  "Laminated packaging",
  "Printed laminate rolls",
  "Laminated rolls",
  "Packaging films",
  "Multilayer laminates",
  "Barrier packaging",
  "Pouch manufacturing",
  "Stand-up pouches",
  "Zipper pouches",
  "Spout pouches",
  "Centre seal pouches",
  "Three side seal pouches",
  "Gusseted pouches",
  "Packaging covers",
  "Printed packaging covers",
  "Rotogravure printing",
  "Solvent-based lamination",
  "Solventless lamination",
  "Extrusion lamination",
  "PE blown film extrusion",
  "Food packaging",
  "FMCG packaging",
  "Snack packaging",
  "Spice packaging",
  "Tea and coffee packaging",
  "Dry fruit and nut packaging",
  "Pet food packaging",
  "Agriculture packaging",
  "Fertilizer and pesticide packaging",
  "Seed packaging",
  "Detergent and household packaging",
  "Custom printed packaging",
] as const;

export const siteKeywords = [
  "flexible packaging manufacturer",
  "flexible packaging company",
  "flexible packaging India",
  "flexible packaging Hyderabad",
  "laminate manufacturer",
  "flexible laminates manufacturer",
  "laminated packaging material",
  "printed laminate rolls",
  "laminated rolls manufacturer",
  "packaging laminate rolls",
  "packaging manufacturer India",
  "packaging company Hyderabad",
  "pouch manufacturer",
  "pouch manufacturing company",
  "laminated pouches manufacturer",
  "stand up pouch manufacturer",
  "zipper pouch manufacturer",
  "spout pouch manufacturer",
  "packaging covers manufacturer",
  "printed covers for packaging",
  "food packaging manufacturer",
  "snack packaging",
  "spices packaging pouches",
  "tea packaging",
  "coffee packaging",
  "pet food packaging",
  "agriculture packaging",
  "fertilizer packaging",
  "rotogravure printing",
  "PE blown film manufacturer",
  "multilayer laminates",
  "barrier packaging films",
  "custom printed packaging",
  "Trishala Laminates",
] as const;

type PageSeo = {
  title: string;
  description: string;
  /** path starting with "/" — becomes the canonical URL */
  path: string;
  keywords?: readonly string[];
  image?: string;
  /** use the title as-is, without "| Trishala Laminates" */
  absoluteTitle?: boolean;
};

/** Metadata for one page: title, description, canonical URL and share cards. */
export function pageMetadata({ title, description, path, keywords, image, absoluteTitle }: PageSeo): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const shareTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const images = image ? [{ url: image, alt: title }] : [{ ...OG_IMAGE, alt: SITE_NAME }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      url,
      title: shareTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: images.map((i) => i.url),
    },
  };
}

const ORG_ID = `${SITE_URL}/#organization`;

function postalAddress(a: Readonly<Record<string, string>>) {
  return { "@type": "PostalAddress", ...a };
}

/** Company + website structured data, included on every page. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "Manufacturer"],
        "@id": ORG_ID,
        name: SITE_NAME,
        legalName: LEGAL_NAME,
        alternateName: ["Trishala Laminates (P) Ltd", "Trishala"],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo/trishala-logo-v2.png`,
          width: 1360,
          height: 436,
        },
        image: `${SITE_URL}${OG_IMAGE.url}`,
        description: SITE_DESCRIPTION,
        foundingDate: company.founded,
        numberOfEmployees: { "@type": "QuantitativeValue", value: company.employees },
        email: company.email,
        telephone: company.phone,
        address: postalAddress(company.corporateOffice),
        location: [
          {
            "@type": "Place",
            name: "Trishala Laminates Corporate Office",
            address: postalAddress(company.corporateOffice),
          },
          {
            "@type": "Place",
            name: "Trishala Laminates Manufacturing Unit",
            address: postalAddress(company.manufacturingUnit),
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: company.phone,
            email: company.email,
            areaServed: "Worldwide",
            availableLanguage: ["English"],
          },
        ],
        areaServed: "Worldwide",
        knowsAbout: [...coreTopics],
        slogan: "This Time, Judge A Book By Its Cover",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Flexible packaging products and services",
          itemListElement: [
            "Printed laminate rolls",
            "Laminated pouches",
            "Stand-up pouches",
            "Zipper pouches",
            "Spout pouches",
            "Centre seal and three side seal pouches",
            "PE blown film",
            "Rotogravure printing",
            "Solvent-based, solventless and extrusion lamination",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Product", name, brand: { "@id": ORG_ID } },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en-IN",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/** Breadcrumb trail for a page: [["Home","/"], ["Industries","/industries"], …] */
export function breadcrumbJsonLd(trail: readonly (readonly [string, string])[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    })),
  };
}

/** A packaging service page (application or industry) tied to the company. */
export function serviceJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: "Flexible packaging manufacturing",
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
  };
}

/** Shorten text to a search-snippet length, ending on a whole word. */
export function snippet(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s]+$/, "")}…`;
}

/** "Stand-Up Pouches, Zipper Pouches and Laminated Rolls" */
export function listText(items: readonly string[], max = 3): string {
  const list = items.slice(0, max).map((s) => s.trim());
  if (list.length <= 1) return list.join("");
  return `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`;
}
