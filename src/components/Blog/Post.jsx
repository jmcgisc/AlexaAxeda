import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

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

const Post = () => {
  const { path } = useParams();
  const [content, setContent] = useState(null);
  const [meta, setMeta] = useState({});
  const [error, setError] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadPost = async () => {
      const file = `../../posts/${path}.md`;

      if (posts[file]) {
        try {
          const raw = await posts[file]();
          const { content, meta } = parseFrontMatter(raw);
          setContent(content);
          setMeta(meta);
        } catch (err) {
          console.error("Error al procesar el post:", err);
          setError(true);
        }
      } else {
        setError(true);
      }
    };

    const loadAllPosts = async () => {
      const entries = await Promise.all(
        Object.entries(posts).map(async ([path, loader]) => {
          const raw = await loader();
          const { meta } = parseFrontMatter(raw);
          const slug = path.split("/").pop().replace(".md", "");
          return { ...meta, slug };
        })
      );
      setAllPosts(entries);
    };

    loadPost();
    loadAllPosts();
  }, [path]);

  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <div className="p-6 text-center">❌ Post no encontrado</div>;
  if (!content) return <div className="p-6 text-center">Cargando...</div>;

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-36  dark:text-white">
      <aside className="md:w-1/3 md:pr-6 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Buscar artículos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded  dark:text-white"
        />
        <ul className="space-y-2">
          {filteredPosts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/post/${post.slug}`}
                className={`block px-3 py-2 rounded hover:bg-teal-100 dark:hover:bg-teal-900 ${post.slug === path ? 'bg-teal-200 dark:bg-teal-800' : ''}`}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <article className="md:w-2/3 prose dark:prose-invert lg:prose-xl dark:text-white">
        <h1 className="text-4xl font-bold mb-2">{meta.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{meta.date}</p>
        <ReactMarkdown className="markdown [&_p]:my-6 [&_ul]:my-6 [&_ol]:my-6 [&_blockquote]:my-6 [&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:leading-snug [&_h3]:text-2xl [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:leading-snug [&_a]:text-blue-600 [&_a]:underline [&_img]:rounded-lg [&_img]:my-6 [&_code]:bg-gray-100 [&_code]:text-pink-600 [&_code]:px-1.5 [&_code]:py-0.5 [&_pre]:bg-gray-900 [&_pre]:text-white [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_table]:table [&_th]:border [&_td]:border [&_table]:my-6">
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default Post;
