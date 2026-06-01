"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  getIndustryImage,
  industriesCatalogue,
} from "@/lib/industry-images";
import { v1 } from "@/lib/v1-tokens";

type LightboxState = {
  src: string;
  alt: string;
};

export default function IndustriesCatalogue() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [visible, setVisible] = useState(false);

  const openLightbox = useCallback((src: string, alt: string) => {
    setLightbox({ src, alt });
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const closeLightbox = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => setLightbox(null), 220);
  }, []);

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox, closeLightbox]);

  return (
    <>
      <div className="mx-auto max-w-[1380px] px-5 pb-32 md:px-8 md:pb-40">
        {industriesCatalogue.map((industry, index) => {
          const imageSrc = getIndustryImage(industry.slug);

          return (
            <article key={industry.slug}>
              <header className="pt-14 first:pt-0 md:pt-16 lg:pt-20">
                <h2
                  className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
                  style={{ color: v1.ink.navy }}
                >
                  {industry.label}
                </h2>
              </header>

              {imageSrc ? (
                <button
                  type="button"
                  className="relative mt-8 block w-full cursor-zoom-in overflow-hidden md:mt-10"
                  style={{
                    background: v1.ivory.panel,
                    border: `1px solid ${v1.silver.hairline}`,
                  }}
                  onClick={() => openLightbox(imageSrc, industry.label)}
                  aria-label={`View ${industry.label} packaging`}
                >
                  <span className="relative block aspect-[16/10] w-full min-h-[280px] md:min-h-[400px] lg:min-h-[480px]">
                    <Image
                      src={imageSrc}
                      alt={industry.label}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 1380px) 100vw, 1380px"
                      className="object-contain p-6 md:p-10 lg:p-12"
                    />
                  </span>
                </button>
              ) : null}

              {index < industriesCatalogue.length - 1 ? (
                <div
                  className="mt-14 h-px w-full md:mt-16 lg:mt-20"
                  style={{
                    background: v1.silver.gradient,
                    opacity: 0.55,
                  }}
                  aria-hidden
                />
              ) : null}
            </article>
          );
        })}
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-5 transition-opacity duration-200 md:p-10"
          style={{
            background: "rgba(11, 27, 77, 0.72)",
            opacity: visible ? 1 : 0,
          }}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-2xl font-light text-white transition-opacity hover:opacity-80 md:right-8 md:top-8"
            style={{ background: "rgba(255, 255, 255, 0.12)" }}
            aria-label="Close"
            onClick={closeLightbox}
          >
            ×
          </button>

          <div
            className="relative flex max-h-[min(90vh,900px)] w-full max-w-[min(1200px,95vw)] items-center justify-center transition-opacity duration-200"
            style={{ opacity: visible ? 1 : 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={2400}
              height={1600}
              sizes="95vw"
              className="h-auto max-h-[min(90vh,900px)] w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
