export interface Employee {
  slug: string;
  name: string;
  designation: string;
  phone: string;
  email: string;
  photo: string;
}

export const employees: readonly Employee[] = [
  {
    slug: "naman-surana",
    name: "Naman Surana",
    designation: "Director",
    phone: "+91 93910 02657",
    email: "naman@trishalalaminates.in",
    photo: "/employees/naman-surana.jpg",
  },
  {
    slug: "pavan-surana",
    name: "Pavan Surana",
    designation: "Director",
    phone: "+91 93910 10319",
    email: "pavan@trishalalaminates.in",
    photo: "/employees/pavan-surana.jpg",
  },
  {
    slug: "mvr-phanindran",
    name: "M.V.R. Phanindran",
    designation: "Marketing Executive",
    phone: "+91 81797 77175",
    email: "phani.trishala@gmail.com",
    photo: "/employees/mvr-phanindran.jpg",
  },
  {
    slug: "p-akhila",
    name: "P. Akhila",
    designation: "Marketing Executive",
    phone: "+91 89199 38534",
    email: "akhila.trishala@gmail.com",
    photo: "/employees/p-akhila.jpg",
  },
] as const;

export function getEmployeeBySlug(slug: string) {
  return employees.find((employee) => employee.slug === slug);
}
