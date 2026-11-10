import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import ContactTracking from "@/components/site/ContactTracking";
import JsonLd from "@/components/site/JsonLd";
import PointerGlow from "@/components/site/PointerGlow";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, siteJsonLd, siteKeywords } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Trishala Laminates | Flexible Packaging, Laminates & Pouch Manufacturer",
    template: "%s | Trishala Laminates",
  },

  description: SITE_DESCRIPTION,
  keywords: [...siteKeywords],
  applicationName: SITE_NAME,
  category: "Packaging Manufacturing",

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // No site-wide canonical: each page declares its own (see pageMetadata),
  // otherwise every page would claim to be a copy of the homepage.

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    images: [{ ...OG_IMAGE, alt: SITE_NAME }],
  },

  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <JsonLd data={siteJsonLd()} />

        {children}

        <PointerGlow />

        <ContactTracking />

        <GoogleAnalytics gaId="G-SEZSH6GY71" />
      </body>
    </html>
  );
}
