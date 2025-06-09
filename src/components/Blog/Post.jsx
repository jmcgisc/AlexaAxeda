import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import { marked } from "marked";

const posts = import.meta.glob("/src/posts/*.md", { eager: true });

const Post = () => {
  const { path } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const slug = `/src/posts/${path}.md`;
    const file = posts[slug];

    if (file) {
      const raw = file.default;
      const { content } = matter(raw);
      const html = marked(content);
      setContent(html);
    } else {
      setContent("<p>Artículo no encontrado.</p>");
    }
  }, [path]);

  return (
    <div className="max-w-3xl mx-auto p-6 prose dark:prose-invert">
      {content ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Post;
