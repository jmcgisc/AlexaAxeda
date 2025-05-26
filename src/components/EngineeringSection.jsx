import React from "react";
import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Cpu, Flashlight } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-diamante" />,
    title: "Infraestructura Inteligente",
    desc: "Sistema de cableado subterráneo y control digital de energía."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-diamante" />,
    title: "Seguridad Total",
    desc: "Accesos controlados, videovigilancia y rondines."
  },
  {
    icon: <Flashlight className="w-8 h-8 text-diamante" />,
    title: "Eficiencia Energética",
    desc: "Iluminación LED y tecnología amigable con el medio ambiente."
  },
  {
    icon: <Wrench className="w-8 h-8 text-diamante" />,
    title: "Calidad Constructiva",
    desc: "Materiales certificados y estándares de clase mundial."
  }
];

const EngineeringSection = () => {
  return (
    <section id="engineering" className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Ingeniería de alto nivel
        </motion.h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Cada metro cuadrado está respaldado por tecnología, seguridad y planeación profesional.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-xl p-6 text-center shadow-md hover:shadow-diamante/40"
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

export default EngineeringSection;
