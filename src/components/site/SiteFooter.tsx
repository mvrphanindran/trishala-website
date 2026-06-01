import Image from "next/image";
import Link from "next/link";
import { v1 } from "@/lib/v1-tokens";

const links = [
  { href: "/products", label: "Products" },
  { href: "/structures", label: "Structures" },
  { href: "/quality", label: "Quality" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="px-5 py-10 md:px-8 md:py-12" style={{ background: v1.ivory.deep }}>
      <div className="mx-auto max-w-[1380px]">
        <div
          className="mb-6 h-px w-full md:mb-8"
          style={{ background: v1.silver.gradient, opacity: 0.55 }}
        />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 lg:gap-10">
            <Link
              href="/"
              className="relative block h-[52px] w-[11.75rem] shrink-0 md:h-14 md:w-[13.25rem]"
            >
              <Image
                src="/images/logo/trishala-logo-v2.png"
                alt="Trishala Laminates"
                fill
                sizes="(max-width: 768px) 188px, 212px"
                className="object-contain object-left"
              />
            </Link>

            <p
              className="max-w-xs text-sm leading-snug"
              style={{ color: v1.ink.muted }}
            >
              Premium flexible packaging partner.
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-8 gap-y-2"
            aria-label="Footer"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold transition-colors hover:text-[#00B140]"
                style={{ color: v1.ink.navy }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 rounded-full px-7 py-2.5 text-sm font-bold text-white"
            style={{
              background: v1.green.primary,
              boxShadow: "0 8px 22px rgba(0, 177, 64, 0.16)",
            }}
          >
            Request Packaging Consultation
          </Link>
        </div>

        <p
          className="mt-6 border-t pt-5 text-xs md:mt-7 md:pt-6"
          style={{ color: v1.ink.muted, borderColor: v1.silver.hairline }}
        >
          © {new Date().getFullYear()} Trishala Laminates
        </p>
      </div>
    </footer>
  );
}
