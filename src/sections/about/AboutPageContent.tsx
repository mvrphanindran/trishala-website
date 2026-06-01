import AboutHashScroll from "@/components/about/AboutHashScroll";
import AboutSection from "@/components/about/AboutSection";
import ContentPlaceholder from "@/components/about/ContentPlaceholder";
import PageIntro from "@/components/site/PageIntro";
import { v1 } from "@/lib/v1-tokens";

const highlights = [
  "Flexible Packaging Expertise",
  "Manufacturing Infrastructure",
  "Industry Experience",
  "Reliable Delivery",
  "Long-Term Partnerships",
] as const;

const pillars = [
  "Flexible packaging manufacturer",
  "Industry expertise",
  "Manufacturing capabilities",
  "Customer-focused operations",
] as const;

const historyPoints = [
  { year: "2011", text: "Established 2011" },
  { year: "—", text: "Sister concern of Naman Flexipack Industries" },
  { year: "—", text: "Part of P C Surana Group" },
] as const;

const missionPoints = [
  "Operational Excellence",
  "Quality Consistency",
  "Timely Delivery",
  "Customer Satisfaction",
  "Long-Term Partnerships",
] as const;

const legacyPoints = [
  "Industrial manufacturing heritage",
  "Packaging expertise",
  "Growth and diversification",
] as const;

const promoters = [
  "Ramesh Surana",
  "Pavan Surana",
  "Pranit Surana",
  "Pranay Surana",
] as const;

const whyWork = [
  "Growth Opportunities",
  "Manufacturing Excellence",
  "Learning Environment",
] as const;

const gallerySlots = Array.from({ length: 12 }, (_, i) => i + 1);
const clientSlots = Array.from({ length: 30 }, (_, i) => i + 1);

