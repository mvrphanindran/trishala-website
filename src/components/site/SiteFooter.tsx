import Image from "next/image";
import Link from "next/link";
import { v1 } from "@/lib/v1-tokens";

const manufacturingAddress = ["Tuniki Bollaram,", "Telangana 502279"] as const;
const officialPhone = "+91 9391002657";
const officialEmail = "naman@trishalalaminates.in";

export default function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="relative mx-auto max-w-[1380px] px-5 py-2 md:px-8 md:py-2.5">
        <div className="grid gap-2.5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.85fr)_auto] md:items-start md:gap-5">
          <div className="min-w-0 text-[10px] leading-snug text-[#3D4A5C] md:text-[11px]">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
              Corporate Office
            </p>
            <address className="mt-0.5 not-italic">
              Plot No. 16/A, IDA Nacharam Road No. 9, IDA Nacharam, Hyderabad, Telangana 500076
            </address>

            <div className="mt-2 space-y-0.5">
              <Link href={`tel:${officialPhone.replace(/[^+\d]/g, "")}`} className="block hover:text-[#00B140]">
                {officialPhone}
              </Link>
              <Link href={`mailto:${officialEmail}`} className="block hover:text-[#00B140]">
                {officialEmail}
              </Link>
            </div>
          </div>

          <div className="min-w-0 text-[10px] leading-snug text-[#3D4A5C] md:text-[11px] md:text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: v1.green.primary }}>
              Manufacturing Unit
            </p>
            <address className="mt-0.5 not-italic">
              {manufacturingAddress.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="flex min-w-0 flex-col items-start gap-1 md:items-end md:justify-self-end">
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

            <p className="text-[9px] leading-tight text-[#6B7585] md:text-right">
              © Trishala Laminates. All Rights Reserved.
            </p>
          </div>
        </div>

        <p className="mt-1 text-[8px] leading-none text-[#8A93A0] md:absolute md:bottom-0.5 md:right-8 md:mt-0 md:opacity-70">
          Website Designed &amp; Developed by M.V.R.Phanindran
        </p>
      </div>
    </footer>
  );
}
