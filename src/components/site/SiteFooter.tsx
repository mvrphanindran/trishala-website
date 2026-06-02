import Image from "next/image";
import Link from "next/link";
import { packagingSolutionsHref } from "@/lib/packaging-solutions-navigation";
import {
  contactHref,
  industriesHref,
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
    { href: packagingSolutionsHref, label: "Packaging Solutions" },
    { href: industriesHref, label: "Industries" },
    { href: infrastructureHref, label: "Infrastructure" },
    { href: qualityHref, label: "Quality" },
    { href: contactHref, label: "Contact" },
  ] as const;

  return (
    <footer className="mt-2 px-5 py-2 md:mt-3 md:px-8 md:py-3" style={{ background: v1.gradient.footer }}>
      <div className="mx-auto max-w-[1380px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.4fr_1fr_1fr] md:items-start md:gap-8">
          <div>
            <h3
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: v1.green.primary }}
            >
              Corporate Office
            </h3>
            <address
              className="mt-2 space-y-0.5 text-sm not-italic leading-relaxed"
              style={{ color: v1.ink.body }}
            >
              {corporateAddress.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <h3
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: v1.green.primary }}
            >
              Manufacturing Unit
            </h3>
            <address
              className="mt-2 space-y-0.5 text-sm not-italic leading-relaxed"
              style={{ color: v1.ink.body }}
            >
              {manufacturingAddress.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="flex flex-col gap-2 md:items-end md:text-right">
            <div>
              <h3
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: v1.green.primary }}
              >
                Quick Links
              </h3>
              <ul className="mt-2 space-y-1">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block text-sm font-semibold transition-colors hover:text-[#00B140]"
                      style={{ color: v1.ink.navy }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <p className="text-xs" style={{ color: v1.ink.muted }}>
            © {new Date().getFullYear()} Trishala Laminates Pvt Ltd. All Rights Reserved.
          </p>
          <Link
            href="/"
            className="relative block h-7 w-[120px] shrink-0"
            aria-label="Trishala Laminates home"
          >
            <Image
              src="/images/logo/trishala-logo-v2.png"
              alt="Trishala Laminates"
              fill
              sizes="120px"
              className="object-contain object-left md:object-right"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
