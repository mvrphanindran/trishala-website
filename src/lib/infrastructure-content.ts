export type InfrastructureInfoCard = {
  title: "Applications" | "Advantages" | "Capacity" | "Output";
  items: readonly string[];
};

export type InfrastructureGalleryImage = {
  src: string;
  caption: string;
};

export type InfrastructureCapability = {
  id: string;
  title: string;
  image?: string;
  gallery?: readonly InfrastructureGalleryImage[];
  summary: string;
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
    title: "9 Color Rotogravure Printing",
    gallery: [
      {
        src: "/images/capabilities/rotogravure-2.png",
        caption: "9 Color Rotogravure Printing Press – Production Line 1",
      },
      {
        src: "/images/capabilities/rotogravure-3.png",
        caption: "9 Color Rotogravure Printing Press – Production Line 2",
      },
    ],
    summary:
      "High-speed rotogravure printing technology delivering consistent print quality, accurate colour reproduction and superior packaging aesthetics across flexible packaging substrates.",
    cards: [
      {
        title: "Applications",
        items: [
          "FMCG Packaging",
          "Snacks Packaging",
          "Spices & Seasonings",
          "Agriculture Packaging",
          "Personal Care Packaging",
          "Household Products",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Accurate colour reproduction",
          "Excellent print consistency",
          "High production efficiency",
          "Sharp graphics and fine details",
        ],
      },
      {
        title: "Capacity",
        items: ["9 Color rotogravure printing", "Up to 450 m/min"],
      },
      {
        title: "Output",
        items: [
          "Production-ready printed rolls",
          "Prepared for lamination and conversion",
        ],
      },
    ],
  },
  {
    id: "combi-lamination",
    title: "Adhesive / Combination Lamination",
    image: "/images/capabilities/combi-lamination.png",
    summary:
      "Combination lamination unites multiple substrates into engineered structures that protect print, enhance barrier performance, and improve seal integrity for demanding pack formats.",
    cards: [
      {
        title: "Applications",
        items: [
          "Barrier enhancement for shelf-life critical packs",
          "Print protection in multi-layer laminates",
          "Sealability improvement for pouch and sachet formats",
          "Multi-layer laminate structures",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Versatile adhesive bonding across film types",
          "Stable laminate formation for complex structures",
          "Supports high-performance packaging specifications",
        ],
      },
      {
        title: "Capacity",
        items: ["Up to 300 m/min"],
      },
      {
        title: "Output",
        items: [
          "Multi-layer laminated roll stock",
          "Ready for slitting or pouch conversion",
        ],
      },
    ],
  },
  {
    id: "solvent-lamination",
    title: "Solvent Based Lamination",
    image: "/images/capabilities/solvent-lamination.jpg",
    summary:
      "Solvent-based adhesive lamination builds robust bonds for complex, high-performance laminate structures where strength and reliability are critical for industrial and specialty packaging.",
    cards: [
      {
        title: "Applications",
        items: [
          "Complex multi-layer laminate structures",
          "High-performance food and industrial packaging",
          "Structures requiring maximum bond strength",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Strong bond strength across diverse films",
          "Proven performance for demanding specifications",
          "Suitable for intricate laminate combinations",
        ],
      },
      {
        title: "Capacity",
        items: ["Up to 120 m/min"],
      },
      {
        title: "Output",
        items: [
          "High-performance laminated webs",
          "Engineered for downstream conversion",
        ],
      },
    ],
  },
  {
    id: "solventless-lamination",
    title: "Solventless Lamination",
    image: "/images/capabilities/solvent-less.jpg",
    summary:
      "Solventless lamination supports environment-conscious manufacturing with efficient bonding, no residual solvent concerns, and high productivity for modern flexible packaging lines.",
    cards: [
      {
        title: "Applications",
        items: [
          "Food-safe and general flexible laminates",
          "High-throughput packaging film structures",
          "Applications requiring clean, efficient bonding",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Environment-conscious process",
          "No residual solvent in the laminate",
          "High productivity with efficient bonding",
        ],
      },
      {
        title: "Capacity",
        items: ["Up to 400 m/min"],
      },
      {
        title: "Output",
        items: [
          "Solvent-free laminated rolls",
          "Consistent webs for slitting and pouching",
        ],
      },
    ],
  },
  {
    id: "extrusion-lamination",
    title: "Extrusion Lamination",
    image: "/images/capabilities/extrusion-lamination.jpg",
    summary:
      "Extrusion lamination coats and bonds molten polymer onto substrates to create high-barrier laminates for liquid, industrial, and heavy-duty packaging applications.",
    cards: [
      {
        title: "Applications",
        items: [
          "High barrier laminates",
          "Liquid packaging applications",
          "Industrial and heavy-duty packaging structures",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Excellent barrier and seal performance",
          "Strong adhesion between film layers",
          "Supports demanding product protection needs",
        ],
      },
      {
        title: "Capacity",
        items: ["Up to 300 m/min"],
      },
      {
        title: "Output",
        items: [
          "Extrusion-laminated composite films",
          "Sized for slit rolls or direct conversion",
        ],
      },
    ],
  },
  {
    id: "blown-film",
    title: "Polyethylene Film Extrusion",
    image: "/images/capabilities/blown-film.jpg",
    summary:
      "Blown film extrusion produces polyethylene film with excellent clarity, uniform gauge control, and strength for lamination, printing, and conversion across flexible packaging lines.",
    cards: [
      {
        title: "Applications",
        items: [
          "Sealant and carrier films for laminates",
          "Monolayer and co-extruded PE structures",
          "Base film for printing and pouch conversion",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Excellent film clarity",
          "Uniform thickness control",
          "Superior strength for downstream processing",
        ],
      },
      {
        title: "Capacity",
        items: ["Up to 250 kg/hr"],
      },
      {
        title: "Output",
        items: [
          "Blown PE film rolls",
          "Fed to printing, lamination, or conversion",
        ],
      },
    ],
  },
  {
    id: "slitting",
    title: "Slitting & Rewinding",
    image: "/images/capabilities/slitting.png",
    summary:
      "Precision slitting and rewinding prepares laminated webs to exact widths with tight dimensional control, supporting efficient pouching lines and customer-ready roll formats.",
    cards: [
      {
        title: "Applications",
        items: [
          "Width-specific roll preparation for converters",
          "Finished roll supply for pouching lines",
          "Custom slit formats for brand packaging",
        ],
      },
      {
        title: "Advantages",
        items: [
          "Precision width control",
          "Improved production efficiency downstream",
          "Dimensional accuracy across roll sets",
        ],
      },
      {
        title: "Capacity",
        items: [
          "Multi-station slitting and rewinding",
          "Configured to customer roll specifications",
        ],
      },
      {
        title: "Output",
        items: [
          "Finished slit rolls",
          "Ready for pouch conversion or dispatch",
        ],
      },
    ],
  },
  {
    id: "pouching",
    title: "Pouching",
    image: "/images/capabilities/pouching.jpg",
    summary:
      "High-speed pouch conversion transforms laminated film into finished pack formats including stand-up, centre seal, three-side seal, and spout pouches with precise dimensional control.",
    cards: [
      {
        title: "Applications",
        items: [
          "Stand Up Pouches",
          "Center Seal Pouches",
          "Three Side Seal Pouches",
          "Spout Pouches",
          "Custom formats",
        ],
      },
      {
        title: "Advantages",
        items: [
          "High-speed automated conversion",
          "Consistent seal and dimension control",
          "Flexible format capability on one platform",
        ],
      },
      {
        title: "Capacity",
        items: [
          "Up to 300 bags/min",
          "Pouch width: 80–300 mm",
          "Pouch length: 100–450 mm",
        ],
      },
      {
        title: "Output",
        items: [
          "Finished pouches for filling and dispatch",
          "Retail-ready flexible packaging formats",
        ],
      },
    ],
  },
] as const;

export const manufacturingWorkflow = [
  "Rotogravure Printing",
  "Lamination",
  "Extrusion",
  "Slitting",
  "Pouch Conversion",
  "Inspection",
  "Dispatch",
] as const;
