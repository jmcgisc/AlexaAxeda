import { useParams } from "react-router-dom";

const Post = () => {
  const { path } = useParams();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Ruta del post: {path}</h1>
      {/* Aquí puedes hacer fetch de datos o mostrar contenido basado en `path` */}
    </div>
  );
};

export default Post;
