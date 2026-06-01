/** Asset paths for site sections — filenames match public/images/ */

export const industryCardImages: Record<string, string | null> = {
  agriculture: "/images/industries/agriculture-packaging.png",
  fmcg: "/images/industries/fmcg-packaging.png",
  snacks: "/images/industries/snack-packaging.png",
  "spices-and-seasonings": "/images/industries/spices-packaging.png",
  "tea-and-coffee": null,
  "dry-fruits-and-nuts": null,
  "personal-care": null,
  "household-and-cleaning": null,
};

export const infrastructureItems = [
  {
    title: "Rotogravure Printing",
    image: "/images/capabilities/rotogravure.jpg",
    gallery: [
      "/images/capabilities/rotogravure-2.png",
      "/images/capabilities/rotogravure-3.png",
    ] as const,
  },
  {
    title: "Adhesive Lamination",
    image: "/images/capabilities/lamination.jpg",
  },
  {
    title: "Solvent Based Lamination",
    image: "/images/capabilities/extrusion-lamination.jpg",
  },
  {
    title: "Solvent Less Lamination",
    image: "/images/capabilities/doctoring-machine.png",
  },
  {
    title: "Extrusion Lamination",
    image: "/images/capabilities/extrusion-lamination.jpg",
  },
  {
    title: "Polyethylene Film Extrusion",
    image: "/images/capabilities/blown-film.jpg",
  },
  {
    title: "Pouching",
    image: "/images/capabilities/pouching.jpg",
  },
  {
    title: "Slitting",
    image: "/images/capabilities/slitting.png",
  },
] as const;

export const qualitySections = [
  {
    title: "Quality Assurance",
    detail: "Documented standards across every production batch.",
    image: "/images/quality/material.jpg",
  },
  {
    title: "Quality Control",
    detail: "In-line monitoring for consistency and compliance.",
    image: "/images/quality/monitoring.jpg",
  },
  {
    title: "Testing & Inspection",
    detail: "Multi-stage visual and dimensional verification.",
    image: "/images/quality/inspection.jpg",
  },
  {
    title: "Registration & Traceability",
    detail: "Batch registration and traceability across the line.",
    image: "/images/quality/registration.jpg",
  },
  {
    title: "Defect Analysis",
    detail: "Structured review and corrective action on defects.",
    image: "/images/quality/defect.jpg",
  },
  {
    title: "Reliability & Consistency",
    detail: "Repeatable output and process discipline batch after batch.",
    image: "/images/quality/reliability.jpg",
  },
] as const;
