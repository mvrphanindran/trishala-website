import Image from "next/image";
import {
  getIndustryImage,
  industriesCatalogue,
} from "@/lib/industry-images";
import { v1 } from "@/lib/v1-tokens";

type IndustriesShowcaseProps = {
  layout?: "rail" | "grid";
  showLabels?: boolean;
  railRef?: React.RefObject<HTMLDivElement | null>;
};

export default function IndustriesShowcase({
  layout = "rail",
  showLabels = true,
  railRef,
}: IndustriesShowcaseProps) {
  if (layout === "grid") {
    return (
      <ul className="mx-auto flex max-w-[1180px] flex-col gap-12 px-5 pb-14 md:gap-16 md:px-8 md:pb-20">
        {industriesCatalogue.map((industry) => {
          const imageSrc = getIndustryImage(industry.slug);
          if (!imageSrc) return null;

          return (
            <li key={industry.slug} id={industry.slug} className="scroll-mt-[88px]">
              <div className="group flex flex-col">
                <div
                  className="relative aspect-[16/9] w-full overflow-hidden"
                  style={{
                    background: v1.canvas,
                    border: `1px solid ${v1.silver.hairline}`,
                    boxShadow: v1.shadow.soft,
                  }}
                >
                  <Image
                    src={imageSrc}
                    alt={industry.label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1180px"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.015] md:p-6"
                  />
                </div>
                {showLabels ? (
                  <h2
                    className="mt-5 text-center text-xl font-extrabold tracking-tight transition-colors group-hover:text-[#00B140] md:mt-6 md:text-2xl"
                    style={{ color: v1.ink.navy }}
                  >
                    {industry.label}
                  </h2>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div
      ref={railRef}
      className="flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-8 [&::-webkit-scrollbar]:hidden"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {industriesCatalogue.map((industry) => {
        const imageSrc = getIndustryImage(industry.slug);
        if (!imageSrc) return null;

        return (
          <div
            key={industry.slug}
            className="group shrink-0 snap-start"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="flex w-[min(72vw,280px)] flex-col md:w-[260px] lg:w-[280px]">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={industry.label}
                  fill
                  sizes="280px"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              {showLabels ? (
                <h2
                  className="mt-4 text-base font-extrabold tracking-tight transition-colors group-hover:text-[#00B140] md:text-lg"
                  style={{ color: v1.ink.navy }}
                >
                  {industry.label}
                </h2>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
