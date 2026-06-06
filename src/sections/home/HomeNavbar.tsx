"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AboutUsDropdown, { AboutUsMobileAccordion } from "@/sections/home/AboutUsDropdown";
import InfrastructureDropdown, { InfrastructureMobileAccordion } from "@/sections/home/InfrastructureDropdown";
import PackagingSolutionsMegaMenu, {
  PackagingSolutionsMobileAccordion,
} from "@/sections/home/PackagingSolutionsMegaMenu";
import { contactHref, qualityHref } from "@/lib/site-navigation";
import { v1 } from "@/lib/v1-tokens";

export default function HomeNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: v1.shadow.soft,
      }}
    >
      <div className="mx-auto grid h-[72px] max-w-[1600px] grid-cols-[minmax(140px,1fr)_auto_minmax(140px,1fr)] items-center gap-4 px-6 lg:h-[80px] lg:px-10">
        <Link
          href="/"
          className="relative block h-[52px] w-[11.75rem] justify-self-start lg:h-14 lg:w-[13.25rem]"
        >
          <Image
            src="/images/logo/trishala-logo-v2.png"
            alt="Trishala Laminates"
            fill
            sizes="(max-width: 1024px) 188px, 212px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center justify-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          <AboutUsDropdown />
          <PackagingSolutionsMegaMenu />
          <InfrastructureDropdown />
          <Link
            href={qualityHref}
            className="py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
            style={{ color: v1.ink.navy }}
          >
            Quality
          </Link>
          <Link
            href={contactHref}
            className="py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
            style={{ color: v1.ink.navy }}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            style={{ color: v1.ink.navy }}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((value) => !value)}
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
              {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          className="px-6 py-4 lg:hidden"
          style={{
            background: v1.canvas,
            boxShadow: v1.shadow.nav,
          }}
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            <li>
              <AboutUsMobileAccordion />
            </li>
            <li>
              <PackagingSolutionsMobileAccordion />
            </li>
            <li>
              <InfrastructureMobileAccordion />
            </li>
            <li>
              <Link
                href={qualityHref}
                className="block py-2.5 text-[15px] font-medium transition-colors hover:text-[#00B140]"
                style={{ color: v1.ink.navy }}
                onClick={() => setMobileOpen(false)}
              >
                Quality
              </Link>
            </li>
            <li>
              <Link
                href={contactHref}
                className="block py-2.5 text-[15px] font-medium transition-colors hover:text-[#00B140]"
                style={{ color: v1.ink.navy }}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <span className="block py-2 text-xs" style={{ color: v1.ink.muted }}>
                Trishala Laminates
              </span>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
