import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TextureBackdrop from "@/components/site/TextureBackdrop";
import EmployeeHero from "@/components/digital-card/EmployeeHero";
import QuickActions from "@/components/digital-card/QuickActions";
import AboutCompany from "@/components/digital-card/AboutCompany";
import BrochureSection from "@/components/digital-card/BrochureSection";
import SaveContactSection from "@/components/digital-card/SaveContactSection";
import EnquirySection from "@/components/digital-card/EnquirySection";
import CardFooter from "@/components/digital-card/CardFooter";
import { employees, getEmployeeBySlug } from "@/data/employees";
import { siteFont, v1 } from "@/lib/v1-tokens";

type CardPageProps = {
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

export default async function CardPage({ params }: CardPageProps) {
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

        <div className="relative mx-auto max-w-[1380px] px-5 pb-10 md:px-8 md:pb-12">
          <EmployeeHero employee={employee} />
          <QuickActions employee={employee} />
          <AboutCompany />
          <BrochureSection />
          <SaveContactSection slug={employee.slug} />
          <EnquirySection />
        </div>

        <CardFooter />
      </main>
    </div>
  );
}
