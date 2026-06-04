"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { v1 } from "@/lib/v1-tokens";

const infrastructureNavigation = [
  { label: "Rotogravure Printing", href: "/infrastructure#rotogravure" },
  { label: "Solvent Based Lamination", href: "/infrastructure#solvent-lamination" },
  { label: "Solvent Less Lamination", href: "/infrastructure#solventless-lamination" },
  { label: "Slitting", href: "/infrastructure#slitting" },
  { label: "Pouching", href: "/infrastructure#pouching" },
  { label: "Quality Inspection", href: "/quality#continuous-inspection" },
] as const;

export const infrastructureHref = "/infrastructure" as const;

const panelTransition =
  "transition-[max-height,opacity,transform] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

const CLOSE_DELAY_MS = 300;

const linkRowClass =
  "block w-full text-left transition-colors hover:text-[#00B140] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

function CapabilityList({
  compact = false,
  onNavigate,
}: {
  compact?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <ul role="list" className={compact ? "space-y-0" : "py-1"}>
      {infrastructureNavigation.map((entry) => (
        <li key={entry.href}>
          <Link
            href={entry.href}
            className={`${linkRowClass} ${
              compact
                ? "py-2.5 text-sm font-medium"
                : "px-4 py-2.5 text-[14px] font-medium hover:bg-[#F5F1EA]"
            }`}
            style={{ color: v1.ink.body, outlineColor: v1.green.primary }}
            onClick={onNavigate}
          >
            {entry.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function InfrastructureMobileAccordion() {
  const [expanded, setExpanded] = useState(false);

  const closeAll = useCallback(() => {
    setExpanded(false);
  }, []);

  return (
    <div className="mb-2">
      <div className="flex items-center justify-between gap-2">
        <Link
          href={infrastructureHref}
          className="py-2.5 text-[15px] font-medium transition-colors hover:text-[#00B140]"
          style={{ color: v1.ink.navy }}
          onClick={closeAll}
        >
          Infrastructure
        </Link>
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center"
          style={{ color: expanded ? v1.green.primary : v1.ink.navy }}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse Infrastructure menu" : "Expand Infrastructure menu"}
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
          maxHeight: expanded ? "480px" : "0px",
          opacity: expanded ? 1 : 0,
        }}
        aria-hidden={!expanded}
      >
        <div
          className="ml-3 mt-1 border-l pl-3"
          style={{ borderColor: v1.silver.hairline }}
        >
          <CapabilityList compact onNavigate={closeAll} />
        </div>
      </div>
    </div>
  );
}

export default function InfrastructureDropdown() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    clearCloseTimer();
    setOpen(true);
  }, [clearCloseTimer]);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
      closeTimerRef.current = null;
    }, CLOSE_DELAY_MS);
  }, [clearCloseTimer]);

  const close = useCallback(() => {
    clearCloseTimer();
    setOpen(false);
  }, [clearCloseTimer]);

  const handlePointerEnter = useCallback(() => {
    openMenu();
  }, [openMenu]);

  const handlePointerLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  const handleTriggerClick = useCallback(() => {
    setOpen((value) => !value);
    clearCloseTimer();
  }, [clearCloseTimer]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

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
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
    >
      <div className="flex items-center gap-1">
        <Link
          href={infrastructureHref}
          className="py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
          style={{ color: open ? v1.green.primary : v1.ink.navy }}
          onClick={close}
        >
          Infrastructure
        </Link>
        <button
          type="button"
          className="flex items-center gap-0.5 py-2 transition-colors hover:text-[#00B140]"
          style={{ color: open ? v1.green.primary : v1.ink.navy }}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label="Toggle Infrastructure menu"
          onClick={handleTriggerClick}
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
        className="absolute left-1/2 top-full z-50 w-[min(100vw-2rem,19rem)] -translate-x-1/2 pt-1.5"
        style={{
          pointerEvents: open ? "auto" : "none",
        }}
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
      >
        <div
          className={`overflow-hidden ${panelTransition}`}
          style={{
            maxHeight: open ? "520px" : "0px",
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-6px)",
            background: v1.canvas,
            boxShadow: v1.shadow.nav,
          }}
        >
          <CapabilityList onNavigate={close} />
        </div>
      </div>
    </div>
  );
}
