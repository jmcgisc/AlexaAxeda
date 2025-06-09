import { useParams } from "react-router-dom";
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

  useEffect(() => {
    const file = `../../posts/${path}.md`;

    if (posts[file]) {
      posts[file]().then(raw => {
        const { content, meta } = parseFrontMatter(raw);
        setContent(content);
        setMeta(meta);
      }).catch(err => {
        console.error("Error al procesar el post:", err);
        setError(true);
      });
    } else {
      setError(true);
    }
  }, [path]);

  if (error) return <div className="p-6 text-center">❌ Post no encontrado</div>;
  if (!content) return <div className="p-6 text-center">Cargando...</div>;

  return (
    <div className="max-w-3xl mx-auto p-32 bg-white">
      <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{meta.date}</p>
      <ReactMarkdown className="prose dark:prose-invert">{content}</ReactMarkdown>
    </div>
  );
};

export default Post;