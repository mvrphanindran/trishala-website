"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { v1 } from "@/lib/v1-tokens";

const links = [
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/about#infrastructure", label: "Infrastructure" },
  { href: "/quality", label: "Quality" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-6 md:px-8 md:pt-8">
      <div
        className="mx-auto flex max-w-[1380px] items-center justify-between gap-6 border-b pb-5"
        style={{ borderColor: v1.silver.hairline }}
      >
        <Link
          href="/"
          className="relative block h-11 w-36 shrink-0 md:h-12 md:w-44"
        >
          <Image
            src="/images/logo/trishala-logo-v2.png"
            alt="Trishala Laminates"
            fill
            sizes="176px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-10 xl:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
              style={{
                color:
                  pathname === link.href ? v1.green.primary : v1.ink.navy,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden rounded-full px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 md:inline-flex"
            style={{
              background: v1.green.primary,
              boxShadow: "0 8px 22px rgba(0, 177, 64, 0.18)",
            }}
          >
            Get Quote
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center xl:hidden"
            style={{ color: v1.ink.navy }}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="mx-auto mt-4 max-w-[1380px] border-b pb-6 xl:hidden"
          style={{ borderColor: v1.silver.hairline }}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={`${link.href}-${link.label}-mobile`}>
                <Link
                  href={link.href}
                  className="block py-3 text-[16px] font-medium"
                  style={{ color: v1.ink.navy }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full px-6 py-2.5 text-sm font-bold text-white"
                style={{ background: v1.green.primary }}
                onClick={() => setOpen(false)}
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
