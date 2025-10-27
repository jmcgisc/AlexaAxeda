// Loader sin gray-matter (no usa Buffer). Funciona en navegador.
import { remark } from "remark";
import html from "remark-html";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  cover?: string;
  tags?: string[];
  canonical?: string;
  draft?: boolean;
  content: string;
};

export const toISO = (d?: string | Date) =>
  new Date(d ?? Date.now()).toISOString();

export const toLocaleLong = (d: string | Date) =>
  new Date(d).toLocaleDateString("es-MX", { dateStyle: "long" } as any);

// --- Front-matter parser muy simple (--- ... ---) ---
function parseFrontMatter(raw: string): { data: Record<string, any>; content: string } {
  const text = raw.startsWith("\uFEFF") ? raw.slice(1) : raw; // quita BOM
  if (!text.startsWith("---")) return { data: {}, content: text };

  const end = text.indexOf("\n---", 3);
  if (end === -1) return { data: {}, content: text };

  const header = text.slice(3, end).trim();           // entre --- y ---
  const body = text.slice(end + 4).replace(/^\r?\n/, ""); // después de ---\n

  const data: Record<string, any> = {};
  header.split(/\r?\n/).forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    // quita comillas si aplica
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    } else if (value === "true" || value === "false") {
      value = value === "true";
    } else if (value.startsWith("[") && value.endsWith("]")) {
      try { value = JSON.parse(value); } catch { /* ignore */ }
    }
    data[key] = value;
  });

  return { data, content: body };
}

// ===== IMPORTA TUS .md EXPLÍCITAMENTE (ajusta nombres si difieren) =====
import a1 from "../content/blog/2025-08-25-por-que-invertir-en-cancun-hoy.md?raw";
import a2 from "../content/blog/2025-09-10-terrenos-vs-departamentos.md?raw";
import a3 from "../content/blog/2025-09-15-como-aprovechar-la-preventa-inmobiliaria.md?raw";
import a4 from "../content/blog/2025-09-28-invertir-en-terrenos-en-cancun.md?raw";
import a5 from "../content/blog/2025-10-12-isla-diamante-plusvalia.md?raw";

const files: Record<string, string> = {
  "../content/blog/2025-08-25-por-que-invertir-en-cancun-hoy.md": a1,
  "../content/blog/2025-09-10-terrenos-vs-departamentos.md": a2,
  "../content/blog/2025-09-15-como-aprovechar-la-preventa-inmobiliaria.md": a3,
  "../content/blog/2025-09-28-invertir-en-terrenos-en-cancun.md": a4,
  "../content/blog/2025-10-12-isla-diamante-plusvalia.md": a5,
};

// ----------------------------------------------------------------------
function parseOne(filename: string, raw: string): Post {
  const { data, content } = parseFrontMatter(raw);
  const slug = filename.split("/").pop()!.replace(/\.md$/, "");

  return {
    slug,
    title: (data as any).title ?? slug,
    date: toISO((data as any).date),
    excerpt: (data as any).excerpt ?? "",
    cover: (data as any).cover ?? "",
    tags: Array.isArray((data as any).tags) ? (data as any).tags : [],
    canonical: (data as any).canonical ?? "",
    draft: Boolean((data as any).draft),
    content,
  };
}

let cache: Post[] | null = null;

export function getAllPosts(opts: { includeDrafts?: boolean } = {}): Post[] {
  if (!cache) {
    cache = Object.entries(files)
      .map(([fn, raw]) => parseOne(fn, raw))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }
  return opts.includeDrafts ? cache! : cache!.filter((p) => !p.draft);
}

export function getBySlug(slug: string): Post | null {
  return getAllPosts({ includeDrafts: true }).find((p) => p.slug === slug) ?? null;
}

export async function mdToHtml(md: string): Promise<string> {
  const processed = await remark().use(html).process(md);
  return String(processed);
}

// Debug opcional
console.log("[posts.loader] explicit files:", Object.keys(files));

export function __debugPosts() {
  const keys = Object.keys(files);
  const all = getAllPosts({ includeDrafts: true }).map(p => ({ slug: p.slug, title: p.title, tags: p.tags }));
  console.log("[posts] matched files:", keys);
  console.log("[posts] parsed posts:", all);
  return { keys, all };
}
 