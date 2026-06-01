import Image from "next/image";
import { getIndustryImage } from "@/lib/industry-images";
import { v1 } from "@/lib/v1-tokens";

type IndustryVisualProps = {
  slug: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  aspectClassName?: string;
  imageClassName?: string;
  className?: string;
};

export default function IndustryVisual({
  slug,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  priority = false,
  aspectClassName = "aspect-[4/3]",
  imageClassName = "object-contain p-4 md:p-5",
  className = "",
}: IndustryVisualProps) {
  const src = getIndustryImage(slug);

  if (!src) {
    return null;
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${aspectClassName} ${className}`}
      style={{ background: v1.ivory.panel }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageClassName}
      />
    </div>
  );
}
