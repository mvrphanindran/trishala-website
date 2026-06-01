import { manufacturingWorkflow } from "@/lib/infrastructure-content";
import { v1 } from "@/lib/v1-tokens";

export default function ManufacturingWorkflow() {
  return (
    <section
      className="border-t py-16 md:py-20 lg:py-24"
      style={{
        borderColor: v1.silver.hairline,
        background: v1.ivory.rich,
      }}
    >
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <h2
          className="text-center text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-[-0.03em]"
          style={{ color: v1.ink.navy }}
        >
          Manufacturing Workflow
        </h2>

        <div className="mt-12 overflow-x-auto pb-2">
          <ol className="flex min-w-[720px] items-center justify-between gap-2 md:min-w-0">
            {manufacturingWorkflow.map((step, index) => (
              <li
                key={step}
                className="flex flex-1 flex-col items-center text-center"
              >
                <div className="flex w-full items-center">
                  {index > 0 ? (
                    <span
                      className="hidden h-px flex-1 sm:block"
                      style={{ background: v1.silver.hairline }}
                      aria-hidden
                    />
                  ) : (
                    <span className="hidden flex-1 sm:block" aria-hidden />
                  )}
                  <span
                    className="mx-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{
                      color: v1.ink.navy,
                      border: `1px solid ${v1.silver.hairline}`,
                      background: v1.ivory.base,
                    }}
                  >
                    {index + 1}
                  </span>
                  {index < manufacturingWorkflow.length - 1 ? (
                    <span
                      className="hidden h-px flex-1 sm:block"
                      style={{ background: v1.silver.hairline }}
                      aria-hidden
                    />
                  ) : (
                    <span className="hidden flex-1 sm:block" aria-hidden />
                  )}
                </div>
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
