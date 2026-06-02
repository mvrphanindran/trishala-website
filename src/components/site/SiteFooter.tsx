import Image from "next/image";
import Link from "next/link";
import { packagingSolutionsHref } from "@/lib/packaging-solutions-navigation";
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
  return (
    <footer
      className="mt-16 px-5 py-12 md:mt-20 md:px-8 md:py-14"
      style={{ background: v1.gradient.footer }}
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
          <div>
            <h3
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: v1.green.primary }}
            >
              Corporate Office
            </h3>
            <address
              className="mt-4 space-y-1 text-sm not-italic leading-relaxed"
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
              className="mt-4 space-y-1 text-sm not-italic leading-relaxed"
              style={{ color: v1.ink.body }}
            >
              {manufacturingAddress.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="flex flex-col justify-between gap-8 md:items-end md:text-right">
            <div>
              <h3
                className="text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: v1.green.primary }}
              >
                Quick Link
              </h3>
              <Link
                href={packagingSolutionsHref}
                className="mt-4 inline-block text-sm font-semibold transition-colors hover:text-[#00B140]"
                style={{ color: v1.ink.navy }}
              >
                Packaging Solutions
              </Link>
            </div>

            <Link
              href="/"
              className="relative block h-8 w-24 shrink-0 md:h-9 md:w-28"
              aria-label="Trishala Laminates home"
            >
              <Image
                src="/images/logo/trishala-logo-v2.png"
                alt="Trishala Laminates"
                fill
                sizes="112px"
                className="object-contain object-right md:object-right"
              />
            </Link>
          </div>
        </div>

        <p
          className="mt-10 text-xs md:mt-12"
          style={{ color: v1.ink.muted }}
        >
          © {new Date().getFullYear()} Trishala Laminates
        </p>
      </div>
    </footer>
  );
}
