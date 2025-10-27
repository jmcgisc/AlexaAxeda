import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'


const dir = join(process.cwd(), 'src', 'content', 'blog')
const site = 'https://desarrollosdiamante.com'


const items = readdirSync(dir)
.filter(f => f.endsWith('.md'))
.map(f => {
const raw = readFileSync(join(dir, f), 'utf8')
const { data } = matter(raw)
const slug = f.replace(/\.md$/, '')
return { slug, ...data }
})
.filter(p => !p.draft)
.sort((a,b) => +new Date(b.date) - +new Date(a.date))
.slice(0, 50)
.map(p => `
<item>
<title><![CDATA[${p.title}]]></title>
<link>${site}/privadas/blog/${p.slug}</link>
<guid>${site}/privadas/blog/${p.slug}</guid>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
<description><![CDATA[${p.excerpt || ''}]]></description>
</item>`)
.join('')


const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>Desarrollos Diamante - Blog</title>
<link>${site}/privadas/blog</link>
<description>Artículos sobre inversión y desarrollos en Cancún.</description>
${items}
</channel></rss>`


writeFileSync(join(process.cwd(), 'public', 'rss.xml'), xml)
console.log('✓ rss.xml generado')