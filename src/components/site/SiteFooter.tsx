import Image from "next/image";
import Link from "next/link";
import { v1 } from "@/lib/v1-tokens";

const corporateAddress = [
  "Plot No. 16/A, IDA Nacharam Road No. 9,",
  "Industrial Development Area,",
  "Nacharam,",
  "Hyderabad,",
  "Secunderabad,",
  "Telangana 500076",
] as const;

const manufacturingAddress = ["Tuniki Bollaram,", "Telangana 502279"] as const;

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white" style={{ borderColor: v1.silver.hairline }}>
      <div className="mx-auto max-w-[1380px] px-5 py-4 md:px-8 md:py-5">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-8">
          <div className="space-y-3 text-[11px] leading-relaxed text-[#3D4A5C] md:text-[12px]">
            <div className="border-b pb-3" style={{ borderColor: v1.silver.hairline }}>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
                Corporate Office
              </p>
              <address className="mt-1 not-italic">
                {corporateAddress.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="border-b pb-3" style={{ borderColor: v1.silver.hairline }}>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
                Manufacturing Unit
              </p>
              <address className="mt-1 not-italic">
                {manufacturingAddress.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <p>
                <span className="font-semibold text-[#0B1B4D]">Contact:</span>{" "}
                <a
                  className="transition-colors hover:text-[#00B140]"
                  href="mailto:info@trishalalaminates.com"
                  style={{ color: v1.ink.body }}
                >
                  info@trishalalaminates.com
                </a>
              </p>
              <p className="text-[#6B7585]">
                Copyright {new Date().getFullYear()} Trishala Laminates Pvt Ltd.
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="relative block h-9 w-32 self-start md:h-10 md:w-36 md:self-center md:justify-self-end"
            aria-label="Trishala Laminates home"
          >
            <Image
              src="/images/logo/trishala-logo-v2.png"
              alt="Trishala Laminates"
              fill
              sizes="144px"
              className="object-contain object-right"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
