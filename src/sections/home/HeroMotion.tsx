"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type PointerEvent,
} from "react";
import styles from "./HeroMotion.module.css";

const SCENE_MS = 3600;

/** Manufacturing steps, in process order. Facts mirror infrastructure-content. */
const PROCESS = [
  {
    id: "extrude",
    word: "Extrude.",
    caption: "In-house PE blown film, up to 1600 mm wide and 25–200 microns.",
    src: "/images/capabilities/blown-film.jpg",
    alt: "Polyethylene blown film extrusion line",
    aspect: "1 / 1",
    variant: "square",
  },
  {
    id: "print",
    word: "Print.",
    caption: "High-performance rotogravure for vibrant, consistent output.",
    src: "/images/capabilities/rotogravure-2.png",
    alt: "Rotogravure printing press",
    aspect: "767 / 478",
    variant: "wide",
  },
  {
    id: "laminate",
    word: "Laminate.",
    caption: "Multi-layer structures engineered for barrier, strength and shelf life.",
    src: "/images/capabilities/combi-lamination.png",
    alt: "Combi lamination machine",
    aspect: "1592 / 988",
    variant: "narrow",
  },
  {
    id: "pouch",
    word: "Pouch.",
    caption: "Up to 300 pouches a minute: stand-up, zipper, spout and more.",
    src: "/images/capabilities/pouching.jpg",
    alt: "Pouch making machine",
    aspect: "16 / 9",
    variant: "dark",
  },
] as const;

const SCENES = [
  ...PROCESS.map((p) => ({ id: p.id, label: p.word.replace(".", "") })),
  { id: "convert", label: "Every format" },
] as const;

const CONVERT_INDEX = PROCESS.length;

const CARD_VARIANT: Record<(typeof PROCESS)[number]["variant"], string> = {
  wide: "",
  narrow: styles.machineCardNarrow,
  square: styles.machineCardSquare,
  dark: styles.machineCardDark,
};

const POUCHES = [
  { src: "/images/products/three-side-seal-pouch.png", alt: "Three side seal pouch", left: "-2%", r: "-6deg", scale: 0.86, depth: 10 },
  { src: "/images/products/zipper-pouch.png", alt: "Zipper pouch", left: "19%", r: "-2deg", scale: 0.95, depth: 18 },
  { src: "/images/products/stand-up-pouch.png", alt: "Stand-up pouch", left: "39%", r: "0deg", scale: 1.08, depth: 28 },
  { src: "/images/products/handled-pouch.png", alt: "Handled pouch", left: "65%", r: "4deg", scale: 0.95, depth: 16 },
] as const;

const IMAGE_SIZES = "(min-width: 1024px) 45vw, 90vw";

/** Tilt (either way) that produces the full parallax shift: 18°, as the
 *  sideways component of gravity (sin 18° ≈ 0.31). */
const TILT_RANGE = Math.sin((18 * Math.PI) / 180);
/** How fast the "level" baseline follows a new grip (per reading, ~60/s). */
const TILT_RECENTER = 0.01;

const clamp = (v: number) => Math.max(-1, Math.min(1, v));

type IOSOrientationEvent = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<"granted" | "denied">;
};

/** Touch devices with an orientation sensor; iOS additionally needs a tap. */
function getTiltSupport(): "none" | "needs-permission" | "available" {
  if (!("DeviceOrientationEvent" in window)) return "none";
  if (!window.matchMedia("(hover: none) and (pointer: coarse)").matches) return "none";
  const DOE = window.DeviceOrientationEvent as IOSOrientationEvent;
  return typeof DOE.requestPermission === "function" ? "needs-permission" : "available";
}
const subscribeNever = () => () => {};

function screenAngle(): number {
  return (
    window.screen.orientation?.angle ??
    Number((window as { orientation?: number }).orientation ?? 0)
  );
}

/**
 * Direction of gravity in the plane of the screen, as seen by the viewer.
 * From the W3C Z-X'-Y'' angles, "down" in device axes is
 * (cosβ·sinγ, −sinβ, −cosβ·cosγ). That vector is identical for every
 * equivalent (beta, gamma) pair the sensor may report, so it never jumps:
 * tipping past vertical or holding the phone upside down stays smooth.
 * Returns [right, up] components in −1…1 for the current screen rotation.
 */
function screenGravity(betaDeg: number, gammaDeg: number, screenAngleDeg: number): [number, number] {
  const b = (betaDeg * Math.PI) / 180;
  const g = (gammaDeg * Math.PI) / 180;
  const gx = Math.cos(b) * Math.sin(g); // toward the device's right edge
  const gy = -Math.sin(b); // toward the device's top edge
  switch (((screenAngleDeg % 360) + 360) % 360) {
    case 90: // landscape, device turned counter-clockwise (top points left)
      return [-gy, gx];
    case 180: // portrait upside-down
      return [-gx, -gy];
    case 270: // landscape, device turned clockwise (top points right)
      return [gy, -gx];
    default:
      return [gx, gy];
  }
}

