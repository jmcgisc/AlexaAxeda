import { Link } from "react-router-dom";
import { Tag, Calendar, Clock, ArrowRight } from "lucide-react";
import { toLocaleLong } from "../posts.loader";

export default function BlogCard({
  slug,
  title,
  date,
  excerpt,
  cover,
  tags = [],
  readTime,
  className = "",
  onTagClick,
}) {
  return (
    <article
      className={
        "group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 " +
        className
      }
    >
      {cover && (
        <Link 
          to={`/privadas/blog/${slug}`} 
          className="block aspect-[16/9] overflow-hidden relative"
        >
          <img 
            src={cover} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Badge de tiempo de lectura */}
          {readTime && (
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                <Clock className="w-3 h-3" />
                {readTime}
              </span>
            </div>
          )}
        </Link>
      )}

      <div className="p-6">
        {/* Fecha */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <time dateTime={date}>
            {toLocaleLong(date)}
          </time>
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
          <Link 
            to={`/privadas/blog/${slug}`} 
            className="hover:underline decoration-2 underline-offset-4"
          >
            {title}
          </Link>
        </h3>

        {/* Extracto */}
        {excerpt && (
          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => onTagClick?.(t)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 hover:scale-105 group/tag"
                aria-label={`Filtrar por ${t}`}
              >
                <Tag className="w-3 h-3 group-hover/tag:scale-110 transition-transform" />
                #{t}
              </button>
            ))}
          </div>
        )}

        {/* Enlace Leer más */}
        <Link
          to={`/privadas/blog/${slug}`}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group/link"
        >
          Leer artículo
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </article>
  );
}