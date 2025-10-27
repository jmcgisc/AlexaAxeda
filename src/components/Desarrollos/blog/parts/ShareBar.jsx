export default function ShareBar({ url, title }){
const s = encodeURIComponent
return (
<div className="dd-sharebar">
<a href={`https://www.facebook.com/sharer/sharer.php?u=${s(url)}`} target="_blank" rel="noreferrer">Facebook</a>
<a href={`https://x.com/intent/tweet?url=${s(url)}&text=${s(title)}`} target="_blank" rel="noreferrer">X</a>
<a href={`https://www.linkedin.com/sharing/share-offsite/?url=${s(url)}`} target="_blank" rel="noreferrer">LinkedIn</a>
</div>
)
}
