import React from 'react';
import { useState } from 'react';

const destinos = [
    {
      id: "europa",
      nombre: "Europa",
      imagen: "/Isla_3.webp",
      descripcion:
        "Sumérgete en un cuento de hadas entre castillos, calles adoquinadas y paisajes de ensueño. Vive la magia del romanticismo europeo en cada paso.",
      galeria: [
          "/images/Isla_3.webp",
          "/images/Japon.webp",
          "/images/destino-paris.jpg",
        ],
      },
    {
      id: "japon",
      nombre: "Japón",
      imagen: "/images/Japon.webp",
      descripcion:
        "Descubre la armonía entre tecnología y tradición, con templos milenarios, cerezos en flor y una cultura fascinante.",
    },
    {
      id: "disneyland",
      nombre: "Disneyland",
      imagen: "/images/DISNEY.webp",
      descripcion:
        "Regresa a tu infancia con aventuras mágicas, castillos encantados y personajes que cobran vida en el lugar más feliz del mundo.",
    },
  ];

  

function Amenidades() {

  
  const [selectedDestino, setSelectedDestino] = useState(null);
  const closeModal = () => setSelectedDestino(null);
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  return (
    <div>
        
        
    {/* Destinos Destacados */}
        <section id="destinos_destacados"
        className="bg-diamonBlack w-full px-8 md:px-20 py-16 dark:bg-gray-950">
        <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            Destinos destacados
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinos.map((destino) => (
            <div
                key={destino.id}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_10px_2px_#00fff7] transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedDestino(destino)}
            >
                <img
                src={destino.imagen}
                alt={destino.nombre}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="rounded-2xl pointer-events-none group-hover:bg-[radial-gradient(circle,_rgba(0,255,247,0.2)_0%,_transparent_70%)] transition duration-500"></div>
                <div className="p-6">
                <h4 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">
                    {destino.nombre.toUpperCase()}
                </h4>
                <p className="text-gray-600 mt-2 text-justify dark:text-gray-300">
                    {destino.descripcion.substring(0, 60)}...
                </p>
                </div>
            </div>
            ))}
        </div>
        {/* Modal dinámico */}
        {selectedDestino && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 md:p-10 max-w-xl w-full relative animate-fade-in transition-all">
        {/* Cerrar */}
        <button
            id="Cerrar Modal"
            className="absolute top-4 right-5 text-gray-500 hover:text-red-500 text-2xl font-bold"
            onClick={closeModal}
            aria-label="Cerrar modal"
        >
            ×
        </button>
        {/* Imagen */}
        <img
            src={selectedDestino.imagen}
            alt={selectedDestino.nombre}
            className="rounded-xl w-full h-48 object-cover mb-6 shadow-md"
        />
        {/* Título */}
        <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-3">
            {selectedDestino.nombre}
        </h3>
        {/* Descripción */}
        <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-6">
            {selectedDestino.descripcion}
        </p> 
        {/* Acciones */}
        <div className="flex justify-center gap-4">
            <button 
            id="Reservar Ahora"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition font-semibold shadow-md">
            Reservar ahora
            </button>
            <button
            id="Ver más fotos"
            onClick={() => setMostrarGaleria(true)}
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full transition font-semibold"
            > 
            Ver más fotos
        </button>
        </div>
        </div>
        </div>
        )}
        {/* Galeria de Fotos */}
        {mostrarGaleria && selectedDestino && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-3xl w-full relative p-6">
        
        {/* Botón cerrar */}
        <button
            id='Cerrar Galería'
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
            onClick={() => setMostrarGaleria(false)}
            aria-label="Cerrar galería"
        >
            ×
        </button>

        <h3 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Galería de {selectedDestino.nombre}
        </h3>

        <Swiper
            modules={[Navigation]}
            navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full relative"
        >
    {selectedDestino.galeria?.map((src, idx) => (
        <SwiperSlide key={idx}>
        <img
            src={src}
            alt={`Foto ${idx + 1} de ${selectedDestino.nombre}`}
            className="w-full h-96 object-cover rounded-xl"
        />
        </SwiperSlide>
    ))}

        {/* Flechas personalizadas */}
        <div className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow hover:bg-white dark:hover:bg-gray-700 cursor-pointer transition">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        </div>

        <div className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow hover:bg-white dark:hover:bg-gray-700 cursor-pointer transition">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        </div>
    </Swiper>
        </div>
        </div>
    )}
        </section>  

      
    </div>
  )
}

export default Amenidades
