// src/pages/blog.jsx
import { Link } from "react-router-dom";
import posts from "./blogPosts";

export default function BlogHome() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog de Inversión</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/post/${post.slug}`} className="text-xl text-teal-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
