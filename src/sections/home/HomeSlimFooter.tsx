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

export default function HomeSlimFooter() {
  return (
    <footer
      className="border-t bg-white"
      style={{ borderColor: v1.silver.hairline }}
    >
      <div className="mx-auto grid max-w-[1380px] grid-cols-1 gap-6 px-5 py-6 md:grid-cols-[1.35fr_1fr_auto] md:items-center md:px-8 md:py-5">
        <div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: v1.green.primary }}
          >
            Corporate Office
          </p>
          <address
            className="mt-2 text-xs not-italic leading-relaxed md:text-[13px]"
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
          <p
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: v1.green.primary }}
          >
            Manufacturing Unit
          </p>
          <address
            className="mt-2 text-xs not-italic leading-relaxed md:text-[13px]"
            style={{ color: v1.ink.body }}
          >
            {manufacturingAddress.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        <Link
          href="/"
          className="relative block h-11 w-40 md:h-12 md:w-44"
          aria-label="Trishala Laminates home"
        >
          <Image
            src="/images/logo/trishala-logo-v2.png"
            alt="Trishala Laminates"
            fill
            sizes="176px"
            className="object-contain object-left md:object-right"
          />
        </Link>
      </div>
    </footer>
  );
}
