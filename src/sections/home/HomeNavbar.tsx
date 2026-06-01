"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AboutUsDropdown, {
  AboutUsMobileAccordion,
} from "@/sections/home/AboutUsDropdown";
import QualityDropdown, {
  QualityMobileAccordion,
} from "@/sections/home/QualityDropdown";
import InfrastructureDropdown, {
  InfrastructureMobileAccordion,
} from "@/sections/home/InfrastructureDropdown";
import IndustriesMegaMenu, {
  IndustriesMobileCatalogue,
} from "@/sections/home/IndustriesMegaMenu";
import PackagingSolutionsMegaMenu, {
  PackagingSolutionsMobileCatalogue,
} from "@/sections/home/PackagingSolutionsMegaMenu";
import { v1 } from "@/lib/v1-tokens";

const PACKAGING_SOLUTIONS_LABEL = "Packaging Solutions";
const INDUSTRIES_LABEL = "Industries";

const navigation = [{ label: "Contact", href: "/contact" }] as const;

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
          <PackagingSolutionsMegaMenu />
          <IndustriesMegaMenu />
          <InfrastructureDropdown />
          <AboutUsDropdown />
          <QualityDropdown />
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
              style={{ color: v1.ink.navy }}
            >
              {item.label}
            </Link>
          ))}
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
            <li>
              <p
                className="py-2.5 text-[15px] font-medium"
                style={{ color: v1.ink.navy }}
              >
                {PACKAGING_SOLUTIONS_LABEL}
              </p>
              <PackagingSolutionsMobileCatalogue />
            </li>
            <li>
              <p
                className="py-2.5 text-[15px] font-medium"
                style={{ color: v1.ink.navy }}
              >
                {INDUSTRIES_LABEL}
              </p>
              <IndustriesMobileCatalogue />
            </li>
            <li>
              <InfrastructureMobileAccordion />
            </li>
            <li>
              <AboutUsMobileAccordion />
            </li>
            <li>
              <QualityMobileAccordion />
            </li>
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-[15px] font-medium transition-colors hover:text-[#00B140]"
                  style={{ color: v1.ink.navy }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
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
