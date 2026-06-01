import { v1 } from "@/lib/v1-tokens";

type ContentPlaceholderProps = {
  label: string;
  className?: string;
  aspectClassName?: string;
};

export default function ContentPlaceholder({
  label,
  className = "",
  aspectClassName = "aspect-[4/3]",
}: ContentPlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center px-4 text-center ${aspectClassName} ${className}`}
      style={{
        background: v1.ivory.panel,
        border: `1px solid ${v1.silver.hairline}`,
      }}
    >
      <p
        className="text-[11px] font-bold uppercase tracking-[0.16em]"
        style={{ color: v1.ink.muted }}
      >
        {label}
      </p>
    </div>
  );
}
