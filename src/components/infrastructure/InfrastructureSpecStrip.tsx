import type { InfrastructureSpec } from "@/lib/infrastructure-content";
import { v1 } from "@/lib/v1-tokens";

type InfrastructureSpecStripProps = {
  spec: InfrastructureSpec;
};

const fields: ReadonlyArray<{
  key: keyof InfrastructureSpec;
  label: string;
}> = [
  { key: "application", label: "Application" },
  { key: "maximumFilmWidth", label: "Maximum Film Width" },
  { key: "output", label: "Output" },
  { key: "capability", label: "Operating Capability" },
];

export default function InfrastructureSpecStrip({
  spec,
}: InfrastructureSpecStripProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
      {fields.map((field) => (
        <div
          key={field.key}
          className="px-4 py-4 md:px-5 md:py-4"
          style={{
            background: v1.canvas,
            boxShadow: v1.shadow.soft,
          }}
        >
          <p
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: v1.green.primary }}
          >
            {field.label}
          </p>
          <p
            className="mt-2 text-sm font-semibold leading-snug"
            style={{ color: v1.ink.navy }}
          >
            {spec[field.key]}
          </p>
        </div>
      ))}
    </div>
  );
}
