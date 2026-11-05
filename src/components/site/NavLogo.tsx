"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import DotDrop from "./DotDrop";
import styles from "./NavLogo.module.css";

/**
 * Navbar logo, built from three layers of the original artwork
 * (1360 × 436): the pinwheel, the wordmark, and the green dot of the "i".
 *
 * - The pinwheel turns with the page: clockwise as you scroll down,
 *   anticlockwise as you scroll up, easing to a stop when scrolling stops.
 * - On every page load the dot falls into place with a small splash.
 * - Both are off for visitors who prefer reduced motion.
 *
 * Layer positions are percentages of the original artwork, so the logo
 * looks exactly like the flat image when nothing is moving.
 */
const DEG_PER_PX = 0.18; // one full turn per 2000px of scrolling
const EASE_MS = 140; // smoothing time constant: higher = floatier

export default function NavLogo() {
  const markRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mark = markRef.current;
    if (!mark) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let current = window.scrollY * DEG_PER_PX;
    let target = current;
    let frame = 0;
    let last = 0;

    const paint = () => {
      mark.style.transform = `rotate(${current.toFixed(2)}deg)`;
    };
    const tick = (now: number) => {
      const dt = last ? Math.min(now - last, 64) : 16;
      last = now;
      current += (target - current) * (1 - Math.exp(-dt / EASE_MS));
      if (Math.abs(target - current) < 0.02) current = target;
      paint();
      frame = current === target ? 0 : requestAnimationFrame(tick);
      if (!frame) last = 0;
    };
    const onScroll = () => {
      target = window.scrollY * DEG_PER_PX;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.logo}>
      <div ref={markRef} className={styles.mark}>
        <Image
          src="/images/logo/trishala-mark.png"
          alt=""
          fill
          sizes="64px"
          preload
          draggable={false}
        />
      </div>
      <div className={styles.wordmark}>
        <Image
          src="/images/logo/trishala-wordmark.png"
          alt=""
          fill
          sizes="160px"
          preload
          draggable={false}
        />
      </div>
      <DotDrop className={styles.dotSlot} delay={0.3} fall="-80px" />
    </div>
  );
}
