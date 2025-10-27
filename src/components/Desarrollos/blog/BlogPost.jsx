import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from './parts/Breadcrumbs'
import Prose from './parts/Prose'
import ShareBar from './parts/ShareBar'
import { getBySlug, mdToHtml } from "./posts.loader";
import './blog.css'


export default function BlogPost(){
const { slug = '' } = useParams()
const post = getBySlug(slug)
const [html, setHtml] = useState('')


useEffect(() => { (async () => { if(post) setHtml(await mdToHtml(post.content)) })() }, [slug])
if(!post) return <div className="dd-container dd-empty">Artículo no encontrado.</div>


const url = `https://desarrollosdiamante.com/privadas/blog/${post.slug}`


return (
<div className="dd-container dd-post mt-24 text-gray-600">
<Breadcrumbs items={[
{ name:'Inicio', to:'/' },
{ name:'Privadas', to:'/privadas' },
{ name:'Blog', to:'/privadas/blog' },
{ name:post.title, to:`/privadas/blog/${post.slug}` },
]} />


<header className="dd-post__header">
<h1>{post.title}</h1>
<div className="dd-meta">{new Date(post.date).toLocaleDateString('es-MX', { dateStyle: 'long' })}</div>
</header>


{post.cover && (<div className="dd-cover"><img src={post.cover} alt={post.title} /></div>)}


<Prose html={html} />
<ShareBar url={url} title={post.title} />
</div>
)
}