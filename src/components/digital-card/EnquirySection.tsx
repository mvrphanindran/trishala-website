"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import type { Employee } from "@/data/employees";
import { v1 } from "@/lib/v1-tokens";

const fields = [
  { id: "name", label: "Name", type: "text" },
  { id: "company", label: "Company", type: "text" },
  { id: "email", label: "Email", type: "email" },
] as const;

type EnquirySectionProps = {
  employee: Employee;
};

function buildMailto(employee: Employee, values: Record<string, string>) {
  const subject = `Enquiry for ${employee.name} | Trishala Laminates`;
  const body = [
    `Name: ${values.name || "-"}`,
    `Company: ${values.company || "-"}`,
    `Email: ${values.email || "-"}`,
    "",
    "Requirements:",
    values.message || "-",
  ].join("\n");

  const searchParams = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${employee.email}?${searchParams.toString()}`;
}

export default function EnquirySection({ employee }: EnquirySectionProps) {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const mailtoHref = useMemo(() => buildMailto(employee, values), [employee, values]);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

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

        <form onSubmit={handleSubmit} className="mt-5 space-y-5 rounded-2xl bg-white p-6" style={{ boxShadow: v1.shadow.soft }}>
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
                  value={values[field.id]}
                  onChange={handleChange}
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
              value={values.message}
              onChange={handleChange}
              className="w-full resize-none border-b bg-transparent py-3 text-base outline-none focus:border-[#00B140]"
              style={{ borderColor: v1.silver.mid, color: v1.ink.navy }}
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm" style={{ color: v1.ink.muted }}>
              Your enquiry will open in email to {employee.email}.
            </p>
            <button
              type="submit"
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
