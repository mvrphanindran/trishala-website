"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import MenuPreviewItem from "@/sections/home/MenuPreviewItem";
import { v1 } from "@/lib/v1-tokens";

const filmForms = ["Roll Form", "Pouch Form"] as const;

const suitableFor = ["PET", "BOPP", "Paper", "Aluminum Foil"] as const;

const pouchFormats = [
  "Center Seal Pouches",
  "Three Side Seal Pouches",
  "Zipper Pouches",
  "Stand Up Pouches",
  "Gusset Pouches",
  "Reusable Pouches",
  "Handle Pouches",
  "3D Pouches",
] as const;

const panelTransition =
  "transition-[opacity,transform] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

export function PackagingSolutionsMobileCatalogue() {
  return (
    <div
      className="mb-3 ml-3 space-y-6 border-l py-2 pl-4"
      style={{ borderColor: v1.silver.hairline }}
    >
      <CatalogueColumns compact />
    </div>
  );
}

function CatalogueColumns({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact ? "space-y-8" : "grid grid-cols-1 gap-0 md:grid-cols-2"
      }
    >
      <div
        className={compact ? "" : "px-12 py-12 lg:px-16 lg:py-14"}
        style={
          compact
            ? undefined
            : { borderRight: `1px solid ${v1.silver.hairline}` }
        }
      >
        <h3
          className={`mt-3 font-extrabold tracking-[-0.02em] ${compact ? "text-base" : "text-xl lg:text-2xl"}`}
          style={{ color: v1.ink.navy }}
        >
          Printed Laminated Films
        </h3>
        <p
          className={`mt-3 leading-relaxed ${compact ? "text-xs" : "text-sm"}`}
          style={{ color: v1.ink.body }}
        >
          Available in Roll Form and Pouch Form.
        </p>

        <div className={compact ? "mt-4 space-y-2" : "mt-8 space-y-3"}>
          {filmForms.map((form) => (
            <MenuPreviewItem
              key={form}
              className={`group flex items-center gap-3 font-semibold ${compact ? "text-sm" : "text-[15px]"}`}
            >
              <span
                className="h-px w-6 shrink-0 transition-all group-hover:w-8"
                style={{ background: v1.green.primary }}
              />
              {form}
            </MenuPreviewItem>
          ))}
        </div>

        <div
          className={compact ? "mt-6 pt-4" : "mt-10 border-t pt-8"}
          style={{ borderColor: v1.silver.hairline }}
        >
          <p
            className="text-[10px] font-bold uppercase tracking-[0.28em]"
            style={{ color: v1.silver.dark }}
          >
            Suitable For
          </p>
          <ul
            className={`mt-3 flex flex-wrap gap-2 ${compact ? "" : "gap-3"}`}
          >
            {suitableFor.map((material) => (
              <li
                key={material}
                className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] ${compact ? "" : "px-4 py-2 text-[11px]"}`}
                style={{
                  color: v1.ink.navy,
                  border: `1px solid ${v1.silver.hairline}`,
                  background: v1.ivory.rich,
                }}
              >
                {material}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={compact ? "" : "px-12 py-12 lg:px-16 lg:py-14"}>
        <h3
          className={`mt-3 font-extrabold tracking-[-0.02em] ${compact ? "text-base" : "text-xl lg:text-2xl"}`}
          style={{ color: v1.ink.navy }}
        >
          Pouches
        </h3>
        <p
          className={`mt-3 ${compact ? "text-xs" : "text-sm"}`}
          style={{ color: v1.ink.muted }}
        >
          Available Formats
        </p>

        <ul className={compact ? "mt-4 space-y-2" : "mt-8 space-y-3.5"}>
          {pouchFormats.map((format) => (
            <li key={format}>
              <MenuPreviewItem
                muted
                className={`group flex items-start gap-3 ${compact ? "text-sm" : "text-[15px]"}`}
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ background: v1.green.primary }}
                />
                <span className="font-medium">{format}</span>
              </MenuPreviewItem>
            </li>
          ))}
        </ul>
      </div>
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
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1.5 py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
        style={{ color: open ? v1.green.primary : v1.ink.navy }}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
      >
        Packaging Solutions
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

      <div
        className={`fixed inset-x-0 z-40 ${panelTransition}`}
        style={{
          top: "80px",
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-10px)",
        }}
        aria-hidden={!open}
      >
        <div
          className="border-b shadow-[0_24px_60px_rgba(11,27,77,0.07)]"
          style={{
            background: v1.ivory.base,
            borderColor: v1.silver.hairline,
          }}
        >
          <div
            className="mx-auto h-px max-w-[1600px]"
            style={{ background: v1.silver.gradient, opacity: 0.65 }}
          />

          <div className="mx-auto max-w-[1600px]">
            <CatalogueColumns />
          </div>
        </div>
      </div>
    </div>
  );
}
