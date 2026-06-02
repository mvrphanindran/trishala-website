import Link from "next/link";
import IndustriesShowcase from "@/components/industries/IndustriesShowcase";
import { industriesHref } from "@/lib/site-navigation";
import { v1 } from "@/lib/v1-tokens";

export default function IndustriesWeServe() {
  return (
    <section className="relative py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <IndustriesShowcase layout="rail" showLabels={false} />

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href={industriesHref}
            className="inline-flex rounded-full px-8 py-3 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
            style={{
              background: v1.green.primary,
              boxShadow: v1.shadow.card,
            }}
          >
            More Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
