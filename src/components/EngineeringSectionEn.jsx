import React from "react";
import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Cpu, Flashlight } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-diamante" />,
    title: "Smart Infrastructure",
    desc: "Underground cabling system and digital energy control."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-diamante" />,
    title: "Total Security",
    desc: "Controlled access, video surveillance, and patrols."
  },
  {
    icon: <Flashlight className="w-8 h-8 text-diamante" />,
    title: "Energy Efficiency",
    desc: "LED lighting and environmentally friendly technology."
  },
  {
    icon: <Wrench className="w-8 h-8 text-diamante" />,
    title: "Construction Quality",
    desc: "Certified materials and world-class standards."
  }
];

const EngineeringSectionEn = () => {
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
          High-Level Engineering
        </motion.h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Every square meter is backed by technology, security, and professional planning.
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

export default EngineeringSectionEn;
