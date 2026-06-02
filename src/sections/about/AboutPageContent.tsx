import AboutHashScroll from "@/components/about/AboutHashScroll";

import AboutSection from "@/components/about/AboutSection";

import ContentPlaceholder from "@/components/about/ContentPlaceholder";

import PageIntro from "@/components/site/PageIntro";

import { v1 } from "@/lib/v1-tokens";



const aboutIntro = [

  "Trishala Laminates is a flexible packaging manufacturing company focused on delivering reliable, high-quality packaging solutions for diverse industries.",

  "With expertise across printing, lamination, film extrusion and pouch conversion, Trishala serves customers in FMCG, Agriculture, Snacks, Spices, Personal Care, Household Products, Tea & Coffee, Dry Fruits and Pet Food sectors.",

  "Driven by operational discipline, quality consistency and timely delivery, the company continues to build long-term partnerships through dependable manufacturing and customer-focused execution.",

] as const;



const aboutHighlights = [

  { label: "Industries Served", value: "9" },

  { label: "Packaging Formats", value: "4" },

  { label: "Manufacturing Processes", value: "8" },

  { label: "Years of Experience", value: "15+" },

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

        align="center"

      />



      <AboutSection id="about-trishala" label="Section 01" title="About Trishala">

        <div className="max-w-3xl space-y-5">

          {aboutIntro.map((paragraph) => (

            <p

              key={paragraph}

              className="text-base leading-relaxed md:text-lg"

              style={{ color: v1.ink.body }}

            >

              {paragraph}

            </p>

          ))}

        </div>



        <ul className="mt-12 grid grid-cols-2 gap-6 md:mt-14 md:grid-cols-4 md:gap-8">

          {aboutHighlights.map((item) => (

            <li key={item.label} className="text-center md:text-left">

              <p

                className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-none tracking-tight"

                style={{ color: v1.ink.navy }}

              >

                {item.value}

              </p>

              <p

                className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em]"

                style={{ color: v1.green.primary }}

              >

                {item.label}

              </p>

            </li>

          ))}

        </ul>

      </AboutSection>



      <AboutSection

        id="brochure"

        label="Section 02"

        title="Brochure"

        description="Download our corporate brochure for a comprehensive overview of Trishala Laminates capabilities."

        centered

      >

        <div className="mx-auto max-w-lg">

          <div

            className="mx-auto flex min-h-[360px] max-w-md flex-col items-center justify-center rounded-2xl px-8 py-12"

            style={{

              background: v1.canvas,

              boxShadow: v1.shadow.soft,

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

              Corporate brochure asset placeholder — PDF upload area for

              publication-ready document.

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

        label="Section 03"

        title="Gallery"

        description="A visual showcase of our manufacturing environment, capabilities, and packaging solutions."

        centered

      >

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {gallerySlots.map((slot) => (

            <li key={slot}>

              <ContentPlaceholder

                label="Gallery Asset Placeholder"

                variant="gallery"

                aspectClassName="aspect-square min-h-[200px]"

              />

            </li>

          ))}

        </ul>

      </AboutSection>



      <AboutSection

        id="clients"

        label="Section 04"

        title="Our Esteemed Clients"

        description="A selection of brands and partners we are proud to serve across flexible packaging applications."

        centered

      >

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-6">

          {clientSlots.map((slot) => (

            <li key={slot}>

              <ContentPlaceholder

                label="Client Identity Placeholder"

                variant="client"

                aspectClassName="aspect-[5/3] min-h-[72px]"

                className="p-2 md:p-3"

              />

            </li>

          ))}

        </ul>

      </AboutSection>



      <AboutSection

        id="careers"

        label="Section 05"

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

                className="text-base"

                style={{ color: v1.ink.body }}

              >

                {item}

              </li>

            ))}

          </ul>



          <div className="mt-12 pt-4">

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



          <div className="mt-12 pt-4">

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

              Resume submission area — candidate upload will be enabled here.

            </p>



            <div

              className="mt-8 flex min-h-[160px] items-center justify-center rounded-2xl px-6 py-8"

              style={{

                background: v1.canvas,

                boxShadow: v1.shadow.soft,

              }}

            >

              <p

                className="text-[11px] font-bold uppercase tracking-[0.16em]"

                style={{ color: v1.ink.muted }}

              >

                Resume Submission Placeholder

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