/** Splits a line into a masked word that rises into view. */
function Word({
  children,
  delay = 0,
  className = "",
}: {
  children: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`${styles.word} ${className}`}>
      <span style={{ "--d": `${delay}s` } as CSSProperties}>{children}</span>
    </span>
  );
}

export default function HeroMotion() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  // Respect the visitor's reduced-motion preference.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Pause when scrolled out of view or the tab is in the background.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2,
    });
    io.observe(el);
    const onVisibility = () => setPageVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const [hovering, setHovering] = useState(false);
  const playing = inView && pageVisible && !reducedMotion && !hovering;

  // Advance scenes. A new scene (auto or clicked) gets the full duration;
  // a pause (hover, off-screen, background tab) resumes with the time left,
  // so the timer stays in step with the progress bar.
  const remainingRef = useRef(SCENE_MS);
  const sceneRef = useRef(active);
  useEffect(() => {
    if (sceneRef.current !== active) {
      sceneRef.current = active;
      remainingRef.current = SCENE_MS;
    }
    if (!playing) return;
    const startedAt = performance.now();
    const t = window.setTimeout(
      () => setActive((i) => (i + 1) % SCENES.length),
      remainingRef.current,
    );
    return () => {
      window.clearTimeout(t);
      remainingRef.current = Math.max(0, remainingRef.current - (performance.now() - startedAt));
    };
  }, [active, playing]);

  // Pointer response: parallax + spotlight. Writes CSS variables directly
  // (no re-render per mouse move), throttled to one update per frame.
  const frameRef = useRef(0);
  const finePointer = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reducedMotion;

  const setPointerVars = (mx: number, my: number, px: number, py: number) => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--mx", mx.toFixed(3));
    el.style.setProperty("--my", my.toFixed(3));
    el.style.setProperty("--px", `${px.toFixed(1)}%`);
    el.style.setProperty("--py", `${py.toFixed(1)}%`);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !finePointer()) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => setPointerVars(x * 2 - 1, y * 2 - 1, x * 100, y * 100));
  };

  const onPointerEnter = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && finePointer()) setHovering(true);
  };

  const onPointerLeave = () => {
    cancelAnimationFrame(frameRef.current);
    setHovering(false);
    setPointerVars(0, 0, 50, 50);
  };

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  // Gyroscope response (phones/tablets). Android streams orientation freely;
  // iOS 13+ needs a tap + system prompt, so we show a "Tilt to explore" pill.
  const tiltSupport = useSyncExternalStore(subscribeNever, getTiltSupport, () => "none" as const);
  const [permission, setPermission] = useState<"unknown" | "granted" | "denied">("unknown");
  const [tilting, setTilting] = useState(false);

  // Listen whenever a touch device might have a sensor. Android (and any
  // browser that streams freely) starts sending readings straight away; iOS
  // sends nothing until the visitor allows it.
  const tiltActive =
    !reducedMotion && tiltSupport !== "none" && permission !== "denied" && inView && pageVisible;

  // Only offer the "Tilt to explore" button when the browser has a permission
  // gate AND no readings have arrived after a short wait — i.e. iOS Safari.
  // (Recent Chrome also exposes requestPermission but never needs it.)
  const [promptReady, setPromptReady] = useState(false);
  useEffect(() => {
    if (tiltSupport !== "needs-permission") return;
    const t = window.setTimeout(() => setPromptReady(true), 1200);
    return () => window.clearTimeout(t);
  }, [tiltSupport]);

  const tiltState: "off" | "needs-permission" | "on" =
    reducedMotion || tiltSupport === "none" || permission === "denied"
      ? "off"
      : tiltSupport === "needs-permission" && permission === "unknown" && !tilting
        ? promptReady
          ? "needs-permission"
          : "off"
        : "on";

  useEffect(() => {
    if (!tiltActive) return;
    let base: { x: number; y: number } | null = null;
    let lastAngle: number | null = null;

    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta == null || e.gamma == null) return;

      // Work from gravity, not raw angles. The sensor's beta/gamma jump and
      // swap meaning when the phone tips past vertical or is turned upside
      // down; the direction of "down" relative to the screen never does.
      const [sx, sy] = screenGravity(e.beta, e.gamma, screenAngle());

      // A screen rotation (incl. flipping to portrait upside-down) is a new
      // grip: re-learn "level" from this reading instead of easing into it.
      const angle = ((screenAngle() % 360) + 360) % 360;
      if (angle !== lastAngle) {
        lastAngle = angle;
        base = null;
      }

      // However the phone is held when we start counts as "level"; the
      // baseline then drifts slowly so a new grip settles back to centre.
      if (!base) base = { x: sx, y: sy };
      base.x += (sx - base.x) * TILT_RECENTER;
      base.y += (sy - base.y) * TILT_RECENTER;
      const mx = clamp((sx - base.x) / TILT_RANGE);
      // Screen "up" is +y for gravity; the parallax uses +y = down.
      const my = clamp(-(sy - base.y) / TILT_RANGE);
      setTilting(true);
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() =>
        setPointerVars(mx, my, 50 + mx * 40, 50 + my * 40),
      );
    };

    window.addEventListener("deviceorientation", onOrientation);
    return () => {
      window.removeEventListener("deviceorientation", onOrientation);
      cancelAnimationFrame(frameRef.current);
      setPointerVars(0, 0, 50, 50);
      setTilting(false);
    };
  }, [tiltActive]);

  const enableTilt = async () => {
    const DOE = window.DeviceOrientationEvent as IOSOrientationEvent;
    try {
      const result = await DOE.requestPermission?.();
      setPermission(result === "granted" ? "granted" : "denied");
    } catch {
      setPermission("denied");
    }
  };

  return (
    <div
      ref={stageRef}
      className={styles.stage}
      data-paused={!playing}
      data-static={reducedMotion}
      data-hover={hovering}
      data-tilt={tilting}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ "--scene-ms": `${SCENE_MS}ms` } as CSSProperties}
      role="group"
      aria-roledescription="carousel"
      aria-label="How Trishala makes flexible packaging: extrude, print, laminate, pouch, in every format"
    >
      <span className={styles.glow} aria-hidden />

      {/* Process scenes — extrude, print, laminate, pouch */}
      {PROCESS.map((p, i) => (
        <div key={p.id} className={styles.scene} data-active={active === i} aria-hidden={active !== i}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              {String(i + 1).padStart(2, "0")} · How we make it
            </p>
            <Word>{p.word}</Word>
            <p className={styles.caption}>{p.caption}</p>
          </div>
          <div
            className={`${styles.machineCard} ${CARD_VARIANT[p.variant]}`}
            style={{ aspectRatio: p.aspect }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes={IMAGE_SIZES}
              className={p.variant === "narrow" ? "object-contain p-[4%]" : p.variant === "wide" ? "object-contain" : "object-cover"}
              {...(i === 0 ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
            />
          </div>
          {p.variant === "narrow" && (
            <div className={styles.layers} aria-hidden>
              {[0, 1, 2, 3].map((n) => (
                <i key={n} style={{ "--i": n } as CSSProperties} />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Final scene — every format */}
      <div className={styles.scene} data-active={active === CONVERT_INDEX} aria-hidden={active !== CONVERT_INDEX}>
        <div className={styles.copy}>
          <Word className={styles.wordSmall}>One partner.</Word>
          <Word className={`${styles.wordSmall} ${styles.wordGreen}`} delay={0.12}>
            Every format.
          </Word>
        </div>
        {POUCHES.map((p, i) => (
          <div
            key={p.src}
            className={styles.pouch}
            style={
              {
                left: p.left,
                width: `${34 * p.scale}%`,
                zIndex: p.scale > 1 ? 2 : 1,
                "--i": i,
                "--r": p.r,
                "--depth": p.depth,
              } as CSSProperties
            }
          >
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 14vw, 30vw" className="object-contain" />
          </div>
        ))}
      </div>

      {/* Brand sweep — remounts on every scene change to replay */}
      {!reducedMotion && (
        <>
          <span key={`a${active}`} className={styles.sweep} aria-hidden />
          <span key={`b${active}`} className={styles.sweep} aria-hidden />
        </>
      )}

      {tiltState === "needs-permission" && (
        <button type="button" className={styles.tiltButton} onClick={enableTilt}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <rect x="7" y="2" width="10" height="20" rx="2" transform="rotate(-12 12 12)" />
            <path d="M3 8a10 10 0 0 0 0 8M21 8a10 10 0 0 1 0 8" strokeLinecap="round" />
          </svg>
          Tilt to explore
        </button>
      )}

      <div className={styles.progress}>
        {SCENES.map((s, i) => (
          <button
            key={`${s.id}-${i === active ? active : "idle"}`}
            type="button"
            className={styles.dot}
            aria-label={`Show ${s.label}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
          >
            <span />
          </button>
        ))}
      </div>
    </div>
  );
}
