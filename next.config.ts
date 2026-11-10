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

      // Pages of the previous (WordPress) website that Google still shows.
      { source: "/bevarage", destination: "/industries/fmcg/food-and-beverages", permanent: true },
      { source: "/biscuits", destination: "/applications/biscuits-and-confectioneries", permanent: true },
      { source: "/frozen-foods", destination: "/packaging-solutions", permanent: true },
      { source: "/pooja-essentials", destination: "/packaging-solutions", permanent: true },
      { source: "/others", destination: "/packaging-solutions", permanent: true },
      { source: "/agriculture", destination: "/industries/agriculture", permanent: true },
      { source: "/spices", destination: "/industries/spices-and-seasonings", permanent: true },
      { source: "/tea-cofee", destination: "/industries/tea-and-coffee", permanent: true },
      { source: "/clients", destination: "/industries", permanent: true },
      { source: "/gallery", destination: "/infrastructure", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/promoters", destination: "/about", permanent: true },
      { source: "/expansion-plans", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/careers", destination: "/contact", permanent: true },
      {
        source: "/wp-content/uploads/2024/11/123-1.pdf",
        destination: "/brochure/trishala-master-brochure.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
