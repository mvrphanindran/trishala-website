import { v1 } from "@/lib/v1-tokens";

type PageIntroProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function PageIntro({
  label,
  title,
  description,
  align = "left",
}: PageIntroProps) {
  const centered = align === "center";

  return (
    <header
      className={`mx-auto max-w-[1380px] px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-40 ${
        centered ? "text-center" : ""
      }`}
    >
      <div
        className={`mb-6 flex items-center gap-4 ${centered ? "justify-center" : ""}`}
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

      <h1
        className={`max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.04em] ${
          centered ? "mx-auto" : ""
        }`}
        style={{ color: v1.ink.navy }}
      >
        {title}
      </h1>

      {description ? (
        <p
          className={`mt-6 max-w-xl text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
          style={{ color: v1.ink.body }}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
