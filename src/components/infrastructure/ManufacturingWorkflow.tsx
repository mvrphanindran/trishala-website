import { manufacturingWorkflow } from "@/lib/infrastructure-content";
import { v1 } from "@/lib/v1-tokens";

export default function ManufacturingWorkflow() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <h2
          className="text-center text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
          style={{ color: v1.ink.navy }}
        >
          Manufacturing Workflow
        </h2>

        <div className="mt-12 overflow-x-auto pb-2">
          <ol className="flex min-w-[720px] items-start justify-between gap-4 md:min-w-0 md:gap-3">
            {manufacturingWorkflow.map((step, index) => (
              <li
                key={step}
                className="flex flex-1 flex-col items-center text-center"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                  style={{
                    color: v1.ink.navy,
                    background: v1.canvas,
                    boxShadow: v1.shadow.soft,
                  }}
                >
                  {index + 1}
                </span>
                <p
                  className="mt-3 max-w-[7.5rem] text-[11px] font-bold uppercase leading-snug tracking-[0.12em] md:max-w-none md:text-xs"
                  style={{ color: v1.ink.navy }}
                >
                  {step}
                </p>
                {index < manufacturingWorkflow.length - 1 ? (
                  <span
                    className="mt-2 text-sm sm:hidden"
                    style={{ color: v1.green.primary }}
                    aria-hidden
                  >
                    ↓
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
