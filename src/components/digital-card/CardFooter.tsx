import Link from "next/link";
import Image from "next/image";
import { companyWebsiteUrl, corporateOfficeAddress, manufacturingUnitAddress } from "@/data/digital-card-content";
import { v1 } from "@/lib/v1-tokens";

export default function CardFooter() {
  return (
    <footer className="border-t" style={{ borderColor: v1.silver.hairline, background: v1.gradient.footer }}>
      <div className="mx-auto max-w-[1380px] px-5 py-6 md:px-8">
        <div className="grid gap-5 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_auto] md:items-start">
          <div className="min-w-0 text-[10px] leading-snug text-[#3D4A5C] md:text-[11px]">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
              Corporate Office
            </p>
            <address className="mt-1 not-italic">
              {corporateOfficeAddress.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="min-w-0 text-[10px] leading-snug text-[#3D4A5C] md:text-[11px] md:text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
              Manufacturing Unit
            </p>
            <address className="mt-1 not-italic">
              {manufacturingUnitAddress.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="flex min-w-0 flex-col items-start gap-2 md:items-end md:justify-self-end">
            <Link
              href="/"
              className="relative block h-6 w-20 md:h-7 md:w-24"
              aria-label="Trishala Laminates home"
            >
              <Image
                src="/images/logo/trishala-logo-v2.png"
                alt="Trishala Laminates"
                fill
                sizes="96px"
                className="object-contain object-right"
              />
            </Link>

            <p className="text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
              Website
            </p>
            <Link
              href={companyWebsiteUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-medium hover:text-[#00B140]"
              style={{ color: v1.ink.navy }}
            >
              {companyWebsiteUrl.replace("https://", "")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
