import Link from "next/link";
import Image from "next/image";
import { getPackagingApplicationItems } from "@/lib/packaging-applications-registry";
import { v1 } from "@/lib/v1-tokens";

export default function PackagingApplicationsSection() {
  const packagingApplicationItems = getPackagingApplicationItems();

  return (
    <section id="packaging-applications" className="scroll-mt-[88px] py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: v1.green.primary }}>
            Applications
          </p>
          <h2
            className="mt-2 text-[clamp(1.45rem,2.8vw,2.15rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Packaging Applications
          </h2>
          <p className="mt-3 text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
            Flexible packaging formats tailored for diverse industries and product categories.
          </p>
        </div>

        <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {packagingApplicationItems.map((item) => (
            <Link key={item.title} href={`/applications/${item.slug}`} className="group block w-full">
              <div className="flex flex-col items-center">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.025]"
                  />
                </div>
                <h3 className="mt-3 text-center text-sm font-semibold leading-snug text-[#0B1B4D] md:text-[15px]">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
