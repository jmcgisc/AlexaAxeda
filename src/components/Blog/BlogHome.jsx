// src/components/Blog/BlogHome.jsx
import { Link } from "react-router-dom";
import SEO from "../SEO"
const posts = [
  {
    title: "¿Cómo invertir en terrenos en Cancún?",
    slug: "invertir-en-terrenos-en-cancun",
    excerpt: "Guía para quienes buscan invertir en tierra con alto potencial turístico y plusvalía.",
  },
  // Puedes ir agregando más
];

const BlogHome = () => (
  <div className="max-w-3xl mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Blog de Isla Diamante</h1>
    <ul className="space-y-6">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={`/post/${post.slug}`} className="text-2xl text-teal-700 hover:underline">
            {post.title}
          </Link>
          <p className="text-sm text-gray-500">{post.excerpt}</p>
        </li>
      ))}
    </ul>

    <SEO
        title="¿Cómo invertir en terrenos en Cancún? | Blog Isla Diamante"
        description="Descubre consejos clave para invertir inteligentemente en terrenos en una de las zonas con más plusvalía de México."
        image="https://alexadelgado.netlify.app/blog/terrenos-cancun.jpg"
        url="https://alexadelgado.netlify.app/blog/como-invertir-en-terrenos-en-cancun"
        schemaType="Article"
      />
  </div>
  
);

export default BlogHome;
