"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useEffect } from "react";

/**
 * Reports every way a visitor contacts the company to Google Analytics,
 * so you can see how many calls, emails and enquiries the website brings:
 *
 *   phone_call_click   tap/click on a phone number (tel: link)
 *   email_click        click on an email address (mailto: link)
 *   whatsapp_click     click on a WhatsApp link
 *   enquiry_submit     contact or enquiry form sent
 *   brochure_download  brochure / PDF opened
 *   save_contact       digital card "Save contact" (vCard)
 *   linkedin_click     click through to LinkedIn
 *
 * Each event carries contact_method, link_url, link_text and page_path.
 * One listener on the whole document, so new links are covered automatically.
 */
type Kind = { event: string; method: string };

function classify(href: string): Kind | null {
  const h = href.toLowerCase();
  if (h.startsWith("tel:")) return { event: "phone_call_click", method: "phone" };
  if (h.startsWith("mailto:")) return { event: "email_click", method: "email" };
  if (h.includes("wa.me/") || h.includes("whatsapp.com")) return { event: "whatsapp_click", method: "whatsapp" };
  if (h.includes("/save/vcard")) return { event: "save_contact", method: "vcard" };
  if (h.endsWith(".pdf") || h.includes("/brochure/")) return { event: "brochure_download", method: "brochure" };
  if (h.includes("linkedin.com")) return { event: "linkedin_click", method: "linkedin" };
  return null;
}

function track(event: string, params: Record<string, string>) {
  try {
    sendGAEvent("event", event, { ...params, page_path: window.location.pathname });
  } catch {
    // Analytics blocked or not loaded: never break the visitor's action.
  }
}

export default function ContactTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const kind = classify(href);
      if (!kind) return;
      track(kind.event, {
        contact_method: kind.method,
        link_url: href,
        link_text: (link.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 100),
      });
    };

    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement | null;
      if (!form || form.tagName !== "FORM") return;
      track("enquiry_submit", {
        contact_method: "form",
        form_id: form.id || form.getAttribute("aria-label") || "enquiry",
      });
    };

    // Capture phase: runs even if a component stops the event later.
    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  return null;
}
