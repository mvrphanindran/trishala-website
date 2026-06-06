export type InfrastructureGalleryImage = {
  src: string;
  caption: string;
};

export type InfrastructureTechnicalDetail = {
  label: string;
  value: string;
};

export type InfrastructureSpec = {
  application: string;
  processType: string;
  output: string;
  capability: string;
};

export type InfrastructureCapability = {
  id: string;
  title: string;
  image?: string;
  gallery?: readonly InfrastructureGalleryImage[];
  summary: string;
  spec: InfrastructureSpec;
  details: readonly InfrastructureTechnicalDetail[];
};

export const infrastructureHero = {
  title: "Infrastructure & Manufacturing Capabilities",
  subtitle:
    "Integrated flexible packaging manufacturing with advanced printing, lamination, extrusion, slitting and pouch conversion capabilities.",
} as const;

export const infrastructureCapabilities: readonly InfrastructureCapability[] = [
  {
    id: "rotogravure",
    title: "Rotogravure Printing",
    gallery: [
      {
        src: "/images/capabilities/rotogravure-2.png",
        caption: "Rotogravure Printing Press - Production Line 1",
      },
      {
        src: "/images/capabilities/rotogravure-3.png",
        caption: "Rotogravure Printing Press - Production Line 2",
      },
    ],
    summary:
      "High-performance rotogravure printing for vibrant, consistent and accurate output across flexible packaging substrates.",
    spec: {
      application: "Flexible Packaging Printing",
      processType: "Rotogravure",
      output: "Production-ready printed rolls",
      capability: "Up to 450 mtr/min",
    },
    details: [
      { label: "Number of Machines", value: "3" },
      { label: "Machine Configuration", value: "9 Ink, 9 Ink, 8 Ink" },
      { label: "Production Speed", value: "Up to 450 mtr/min" },
    ],
  },
  {
    id: "solvent-lamination",
    title: "Solvent Based Lamination",
    image: "/images/capabilities/solvent-lamination.jpg",
    summary:
      "Strong and consistent bonding for high-performance laminate structures built for demanding packaging applications.",
    spec: {
      application: "High-Performance Laminates",
      processType: "Solvent Based Lamination",
      output: "Bonded multi-layer webs",
      capability: "Up to 120 mtrs/min",
    },
    details: [],
  },
  {
    id: "solventless-lamination",
    title: "Solventless Lamination",
    image: "/images/capabilities/solvent-less.jpg",
    summary:
      "Strong and reliable lamination with excellent bonding across a wide range of films for modern flexible packaging.",
    spec: {
      application: "Food-Safe & General Laminates",
      processType: "Solventless Lamination",
      output: "Solvent-free laminated rolls",
      capability: "Up to 400 mtrs/min",
    },
    details: [],
  },
  {
    id: "extrusion-lamination",
    title: "Extrusion Lamination",
    image: "/images/capabilities/extrusion-lamination.jpg",
    summary:
      "Superior barrier and high-performance packaging with polymer lamination engineered for strength, consistency and protection.",
    spec: {
      application: "Barrier & Industrial Packaging",
      processType: "Extrusion Lamination",
      output: "Extrusion laminated structures",
      capability: "Up to 300 mtrs/min",
    },
    details: [],
  },
  {
    id: "combi-lamination",
    title: "Combi Lamination",
    image: "/images/capabilities/combi-lamination.png",
    summary:
      "A versatile industrial system designed to perform multiple types of lamination typically solventless and solvent-based.",
    spec: {
      application: "Multi-Layer Lamination",
      processType: "Combi Lamination",
      output: "Laminated roll stock",
      capability: "Up to 300 mtrs/min",
    },
    details: [],
  },
  {
    id: "pouching",
    title: "Pouching",
    image: "/images/capabilities/pouching.jpg",
    summary:
      "Advanced pouching technology for precision, performance, and consistent sealing across flexible packaging formats.",
    spec: {
      application: "Flexible Pouch Conversion",
      processType: "Pouching",
      output: "Finished pouches",
      capability: "Up to 300 pouches/min",
    },
    details: [
      { label: "Pouch Width", value: "80-300 mm" },
      { label: "Pouch Length", value: "100-450 mm" },
    ],
  },
  {
    id: "blown-film-extrusion",
    title: "Polyethylene Blown Film Extrusion",
    image: "/images/capabilities/blown-film.jpg",
    summary:
      "Precision blown film line delivering high quality films with excellent strength, consistency and clarity.",
    spec: {
      application: "Extrusion Film",
      processType: "Blown Film Extrusion",
      output: "PE film rolls",
      capability: "Up to 250 kg/hr",
    },
    details: [],
  },
] as const;
