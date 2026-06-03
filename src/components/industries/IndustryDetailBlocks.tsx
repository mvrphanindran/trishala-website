import type { IndustryDetail } from "@/lib/industry-detail-content";
import { v1 } from "@/lib/v1-tokens";

type IndustryDetailBlocksProps = {
  detail: IndustryDetail;
};

const blocks = [
  { key: "packagingRequirements", title: "Packaging Requirements" },
  { key: "benefits", title: "Benefits" },
  { key: "applications", title: "Applications" },
] as const;

export default function IndustryDetailBlocks({
  detail,
}: IndustryDetailBlocksProps) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:mb-10 md:grid-cols-2 lg:grid-cols-3">
      {blocks.map((block) => {
        const items = detail[block.key];

        return (
          <div
            key={block.key}
            className="p-6 md:p-7"
            style={{
              background: v1.canvas,
              boxShadow: v1.shadow.soft,
            }}
          >
            <h3
              className="text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: v1.green.primary }}
            >
              {block.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-snug"
                  style={{ color: v1.ink.body }}
                >
                  <span
                    className="mt-2 h-px w-4 shrink-0"
                    style={{ background: v1.green.primary }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
