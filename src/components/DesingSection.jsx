import React from "react";
import { motion } from "framer-motion";
import { PencilRuler } from "lucide-react";

const designItems = [
  {
    title: "Espacios Inteligentes",
    image: "/design-1.webp",
  },
  {
    title: "Arquitectura Sustentable",
    image: "/design-2.webp",
  },
  {
    title: "Diseño Vanguardista",
    image: "/design-3.webp",
  },
];

const DesignSection = () => {
  return (
    <section id="design" className="dark:bg-black text-black dark:text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Diseño que eleva tu estilo de vida
        </motion.h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Cada espacio está pensado para armonizar con el entorno y con tus necesidades.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {designItems.map((item, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-lg group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DesignSection;
