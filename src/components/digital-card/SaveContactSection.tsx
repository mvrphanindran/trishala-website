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
        <Link
          href={`/card/${slug}/save/vcard`}
          className="mt-5 inline-flex w-fit rounded-full px-6 py-3 text-sm font-bold text-white"
          style={{ background: v1.ink.navy }}
        >
          Save Contact
        </Link>
      </div>
    </section>
  );
}
