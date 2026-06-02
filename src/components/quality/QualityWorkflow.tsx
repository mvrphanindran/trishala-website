import { qualityWorkflowSteps } from "@/lib/quality-content";
import { v1 } from "@/lib/v1-tokens";

export default function QualityWorkflow() {
  return (
    <section className="py-14 md:py-16">
      <div className="text-center">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.28em]"
          style={{ color: v1.green.primary }}
        >
          Process
        </span>
        <h2
          className="mt-4 text-[clamp(1.5rem,2.8vw,2.25rem)] font-extrabold leading-tight tracking-[-0.03em]"
          style={{ color: v1.ink.navy }}
        >
          Quality Workflow
        </h2>
      </div>

      <ol className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-0">
        {qualityWorkflowSteps.map((step, index) => (
          <li key={step} className="flex w-full flex-col items-center">
            <div
              className="flex w-full max-w-md items-center justify-center px-6 py-4 text-center"
              style={{
                background: v1.canvas,
                boxShadow: v1.shadow.soft,
              }}
            >
              <span
                className="text-sm font-bold tracking-tight md:text-base"
                style={{ color: v1.ink.navy }}
              >
                {step}
              </span>
            </div>
            {index < qualityWorkflowSteps.length - 1 ? (
              <span
                className="my-1 text-lg font-light leading-none"
                style={{ color: v1.green.primary }}
                aria-hidden
              >
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
