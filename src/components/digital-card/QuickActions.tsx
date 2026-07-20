import Link from "next/link";
import { companyDirectionsUrl, companyWebsiteUrl } from "@/data/digital-card-content";
import type { Employee } from "@/data/employees";
import { v1 } from "@/lib/v1-tokens";

type QuickActionsProps = {
  employee: Employee;
};

function ActionIcon({ kind }: { kind: "call" | "email" | "website" | "directions" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" aria-hidden>
      {kind === "call" ? (
        <path d="M8.5 5.5 11 8c.5.5.6 1.3.1 1.8l-1.2 1.2a13 13 0 0 0 3.4 3.4l1.2-1.2c.5-.5 1.3-.4 1.8.1l2.5 2.5c.5.5.5 1.2.1 1.8l-1.1 1.5c-.7.9-1.9 1.3-3 1a17.7 17.7 0 0 1-11-11c-.3-1.1.1-2.3 1-3l1.5-1.1c.6-.4 1.3-.4 1.8.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : null}
      {kind === "email" ? (
        <path d="M4 7.5h16v9H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      ) : null}
      {kind === "website" ? (
        <path d="M12 3.8a8.2 8.2 0 1 0 0 16.4 8.2 8.2 0 0 0 0-16.4Zm0 0c2.2 0 3.9 3.7 3.9 8.2S14.2 20.2 12 20.2 8.1 16.5 8.1 12 9.8 3.8 12 3.8Zm-8.2 8.2h16.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : null}
      {kind === "directions" ? (
        <path d="M12 3.5 20.5 20.5 12 16.8 3.5 20.5 12 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      ) : null}
    </svg>
  );
}

const actions = (employee: Employee) => [
  { kind: "call" as const, label: "Call", href: `tel:${employee.phone.replace(/[^+\d]/g, "")}` },
  { kind: "email" as const, label: "Email", href: `mailto:${employee.email}` },
  { kind: "website" as const, label: "Website", href: companyWebsiteUrl },
  { kind: "directions" as const, label: "Directions", href: companyDirectionsUrl },
];

export default function QuickActions({ employee }: QuickActionsProps) {
  return (
    <section className="pt-6 md:pt-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {actions(employee).map((action) => (
          <Link
            key={action.label}
            href={action.href}
            target={action.kind === "website" || action.kind === "directions" ? "_blank" : undefined}
            rel={action.kind === "website" || action.kind === "directions" ? "noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-colors hover:bg-[#F6F8FB]"
            style={{
              color: v1.ink.navy,
              border: `1px solid ${v1.silver.hairline}`,
              boxShadow: v1.shadow.soft,
            }}
          >
            <span className="inline-flex text-[#00B140]">
              <ActionIcon kind={action.kind} />
            </span>
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
