import React from "react";
import { motion } from "framer-motion";
import { Trees, Dumbbell, Coffee, Users } from "lucide-react";

const amenities = [
  {
    title: "Áreas Verdes",
    icon: <Trees className="w-8 h-8 text-diamante" />, 
    desc: "Zonas naturales para respirar y reconectar."
  },
  {
    title: "Gimnasio y Wellness",
    icon: <Dumbbell className="w-8 h-8 text-diamante" />,
    desc: "Espacios para ejercitarte o relajarte."
  },
  {
    title: "Zona Social",
    icon: <Coffee className="w-8 h-8 text-diamante" />,
    desc: "Cafés, coworkings y lugares para compartir."
  },
  {
    title: "Comunidad",
    icon: <Users className="w-8 h-8 text-diamante" />,
    desc: "Vecinos, eventos y estilo de vida colaborativo."
  }
];

const LivingSection = () => {
  return (
    <section id="living" className="py-24 px-6 md:px-16 dark:bg-diamonBlack text-white">
      <div className="max-w-6xl mx-auto text-center mb-16 ">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
        <div className="py-24 px-6 md:px-16 text-gray-500">
          Estilo de vida que transforma
        </div>
          
        </motion.h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Vive cada día con libertad, bienestar y comunidad en Isla Diamante.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {amenities.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-diamante/50 text-center"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LivingSection;
