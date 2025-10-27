export default function Prose({ html }){
return <div className="dd-prose" dangerouslySetInnerHTML={{ __html: html }} />
}