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
    <footer className="px-5 py-20 md:px-8 md:py-28" style={{ background: v1.ivory.deep }}>
      <div className="mx-auto max-w-[1380px]">
        <div
          className="mb-16 h-px w-full"
          style={{ background: v1.silver.gradient, opacity: 0.55 }}
        />

        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.32em]"
              style={{ color: v1.silver.dark }}
            >
              Trishala Laminates
            </p>
            <p
              className="mt-4 max-w-sm text-sm leading-relaxed"
              style={{ color: v1.ink.muted }}
            >
              Premium flexible packaging partner.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-3" aria-label="Footer">
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
        </div>

        <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link
            href="/contact"
            className="inline-flex w-fit rounded-full px-8 py-3.5 text-sm font-bold text-white"
            style={{
              background: v1.green.primary,
              boxShadow: "0 8px 22px rgba(0, 177, 64, 0.16)",
            }}
          >
            Request Packaging Consultation
          </Link>
          <p className="text-xs" style={{ color: v1.ink.muted }}>
            © {new Date().getFullYear()} Trishala Laminates
          </p>
        </div>
      </div>
    </footer>
  );
}
