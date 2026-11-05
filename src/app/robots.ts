import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Open to all search engines and to AI assistants' crawlers, so the company
 * can be found and cited in Google, Bing, ChatGPT, Claude, Perplexity,
 * Gemini and Copilot answers. (Employee digital cards stay crawlable so their
 * "noindex" tag can be read; that is what keeps them out of results.)
 */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
