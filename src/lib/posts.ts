import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export type Post = {
  slug: string
  title: string
  date: string
  excerpt?: string
  cover?: string
  tags?: string[]
  canonical?: string
  draft?: boolean
  content: string
}

export const toISO = (d?: string | Date) =>
  new Date(d ?? Date.now()).toISOString()

export const toLocaleLong = (d: string | Date) =>
  new Date(d).toLocaleDateString('es-MX', { dateStyle: 'long' } as any)

// Trae MD desde tu carpeta (relativo y absoluto, para evitar dudas de resolución)
const files = {
  ...import.meta.glob("../components/Desarrollos/blog/content/blog/*.md", { as: "raw", eager: true }),
  ...import.meta.glob("/src/components/Desarrollos/blog/content/blog/*.md", { as: "raw", eager: true }),
} as Record<string, string>;

function parseOne(filename: string, raw: string): Post {
  const { data, content } = matter(raw)
  const slug = filename.split('/').pop()!.replace(/\.(md|mdx)$/, '')
  return {
    slug,
    title: (data as any).title ?? slug,
    date: toISO((data as any).date),
    excerpt: (data as any).excerpt ?? '',
    cover: (data as any).cover ?? '',
    tags: Array.isArray((data as any).tags) ? (data as any).tags : [],
    canonical: (data as any).canonical ?? '',
    draft: Boolean((data as any).draft),
    content,
  }
}

let cache: Post[] | null = null

export function getAllPosts(opts: { includeDrafts?: boolean } = {}): Post[] {
  if (!cache) {
    cache = Object.entries(files)
      .map(([fn, raw]) => parseOne(fn, raw))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  }
  const { includeDrafts = false } = opts
  return includeDrafts ? cache : cache.filter(p => !p.draft)
}

export function getBySlug(slug: string): Post | null {
  return getAllPosts({ includeDrafts: true }).find(p => p.slug === slug) ?? null
}

export async function mdToHtml(md: string): Promise<string> {
  const processed = await remark().use(html).process(md)
  return String(processed)
}

// HMR: al cambiar/añadir MD, recargar lista en dev
if (import.meta.hot) {
  import.meta.hot.accept(() => { cache = null })
}

export function __debugPosts() {
  // claves que encontró el glob + resumen
  const keys = Object.keys(files);
  const all = getAllPosts({ includeDrafts: true }).map(p => ({
    slug: p.slug, title: p.title, tags: p.tags, date: p.date
  }));
  // ver en consola del navegador
  console.log("[posts] matched files:", keys);
  console.log("[posts] parsed posts:", all);
  return { keys, all };
}