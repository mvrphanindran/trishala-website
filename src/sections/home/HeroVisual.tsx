"use client";

import Image from "next/image";
import { HOME_IMAGES } from "@/sections/home/home-images";

export default function HeroVisual() {
  return (
    <div className="relative h-full min-h-[clamp(320px,52vw,640px)] w-full lg:min-h-0">
      <Image
        src={HOME_IMAGES.heroMain}
        alt="Premium flexible packaging"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="object-contain object-center lg:object-right"
      />
    </div>
  );
}
