import Image from "next/image";
import Link from "next/link";
import {
  getIndustryImage,
  industriesCatalogue,
} from "@/lib/industry-images";
import {
  industryHref,
  industrySectionHref,
} from "@/lib/industries-navigation";
import { v1 } from "@/lib/v1-tokens";

type IndustriesShowcaseProps = {
  layout?: "rail" | "grid";
  showLabels?: boolean;
  useAnchors?: boolean;
  railRef?: React.RefObject<HTMLDivElement | null>;
};

export default function IndustriesShowcase({
  layout = "rail",
  showLabels = true,
  useAnchors = false,
  railRef,
}: IndustriesShowcaseProps) {
  const hrefFor = (slug: string) =>
    useAnchors ? industrySectionHref(slug) : industryHref(slug);

  if (layout === "grid") {
    return (
      <ul className="mx-auto grid max-w-[1380px] grid-cols-2 gap-6 px-5 pb-10 sm:grid-cols-3 md:gap-8 md:px-8 md:pb-14 lg:grid-cols-3">
        {industriesCatalogue.map((industry) => {
          const imageSrc = getIndustryImage(industry.slug);
          if (!imageSrc) return null;

          return (
            <li key={industry.slug} id={industry.slug} className="scroll-mt-[88px]">
              <Link href={hrefFor(industry.slug)} className="group flex flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={industry.label}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                {showLabels ? (
                  <h2
                    className="mt-4 text-center text-base font-extrabold tracking-tight transition-colors group-hover:text-[#00B140] md:text-lg"
                    style={{ color: v1.ink.navy }}
                  >
                    {industry.label}
                  </h2>
                ) : null}
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
          <Link
            key={industry.slug}
            href={hrefFor(industry.slug)}
            className="group shrink-0 snap-start"
            style={{ scrollSnapAlign: "start" }}
          >
            <article className="flex w-[min(72vw,280px)] flex-col md:w-[260px] lg:w-[280px]">
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
            </article>
          </Link>
        );
      })}
    </div>
  );
}
