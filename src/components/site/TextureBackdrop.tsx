import { v1 } from "@/lib/v1-tokens";

type TextureBackdropProps = {
  variant?: "hero" | "subtle";
};

export default function TextureBackdrop({
  variant = "subtle",
}: TextureBackdropProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(${v1.silver.hairline} 1px, transparent 1px),
            linear-gradient(90deg, ${v1.silver.hairline} 1px, transparent 1px)
          `,
          backgroundSize: variant === "hero" ? "72px 72px" : "96px 96px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 70%)",
        }}
      />
      {variant === "hero" ? (
        <div
          className="absolute -right-[20%] top-[10%] h-[60%] w-[55%] rotate-12 opacity-[0.07]"
          style={{
            background: v1.silver.gradient,
            borderRadius: "4px",
          }}
        />
      ) : null}
    </div>
  );
}
