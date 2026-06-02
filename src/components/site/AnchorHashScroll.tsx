"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AnchorHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timer = window.setTimeout(scrollToHash, 80);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
