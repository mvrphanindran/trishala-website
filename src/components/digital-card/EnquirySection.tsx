import { v1 } from "@/lib/v1-tokens";

const fields = [
  { id: "name", label: "Name", type: "text" },
  { id: "company", label: "Company", type: "text" },
  { id: "email", label: "Email", type: "email" },
] as const;

export default function EnquirySection() {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="max-w-4xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: v1.green.primary }}>
          Enquiry
        </p>
        <h2
          className="mt-3 text-[clamp(1.55rem,2.8vw,2.15rem)] font-extrabold tracking-[-0.04em]"
          style={{ color: v1.ink.navy }}
        >
          Send An Enquiry
        </h2>

        <form className="mt-5 space-y-5 rounded-2xl bg-white p-6" style={{ boxShadow: v1.shadow.soft }}>
          <div className="grid gap-4 md:grid-cols-2">
            {fields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: v1.ink.muted }}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  className="w-full border-b bg-transparent py-3 text-base outline-none focus:border-[#00B140]"
                  style={{ borderColor: v1.silver.mid, color: v1.ink.navy }}
                />
              </div>
            ))}
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: v1.ink.muted }}
            >
              Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full resize-none border-b bg-transparent py-3 text-base outline-none focus:border-[#00B140]"
              style={{ borderColor: v1.silver.mid, color: v1.ink.navy }}
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm" style={{ color: v1.ink.muted }}>
              Placeholder enquiry form for direct follow-up.
            </p>
            <button
              type="button"
              className="inline-flex w-fit rounded-full px-6 py-3 text-sm font-bold text-white"
              style={{ background: v1.green.primary }}
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
