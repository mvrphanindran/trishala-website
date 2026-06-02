import Link from "next/link";
import { v1 } from "@/lib/v1-tokens";

type MenuPreviewItemProps = {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  muted?: boolean;
  href?: string;
  onClick?: () => void;
  onPointerEnter?: () => void;
  onFocus?: () => void;
};

const baseClass =
  "block w-full text-left transition-colors hover:text-[#00B140] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export default function MenuPreviewItem({
  children,
  className = "",
  active = false,
  muted = false,
  href,
  onClick,
  onPointerEnter,
  onFocus,
}: MenuPreviewItemProps) {
  const style = {
    color: active ? v1.green.primary : muted ? v1.ink.body : v1.ink.navy,
    outlineColor: v1.green.primary,
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClass} ${className}`}
        style={style}
        onClick={onClick}
        onPointerEnter={onPointerEnter}
        onFocus={onFocus}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`${baseClass} cursor-pointer ${className}`}
      style={style}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onFocus={onFocus}
    >
      {children}
    </button>
  );
}
