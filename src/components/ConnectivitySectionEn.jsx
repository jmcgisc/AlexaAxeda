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
        titulo: "International Airport",
        imagenes: ["AeropuertoCancun.webp", "AeropuertoCancun.webp"],
        descripcion:
          "Strategically located right next to the new Peripheral Ring and just minutes from the Cancun International Airport — one of Latin America's most important air hubs. Ideal for connecting with global markets and attracting international tourism.",
      },
      {
        icon: <Train className="w-8 h-8 text-diamante" />,
        titulo: "Maya Train",
        imagenes: ["TrenMayaCancun.webp","EstacionTrenMayaCancun.webp"],
        descripcion:
          "Only 10 minutes away from the new Maya Train station, one of the country’s most ambitious railway infrastructures, designed to boost development in southeastern Mexico. Perfect for expanding commercial and tourism reach.",
      },
      {
        icon: <Car className="w-8 h-8 text-diamante" />,
        titulo: "Fast Roads",
        imagenes: ["/vias_rapidas.webp"],
        descripcion:
          "We’re connected to Cancun’s main roadways: just 2.5 km from Av. López Portillo, adjacent to the new Peripheral Ring, and minutes from Av. Huayacán — the epicenter of residential and commercial growth with high added value.",
      },
      {
        icon: <Bus className="w-8 h-8 text-diamante" />,
        titulo: "Urban Transport",
        imagenes: ["AutobusCancun.webp"],
        descripcion:
          "Connectivity to key areas of the city means easy access for residents, visitors, and logistics services. This integration with the urban system enhances the strategic value of the location.",
      },
      ];

    const ConnectivitySectionEn = () => {
      return (
        <section
          id="connectivity"
          className="dark:bg-black text-black dark:text-white py-24 px-6 md:px-16"
        >
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-primary_isla">
              Unmatched Connectivity
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From Isla Diamante, you have immediate access to the main connection points of the Mexican Caribbean.
              <br />
              This project is designed for investors seeking prime location, added value, and exponential growth.
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

export default ConnectivitySectionEn;
