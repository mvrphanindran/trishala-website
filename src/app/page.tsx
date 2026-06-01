import SiteFooter from "@/components/site/SiteFooter";
import EnvironmentalResponsibility from "@/sections/home/EnvironmentalResponsibility";
import Hero from "@/sections/home/Hero";
import HomeNavbar from "@/sections/home/HomeNavbar";
import ProductShowcase from "@/sections/home/ProductShowcase";
import { siteFont, v1 } from "@/lib/v1-tokens";

export default function HomePage() {
  return (
    <div
      className="min-h-screen antialiased"
      style={{
        background: v1.ivory.base,
        color: v1.ink.navy,
        fontFamily: siteFont,
      }}
    >
      <HomeNavbar />
      <main className="pt-[72px] lg:pt-[80px]">
        <Hero />
        <EnvironmentalResponsibility />
        <ProductShowcase />
      </main>
      <SiteFooter />
    </div>
  );
}
