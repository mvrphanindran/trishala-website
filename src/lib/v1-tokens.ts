/** Trishala V1 — locked design system (white canvas, accent-only colour) */
export const v1 = {
  canvas: "#FFFFFF",
  ivory: {
    /** Primary page canvas — continuous white field */
    base: "#FFFFFF",
    rich: "#FFFFFF",
    warm: "#FFFFFF",
    panel: "#FFFFFF",
    /** Footer / terminal wash — barely perceptible cool grey */
    deep: "#F6F8FB",
  },
  green: {
    primary: "#00B140",
    deep: "#008A34",
    soft: "rgba(0, 177, 64, 0.08)",
    line: "rgba(0, 177, 64, 0.35)",
  },
  silver: {
    hairline: "#EBEEF2",
    light: "#F3F5F7",
    mid: "#B8BFC9",
    dark: "#8A939F",
    gradient:
      "linear-gradient(135deg, #F5F7FA 0%, #E8ECF1 42%, #D4DAE2 100%)",
  },
  ink: {
    navy: "#0B1B4D",
    charcoal: "#2A3140",
    body: "#3D4A5C",
    muted: "#6B7585",
  },
  border: {
    subtle: "rgba(221, 225, 230, 0.45)",
    faint: "rgba(235, 238, 242, 0.9)",
  },
  shadow: {
    soft: "0 1px 2px rgba(11, 27, 77, 0.04), 0 6px 20px rgba(11, 27, 77, 0.04)",
    card: "0 2px 10px rgba(11, 27, 77, 0.05)",
    nav: "0 8px 32px rgba(11, 27, 77, 0.06)",
  },
  gradient: {
    /** Nearly invisible section atmosphere */
    mist:
      "linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 48%, #FFFFFF 100%)",
    coolWash:
      "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 55%, #FFFFFF 100%)",
    footer: "linear-gradient(180deg, #FFFFFF 0%, #F6F8FB 100%)",
  },
  maxWidth: "1380px",
} as const;

/** Integrated image presentation — no boxed panel backgrounds */
export const v1Image = {
  container: {
    background: "transparent",
  },
  containerOpen: {
    background: "transparent",
  },
  padding: "object-contain",
} as const;

export const siteFont =
  "var(--font-geist-sans), system-ui, sans-serif" as const;
