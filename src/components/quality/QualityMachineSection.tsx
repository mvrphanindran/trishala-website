import Image from "next/image";
import type { QualityMachine } from "@/lib/quality-content";
import { v1 } from "@/lib/v1-tokens";

type QualityMachineSectionProps = {
  machine: QualityMachine;
  index: number;
  emphasizeMedia?: boolean;
};

export default function QualityMachineSection({
  machine,
  index,
  emphasizeMedia = false,
}: QualityMachineSectionProps) {
  const reversed = index % 2 === 1;
  const isVacuumTester = machine.id === "vacuum-leak-tester";

  return (
    <article className="py-7 md:py-8">
      <div className={`grid items-center gap-5 lg:grid-cols-2 lg:gap-8 ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div
          className={`relative w-full overflow-hidden bg-[#F8FAFC] ${
            emphasizeMedia || isVacuumTester ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[16/10] md:aspect-[16/9]"
          }`}
        >
          <img
            src={machine.image}
            alt={machine.title}
            className={`h-full w-full object-contain ${
              emphasizeMedia || isVacuumTester ? "p-0 md:p-1 lg:p-2" : "p-3 md:p-4 lg:p-5"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>

        <div className="min-w-0">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.28em]"
            style={{ color: v1.green.primary }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2
            className="mt-3 text-[clamp(1.35rem,2.4vw,2rem)] font-extrabold leading-[1.06] tracking-[-0.04em]"
            style={{ color: v1.ink.navy }}
          >
            {machine.title}
          </h2>
          <div className="mt-4 space-y-3">
            {machine.description.map((line) => (
              <p
                key={line}
                className="text-[15px] leading-relaxed md:text-base"
                style={{ color: v1.ink.body }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
