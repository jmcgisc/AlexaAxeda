import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'


const dir2 = join(process.cwd(), 'src', 'content', 'blog')
const site2 = 'https://desarrollosdiamante.com'


const urls = readdirSync(dir2)
.filter(f => f.endsWith('.md'))
.map(f => {
const raw = readFileSync(join(dir2, f), 'utf8')
const { data } = matter(raw)
const slug = f.replace(/\.md$/, '')
return {
loc: `${site2}/privadas/blog/${slug}`,
lastmod: new Date(data.date || Date.now()).toISOString()
}
})
.map(u => `<url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`)
.join('')


const xml2 = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>${site2}/privadas/blog</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
${urls}
</urlset>`


writeFileSync(join(process.cwd(), 'public', 'sitemap-blog.xml'), xml2)
console.log('✓ sitemap-blog.xml generado')