import { useEffect, useState } from "react";
import matter from "gray-matter";
import { Link } from "react-router-dom";

const BlogHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postList = [
      "invertir-en-terrenos-en-cancun"
    ];

    const loadPosts = async () => {
      const loaded = await Promise.all(
        postList.map(async (slug) => {
          const res = await fetch(`/posts/${slug}.md`);
          const text = await res.text();
          const { data } = matter(text);
          return { slug, ...data };
        })
      );

      setPosts(loaded);
    };

    loadPosts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog de Isla Diamante</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            to={`/post/${post.slug}`}
            key={post.slug}
            className="block bg-white dark:bg-gray-900 p-5 rounded shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-amber-600 mb-1">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogHome;
