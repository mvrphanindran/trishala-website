"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import MenuPreviewItem from "@/sections/home/MenuPreviewItem";
import { v1 } from "@/lib/v1-tokens";

export const aboutUsNavigation = [
  "About Trishala",
  "Our Journey",
  "Promoters",
  "Brochure",
  "Gallery",
  "Our Esteemed Clients",
  "Careers",
] as const;

const panelTransition =
  "transition-[max-height,opacity,transform] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

const CLOSE_DELAY_MS = 300;

function AboutList({ compact = false }: { compact?: boolean }) {
  return (
    <ul role="list" className={compact ? "space-y-0" : "py-1"}>
      {aboutUsNavigation.map((item, index) => {
        const isLead = index === 0;

        return (
          <li
            key={item}
            style={{
              borderBottom:
                index < aboutUsNavigation.length - 1
                  ? `1px solid ${v1.silver.hairline}`
                  : undefined,
            }}
          >
            <MenuPreviewItem
              muted={!isLead}
              className={
                compact
                  ? `py-2.5 text-sm ${isLead ? "font-semibold" : "font-medium"}`
                  : `px-5 py-3.5 text-[14px] hover:bg-[#F5F1EA] ${isLead ? "font-semibold" : "font-medium"}`
              }
            >
              {item}
            </MenuPreviewItem>
          </li>
        );
      })}
    </ul>
  );
}

export function AboutUsMobileAccordion() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2">
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between py-2.5 text-left text-[15px] font-medium transition-colors hover:text-[#00B140]"
        style={{ color: expanded ? v1.green.primary : v1.ink.navy }}
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        About Us
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
          <AboutList compact />
        </div>
      </div>
    </div>
  );
}

export default function AboutUsDropdown() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
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
    if (!isDesktop) return;
    openMenu();
  }, [isDesktop, openMenu]);

  const handlePointerLeave = useCallback(() => {
    if (!isDesktop) return;
    scheduleClose();
  }, [isDesktop, scheduleClose]);

  const handleTriggerClick = useCallback(() => {
    setOpen((value) => !value);
    clearCloseTimer();
  }, [clearCloseTimer]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const sync = () => setIsDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, []);

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
      <button
        type="button"
        className="flex items-center gap-1.5 py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
        style={{ color: open ? v1.green.primary : v1.ink.navy }}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={handleTriggerClick}
      >
        About Us
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
        className="absolute left-1/2 top-full z-50 w-[min(100vw-2rem,22rem)] -translate-x-1/2 pt-2"
        style={{
          pointerEvents: open ? "auto" : "none",
        }}
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
      >
        <div
          className={`overflow-hidden border shadow-[0_20px_50px_rgba(11,27,77,0.08)] ${panelTransition}`}
          style={{
            maxHeight: open ? "480px" : "0px",
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-6px)",
            background: v1.ivory.base,
            borderColor: v1.silver.hairline,
          }}
        >
          <div
            className="h-px w-full"
            style={{ background: v1.silver.gradient, opacity: 0.55 }}
          />
          <AboutList />
        </div>
      </div>
    </div>
  );
}
