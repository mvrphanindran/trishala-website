import { readdirSync } from "fs";
import path from "path";

export type PackagingApplicationItem = {
  slug: string;
  title: string;
  image: string;
  filename: string;
};

const galleryDir = path.join(process.cwd(), "public", "images", "packaging-solutions", "gallery");
const packagingApplicationItemsCache = loadPackagingApplicationItems();

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toTitleCase(input: string): string {
  return input
    .split(/[\s_-]+/g)
    .filter(Boolean)
    .map((part) => {
      const lower = part.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

function toPublicImagePath(filename: string): string {
  return `/images/packaging-solutions/gallery/${encodeURIComponent(filename)}`;
}

function loadPackagingApplicationItems(): readonly PackagingApplicationItem[] {
  const files = readdirSync(galleryDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".png"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

  return files.map((filename) => {
    const baseName = filename.replace(/\.png$/i, "");

    return {
      slug: slugify(baseName),
      filename,
      title: toTitleCase(baseName),
      image: toPublicImagePath(filename),
    };
  });
}

export function getPackagingApplicationItems(): readonly PackagingApplicationItem[] {
  return packagingApplicationItemsCache;
}

export function getPackagingApplicationBySlug(slug: string): PackagingApplicationItem | undefined {
  return packagingApplicationItemsCache.find((item) => item.slug === slug);
}
