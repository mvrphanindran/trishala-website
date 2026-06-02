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
      className={`mx-auto max-w-[1380px] px-5 pb-8 pt-24 md:px-8 md:pb-10 md:pt-28 ${
        centered ? "text-center" : ""
      }`}
    >
      <span
        className={`text-[11px] font-bold uppercase tracking-[0.32em] ${
          centered ? "block" : ""
        }`}
        style={{ color: v1.green.primary }}
      >
        {label}
      </span>

      <h1
        className={`mt-4 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.04em] ${
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
