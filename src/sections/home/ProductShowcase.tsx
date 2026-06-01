import Link from "next/link";
import { HOME_IMAGES } from "@/sections/home/home-images";
import HomeImageSlot from "@/sections/home/HomeImageSlot";
import { v1 } from "@/lib/v1-tokens";

const products = [
  {
    title: "Stand Up Pouches",
    image: HOME_IMAGES.products.standUp,
    span: "lg:col-span-7 lg:row-span-2",
    minH: "min-h-[380px] lg:min-h-[620px]",
  },
  {
    title: "Spout Pouches",
    image: HOME_IMAGES.products.spout,
    span: "lg:col-span-5",
    minH: "min-h-[300px] lg:min-h-[300px]",
  },
  {
    title: "Printed Laminate Rolls",
    image: HOME_IMAGES.products.laminate,
    span: "lg:col-span-5",
    minH: "min-h-[300px] lg:min-h-[300px]",
  },
] as const;

export default function ProductShowcase() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24"
      style={{ background: v1.ivory.base }}
    >
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:mb-14 md:flex-row md:items-end">
          <div>
            <p
              className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em]"
              style={{ color: v1.green.primary }}
            >
              Product Solutions
            </p>
            <h2
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.03em]"
              style={{ color: v1.ink.navy }}
            >
              Core Formats
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-bold uppercase tracking-[0.14em] transition-colors hover:text-[#00B140]"
            style={{ color: v1.ink.muted }}
          >
            Full catalogue →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-5">
          {products.map((product) => (
            <article key={product.title} className={`flex flex-col ${product.span}`}>
              <div
                className={`relative flex-1 ${product.minH}`}
                style={{ background: v1.ivory.rich }}
              >
                <HomeImageSlot
                  src={product.image}
                  alt={product.title}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="p-6 md:p-10"
                />
              </div>
              <p
                className="mt-4 border-t pt-4 text-sm font-bold uppercase tracking-[0.14em]"
                style={{
                  color: v1.ink.navy,
                  borderColor: v1.silver.hairline,
                }}
              >
                {product.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
