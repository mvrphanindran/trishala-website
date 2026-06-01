export type QualityGalleryImage = {
  src: string;
  alt: string;
};

export type QualitySectionContent = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  listIntro?: string;
  listItems: readonly string[];
  closingParagraphs?: readonly string[];
  image?: string;
  gallery?: readonly QualityGalleryImage[];
};

export const qualityHero = {
  label: "Quality",
  title: "Quality Without Compromise",
  subtitle:
    "Consistent quality, continuous monitoring and rigorous inspection systems ensure every packaging solution meets the highest standards of performance and reliability.",
} as const;

export const qualitySections: readonly QualitySectionContent[] = [
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    paragraphs: [
      "Quality is integrated into every stage of the manufacturing process at Trishala Laminates.",
      "From raw material evaluation to final dispatch, every operation follows defined quality procedures to ensure consistency, reliability and product performance.",
    ],
    listIntro: "Our quality assurance framework focuses on:",
    listItems: [
      "Material consistency",
      "Process discipline",
      "Product integrity",
      "Continuous improvement",
      "Customer satisfaction",
    ],
    image: "/images/quality/material.jpg",
  },
  {
    id: "quality-control",
    title: "Quality Control",
    paragraphs: [
      "Our dedicated Quality Control team monitors critical production parameters throughout manufacturing to maintain product specifications and operational consistency.",
      "Every production batch is evaluated against established quality benchmarks before approval.",
    ],
    listIntro: "Focus Areas:",
    listItems: [
      "Print quality",
      "Registration accuracy",
      "Lamination bond strength",
      "Seal performance",
      "Dimensional consistency",
      "Visual appearance",
    ],
    image: "/images/quality/inspection.jpg",
  },
  {
    id: "continuous-inspection",
    title: "Continuous Inspection",
    paragraphs: [
      "Advanced inspection and monitoring systems are integrated throughout production to identify deviations before they impact product quality.",
    ],
    listIntro: "Our operators and quality specialists continuously monitor:",
    listItems: [
      "Printing registration",
      "Colour consistency",
      "Lamination quality",
      "Surface defects",
      "Reel condition",
      "Conversion accuracy",
    ],
    closingParagraphs: [
      "Through continuous monitoring and doctoring systems, defects are minimized and process stability is maintained throughout production.",
    ],
    gallery: [
      {
        src: "/images/quality/monitoring.jpg",
        alt: "Continuous process monitoring on the production line",
      },
      {
        src: "/images/quality/defect.jpg",
        alt: "Defect detection and doctoring systems",
      },
    ],
  },
  {
    id: "qc-laboratory",
    title: "Quality Control Laboratory",
    paragraphs: [
      "Our in-house Quality Control Laboratory is equipped with modern testing instruments and operated by skilled technicians dedicated to maintaining industry standards and driving continuous improvement.",
      "Every stage of production is supported by data-driven testing and technical evaluation.",
    ],
    listIntro: "The laboratory supports:",
    listItems: [
      "Incoming material inspection",
      "In-process testing",
      "Finished product evaluation",
      "Performance verification",
      "Process validation",
      "Quality improvement initiatives",
    ],
    image: "/images/quality/registration.jpg",
  },
  {
    id: "reliability",
    title: "Built On Reliability",
    paragraphs: [
      "Consistent quality performance has helped Trishala establish long-term relationships across diverse industries including FMCG, Agriculture, Personal Care, Household Products, Snacks, Spices and Pet Food.",
      "Through disciplined manufacturing practices, experienced personnel and continuous improvement initiatives, Trishala continues to deliver packaging solutions that meet customer expectations for quality, consistency and reliability.",
    ],
    listItems: [],
    image: "/images/quality/reliability.jpg",
  },
] as const;
