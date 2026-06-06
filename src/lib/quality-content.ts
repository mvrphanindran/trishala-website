export type QualityMachine = {
  id: string;
  title: string;
  image: string;
  description: readonly string[];
};

export const qualityHero = {
  title: "Quality Testing & Inspection Equipment",
  subtitle:
    "Rigorous testing, inspection, and validation systems ensure consistent performance, reliability, and quality across every stage of flexible packaging manufacturing.",
} as const;

export const qualityMachines: readonly QualityMachine[] = [
  {
    id: "doctoring-system",
    title: "Doctoring System",
    image: "/images/quality/doctoring-machine.png",
    description: [
      "Inspects printed films and laminates during high-speed production.",
      "Uses synchronized stroboscopic lighting to create a stationary image effect.",
      "Detects print defects, misregistration, and colour variations instantly.",
    ],
  },
  {
    id: "hot-air-oven",
    title: "Hot Air Oven",
    image: "/images/quality/hot-air-oven.png",
    description: [
      "Evaluates the thermal stability of flexible packaging films, laminates, and pouch materials.",
      "Simulates elevated temperature conditions to assess material performance and durability.",
      "Supports quality control by ensuring packaging integrity throughout storage and transportation.",
    ],
  },
  {
    id: "colour-matching-cabinet",
    title: "Colour Matching Cabinet",
    image: "/images/quality/colour-matching-cabinet.png",
    description: [
      "Ensures accurate colour evaluation of printed laminates, films, and flexible packaging pouches.",
      "Simulates standardized lighting conditions to detect shade variation and print inconsistencies.",
      "Supports reliable colour matching for superior print quality and brand consistency.",
    ],
  },
  {
    id: "coefficient-of-friction-tester",
    title: "Coefficient of Friction Tester",
    image: "/images/quality/coefficient-of-friction.png",
    description: [
      "Precision instrument for evaluating friction behavior of flexible packaging substrates.",
      "Tests static and dynamic friction to predict real-world material performance.",
      "Helps improve machinability, consistency, and overall packaging reliability.",
    ],
  },
  {
    id: "tensile-tester",
    title: "Tensile Tester",
    image: "/images/quality/tensile-tester.png",
    description: [
      "Precision testing for peel strength, bond integrity, and adhesive performance.",
      "Delivers accurate, repeatable results for laminates, films, tapes, and labels.",
      "Ensures quality compliance across packaging and flexible material industries.",
    ],
  },
  {
    id: "vacuum-leak-tester",
    title: "Vacuum Leak Tester",
    image: "/images/quality/vaccum-testing.png",
    description: [
      "Detects even the smallest leaks by creating a controlled vacuum environment.",
      "Ensures packaging integrity, product safety, and contamination-free performance.",
    ],
  },
] as const;

export const qualityLaboratory = {
  title: "Advanced Quality Control Laboratory",
  image: "/images/quality/QC-lab.png",
  description:
    "Equipped with modern testing instruments and precision inspection systems, our Quality Control Laboratory ensures consistent performance across every stage of flexible packaging production. Comprehensive testing of seal strength, adhesion, barrier properties, print quality, and material integrity enables us to maintain high standards of reliability, durability, and product excellence. Through rigorous monitoring and validation, we deliver packaging solutions that meet demanding industry requirements and customer expectations.",
} as const;
