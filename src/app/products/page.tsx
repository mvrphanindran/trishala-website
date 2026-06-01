import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";
import { coreProducts, industries } from "@/lib/catalog";
import { v1 } from "@/lib/v1-tokens";

export default function ProductsPage() {
  return (
    <PageShell warm>
      <PageIntro
        label="Products"
        title="Packaging Catalogue"
        description="Three core formats. Engineered for shelf impact."
      />

      <section className="mx-auto max-w-[1380px] px-5 pb-20 md:px-8 md:pb-28">
        <div className="flex flex-col gap-24 md:gap-32">
          {coreProducts.map((product, index) => (
            <article
              key={product.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div
                className="relative min-h-[320px] md:min-h-[480px] lg:min-h-[560px]"
                style={{
                  background: v1.ivory.rich,
                  border: `1px solid ${v1.silver.hairline}`,
                }}
              >
                <Image
                  src={product.image}
                  alt={product.plural}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-8 md:p-12"
                  priority={index === 0}
                />
              </div>
              <div>
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.28em]"
                  style={{ color: v1.green.primary }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2
                  className="mt-4 text-[clamp(1.75rem,3vw,2.75rem)] font-extrabold tracking-[-0.03em]"
                  style={{ color: v1.ink.navy }}
                >
                  {product.plural}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="industries"
        className="border-t py-20 md:py-28"
        style={{
          borderColor: v1.silver.hairline,
          background: v1.ivory.rich,
        }}
      >
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <p
            className="mb-10 text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: v1.green.primary }}
          >
            Industries
          </p>
          <div className="grid grid-cols-2 gap-px md:grid-cols-3 lg:grid-cols-6">
            {industries.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center px-4 py-10 text-center"
                style={{
                  background: v1.ivory.base,
                  border: `1px solid ${v1.silver.hairline}`,
                }}
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: v1.ink.navy }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 text-center md:pb-32">
        <Link
          href="/contact"
          className="inline-flex rounded-full px-8 py-3.5 text-sm font-bold text-white"
          style={{ background: v1.green.primary }}
        >
          Request Packaging Consultation
        </Link>
      </section>
    </PageShell>
  );
}
