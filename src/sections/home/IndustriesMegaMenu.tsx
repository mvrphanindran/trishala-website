"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { industriesNavigation, industryHref } from "@/lib/industries-navigation";
import { industriesHref } from "@/lib/site-navigation";
import MenuPreviewItem from "@/sections/home/MenuPreviewItem";
import { v1 } from "@/lib/v1-tokens";

const panelTransition =
  "transition-[opacity,transform] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

export function IndustriesMobileAccordion() {
  const [expanded, setExpanded] = useState(false);
  const close = useCallback(() => setExpanded(false), []);

  return (
    <div className="mb-2">
      <div className="flex items-center justify-between gap-2">
        <Link
          href={industriesHref}
          className="py-2.5 text-[15px] font-medium transition-colors hover:text-[#00B140]"
          style={{ color: v1.ink.navy }}
          onClick={close}
        >
          Industries
        </Link>
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center"
          style={{ color: expanded ? v1.green.primary : v1.ink.navy }}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse Industries menu" : "Expand Industries menu"}
          onClick={() => setExpanded((value) => !value)}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            aria-hidden
          >
            <path
              d="M2.5 4.5L6 8l3.5-3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden ${panelTransition}`}
        style={{
          maxHeight: expanded ? "420px" : "0px",
          opacity: expanded ? 1 : 0,
        }}
        aria-hidden={!expanded}
      >
        <div
          className="ml-3 mt-1 border-l pl-3"
          style={{ borderColor: v1.silver.hairline }}
        >
          <ul className="space-y-1">
            {industriesNavigation.map((industry) => (
              <li key={industry.slug}>
                <MenuPreviewItem
                  href={industryHref(industry.slug)}
                  className="py-2 text-sm font-medium"
                  onClick={close}
                >
                  {industry.label}
                </MenuPreviewItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesMegaMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open, close]);

  return (
    <div
      ref={rootRef}
      className="relative hidden lg:block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center gap-1">
        <Link
          href={industriesHref}
          className="py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
          style={{ color: open ? v1.green.primary : v1.ink.navy }}
          onClick={close}
        >
          Industries
        </Link>
        <button
          type="button"
          className="flex items-center gap-0.5 py-2 transition-colors hover:text-[#00B140]"
          style={{ color: open ? v1.green.primary : v1.ink.navy }}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label="Toggle Industries menu"
          onClick={() => {
            setOpen((value) => !value);
          }}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.5 4.5L6 8l3.5-3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute left-0 top-full z-40 pt-2 ${panelTransition}`}
        style={{
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-10px)",
        }}
        aria-hidden={!open}
      >
        <div className="w-[300px] rounded-xl p-4" style={{ background: v1.canvas, boxShadow: v1.shadow.nav }}>
          <ul className="space-y-1">
            {industriesNavigation.map((industry) => (
              <li key={industry.slug}>
                <MenuPreviewItem
                  href={industryHref(industry.slug)}
                  className="py-2 text-sm font-medium"
                  onClick={close}
                >
                  {industry.label}
                </MenuPreviewItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
