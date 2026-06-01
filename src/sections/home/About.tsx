import Image from "next/image";

export default function About() {
  return (
    <section className="relative overflow-hidden px-6 py-28">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,177,64,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(11,27,63,0.16),transparent_38%),linear-gradient(180deg,#06111f_0%,#0a1830_18%,#11213e_42%,#d9e2ec_78%,#edf3f8_100%)]" />

      {/* GRID */}

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* GLOW */}

      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-20 lg:grid-cols-[1.02fr_0.98fr]">

        {/* LEFT SIDE */}

        <div className="flex flex-col gap-6">

          {/* PRINTING MACHINE */}

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

            <Image
              src="/images/hero/printing-machine.png"
              alt="Printing Machine"
              width={1400}
              height={850}
              className="h-full w-full object-cover"
            />

          </div>

          {/* EXTRUSION MACHINE */}

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">

            <Image
              src="/images/hero/extrusion-machine.png"
              alt="Extrusion Machine"
              width={1400}
              height={850}
              className="h-full w-full object-cover"
            />

          </div>

          {/* BLOWN FILM LINE */}

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">

            <Image
              src="/images/hero/blownfilm-line.png"
              alt="Blown Film Line"
              width={1400}
              height={850}
              className="h-full w-full object-cover"
            />

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="pt-8">

          {/* TAG */}

          <div className="mb-8 flex items-center gap-4">

            <div className="h-[2px] w-16 bg-[#00d563]" />

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00d563]">
              Infrastructure & Manufacturing
            </span>

          </div>

          {/* HEADING */}

          <h2 className="max-w-[720px] text-5xl font-black leading-[1.02] tracking-[-0.05em] text-white md:text-7xl">

            Precision
            <br />

            Manufacturing
            <br />

            For Modern
            <br />

            Flexible Packaging

          </h2>

          {/* DESCRIPTION */}

          <div className="mt-10 max-w-[720px] space-y-8 text-[20px] leading-[2] text-slate-300">

            <p>
              Integrated rotogravure printing,
              lamination, blown film extrusion,
              slitting, pouching, and inspection
              systems engineered for superior
              barrier performance, production
              scalability, and visual consistency.
            </p>

            <p>
              Trishala Laminates develops premium
              flexible packaging structures optimized
              for FMCG, snacks, agriculture, edible
              oil, frozen foods, tea & coffee, dry
              fruits, and specialty industrial
              applications.
            </p>

          </div>

          {/* INLINE METRICS */}

          <div className="mt-14 flex flex-wrap gap-12 border-t border-white/10 pt-8">

            <div>
              <h3 className="text-5xl font-black text-[#00d563]">
                10+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-[#00d563]">
                500+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                Packaging SKUs
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-[#00d563]">
                9+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                Industries Served
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}