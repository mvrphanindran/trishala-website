"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { industriesNavigation } from "@/lib/industries-navigation";
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
          : "grid min-h-[320px] grid-cols-[minmax(240px,280px)_1fr]"
      }
    >
      <ul
        className={compact ? "space-y-0 border-b pb-4" : "border-r py-2"}
        style={{ borderColor: v1.silver.hairline }}
        role="list"
      >
        {industriesNavigation.map((industry) => {
          const isActive = industry.slug === active.slug;

          return (
            <li key={industry.slug}>
              <div
                className="flex items-center"
                onMouseEnter={() => !compact && onActiveChange(industry.slug)}
              >
                <MenuPreviewItem
                  active={isActive}
                  onClick={
                    compact ? () => onActiveChange(industry.slug) : undefined
                  }
                  onPointerEnter={() => onActiveChange(industry.slug)}
                  onFocus={() => onActiveChange(industry.slug)}
                  className={`flex-1 font-semibold ${compact ? "py-2.5 text-sm" : "px-6 py-3.5 text-[15px]"}`}
                >
                  {industry.label}
                </MenuPreviewItem>
                {!compact ? (
                  <span
                    className="pr-4 text-[10px]"
                    style={{ color: v1.silver.mid }}
                    aria-hidden
                  >
                    →
                  </span>
                ) : null}
              </div>
              {compact && isActive ? (
                <ul
                  className="mb-4 ml-3 space-y-1 border-l pl-3"
                  style={{ borderColor: v1.silver.hairline }}
                >
                  {industry.segments.map((seg) => (
                    <li key={seg.slug}>
                      <MenuPreviewItem
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
        <div className="px-8 py-6 lg:px-10 lg:py-8">
          <p
            className="text-lg font-extrabold tracking-tight"
            style={{ color: v1.ink.navy }}
          >
            {active.label}
          </p>
          <ul className="mt-6 space-y-1" role="list">
            {active.segments.map((seg) => (
              <li key={seg.slug}>
                <MenuPreviewItem
                  muted
                  className="py-2.5 text-[15px] font-medium"
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
    <div
      className="mb-3 ml-3 border-l py-2 pl-4"
      style={{ borderColor: v1.silver.hairline }}
    >
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
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="flex items-center gap-1.5 py-2 text-[15px] font-medium tracking-tight transition-colors hover:text-[#00B140]"
        style={{ color: open ? v1.green.primary : v1.ink.navy }}
        aria-expanded={open}
        aria-haspopup="true"
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
        onClick={handleTriggerClick}
      >
        Industries
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

          <div className="mx-auto max-w-[960px] px-6 lg:px-8">
            <IndustriesPanels
              activeSlug={activeSlug}
              onActiveChange={setActiveSlug}
            />
          </div>

          <div
            className="mx-auto max-w-[960px] border-t px-6 py-4 lg:px-8"
            style={{ borderColor: v1.silver.hairline }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.24em]"
              style={{ color: v1.ink.muted }}
            >
              Industries we serve — portfolio preview
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
