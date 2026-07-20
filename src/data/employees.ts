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
] as const;

export function getEmployeeBySlug(slug: string) {
  return employees.find((employee) => employee.slug === slug);
}