export default function AboutPageContent() {
  return (
    <>
      <AboutHashScroll />

      <PageIntro
        label="About Us"
        title="About Trishala Laminates"
        description="Integrated flexible packaging manufacturing with industrial discipline, quality consistency, and long-term partnerships."
        align="center"
      />

      <AboutSection
        id="about-trishala"
        label="Section 01"
        title="About Trishala"
        description="Trishala Laminates (P) Ltd is a Hyderabad-based flexible packaging manufacturer specializing in printed and laminated packaging materials in roll and pouch form."
      >
        <ul className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {pillars.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 px-5 py-4 text-sm font-semibold"
              style={{
                color: v1.ink.navy,
                background: v1.ivory.rich,
                border: `1px solid ${v1.silver.hairline}`,
              }}
            >
              <span
                className="h-px w-5 shrink-0"
                style={{ background: v1.green.primary }}
              />
              {item}
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex min-h-[100px] items-center px-6 py-8"
              style={{
                background: v1.ivory.rich,
                border: `1px solid ${v1.silver.hairline}`,
              }}
            >
              <span
                className="text-sm font-bold uppercase tracking-[0.12em]"
                style={{ color: v1.ink.navy }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </AboutSection>

      <AboutSection
        id="our-journey"
        label="Section 02"
        title="Our Journey"
        description="A manufacturing story rooted in industrial heritage, operational discipline, and sustained growth across flexible packaging."
      >
        <div className="space-y-12 md:space-y-16">
          <div>
            <h3
              className="text-lg font-extrabold tracking-tight"
              style={{ color: v1.ink.navy }}
            >
              Company History
            </h3>
            <ol className="relative mt-8 space-y-0 border-l pl-8 md:pl-10">
              {historyPoints.map((point, index) => (
                <li key={point.text} className="relative pb-10 last:pb-0">
                  <span
                    className="absolute -left-[1.35rem] top-1 flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold md:-left-6 md:h-6 md:w-6"
                    style={{
                      background: v1.green.primary,
                      color: "#ffffff",
                    }}
                  >
                    {index + 1}
                  </span>
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: v1.green.primary }}
                  >
                    {point.year}
                  </p>
                  <p
                    className="mt-2 text-base leading-relaxed"
                    style={{ color: v1.ink.body }}
                  >
                    {point.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div
            className="border-t pt-12 md:pt-16"
            style={{ borderColor: v1.silver.hairline }}
          >
            <h3
              className="text-lg font-extrabold tracking-tight"
              style={{ color: v1.ink.navy }}
            >
              Mission
            </h3>
            <ul className="mt-6 space-y-3">
              {missionPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base"
                  style={{ color: v1.ink.body }}
                >
                  <span
                    className="h-px w-6 shrink-0"
                    style={{ background: v1.green.primary }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="border-t pt-12 md:pt-16"
            style={{ borderColor: v1.silver.hairline }}
          >
            <h3
              className="text-lg font-extrabold tracking-tight"
              style={{ color: v1.ink.navy }}
            >
              Group Legacy
            </h3>
            <ul className="mt-6 space-y-3">
              {legacyPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base"
                  style={{ color: v1.ink.body }}
                >
                  <span
                    className="h-px w-6 shrink-0"
                    style={{ background: v1.green.primary }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AboutSection>

      <AboutSection
        id="promoters"
        label="Section 03"
        title="Promoters"
        description="Leadership guided by industrial experience, manufacturing discipline, and a long-term commitment to flexible packaging excellence."
      >
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {promoters.map((name) => (
            <li
              key={name}
              style={{
                border: `1px solid ${v1.silver.hairline}`,
                background: v1.ivory.rich,
              }}
            >
              <ContentPlaceholder
                label="Future Promoter Photo"
                aspectClassName="aspect-[4/5] min-h-[280px]"
              />
              <div
                className="border-t px-6 py-6"
                style={{ borderColor: v1.silver.hairline }}
              >
                <h3
                  className="text-xl font-extrabold tracking-tight"
                  style={{ color: v1.ink.navy }}
                >
                  {name}
                </h3>
                <p className="mt-2 text-sm" style={{ color: v1.ink.muted }}>
                  Promoter
                </p>
              </div>
            </li>
          ))}
        </ul>
      </AboutSection>

      <AboutSection
        id="brochure"
        label="Section 04"
        title="Brochure"
        description="Download our corporate brochure for a comprehensive overview of Trishala Laminates capabilities."
        centered
      >
        <div className="mx-auto max-w-lg">
          <div
            className="mx-auto flex min-h-[360px] max-w-md flex-col items-center justify-center px-8 py-12"
            style={{
              background: v1.ivory.rich,
              border: `1px solid ${v1.silver.hairline}`,
            }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.28em]"
              style={{ color: v1.green.primary }}
            >
              Corporate Brochure
            </p>
            <p
              className="mt-6 text-sm leading-relaxed"
              style={{ color: v1.ink.muted }}
            >
              Future PDF upload area — brochure placeholder ready for corporate
              document.
            </p>
          </div>

          <button
            type="button"
            disabled
            className="mt-10 cursor-not-allowed rounded-full px-8 py-3.5 text-sm font-bold opacity-50"
            style={{
              background: v1.green.primary,
              color: "#ffffff",
            }}
          >
            Download Brochure
          </button>

          <p className="mt-4 text-sm" style={{ color: v1.ink.muted }}>
            Brochure will be available shortly.
          </p>
        </div>
      </AboutSection>

      <AboutSection
        id="gallery"
        label="Section 05"
        title="Gallery"
        description="A visual showcase of our manufacturing environment, capabilities, and packaging solutions."
        centered
      >
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gallerySlots.map((slot) => (
            <li key={slot}>
              <ContentPlaceholder
                label="Future Gallery Image"
                aspectClassName="aspect-square min-h-[200px]"
              />
            </li>
          ))}
        </ul>
      </AboutSection>

      <AboutSection
        id="clients"
        label="Section 06"
        title="Our Esteemed Clients"
        description="A selection of brands and partners we are proud to serve across flexible packaging applications."
        centered
      >
        <ul className="grid grid-cols-2 gap-px sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {clientSlots.map((slot) => (
            <li key={slot}>
              <ContentPlaceholder
                label="Client Logo"
                aspectClassName="aspect-[3/2] min-h-[88px]"
                className="p-3"
              />
            </li>
          ))}
        </ul>
      </AboutSection>

      <AboutSection
        id="careers"
        label="Section 07"
        title="Careers"
        description="Build your career with a flexible packaging manufacturer committed to operational excellence and professional growth."
      >
        <div className="max-w-3xl">
          <h3
            className="text-lg font-extrabold tracking-tight"
            style={{ color: v1.ink.navy }}
          >
            Why Work With Trishala
          </h3>
          <ul className="mt-6 space-y-3">
            {whyWork.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-base"
                style={{ color: v1.ink.body }}
              >
                <span
                  className="h-px w-6 shrink-0"
                  style={{ background: v1.green.primary }}
                />
                {item}
              </li>
            ))}
          </ul>

          <div
            className="mt-12 border-t pt-12"
            style={{ borderColor: v1.silver.hairline }}
          >
            <h3
              className="text-lg font-extrabold tracking-tight"
              style={{ color: v1.ink.navy }}
            >
              Current Openings
            </h3>
            <p className="mt-4 text-base" style={{ color: v1.ink.body }}>
              No current openings available.
            </p>
          </div>

          <div
            className="mt-12 border-t pt-12"
            style={{ borderColor: v1.silver.hairline }}
          >
            <h3
              className="text-lg font-extrabold tracking-tight"
              style={{ color: v1.ink.navy }}
            >
              Submit Your Resume
            </h3>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: v1.ink.body }}
            >
              Resume submission placeholder — upload will be enabled here.
            </p>

            <div
              className="mt-8 flex min-h-[160px] items-center justify-center px-6 py-8"
              style={{
                background: v1.ivory.panel,
                border: `1px solid ${v1.silver.hairline}`,
              }}
            >
              <p
                className="text-[11px] font-bold uppercase tracking-[0.16em]"
                style={{ color: v1.ink.muted }}
              >
                Resume Upload — Coming Soon
              </p>
            </div>

            <p className="mt-6 text-sm" style={{ color: v1.ink.muted }}>
              Contact:{" "}
              <a
                href="mailto:careers@trishalalaminates.in"
                className="font-semibold transition-colors hover:text-[#00B140]"
                style={{ color: v1.ink.navy }}
              >
                careers@trishalalaminates.in
              </a>
            </p>
          </div>
        </div>
      </AboutSection>
    </>
  );
}
