import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  // Old and alternative addresses: permanent (308) redirects pass their
  // search ranking on to the page they point to.
  async redirects() {
    return [
      { source: "/products", destination: "/packaging-solutions", permanent: true },
      { source: "/applications/coffee", destination: "/applications/coffee-powder", permanent: true },
      { source: "/applications/tea", destination: "/applications/tea-powder", permanent: true },
      { source: "/applications/pet-food-packaging", destination: "/applications/pet-food", permanent: true },
      { source: "/industries/dry-fruits", destination: "/industries/dry-fruits-and-nuts", permanent: true },
      { source: "/industries/spices-masala", destination: "/industries/spices-and-seasonings", permanent: true },
    ];
  },
};

export default nextConfig;
