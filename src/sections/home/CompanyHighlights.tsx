const highlights = [
  {
    value: "20+",
    label: "Years of Experience",
  },
  {
    value: "1000+",
    label: "Metric Tons Monthly Production",
  },
  {
    value: "\u20B9250 Cr+",
    label: "Annual Turnover",
  },
  {
    value: "250+",
    label: "Experienced & Skilled Workforce",
  },
  {
    value: "75,000+",
    label: "Sq Ft Production Facility",
  },
] as const;

export default function CompanyHighlights() {
  return (
    <section className="py-6 md:py-8 lg:py-10">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="border-y border-[#E5E9EE] bg-white">
          <div className="divide-y divide-[#E5E9EE] md:divide-y-0 md:flex md:items-stretch">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-1 items-center gap-4 px-0 py-4 md:px-6 md:py-6 ${
                  index > 0 ? "md:border-l md:border-[#E5E9EE]" : ""
                }`}
              >
                <div className="flex min-w-0 flex-col">
                  <p className="text-[clamp(1.6rem,3vw,3rem)] font-extrabold leading-none tracking-[-0.05em] text-[#0B1B4D] md:text-[clamp(1.75rem,2.4vw,3rem)]">
                    {item.value}
                  </p>
                  <p className="mt-2 max-w-[14ch] text-sm font-medium leading-snug text-[#3D4A5C] md:text-[15px]">
                    {item.label}
                  </p>
                </div>
                {index < highlights.length - 1 ? (
                  <span className="ml-auto hidden h-10 w-px bg-[#DDE3EA] md:block" aria-hidden />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
