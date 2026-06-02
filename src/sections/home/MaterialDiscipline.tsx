import Image from "next/image";
import { HOME_IMAGES } from "@/sections/home/home-images";
import { v1 } from "@/lib/v1-tokens";

export default function MaterialDiscipline() {
  return (
    <section className="relative pb-12 pt-8 md:pb-16 md:pt-10 lg:pb-20 lg:pt-12">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-10">
          <div className="flex flex-col justify-center">
            <h2
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em]"
              style={{ color: v1.ink.navy }}
            >
              Built With
              <br />
              Material Discipline
            </h2>

            <p
              className="mt-6 max-w-md text-base leading-relaxed"
              style={{ color: v1.ink.body }}
            >
              Lean film structures.
              <br />
              Optimized material usage.
              <br />
              Packaging engineered for product protection and operational
              consistency.
            </p>
          </div>

          <div className="flex min-h-0 w-full items-center justify-center px-2 py-4 sm:px-3 sm:py-5 lg:px-4 lg:py-6">
            <Image
              src={HOME_IMAGES.materialDiscipline}
              alt="Flexible packaging formats"
              width={2400}
              height={1600}
              priority
              sizes="(max-width: 1024px) 88vw, 48vw"
              className="h-auto w-[88%] max-w-full object-contain object-center md:w-[90%] lg:w-[92%] lg:origin-center lg:scale-[1.12]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
