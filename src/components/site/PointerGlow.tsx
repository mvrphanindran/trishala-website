"use client";

import { useEffect, useRef } from "react";

/**
 * Soft brand-green glow that follows the pointer across the whole site.
 *
 * - Mouse / trackpad / pen: follows the cursor, fades out when it leaves the window.
 * - Touch (phones, tablets, touchscreen laptops on iOS, Android, Windows):
 *   appears under the finger, follows drags and scrolls, fades out after lift.
 *
 * One fixed, GPU-composited circle moved with transform, so it never triggers
 * layout or full-page repaints. Off when the visitor prefers reduced motion.
 */
const SIZE = 300; // px diameter of the glow
const TOUCH_LINGER_MS = 650; // how long the glow stays after a finger lifts

export default function PointerGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let frame = 0;
    let fadeTimer = 0;
    let x = -SIZE;
    let y = -SIZE;

    const paint = () => {
      frame = 0;
      el.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`;
    };
    const moveTo = (cx: number, cy: number) => {
      x = cx;
      y = cy;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const show = () => {
      window.clearTimeout(fadeTimer);
      el.style.opacity = "1";
    };
    const hide = (delay = 0) => {
      window.clearTimeout(fadeTimer);
      fadeTimer = window.setTimeout(() => (el.style.opacity = "0"), delay);
    };

    // Pointer events cover mouse, pen and touch on all modern browsers
    // (iOS Safari 13+, Android Chrome, Windows Edge/Chrome/Firefox).
    const onPointer = (e: PointerEvent) => {
      moveTo(e.clientX, e.clientY);
      show();
    };
    const onPointerEnd = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") hide(TOUCH_LINGER_MS);
    };
    // Mouse leaving the window (relatedTarget null on the document edge).
    const onPointerOut = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && !e.relatedTarget) hide();
    };
    // While a finger scrolls the page, browsers cancel pointer events —
    // touch events keep reporting the finger, so follow those too.
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      moveTo(t.clientX, t.clientY);
      show();
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length === 0) hide(TOUCH_LINGER_MS);
    };

    const passive = { passive: true } as const;
    window.addEventListener("pointermove", onPointer, passive);
    window.addEventListener("pointerdown", onPointer, passive);
    window.addEventListener("pointerup", onPointerEnd, passive);
    window.addEventListener("pointercancel", onPointerEnd, passive);
    document.addEventListener("pointerout", onPointerOut, passive);
    window.addEventListener("touchstart", onTouch, passive);
    window.addEventListener("touchmove", onTouch, passive);
    window.addEventListener("touchend", onTouchEnd, passive);
    window.addEventListener("touchcancel", onTouchEnd, passive);
    const onBlur = () => hide();
    window.addEventListener("blur", onBlur);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(fadeTimer);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("pointerup", onPointerEnd);
      window.removeEventListener("pointercancel", onPointerEnd);
      document.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      data-pointer-glow
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: SIZE,
        height: SIZE,
        borderRadius: "50%",
        pointerEvents: "none",
        // Above page content, below the navbar (z-50) and its menus.
        zIndex: 40,
        opacity: 0,
        transform: `translate3d(${-SIZE}px, ${-SIZE}px, 0)`,
        background:
          "radial-gradient(circle, rgba(0,177,64,0.16) 0%, rgba(0,177,64,0.07) 38%, rgba(0,177,64,0) 70%)",
        // Tints the page green without washing out text or images.
        mixBlendMode: "multiply",
        transition: "opacity 0.45s ease",
        willChange: "transform, opacity",
      }}
    />
  );
}
