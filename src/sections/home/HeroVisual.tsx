"use client";

import Image from "next/image";
import { useState } from "react";
import { HOME_IMAGES } from "@/sections/home/home-images";
import { v1 } from "@/lib/v1-tokens";

export default function HeroVisual() {
  const [loaded, setLoaded] = useState(true);

  return (
    <div
      className="relative w-full lg:min-h-[min(72vh,720px)]"
      style={{
        minHeight: "clamp(320px, 52vw, 640px)",
        background: loaded ? "transparent" : v1.ivory.panel,
        border: `1px solid ${v1.silver.hairline}`,
      }}
    >
      {loaded ? (
        <Image
          src={HOME_IMAGES.hero}
          alt="Trishala flexible packaging"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain object-center p-4 md:p-6 lg:p-8"
          onError={() => setLoaded(false)}
        />
      ) : null}
    </div>
  );
}
