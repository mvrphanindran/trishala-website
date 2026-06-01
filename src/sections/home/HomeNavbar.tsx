"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { v1 } from "@/lib/v1-tokens";

type NavChild = { href: string; label: string };

type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href: string; children: NavChild[] };

const navigation: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      { href: "/products", label: "All Products" },
      { href: "/products", label: "Stand Up Pouches" },
      { href: "/products", label: "Spout Pouches" },
      { href: "/products", label: "Printed Laminate Rolls" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { href: "/industries", label: "All Industries" },
      { href: "/industries", label: "FMCG" },
      { href: "/industries", label: "Snacks & Spices" },
      { href: "/industries", label: "Tea & Coffee" },
      { href: "/industries", label: "Agriculture" },
      { href: "/industries", label: "Pet Food" },
    ],
  },
  {
    label: "Infrastructure",
    href: "/about#infrastructure",
    children: [
      { href: "/about#infrastructure", label: "Manufacturing" },
      { href: "/about#infrastructure", label: "Printing" },
      { href: "/about#infrastructure", label: "Extrusion" },
      { href: "/about", label: "About Trishala" },
    ],
  },
  { label: "Quality", href: "/quality" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function NavDropdown({ item }: { item: NavItem & { children: NavChild[] } }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1.5 py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
        style={{ color: v1.ink.navy }}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          className={`mt-px transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path
            d="M2.5 4.5L6 8l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </Link>

      <div
        className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3"
        style={{
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div
          className="overflow-hidden border shadow-[0_20px_50px_rgba(11,27,77,0.08)] transition-[max-height,opacity,transform] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            maxHeight: open ? "320px" : "0px",
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-8px)",
            background: v1.ivory.base,
            borderColor: v1.silver.hairline,
          }}
        >
          <ul className="py-2">
            {item.children.map((child) => (
              <li key={`${item.label}-${child.label}`}>
                <Link
                  href={child.href}
                  className="block px-5 py-2.5 text-[14px] font-medium transition-colors hover:bg-[#F5F1EA] hover:text-[#00B140]"
                  style={{ color: v1.ink.body }}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function HomeNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b"
      style={{
        background: v1.ivory.base,
        borderColor: v1.silver.hairline,
      }}
    >
      <div className="mx-auto grid h-[72px] max-w-[1600px] grid-cols-[minmax(140px,1fr)_auto_minmax(140px,1fr)] items-center gap-4 px-6 lg:h-[80px] lg:px-10">
        <Link
          href="/"
          className="relative block h-10 w-36 justify-self-start lg:h-11 lg:w-40"
        >
          <Image
            src="/images/logo/trishala-logo-v2.png"
            alt="Trishala Laminates"
            fill
            sizes="160px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav
          className="hidden items-center justify-center gap-8 lg:flex xl:gap-10"
          aria-label="Primary"
        >
          {navigation.map((item) =>
            item.children ? (
              <NavDropdown
                key={item.label}
                item={item as NavItem & { children: NavChild[] }}
              />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
                style={{ color: v1.ink.navy }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 lg:inline-flex"
            style={{
              background: v1.green.primary,
              boxShadow: "0 6px 20px rgba(0, 177, 64, 0.18)",
            }}
          >
            Get Quote
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            style={{ color: v1.ink.navy }}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
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
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          className="border-t px-6 py-4 lg:hidden"
          style={{
            borderColor: v1.silver.hairline,
            background: v1.ivory.rich,
          }}
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-[15px] font-medium"
                  style={{ color: v1.ink.navy }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="mb-2 ml-3 border-l pl-3" style={{ borderColor: v1.silver.hairline }}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block py-2 text-sm"
                          style={{ color: v1.ink.muted }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="inline-flex rounded-full px-6 py-2.5 text-sm font-bold text-white"
                style={{ background: v1.green.primary }}
                onClick={() => setMobileOpen(false)}
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
