import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trishalalaminates.in"),

  title: {
    default: "Trishala Laminates | Premium Flexible Packaging Manufacturer",
    template: "%s | Trishala Laminates",
  },

  description:
    "Trishala Laminates is a leading flexible packaging manufacturer delivering high-performance laminate rolls, pouches, and customized flexible packaging solutions for FMCG, food, agriculture, industrial, and specialty applications.",

  keywords: [
    "Flexible Packaging",
    "Flexible Packaging Manufacturer",
    "Flexible Packaging India",
    "Packaging Manufacturer",
    "Printed Laminate Rolls",
    "Laminated Rolls",
    "Stand Up Pouches",
    "Spout Pouches",
    "Food Packaging",
    "Industrial Packaging",
    "Agriculture Packaging",
    "Custom Packaging",
    "Flexible Packaging Hyderabad",
    "Packaging Company India",
    "Trishala Laminates",
  ],

  authors: [
    {
      name: "Trishala Laminates",
    },
  ],

  creator: "Trishala Laminates",

  publisher: "Trishala Laminates",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.trishalalaminates.in",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.trishalalaminates.in",
    siteName: "Trishala Laminates",

    title:
      "Trishala Laminates | Premium Flexible Packaging Manufacturer",

    description:
      "Advanced flexible packaging solutions engineered for performance across FMCG, food, agriculture, industrial and specialty applications.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trishala Laminates",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Trishala Laminates | Premium Flexible Packaging Manufacturer",

    description:
      "Advanced flexible packaging solutions engineered for performance.",

    images: ["/og-image.jpg"],
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
        {children}

        <GoogleAnalytics gaId="G-SEZSH6GY71" />
      </body>
    </html>
  );
}
