import React from "react";
import { motion } from "framer-motion";
import { Train, Bus, Plane, Car } from "lucide-react";

const conexiones = [
  {
    icon: <Plane className="w-8 h-8 text-diamante" />, 
    titulo: "Aeropuerto Internacional",
    descripcion: "Ubicados en una súper zona estratégica, a un costado del nuevo Anillo Periférico,y del Aeropuerto Internacional de Cancún."
  },
  {
    icon: <Train className="w-8 h-8 text-diamante" />,
    titulo: "Tren Maya",
    descripcion: "Conectado a la nueva estación para explorar el sureste, a solo 10 minutos del Tren Maya ."
  },
  {
    icon: <Car className="w-8 h-8 text-diamante" />,
    titulo: "Vías rápidas",
    descripcion: "A tan solo 2.5 km de la Av. López Portillo y colindando con el nuevo Anillo Periférico, también estamos a minutos de la Av. Guayacán, una de las zonas con mayor plusvalía y crecimiento de Cancún."
  },
  {
    icon: <Bus className="w-8 h-8 text-diamante" />,
    titulo: "Transporte urbano",
    descripcion: "A tan solo 2.5 km de la Av. López Portillo y colindando con el nuevo Anillo Periférico, también estamos a minutos de la Av. Guayacán, una de las zonas con mayor plusvalía y crecimiento de Cancún."
  }
];

const ConnectivitySection = () => {
  return (
    <section id="connectivity" className="dark:bg-black text-black dark:text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-primary_isla"> Conectividad Inigualable</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Desde Isla Diamante tienes acceso inmediato a los principales puntos de conexión del Caribe mexicano.
          <p> 
            <><br/></>
            Este es un proyecto pensado para inversionistas que buscan ubicación, plusvalía y crecimiento exponencial
          </p>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
        {conexiones.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 bg-gray-100 dark:bg-gray-800 dark:text-primary_isla p-6 rounded-lg shadow-md hover:shadow-diamante/40 transition"
          >
            {item.icon}
            <h3 className="text-lg font-semibold">{item.titulo}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ConnectivitySection;
