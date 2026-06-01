import { v1, siteFont } from "@/lib/v1-tokens";
import SiteFooter from "@/components/site/SiteFooter";
import SiteNavbar from "@/components/site/SiteNavbar";

type PageShellProps = {
  children: React.ReactNode;
  warm?: boolean;
};

export default function PageShell({ children, warm = false }: PageShellProps) {
  return (
    <div
      className="min-h-screen antialiased"
      style={{
        background: warm ? v1.ivory.warm : v1.ivory.base,
        color: v1.ink.navy,
        fontFamily: siteFont,
      }}
    >
      <SiteNavbar />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
