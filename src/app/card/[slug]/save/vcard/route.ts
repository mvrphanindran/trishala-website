import { NextResponse } from "next/server";
import { getEmployeeBySlug } from "@/data/employees";
import { buildEmployeeVCard } from "@/lib/vcard";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_: Request, { params }: RouteContext) {
  const { slug } = await params;
  const employee = getEmployeeBySlug(slug);

  if (!employee) {
    return new NextResponse("Not found", { status: 404 });
  }

  const vcard = buildEmployeeVCard(employee);
  const filename = `${employee.slug}.vcf`;

  return new NextResponse(vcard, {
    status: 200,
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
