import Image from "next/image";
import Link from "next/link";
import { v1 } from "@/sections/home/v1-tokens";

const footerLinks = [
  { href: "/products", label: "Solutions" },
  { href: "/structures", label: "Structures" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Footer() {
  return (
    <footer
      className="pt-20 pb-10 md:pt-24"
      style={{ background: v1.ivory.deep }}
    >
      <div
        className="mx-auto mb-16 h-px max-w-[1380px] px-5 md:px-6"
        style={{ background: v1.silver.gradient, opacity: 0.65 }}
      />

      <div className="mx-auto grid max-w-[1380px] gap-14 px-5 md:grid-cols-[1.2fr_1fr_1fr] md:px-6 lg:gap-20">
        <div>
          <Link href="/" className="relative mb-6 block h-12 w-44">
            <Image
              src="/images/logo/trishala-logo-v2.png"
              alt="Trishala Laminates"
              fill
              sizes="176px"
              className="object-contain object-left"
            />
          </Link>
          <p
            className="max-w-sm text-sm leading-relaxed"
            style={{ color: v1.ink.muted }}
          >
            Premium flexible packaging for brands that lead on shelf.
          </p>
        </div>

        <div>
          <p
            className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{ color: v1.silver.dark }}
          >
            Navigate
          </p>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] font-semibold transition-colors hover:text-[#00B140]"
                  style={{ color: v1.ink.navy }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p
            className="mb-5 text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{ color: v1.silver.dark }}
          >
            Consultation
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full px-7 py-3 text-sm font-bold text-white"
            style={{
              background: v1.green.primary,
              boxShadow: "0 8px 22px rgba(0, 177, 64, 0.18)",
            }}
          >
            Request Packaging Consultation
          </Link>
        </div>
      </div>

      <div
        className="mx-auto mt-16 flex max-w-[1380px] flex-col items-start justify-between gap-4 border-t px-5 pt-8 text-xs md:flex-row md:items-center md:px-6"
        style={{
          borderColor: v1.silver.hairline,
          color: v1.ink.muted,
        }}
      >
        <p>© {new Date().getFullYear()} Trishala Laminates. All rights reserved.</p>
        <p className="uppercase tracking-[0.2em]">Flexible Packaging</p>
      </div>
    </footer>
  );
}
