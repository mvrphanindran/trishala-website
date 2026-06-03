import { v1 } from "@/lib/v1-tokens";

const corporateAddress = [
  "Trishala Laminates Pvt Ltd",
  "Plot No. 16/A",
  "IDA Nacharam Road No. 9",
  "Industrial Development Area",
  "Nacharam",
  "Hyderabad",
  "Secunderabad",
  "Telangana 500076",
] as const;

const manufacturingAddress = [
  "Trishala Laminates Pvt Ltd",
  "Tuniki Bollaram",
  "Telangana 502279",
] as const;

export default function OurLocations() {
  return (
    <section className="mx-auto max-w-[1380px] px-5 py-14 md:px-8 md:py-16 lg:py-20">
      <div className="text-center">
        <p
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{ color: v1.green.primary }}
        >
          Contact
        </p>
        <h2
          className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.04em]"
          style={{ color: v1.ink.navy }}
        >
          Our Locations
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        <article
          className="rounded-2xl p-6 md:p-8"
          style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
        >
          <p
            className="text-xs font-bold tracking-[0.12em]"
            style={{ color: v1.green.primary }}
          >
            Corporate Office
          </p>
          <address className="mt-4 text-[13px] not-italic leading-relaxed md:text-base" style={{ color: v1.ink.body }}>
            {corporateAddress.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </article>

        <article
          className="rounded-2xl p-6 md:p-8"
          style={{ background: v1.canvas, boxShadow: v1.shadow.soft }}
        >
          <p
            className="text-xs font-bold tracking-[0.12em]"
            style={{ color: v1.green.primary }}
          >
            Manufacturing Unit
          </p>
          <address className="mt-4 text-[13px] not-italic leading-relaxed md:text-base" style={{ color: v1.ink.body }}>
            {manufacturingAddress.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </article>
      </div>
    </section>
  );
}
