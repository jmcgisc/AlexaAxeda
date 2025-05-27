import React from "react";
import { motion } from "framer-motion";
import { Landmark } from "lucide-react";

const TraditionSection = () => {
  return (
    <section id="tradition" className="bg-gradient-to-b from-white to-diamonBlack dark:from-black dark:to-gray-900 text-black dark:text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8 dark:text-primary_isla"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Donde la tradición inspira el futuro
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2">
            <blockquote className="italic text-xl md:text-2xl text-gray-700 dark:text-gray-300 border-l-4 border-diamante pl-4">
              "Las raíces culturales de nuestra tierra dan forma a cada espacio en Isla Diamante. Honramos la historia mientras construimos el porvenir."
            </blockquote>
            <p className="mt-6 text-lg text-gray-200 dark:text-gray-400">
              Cada detalle del desarrollo refleja elementos de la herencia maya y la arquitectura regional, adaptados a un estilo de vida moderno y sostenible.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center ">
            <Landmark className="w-32 h-32 text-diamante dark:bg-primary_isla" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TraditionSection;
