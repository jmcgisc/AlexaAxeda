// src/components/Blog/Post.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";

const Post = () => {
  const { path } = useParams();
  const [content, setContent] = useState("");
  const [data, setData] = useState({ title: "", date: "" });

  useEffect(() => {
    fetch(`/posts/${path}.md`)
      .then((res) => res.text())
      .then((text) => {
        const parsed = matter(text);
        setData(parsed.data);
        setContent(parsed.content);
      });
  }, [path]);

  if (!content) return <p className="text-center mt-20">Cargando artículo...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 prose prose-lg dark:prose-invert">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default Post;
