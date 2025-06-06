import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const designItems = [
  {
    title: "Arquitectura Sustentable",
    image: "/ArqSustentable.jpeg",
    description:
      "La zona está integrada en el Plan Municipal de Desarrollo Urbano, lo que garantiza un crecimiento ordenado y sostenible, con infraestructura adecuada para soportar el desarrollo residencial y comercial.",
  },
  {
    title: "Espacios Inteligentes",
    image: "/BeachClub.jpeg",
    description:
      "La inversión en infraestructura, incluyendo pavimentación, alumbrado y servicios públicos, mejora la habitabilidad y atractivo de la zona para futuros desarrollos.",
  },
  {
    title: "Diseño Vanguardista",
    image: "/Santorini.webp",
    description:
      "Cada espacio está diseñado para maximizar la funcionalidad y el confort, utilizando materiales de alta calidad y técnicas de construcción modernas.",
  },
];

const DesignSection = () => {
  return (
    <section
      id="design"
      className="dark:bg-black dark:text-white text-center py-20 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Diseño que eleva tu estilo de vida
        </motion.h2>
        <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Cada espacio está pensado para armonizar con el entorno y con tus necesidades.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {designItems.map((item, i) => (
          <Popup
            key={i}
            modal
            trigger={
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer transition-transform duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
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
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(6px)",
              zIndex: 1000,
            }}
          >
            {(close) => (
              <div className="relative text-center dark:text-white dark:bg-black px-2">
                <button
                  onClick={close}
                  className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
                  aria-label="Cerrar"
                >
                  &times;
                </button>
                <h3 className="text-2xl font-bold mb-4 mt-2">{item.title}</h3>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl mb-4 w-full max-h-[300px] object-cover"
                />
                <p className="text-gray-700 dark:text-gray-300 text-base">
                  {item.description}
                </p>
              </div>
            )}
          </Popup>
        ))}
      </div>
    </section>
  );
};

export default DesignSection;
