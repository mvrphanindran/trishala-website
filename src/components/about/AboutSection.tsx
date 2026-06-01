import { v1 } from "@/lib/v1-tokens";

type AboutSectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  centered?: boolean;
};

export default function AboutSection({
  id,
  label,
  title,
  description,
  children,
  centered = false,
}: AboutSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-[88px] border-t py-16 md:py-20 lg:py-24"
      style={{ borderColor: v1.silver.hairline }}
    >
      <div className={`mx-auto max-w-[1380px] px-5 md:px-8 ${centered ? "text-center" : ""}`}>
        <div
          className={`mb-8 flex items-center gap-4 ${centered ? "justify-center" : ""}`}
        >
          <span
            className="h-px w-12 shrink-0"
            style={{ background: v1.silver.gradient }}
          />
          <span
            className="text-[11px] font-bold uppercase tracking-[0.32em]"
            style={{ color: v1.green.primary }}
          >
            {label}
          </span>
          {!centered ? (
            <span
              className="hidden h-px flex-1 max-w-[120px] sm:block"
              style={{ background: v1.silver.hairline }}
            />
          ) : null}
        </div>

        <h2
          className={`text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em] ${
            centered ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
          style={{ color: v1.ink.navy }}
        >
          {title}
        </h2>

        {description ? (
          <p
            className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
              centered ? "mx-auto" : ""
            }`}
            style={{ color: v1.ink.body }}
          >
            {description}
          </p>
        ) : null}

        <div className={description ? "mt-10 md:mt-12" : "mt-8 md:mt-10"}>{children}</div>
      </div>
    </section>
  );
}
