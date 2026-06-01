import { v1 } from "@/lib/v1-tokens";

type MenuPreviewItemProps = {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  muted?: boolean;
  onClick?: () => void;
  onPointerEnter?: () => void;
  onFocus?: () => void;
};

/** Non-navigating menu row — portfolio preview only (landing pages added later). */
export default function MenuPreviewItem({
  children,
  className = "",
  active = false,
  muted = false,
  onClick,
  onPointerEnter,
  onFocus,
}: MenuPreviewItemProps) {
  return (
    <button
      type="button"
      className={`block w-full cursor-pointer text-left transition-colors hover:text-[#00B140] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      style={{
        color: active
          ? v1.green.primary
          : muted
            ? v1.ink.body
            : v1.ink.navy,
        outlineColor: v1.green.primary,
      }}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onFocus={onFocus}
    >
      {children}
    </button>
  );
}
