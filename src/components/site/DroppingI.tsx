"use client";

import { useLayoutEffect, useRef } from "react";
import DotDrop from "./DotDrop";
import styles from "./DroppingI.module.css";

/**
 * A letter "i" whose dot is replaced by a green dot that falls in with a
 * splash. The real "i" stays in the text (search engines, screen readers,
 * copy/paste); only its own dot is hidden with a clip.
 *
 * The site uses the visitor's system font (Segoe UI, San Francisco,
 * Roboto…), and each draws the dot in a different place, so the dot is
 * measured from the actual font in the browser. Everything is stored in em
 * so it follows the heading's responsive font size.
 */
type Tittle = {
  /** dot centre, from the glyph's left edge (em) */
  cx: number;
  /** dot bottom, above the baseline (em) */
  bottom: number;
  /** dot diameter (em) */
  size: number;
  /** middle of the gap between dot and stem, above the baseline (em) */
  gap: number;
};

const cache = new Map<string, Tittle | null>();

function measureTittle(fontWeight: string, fontStyle: string, fontFamily: string): Tittle | null {
  const key = `${fontStyle}|${fontWeight}|${fontFamily}`;
  if (cache.has(key)) return cache.get(key)!;

  const PX = 200;
  const W = 300;
  const H = 400;
  const X0 = 80;
  const BASE = 300;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  let result: Tittle | null = null;
  if (ctx) {
    ctx.font = `${fontStyle} ${fontWeight} ${PX}px ${fontFamily}`;
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#000";
    ctx.fillText("i", X0, BASE);
    const { data } = ctx.getImageData(0, 0, W, H);
    const inked = (x: number, y: number) => data[(y * W + x) * 4 + 3] > 127;
    const rowInk = (y: number) => {
      for (let x = 0; x < W; x++) if (inked(x, y)) return true;
      return false;
    };

    let top = -1;
    for (let y = 0; y < BASE && top < 0; y++) if (rowInk(y)) top = y;
    let gapStart = -1;
    for (let y = top + 1; top >= 0 && y < BASE && gapStart < 0; y++) if (!rowInk(y)) gapStart = y;
    let stemTop = -1;
    for (let y = gapStart + 1; gapStart >= 0 && y < BASE && stemTop < 0; y++) if (rowInk(y)) stemTop = y;

    if (stemTop > 0) {
      let left = W;
      let right = -1;
      for (let y = top; y < gapStart; y++)
        for (let x = 0; x < W; x++)
          if (inked(x, y)) {
            left = Math.min(left, x);
            right = Math.max(right, x);
          }
      const width = right - left + 1;
      const height = gapStart - top;
      result = {
        cx: ((left + right + 1) / 2 - X0) / PX,
        bottom: (BASE - gapStart) / PX,
        size: Math.max(width, height) / PX,
        gap: (BASE - (gapStart + stemTop) / 2) / PX,
      };
    }
  }
  cache.set(key, result);
  return result;
}

export default function DroppingI({ delay = 0.55, fall = "-300px" }: { delay?: number; fall?: string }) {
  const letterRef = useRef<HTMLSpanElement>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const letter = letterRef.current;
    const anchor = anchorRef.current;
    if (!letter || !anchor) return;
    const cs = getComputedStyle(letter);
    const t = measureTittle(cs.fontWeight, cs.fontStyle, cs.fontFamily);
    if (!t) return; // keep the ordinary navy dot

    const fs = parseFloat(cs.fontSize);
    const lr = letter.getBoundingClientRect();
    const ar = anchor.getBoundingClientRect();
    // The anchor is an empty inline-block right after the "i": its top is the
    // baseline and its left is the end of the letter.
    const baseline = (ar.top - lr.top) / fs; // em from the letter box top
    const cxFromAnchor = (lr.left + t.cx * fs - ar.left) / fs;

    letter.style.setProperty("--cut", `${(baseline - t.gap).toFixed(4)}em`);
    anchor.style.setProperty("--cx", `${cxFromAnchor.toFixed(4)}em`);
    anchor.style.setProperty("--bottom", `${t.bottom.toFixed(4)}em`);
    anchor.style.setProperty("--size", `${t.size.toFixed(4)}em`);
    letter.dataset.ready = "true";
  }, []);

  return (
    <span className={styles.wrap}>
      <span ref={letterRef} className={styles.letter}>
        i
      </span>
      <span ref={anchorRef} className={styles.anchor}>
        <DotDrop className={styles.dot} delay={delay} fall={fall} />
      </span>
    </span>
  );
}
