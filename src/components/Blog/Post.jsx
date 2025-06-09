import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown"; 

const posts = import.meta.glob('../../posts/*.md', { as: 'raw' });
console.log(Object.keys(posts))

const Post = () => {
  const { path } = useParams();
  const [content, setContent] = useState(null);
  const [meta, setMeta] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      const matchedKey = Object.keys(posts).find(key => key.endsWith(`${path}.md`));
      if (matchedKey) {
        const raw = await posts[matchedKey]();
        const { content, data } = matter(raw);
        setContent(content);
        setMeta(data);
      } else {
        setError(true);
      }
    };
    loadPost();
  }, [path]);

  if (error) return <div className="p-6 text-center">❌ Post no encontrado</div>;
  if (!content) return <div className="p-6 text-center">Cargando...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{meta.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{meta.date}</p>
      <ReactMarkdown className="prose dark:prose-invert">{content}</ReactMarkdown>
    </div>
  );
};

export default Post;
