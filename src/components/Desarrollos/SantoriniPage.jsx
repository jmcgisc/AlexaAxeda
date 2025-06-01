import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const amenities = [
  "Parque temático con canchas de pádel",
  "Alberca para adultos",
  "Alberca para niños",
  "Baños y regaderas",
  "Asoleaderos",
  "Terrazas",
  "Pergolado con barra grill",
  "Salón de usos múltiples",
  "Canchas de pádel"
];

const SantoriniPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-diamonBlack dark:from-black dark:to-gray-900 py-24 px-6 md:px-16 text-black dark:text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Santorini
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          149 terrenos - Un entorno inspirado en el mar Egeo con amenidades que mezclan elegancia y bienestar familiar.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          viewport={{ once: true }}
        >
          {amenities.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-diamante/30 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle className="text-diamante w-6 h-6 flex-shrink-0 mt-1" />
              <span className="text-lg text-gray-700 dark:text-gray-200">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SantoriniPage;
