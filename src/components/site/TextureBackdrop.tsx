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
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(${v1.border.faint} 1px, transparent 1px),
            linear-gradient(90deg, ${v1.border.faint} 1px, transparent 1px)
          `,
          backgroundSize: variant === "hero" ? "80px 80px" : "96px 96px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 65%)",
        }}
      />
      {variant === "hero" ? (
        <div
          className="absolute -right-[20%] top-[10%] h-[60%] w-[55%] rotate-12 opacity-[0.04]"
          style={{
            background: v1.silver.gradient,
            borderRadius: "4px",
          }}
        />
      ) : null}
    </div>
  );
}
