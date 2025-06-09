import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const posts = import.meta.glob('../../posts/*.md', { as: 'raw' });

function parseFrontMatter(raw) {
  const match = /^---\n([\s\S]+?)\n---/.exec(raw);
  const content = raw.replace(/^---\n[\s\S]+?\n---/, "").trim();
  const meta = {};

  if (match) {
    const lines = match[1].split('\n');
    lines.forEach(line => {
      const [key, ...rest] = line.split(':');
      meta[key.trim()] = rest.join(':').trim();
    });
  }

  return { content, meta };
}

const BlogHome = () => {
  const [postsData, setPostsData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      const entries = await Promise.all(
        Object.entries(posts).map(async ([path, loader]) => {
          const raw = await loader();
          const { meta } = parseFrontMatter(raw);
          const slug = path.split("/").pop().replace(".md", "");
          return { ...meta, slug };
        })
      );

      const sorted = entries.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPostsData(sorted);
    };

    loadPosts();
  }, []);

  const filtered = postsData.filter((post) => {
    const searchLower = search.toLowerCase();
    return (
      post.title?.toLowerCase().includes(searchLower) ||
      post.description?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 p-24 mt-36 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-teal-700">Blog de Isla Diamante</h1>

      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Buscar artículos..."
          className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-teal-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No hay artículos encontrados.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((post, index) => (
            <Link
              to={`/post/${post.slug}`}
              key={index}
              className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition duration-300 border border-gray-200 hover:border-teal-500"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <p className="text-gray-700 text-base leading-relaxed mb-2">{post.description}</p>
                {post.tags && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {post.tags.split(',').map((tag, i) => (
                      <span
                        key={i}
                        className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded"
                      >
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
                <span className="text-teal-600 hover:underline mt-4 inline-block text-sm font-medium">Leer más →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogHome;
