import React from "react";
import { motion } from "framer-motion";
import { Train, Bus, Plane, Car } from "lucide-react";
import Popup from "reactjs-popup";
// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Swiper modules
import { Pagination } from 'swiper';
import "reactjs-popup/dist/index.css"; 

const conexiones = [
  {
    icon: <Plane className="w-8 h-8 text-diamante" />,
    titulo: "Aeropuerto Internacional",
    imagenes: ["AeropuertoCancun.webp", "AeropuertoCancun.webp"],
    descripcion:
      "Enclavados en una ubicación estratégica, justo al costado del nuevo Anillo Periférico y a minutos del Aeropuerto Internacional de Cancún, uno de los hubs aéreos más importantes de Latinoamérica. Ideal para conectar con mercados globales y atraer turismo internacional.",
  },
  {
    icon: <Train className="w-8 h-8 text-diamante" />,
    titulo: "Tren Maya",
    imagenes: ["TrenMayaCancun.webp","EstacionTrenMayaCancun.webp"],
    descripcion:
      "A tan solo 10 minutos de la nueva estación del Tren Maya, una de las infraestructuras ferroviarias más ambiciosas del país, diseñada para impulsar el desarrollo del sureste mexicano. Perfecto para ampliar el alcance comercial y turístico del proyecto.",
  },
  {
    icon: <Car className="w-8 h-8 text-diamante" />,
    titulo: "Vías rápidas",
    imagenes: ["/vias_rapidas.webp"],
    descripcion:
      "Estamos conectados con las principales arterias viales de Cancún: a solo 2.5 km de la Av. López Portillo, colindantes con el nuevo Anillo Periférico, y a minutos de la Av. Huayacán, epicentro de crecimiento residencial y comercial con alta plusvalía.",
  },
  {
    icon: <Bus className="w-8 h-8 text-diamante" />,
    titulo: "Transporte urbano",
    imagenes: ["AutobusCancun.webp"],
    descripcion:
      "La conectividad con zonas clave de la ciudad se traduce en facilidad de acceso para residentes, visitantes y servicios logísticos. Esta integración con el sistema urbano eleva el valor estratégico de la ubicación.",
  },
];

const ConnectivitySection = () => {
  return (
    <section
      id="connectivity"
      className="dark:bg-black text-black dark:text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-primary_isla">
          Conectividad Inigualable
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Desde Isla Diamante tienes acceso inmediato a los principales puntos de conexión del Caribe mexicano.
          <br />
          Este es un proyecto pensado para inversionistas que buscan ubicación, plusvalía y crecimiento exponencial.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {conexiones.map((item, i) => (
          <Popup
            key={i}
            modal
            nested
            trigger={
              <motion.div
                className="flex flex-col items-center text-center gap-4 bg-gray-100 dark:bg-gray-800 dark:text-primary_isla p-6 rounded-lg shadow-md hover:shadow-diamante/40 transition cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <h3 className="text-lg font-semibold">{item.titulo}</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {item.descripcion.slice(0, 80)}...
                </p>
              </motion.div>
            }
            contentStyle={{
              width: "90%",
              maxWidth: "500px",
              borderRadius: "1rem",
              padding: "1.5rem",
              background: "#fff",
            }}
            overlayStyle={{
              background: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(4px)",
              zIndex: 1000,
            }}
          >
            {(close) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative text-black dark:text-white"
              >
                <button
                  id="Cerrar"
                  onClick={close}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
                  aria-label="Cerrar"
                >
                  &times;
                </button>

                <div className="text-center mt-6">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.titulo}</h3>

                  <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="w-full h-60 rounded-lg mb-4"
                  >
                    {item.imagenes.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={img}
                          alt={`${item.titulo} ${index}`}
                          className="w-full h-60 object-cover rounded-lg shadow-md"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    {item.descripcion}
                  </p>
                </div>
              </motion.div>
            )}
          </Popup>
        ))}
      </div>
    </section>
  );
};

export default ConnectivitySection;
