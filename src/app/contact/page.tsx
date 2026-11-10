import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import PageShell from "@/components/site/PageShell";
import { v1 } from "@/lib/v1-tokens";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Request a Packaging Quote",
  description:
    "Ask Trishala Laminates for a quote on printed laminate rolls and pouches. Call +91 93910 02657 or email naman@trishalalaminates.in. Office in Hyderabad, India.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro
        label="Contact"
        title="Start A Conversation"
        description="Share your packaging requirements. Our team will respond promptly."
        align="center"
      />

      <section className="mx-auto max-w-[640px] px-5 pb-32 md:px-8 md:pb-40">
        <form
          id="contact-page-form"
          className="space-y-8"
          action="mailto:naman@trishalalaminates.in"
          method="post"
          encType="text/plain"
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "company", label: "Company", type: "text" },
            { id: "email", label: "Email", type: "email" },
          ].map((field) => (
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
                style={{
                  borderColor: v1.silver.mid,
                  color: v1.ink.navy,
                }}
              />
            </div>
          ))}

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
              style={{
                borderColor: v1.silver.mid,
                color: v1.ink.navy,
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full py-4 text-sm font-bold text-white md:w-auto md:px-12"
            style={{
              background: v1.green.primary,
              boxShadow: "0 8px 22px rgba(0, 177, 64, 0.18)",
            }}
          >
            Submit Inquiry
          </button>
        </form>

        <p
          className="mt-16 text-center text-sm"
          style={{ color: v1.ink.muted }}
        >
          Prefer email?{" "}
          <Link
            href="mailto:naman@trishalalaminates.in"
            className="font-semibold hover:text-[#00B140]"
            style={{ color: v1.ink.navy }}
          >
            naman@trishalalaminates.in
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
