import Image from "next/image";
import Link from "next/link";
import type { Employee } from "@/data/employees";
import { companyName } from "@/data/digital-card-content";
import { v1 } from "@/lib/v1-tokens";

type EmployeeHeroProps = {
  employee: Employee;
};

export default function EmployeeHero({ employee }: EmployeeHeroProps) {
  return (
    <section className="pt-6 md:pt-8">
      <div className="flex flex-col gap-6">
        <Link href="/" className="relative block h-10 w-44 shrink-0 md:h-12 md:w-52" aria-label={`${companyName} home`}>
          <Image
            src="/images/logo/trishala-logo-v2.png"
            alt={companyName}
            fill
            sizes="208px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-8">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden bg-white"
            style={{ boxShadow: v1.shadow.soft }}
          >
            <Image
              src={employee.photo}
              alt={employee.name}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.32em]" style={{ color: v1.green.primary }}>
              Digital Business Card
            </p>
            <h1
              className="mt-3 text-[clamp(2rem,4.2vw,3.3rem)] font-extrabold leading-[1.02] tracking-[-0.04em]"
              style={{ color: v1.ink.navy }}
            >
              {employee.name}
            </h1>
            <p
              className="mt-3 text-lg font-semibold md:text-xl"
              style={{ color: v1.ink.body }}
            >
              {employee.designation}
            </p>
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: v1.ink.body }}
            >
              {companyName} delivers premium flexible packaging solutions built on operational discipline, modern manufacturing, and long-term customer partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
