import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationSectionEn = () => {
  return (
    <section
      id="location" 
      className="relative w-full min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Mapa interactivo (Google Maps Embed) */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          title="Location Diamond Island Cancun"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.480729639967!2d-86.9645823!3d21.133058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4dd5a198f300a7%3A0xde6b98807cf6095e!2sIsla%20Diamante!5e0!3m2!1ses-419!2smx!4v1685200000000!5m2!1ses-419!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-diamante mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          A location with a vision for the future
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Isla Diamante is located in the new pole of urban growth in Cancun. A strategic area with great connectivity, capital gains and planned development.
        </motion.p>

        <motion.div
          className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl shadow-lg hover:shadow-diamante/50 transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MapPin className="w-6 h-6 text-diamante" />
          <span>Location: Diamante Island Cancun, Q. Roo</span>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSectionEn;