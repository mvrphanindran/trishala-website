import { v1, siteFont } from "@/lib/v1-tokens";
import SiteFooter from "@/components/site/SiteFooter";
import HomeNavbar from "@/sections/home/HomeNavbar";

type PageShellProps = {
  children: React.ReactNode;
  warm?: boolean;
};

export default function PageShell({ children, warm = false }: PageShellProps) {
  return (
    <div
      className="min-h-screen antialiased"
      style={{
        background: warm ? v1.gradient.coolWash : v1.canvas,
        color: v1.ink.navy,
        fontFamily: siteFont,
      }}
    >
      <HomeNavbar />
      <main className="pt-[72px] lg:pt-[80px]">{children}</main>
      <SiteFooter />
    </div>
  );
}
