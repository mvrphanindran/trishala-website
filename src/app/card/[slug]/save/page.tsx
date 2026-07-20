import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmployeeHero from "@/components/digital-card/EmployeeHero";
import TextureBackdrop from "@/components/site/TextureBackdrop";
import { getEmployeeBySlug, employees } from "@/data/employees";
import { siteFont, v1 } from "@/lib/v1-tokens";

type SavePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export function generateStaticParams() {
  return employees.map((employee) => ({
    slug: employee.slug,
  }));
}

export const dynamicParams = false;

export default async function SaveContactPage({ params }: SavePageProps) {
  const { slug } = await params;
  const employee = getEmployeeBySlug(slug);

  if (!employee) {
    notFound();
  }

  return (
    <div
      className="min-h-screen text-[#0B1B4D]"
      style={{
        background: v1.gradient.coolWash,
        fontFamily: siteFont,
      }}
    >
      <main className="relative overflow-hidden">
        <TextureBackdrop variant="hero" />

        <div className="relative mx-auto max-w-[980px] px-5 pb-10 pt-6 md:px-8 md:pb-12 md:pt-8">
          <EmployeeHero employee={employee} />

          <section className="py-8 md:py-10">
            <div className="max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: v1.green.primary }}>
                Save Contact
              </p>
              <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-white p-6" style={{ boxShadow: v1.shadow.soft }}>
                <p className="text-base leading-relaxed" style={{ color: v1.ink.body }}>
                  Tap the button below to open the contact card on your phone and save Trishala Laminates to your contacts.
                </p>
                <Link
                  href={`/card/${slug}/save/vcard`}
                  className="inline-flex w-fit rounded-full px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: v1.green.primary }}
                >
                  Save to Phone
                </Link>
                <p className="text-sm leading-relaxed" style={{ color: v1.ink.muted }}>
                  On iPhone, the contact card will open in a format ready to add to Contacts. On Android, the file will download or open in your contacts app depending on your device.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
