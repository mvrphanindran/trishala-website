const highlights = [
  {
    value: "20+",
    label: "Years of Experience",
  },
  {
    value: "800+",
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
        <div className="bg-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="flex min-w-0 flex-1 flex-col">
                <p className="text-[clamp(1.6rem,3vw,3rem)] font-extrabold leading-none tracking-[-0.05em] text-[#0B1B4D] md:text-[clamp(1.75rem,2.4vw,3rem)]">
                  {item.value}
                </p>
                <p className="mt-2 max-w-[14ch] text-sm font-medium leading-snug text-[#3D4A5C] md:text-[15px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
