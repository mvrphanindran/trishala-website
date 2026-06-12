import Image from "next/image";
import Link from "next/link";
import { getIndustryImage, industriesCatalogue } from "@/lib/industry-images";
import { v1 } from "@/lib/v1-tokens";
import { industryHref } from "@/lib/industries-navigation";

type IndustriesShowcaseProps = {
  layout?: "rail" | "grid" | "gallery" | "list" | "premium-gallery";
  showLabels?: boolean;
  railRef?: React.RefObject<HTMLDivElement | null>;
};

export default function IndustriesShowcase({
  layout = "rail",
  showLabels = true,
  railRef,
}: IndustriesShowcaseProps) {
  if (layout === "premium-gallery") {
    return (
      <ul className="mx-auto grid max-w-[1360px] grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {industriesCatalogue.map((industry) => {
          const imageSrc = getIndustryImage(industry.slug);
          if (!imageSrc) return null;

          return (
            <li key={industry.slug}>
              <Link href={industryHref(industry.slug)} className="group block">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={imageSrc}
                    alt={industry.label}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 680px"
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
  if (layout === "grid") {
    return (
      <ul className="mx-auto grid max-w-[1180px] grid-cols-1 gap-7 px-5 pb-14 sm:grid-cols-2 md:px-8 md:pb-20 lg:grid-cols-3">
        {industriesCatalogue.map((industry) => {
          const imageSrc = getIndustryImage(industry.slug);
          if (!imageSrc) return null;

          return (
            <li
              key={industry.slug}
              id={industry.slug}
              className="scroll-mt-[88px]"
            >
              <Link href={industryHref(industry.slug)} className="group block">
                <div className="flex flex-col">
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden"
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  if (layout === "gallery") {
    return (
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {industriesCatalogue.map((industry) => {
          const imageSrc = getIndustryImage(industry.slug);
          if (!imageSrc) return null;

          return (
            <li key={industry.slug}>
              <Link href={industryHref(industry.slug)} className="group block">
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={industry.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  if (layout === "list") {
    return (
      <ul className="mx-auto max-w-[900px] space-y-4 md:space-y-5">
        {industriesCatalogue.map((industry) => {
          const imageSrc = getIndustryImage(industry.slug);
          if (!imageSrc) return null;

          return (
            <li key={industry.slug}>
              <Link href={industryHref(industry.slug)} className="group block">
                <div className="mx-auto relative aspect-[16/9] w-full max-w-[680px] overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={industry.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 680px"
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
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
            <Link href={industryHref(industry.slug)} className="block">
              <div className="flex w-[min(72vw,280px)] flex-col md:w-[260px] lg:w-[280px]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
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
            </Link>
          </div>
        );
      })}
    </div>
  );
}
