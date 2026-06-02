"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  packagingSolutionsHref,
  packagingSolutionsNavigation,
} from "@/lib/packaging-solutions-navigation";
import MenuPreviewItem from "@/sections/home/MenuPreviewItem";
import { v1 } from "@/lib/v1-tokens";

const panelTransition =
  "transition-[opacity,transform] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

export function PackagingSolutionsMobileCatalogue() {
  return (
    <div className="mb-3 ml-3 space-y-6 py-2 pl-2">
      {packagingSolutionsNavigation.map((group) => (
        <div key={group.label}>
          <p
            className="text-[10px] font-bold uppercase tracking-[0.22em]"
            style={{ color: v1.green.primary }}
          >
            {group.label}
          </p>
          <ul className="mt-2 space-y-1">
            {group.items.map((item) => (
              <li key={item.href}>
                <MenuPreviewItem href={item.href} className="py-2 text-sm font-medium">
                  {item.label}
                </MenuPreviewItem>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CompactSolutionsList() {
  const rolls = packagingSolutionsNavigation.find((group) => group.label === "Rolls");
  const pouches = packagingSolutionsNavigation.find(
    (group) => group.label === "Pouches",
  );

  return (
    <div className="w-[340px] rounded-xl p-4" style={{ background: v1.canvas, boxShadow: v1.shadow.nav }}>
      {rolls ? (
        <div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: v1.green.primary }}
          >
            Rolls
          </p>
          <ul className="mt-2 space-y-1">
            {rolls.items.map((item) => (
              <li key={item.href}>
                <MenuPreviewItem href={item.href} className="py-2 text-sm font-medium">
                  {item.label}
                </MenuPreviewItem>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {pouches ? (
        <div className="mt-4">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: v1.green.primary }}
          >
            Pouches
          </p>
          <ul className="mt-2 space-y-1">
            {pouches.items.map((item) => (
              <li key={item.href}>
                <MenuPreviewItem href={item.href} className="py-2 text-sm font-medium">
                  {item.label}
                </MenuPreviewItem>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default function PackagingSolutionsMegaMenu() {
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
          href={packagingSolutionsHref}
          className="py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
          style={{ color: open ? v1.green.primary : v1.ink.navy }}
          onClick={close}
        >
          Packaging Solutions
        </Link>
        <button
          type="button"
          className="flex items-center gap-0.5 py-2 transition-colors hover:text-[#00B140]"
          style={{ color: open ? v1.green.primary : v1.ink.navy }}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label="Toggle Packaging Solutions menu"
          onClick={() => setOpen((value) => !value)}
        >
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
        <CompactSolutionsList />
      </div>
    </div>
  );
}
