import AboutHashScroll from "@/components/about/AboutHashScroll";
import PageIntro from "@/components/site/PageIntro";
import { v1 } from "@/lib/v1-tokens";

const values = [
  {
    title: "Operational Excellence",
    body: "Every process is driven by precision, consistency, and manufacturing discipline to ensure dependable packaging performance.",
  },
  {
    title: "Customer Commitment",
    body: "Long-term relationships are built through responsiveness, reliability, and solution-oriented partnerships.",
  },
  {
    title: "Continuous Improvement",
    body: "Technology upgrades, process refinement, and workforce development remain central to our growth journey.",
  },
  {
    title: "Quality Without Compromise",
    body: "Every packaging structure is monitored and evaluated to meet performance expectations and industry standards.",
  },
] as const;

const timeline = [
  {
    year: "2003",
    title: "Foundation",
    body: "Entered the flexible packaging industry with a strong focus on manufacturing quality and packaging reliability.",
  },
  {
    year: "2011",
    title: "Trishala Established",
    body: "Established dedicated printing and lamination capabilities for flexible packaging applications.",
  },
  {
    year: "2014–2018",
    title: "Capacity Expansion",
    body: "Expanded infrastructure, pouching capabilities, and manufacturing capacity to support multiple industries.",
  },
  {
    year: "2022",
    title: "Operational Strengthening",
    body: "Invested in advanced machinery, quality systems, and process optimization.",
  },
  {
    year: "2024",
    title: "Growth & Scalability",
    body: "Focused on large-scale manufacturing capabilities, long-term partnerships, and operational consistency.",
  },
] as const;

const achievements = [
  {
    title: "20+ Years of Experience",
    body: "Serving packaging requirements with operational expertise and manufacturing reliability.",
  },
  {
    title: "50+ Experts",
    body: "Skilled workforce supporting production, quality, and customer success.",
  },
  {
    title: "10,000+ Metric Tons Annual Production",
    body: "Scalable manufacturing capability supporting diverse packaging sectors.",
  },
  {
    title: "Assured Quality",
    body: "Continuous inspection, monitoring, and process control across every production stage.",
  },
] as const;

export default function AboutPageContent() {
  return (
    <>
      <AboutHashScroll />
      <PageIntro label="About Us" title="About Trishala" />

      <section className="py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <div className="space-y-5">
            <p className="text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
              Trishala Laminates is a leading flexible packaging manufacturer delivering
              high-performance packaging solutions for diverse industries across India.
              Built on operational consistency, manufacturing expertise, and
              customer-focused partnerships, the company specializes in printed rolls,
              laminated structures, and pouching solutions engineered for product
              protection, shelf appeal, and supply chain reliability.
            </p>
            <p className="text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
              With a strong manufacturing foundation, modern infrastructure, and a
              commitment to continuous improvement, Trishala serves brands across FMCG,
              agriculture, snacks, spices, tea &amp; coffee, personal care, household
              products, pet food, and specialty packaging segments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Our Values
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl p-7 md:p-8"
                style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
              >
                <h3
                  className="text-[11px] font-bold uppercase tracking-[0.24em]"
                  style={{ color: v1.green.primary }}
                >
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed" style={{ color: v1.ink.body }}>
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Our Journey
          </h2>
          <ol className="mt-8 space-y-5">
            {timeline.map((step) => (
              <li
                key={step.year}
                className="rounded-2xl p-6 md:p-7"
                style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
              >
                <p className="text-sm font-bold tracking-[0.1em]" style={{ color: v1.green.primary }}>
                  {step.year}
                </p>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight" style={{ color: v1.ink.navy }}>
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: v1.ink.body }}>
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Achievements
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl p-6 md:p-7"
                style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
              >
                <h3 className="text-lg font-extrabold leading-snug" style={{ color: v1.ink.navy }}>
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: v1.ink.body }}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="brochure" className="scroll-mt-[88px] py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Brochure
          </h2>
          <div
            className="mt-7 flex min-h-[220px] items-center justify-center rounded-2xl p-8 md:mt-8"
            style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
          >
            <p className="text-sm" style={{ color: v1.ink.muted }}>
              Corporate brochure asset placeholder — PDF upload-ready area.
            </p>
          </div>
        </div>
      </section>

      <section id="careers" className="scroll-mt-[88px] py-8 md:py-10 lg:py-12">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
            style={{ color: v1.ink.navy }}
          >
            Careers at Trishala
          </h2>
          <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
            At Trishala Laminates, people are the foundation of our success. We
            continuously seek passionate professionals who value operational
            excellence, manufacturing innovation, teamwork, and long-term growth.
            Whether on the production floor, in quality assurance, engineering, sales,
            or administration, every individual contributes to building packaging
            solutions trusted across industries.
          </p>
          <p className="mt-4 text-base leading-relaxed md:text-lg" style={{ color: v1.ink.body }}>
            Join us in shaping the future of flexible packaging through commitment,
            collaboration, and continuous learning.
          </p>
        </div>
      </section>
    </>
  );
}


