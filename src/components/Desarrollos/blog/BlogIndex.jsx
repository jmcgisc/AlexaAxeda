import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search, Tag, X, Home, ChevronRight, Calendar, Clock, MapPin } from 'lucide-react'
import Breadcrumbs from './parts/Breadcrumbs'
import BlogCard from './parts/BlogCard'
import { getAllPosts, __debugPosts } from "./posts.loader";
__debugPosts(); 

export default function BlogIndex() {
  const [params, setSearchParams] = useSearchParams()
  const q = params.get('q') || ''
  const tag = params.get('tag') || ''
  const posts = getAllPosts()

  // Extraer todos los tags únicos para filtros
  const allTags = useMemo(() => {
    const tags = posts.flatMap(post => post.tags || [])
    return [...new Set(tags)].filter(Boolean)
  }, [posts])

  const filtered = useMemo(() => {
    return posts.filter(p => {
      const searchTerm = q.toLowerCase()
      const matchesQ = !q ? true : (
        p.title.toLowerCase().includes(searchTerm) ||
        (p.excerpt || '').toLowerCase().includes(searchTerm) ||
        p.content.toLowerCase().includes(searchTerm)
      )
      const matchesTag = !tag ? true : (p.tags || []).includes(tag)
      return matchesQ && matchesTag
    })
  }, [q, tag, posts])

  const handleSearch = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newQ = formData.get('q') || ''
    
    const newParams = new URLSearchParams()
    if (newQ) newParams.set('q', newQ)
    if (tag) newParams.set('tag', tag)
    
    setSearchParams(newParams)
  }

  const handleTagClick = (selectedTag) => {
    const newParams = new URLSearchParams()
    if (q) newParams.set('q', q)
    if (selectedTag && selectedTag !== tag) newParams.set('tag', selectedTag)
    setSearchParams(newParams)
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  const clearTag = () => {
    const newParams = new URLSearchParams()
    if (q) newParams.set('q', q)
    setSearchParams(newParams)
  }

  const clearSearch = () => {
    const newParams = new URLSearchParams()
    if (tag) newParams.set('tag', tag)
    setSearchParams(newParams)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Cancún, México
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Blog Isla Diamante
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Descubre oportunidades de inversión, análisis de plusvalía y todo sobre vivir en el paraíso del Caribe Mexicano
          </p>
        </div>

        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { name: 'Inicio', to: '/' },
            { name: 'Privadas', to: '/privadas' },
            { name: 'Blog', to: '/privadas/blog' },
          ]} 
        />

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="relative flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="q"
                  defaultValue={q}
                  placeholder="Buscar artículos sobre inversión, plusvalía, Cancún..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-200 text-lg shadow-sm hover:shadow-md"
                />
              </div>
              <button 
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md"
              >
                Buscar
              </button>
            </div>
          </form>

          {/* Tags Filter */}
          {allTags.length > 0 && (
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {allTags.map(tagItem => (
                  <button
                    key={tagItem}
                    onClick={() => handleTagClick(tagItem)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                      tag === tagItem 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'bg-white text-gray-700 shadow-sm hover:shadow-md border border-gray-200'
                    }`}
                  >
                    <Tag className="w-3 h-3" />
                    #{tagItem}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Filters */}
          {(q || tag) && (
            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-200">
                <span className="text-sm text-gray-600">Filtros activos:</span>
                <div className="flex items-center gap-2">
                  {q && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      "{q}"
                      <button 
                        onClick={clearSearch}
                        className="hover:bg-blue-100 rounded-full p-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {tag && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      #{tag}
                      <button 
                        onClick={clearTag}
                        className="hover:bg-blue-100 rounded-full p-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-500 hover:text-gray-700 underline ml-2"
                  >
                    Limpiar todo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        {(q || tag) && (
          <div className="mb-6 text-center">
            <p className="text-gray-600 bg-white/80 backdrop-blur-sm inline-block px-4 py-2 rounded-full border border-gray-200">
              <span className="font-semibold text-blue-600">{filtered.length}</span> 
              {filtered.length === 1 ? ' artículo encontrado' : ' artículos encontrados'}
            </p>
          </div>
        )}

        {/* Blog Grid */}
        {filtered.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(post => (
              <BlogCard 
                key={post.slug} 
                {...post}
                className="transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                onTagClick={handleTagClick}
              />
            ))}
          </section>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl mb-6">
              <Search className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              No encontramos resultados
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              {q || tag 
                ? "Prueba con otros términos de búsqueda o elimina los filtros para ver todos los artículos."
                : "Pronto agregaremos más contenido. ¡Vuelve pronto!"
              }
            </p>
            {(q || tag) && (
              <Link
                to="/privadas/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <X className="w-4 h-4" />
                Ver todos los artículos
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}