import Link from "next/link";
import { v1 } from "@/lib/v1-tokens";

type SaveContactSectionProps = {
  slug: string;
};

export default function SaveContactSection({ slug }: SaveContactSectionProps) {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="max-w-4xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: v1.green.primary }}>
          Save Contact
        </p>
        <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-white p-6" style={{ boxShadow: v1.shadow.soft }}>
          <p className="text-base leading-relaxed" style={{ color: v1.ink.body }}>
            Save this contact to your phone for quick access to the Trishala Laminates team.
          </p>
          <Link
            href={`/card/${slug}/save`}
            className="inline-flex w-fit rounded-full px-6 py-3 text-sm font-bold text-white"
            style={{ background: v1.ink.navy }}
          >
            Save Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
