/** Trishala V1 — locked design system */
export const v1 = {
  ivory: {
    base: "#FAF8F4",
    rich: "#F5F1EA",
    warm: "#F7F4EF",
    panel: "#F0EBE3",
    deep: "#E8E2D8",
  },
  green: {
    primary: "#00B140",
    deep: "#008A34",
    soft: "rgba(0, 177, 64, 0.1)",
    line: "rgba(0, 177, 64, 0.35)",
  },
  silver: {
    hairline: "#DDE1E6",
    light: "#E8EAED",
    mid: "#B8BFC9",
    dark: "#8A939F",
    gradient:
      "linear-gradient(135deg, #EEF0F3 0%, #D4DAE2 42%, #A8B0BB 100%)",
  },
  ink: {
    navy: "#0B1B4D",
    charcoal: "#2A3140",
    body: "#3D4A5C",
    muted: "#6B7585",
  },
  maxWidth: "1380px",
} as const;

export const siteFont =
  "var(--font-geist-sans), system-ui, sans-serif" as const;
