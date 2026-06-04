import { v1, siteFont } from "@/lib/v1-tokens";
import HomeNavbar from "@/sections/home/HomeNavbar";
import SiteFooter from "@/components/site/SiteFooter";

type PageShellProps = {
  children: React.ReactNode;
  warm?: boolean;
};

export default function PageShell({ children, warm = false }: PageShellProps) {
  return (
    <div
      className="min-h-screen flex flex-col antialiased"
      style={{
        background: warm ? v1.gradient.coolWash : v1.canvas,
        color: v1.ink.navy,
        fontFamily: siteFont,
      }}
    >
      <HomeNavbar />
      <main className="flex-1 pt-[72px] lg:pt-[80px]">{children}</main>
      <SiteFooter />
    </div>
  );
}
