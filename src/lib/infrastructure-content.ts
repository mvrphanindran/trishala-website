export type InfrastructureInfoCard = {
  title: "Applications" | "Advantages" | "Capacity" | "Output";
  items: readonly string[];
};

export type InfrastructureGalleryImage = {
  src: string;
  caption: string;
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
  cards: readonly InfrastructureInfoCard[];
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
        caption: "Rotogravure Printing Press – Production Line 1",
      },
      {
        src: "/images/capabilities/rotogravure-3.png",
        caption: "Rotogravure Printing Press – Production Line 2",
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
    cards: [
      {
        title: "Capacity",
        items: [
          "Number of machines: 3",
          "Machine configuration: 9 Ink, 9 Ink, 8 Ink",
          "Printing capacity: up to 450 mtr/min",
        ],
      },
    ],
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
    cards: [],
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
    cards: [],
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
    cards: [],
  },
  {
    id: "extrusion-lamination",
    title: "Extrusion Lamination",
    summary:
      "Superior barrier and high-performance packaging with polymer lamination engineered for strength, consistency and protection.",
    image: "/images/capabilities/extrusion-lamination.jpg",
    spec: {
      application: "Barrier & Industrial Packaging",
      processType: "Extrusion Lamination",
      output: "Extrusion laminated structures",
      capability: "Up to 300 mtrs/min",
    },
    cards: [],
  },
  {
    id: "pouching",
    title: "Pouching",
    summary:
      "Advanced pouching technology for precision, performance, and consistent sealing across flexible packaging formats.",
    image: "/images/capabilities/pouching.jpg",
    spec: {
      application: "Flexible Pouch Conversion",
      processType: "Pouching",
      output: "Finished pouches",
      capability: "Up to 300 pouches/min",
    },
    cards: [
      {
        title: "Capacity",
        items: [
          "Up to 300 pouches/min",
          "Pouch width: 80–300 mm",
          "Pouch length: 100–450 mm",
        ],
      },
    ],
  },
  {
    id: "blown-film-extrusion",
    title: "Polyethylene Blown Film Extrusion",
    summary:
      "Precision blown film line delivering high quality films with excellent strength, consistency and clarity.",
    image: "/images/capabilities/blown-film.jpg",
    spec: {
      application: "Extrusion Film",
      processType: "Blown Film Extrusion",
      output: "PE film rolls",
      capability: "Up to 250 kg/hr",
    },
    cards: [
      {
        title: "Capacity",
        items: ["Blown film line: up to 250 kg/hr"],
      },
    ],
  },
] as const;
