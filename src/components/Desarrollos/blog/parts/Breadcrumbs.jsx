import { Link } from 'react-router-dom'
export default function Breadcrumbs({ items }){
return (
<nav aria-label="breadcrumb" className="dd-breadcrumbs">
{items.map((it, i) => (
<span key={it.to}>
<Link to={it.to}>{it.name}</Link>
{i < items.length - 1 ? ' / ' : ''}
</span>
))}
</nav>
)
}