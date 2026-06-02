import { v1 } from "@/lib/v1-tokens";

type ContentPlaceholderProps = {
  label: string;
  className?: string;
  aspectClassName?: string;
  variant?: "default" | "client" | "gallery";
};

export default function ContentPlaceholder({
  label,
  className = "",
  aspectClassName = "aspect-[4/3]",
  variant = "default",
}: ContentPlaceholderProps) {
  const isClient = variant === "client";

  return (
    <div
      className={`flex items-center justify-center px-4 text-center ${aspectClassName} ${className}`}
      style={{
        background: v1.canvas,
        boxShadow: v1.shadow.soft,
        filter: isClient ? "grayscale(1)" : undefined,
      }}
    >
      <p
        className="text-[10px] font-bold uppercase tracking-[0.14em] md:text-[11px] md:tracking-[0.16em]"
        style={{ color: isClient ? v1.silver.dark : v1.ink.muted }}
      >
        {label}
      </p>
    </div>
  );
}
