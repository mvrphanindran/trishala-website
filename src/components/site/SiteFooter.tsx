import Image from "next/image";
import Link from "next/link";
import { industriesNavigation, industryHref } from "@/lib/industries-navigation";
import { packagingSolutionsHref } from "@/lib/packaging-solutions-navigation";
import {
  contactHref,
  infrastructureHref,
  qualityHref,
} from "@/lib/site-navigation";
import { v1 } from "@/lib/v1-tokens";

const corporateAddress = [
  "Trishala Laminates Pvt Ltd",
  "Plot No. 16/A",
  "IDA Nacharam Road No. 9",
  "Industrial Development Area",
  "Nacharam",
  "Hyderabad",
  "Secunderabad",
  "Telangana 500076",
] as const;

const manufacturingAddress = [
  "Trishala Laminates Pvt Ltd",
  "Tuniki Bollaram",
  "Telangana 502279",
] as const;

export default function SiteFooter() {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: packagingSolutionsHref, label: "Packaging Solutions" },
    { href: infrastructureHref, label: "Infrastructure" },
    { href: qualityHref, label: "Quality" },
  ] as const;

  return (
    <footer
      className="mt-10 border-t bg-white"
      style={{ borderColor: v1.silver.hairline }}
    >
      <div className="mx-auto max-w-[1380px] px-5 py-8 md:px-8 md:py-10">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr_1fr_1.2fr] lg:items-start lg:gap-12">
          <Link href="/" className="relative block h-10 w-40" aria-label="Trishala Laminates home">
            <Image
              src="/images/logo/trishala-logo-v2.png"
              alt="Trishala Laminates"
              fill
              sizes="160px"
              className="object-contain object-left"
            />
          </Link>

          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ color: v1.silver.dark }}
            >
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] font-semibold transition-colors hover:text-[#00B140]"
                    style={{ color: v1.ink.navy }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ color: v1.silver.dark }}
            >
              Industries
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2">
              {industriesNavigation.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={industryHref(industry.slug)}
                    className="text-[13px] font-semibold transition-colors hover:text-[#00B140]"
                    style={{ color: v1.ink.navy }}
                  >
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ color: v1.silver.dark }}
            >
              Contact
            </p>
            <div className="mt-4 space-y-5">
              <div>
                <p className="text-xs font-bold tracking-[0.12em]" style={{ color: v1.green.primary }}>
                  Corporate Office
                </p>
                <address className="mt-2 text-[13px] not-italic leading-relaxed" style={{ color: v1.ink.body }}>
                  {corporateAddress.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.12em]" style={{ color: v1.green.primary }}>
                  Manufacturing Unit
                </p>
                <address className="mt-2 text-[13px] not-italic leading-relaxed" style={{ color: v1.ink.body }}>
                  {manufacturingAddress.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <Link
                href={contactHref}
                className="inline-flex rounded-full px-5 py-2 text-[13px] font-bold text-white"
                style={{ background: v1.green.primary }}
              >
                Contact Trishala
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 text-center text-xs" style={{ color: v1.ink.muted }}>
          © {new Date().getFullYear()} Trishala Laminates Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
