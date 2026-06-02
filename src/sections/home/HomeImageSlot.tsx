"use client";

import Image from "next/image";
import { useState } from "react";
import { v1 } from "@/lib/v1-tokens";

type HomeImageSlotProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  objectFit?: "contain" | "cover";
};

export default function HomeImageSlot({
  src,
  alt,
  priority = false,
  sizes = "100vw",
  className = "",
  objectFit = "contain",
}: HomeImageSlotProps) {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={`relative h-full w-full ${className}`}
      style={{
        background: "transparent",
      }}
    >
      {visible ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={objectFit === "cover" ? "object-cover" : "object-contain"}
          onError={() => setVisible(false)}
        />
      ) : null}
    </div>
  );
}
