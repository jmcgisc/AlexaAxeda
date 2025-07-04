import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const designItems = [
  {
    title: "Sustainable Architecture",
    image: "/ArqSustentable.webp",
    description:
      "The area is integrated into the Municipal Urban Development Plan, ensuring orderly and sustainable growth, with adequate infrastructure to support residential and commercial development.",
  },
  {
    title: "Smart Spaces",
    image: "/BeachClub.webp",
    description:
      "Investment in infrastructure — including paving, lighting, and public services — enhances the livability and appeal of the area for future developments.",
  },
  {
    title: "Avant-Garde Design",
    image: "/Santorini.webp",
    description:
      "Every space is designed to maximize functionality and comfort, using high-quality materials and modern construction techniques.",
  },
];

const DesignSectionEn = () => {
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
          Design that Elevates Your Lifestyle
        </motion.h2>
        <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Every space is designed to harmonize with the environment and your needs.
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
                  id="CLose"
                  onClick={close}
                  className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
                  aria-label="Close"
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

export default DesignSectionEn;
