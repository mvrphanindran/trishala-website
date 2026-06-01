import SiteFooter from "@/components/site/SiteFooter";
import Hero from "@/sections/home/Hero";
import HomeNavbar from "@/sections/home/HomeNavbar";
import MaterialDiscipline from "@/sections/home/MaterialDiscipline";
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
        <MaterialDiscipline />
      </main>
      <SiteFooter />
    </div>
  );
}
