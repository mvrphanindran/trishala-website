import { v1 } from "@/lib/v1-tokens";

const cards = [
  {
    title: "Vision",
    body: "To become the most trusted flexible packaging partner by delivering packaging solutions that elevate brands and create lasting value.",
  },
  {
    title: "Mission",
    body: "To provide reliable, high-quality and innovative flexible packaging through operational excellence, responsible manufacturing and customer-focused service.",
  },
  {
    title: "Objectives",
    items: [
      "Consistent quality",
      "On-time delivery",
      "Customer satisfaction",
      "Manufacturing excellence",
      "Continuous improvement",
      "Long-term partnerships",
    ],
  },
] as const;

export default function OurPurpose() {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <h2
          className="text-center text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
          style={{ color: v1.ink.navy }}
        >
          Our Purpose
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 md:gap-8">
          {cards.map((card) => (
            <li
              key={card.title}
              className="rounded-2xl p-8 transition-shadow duration-300 hover:shadow-lg md:p-9"
              style={{
                background: v1.canvas,
                boxShadow: v1.shadow.soft,
              }}
            >
              <h3
                className="text-[11px] font-bold uppercase tracking-[0.28em]"
                style={{ color: v1.green.primary }}
              >
                {card.title}
              </h3>
              {"body" in card ? (
                <p
                  className="mt-5 text-base leading-relaxed"
                  style={{ color: v1.ink.body }}
                >
                  {card.body}
                </p>
              ) : (
                <ul className="mt-5 space-y-2.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-snug md:text-base"
                      style={{ color: v1.ink.body }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
