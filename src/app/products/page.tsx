import { redirect } from "next/navigation";
import { packagingSolutionsHref } from "@/lib/packaging-solutions-navigation";

export default function ProductsPage() {
  redirect(packagingSolutionsHref);
}
