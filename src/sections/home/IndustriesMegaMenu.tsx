"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  industriesNavigation,
  industrySectionHref,
  segmentHref,
} from "@/lib/industries-navigation";
import { industriesHref } from "@/lib/site-navigation";
import MenuPreviewItem from "@/sections/home/MenuPreviewItem";
import { v1 } from "@/lib/v1-tokens";

const panelTransition =
  "transition-[opacity,transform] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]";

const CLOSE_DELAY_MS = 300;
const NAVBAR_HEIGHT_PX = 80;
const HOVER_BRIDGE_HEIGHT_PX = 14;

function IndustriesPanels({
  activeSlug,
  onActiveChange,
  compact = false,
}: {
  activeSlug: string;
  onActiveChange: (slug: string) => void;
  compact?: boolean;
}) {
  const active =
    industriesNavigation.find((item) => item.slug === activeSlug) ??
    industriesNavigation[0];

  return (
    <div
      className={
        compact
          ? "grid grid-cols-1 gap-0"
          : "grid min-h-[280px] grid-cols-[minmax(220px,260px)_1fr]"
      }
    >
      <ul className={compact ? "space-y-0 pb-4" : "py-2"} role="list">
        {industriesNavigation.map((industry) => {
          const isActive = industry.slug === active.slug;

          return (
            <li key={industry.slug}>
              <div
                className="flex items-center"
                onMouseEnter={() => !compact && onActiveChange(industry.slug)}
              >
                <MenuPreviewItem
                  href={industrySectionHref(industry.slug)}
                  active={isActive}
                  onClick={
                    compact ? () => onActiveChange(industry.slug) : undefined
                  }
                  onPointerEnter={() => onActiveChange(industry.slug)}
                  onFocus={() => onActiveChange(industry.slug)}
                  className={`flex-1 font-semibold ${compact ? "py-2.5 text-sm" : "px-5 py-2.5 text-[15px]"}`}
                >
                  {industry.label}
                </MenuPreviewItem>
              </div>
              {compact && isActive ? (
                <ul className="mb-4 ml-3 space-y-1 pl-3">
                  {industry.segments.map((seg) => (
                    <li key={seg.slug}>
                      <MenuPreviewItem
                        href={segmentHref(industry.slug, seg.slug)}
                        muted
                        className="py-1.5 text-sm font-medium"
                      >
                        {seg.label}
                      </MenuPreviewItem>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>

      {!compact ? (
        <div className="px-6 py-5 lg:px-8 lg:py-6">
          <Link
            href={industrySectionHref(active.slug)}
            className="text-lg font-extrabold tracking-tight transition-colors hover:text-[#00B140]"
            style={{ color: v1.ink.navy }}
          >
            {active.label}
          </Link>
          <ul className="mt-4 space-y-0.5" role="list">
            {active.segments.map((seg) => (
              <li key={seg.slug}>
                <MenuPreviewItem
                  href={segmentHref(active.slug, seg.slug)}
                  muted
                  className="py-2 text-[14px] font-medium"
                >
                  {seg.label}
                </MenuPreviewItem>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function IndustriesMobileCatalogue() {
  const [activeSlug, setActiveSlug] = useState(industriesNavigation[0].slug);

  return (
    <div className="mb-3 ml-3 py-2 pl-2">
      <IndustriesPanels
        activeSlug={activeSlug}
        onActiveChange={setActiveSlug}
        compact
      />
    </div>
  );
}

export default function IndustriesMegaMenu() {
  const [open, setOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState(industriesNavigation[0].slug);
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

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

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
    <div ref={rootRef} className="relative hidden lg:block">
      <div className="flex items-center gap-1">
        <Link
          href={industriesHref}
          className="py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
          style={{ color: open ? v1.green.primary : v1.ink.navy }}
          onClick={close}
          onMouseEnter={handlePointerEnter}
          onMouseLeave={handlePointerLeave}
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
          onMouseEnter={handlePointerEnter}
          onMouseLeave={handlePointerLeave}
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
        className="pointer-events-none fixed inset-x-0 z-40 hidden lg:block"
        style={{
          top: NAVBAR_HEIGHT_PX - HOVER_BRIDGE_HEIGHT_PX,
          height: HOVER_BRIDGE_HEIGHT_PX,
          pointerEvents: open && isDesktop ? "auto" : "none",
        }}
        aria-hidden
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
      />

      <div
        className={`fixed inset-x-0 z-40 ${panelTransition}`}
        style={{
          top: `${NAVBAR_HEIGHT_PX}px`,
          pointerEvents: open ? "auto" : "none",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-10px)",
        }}
        aria-hidden={!open}
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
      >
        <div
          style={{
            background: v1.canvas,
            boxShadow: v1.shadow.nav,
          }}
        >
          <div className="mx-auto max-w-[880px] px-5 lg:px-7">
            <IndustriesPanels
              activeSlug={activeSlug}
              onActiveChange={setActiveSlug}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
