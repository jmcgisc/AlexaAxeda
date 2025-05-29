import React from "react";
import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const TraditionSection = () => {
  return (
    <section
      id="tradition"
      className="bg-gradient-to-b from-white to-diamonBlack dark:from-black dark:to-gray-900 text-black dark:text-white py-24 px-6 md:px-16"
    >
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
          <div className="md:w-1/2 text-left">
            <blockquote className="italic text-xl md:text-2xl text-gray-700 dark:text-gray-300 border-l-4 border-diamante pl-4">
              "Las raíces culturales de nuestra tierra dan forma a cada espacio en Isla Diamante. Honramos la historia mientras construimos el porvenir."
            </blockquote>
            <p className="mt-6 text-lg text-gray-200 dark:text-gray-400">
              Cada detalle del desarrollo refleja elementos de la herencia maya y la arquitectura regional, adaptados a un estilo de vida moderno y sostenible.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <Popup
              modal
              trigger={
                <div className="cursor-pointer group">
                  <video
                    src="/video-tradition.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto max-w-lg rounded-xl shadow-2xl transition-transform group-hover:scale-105"
                  />
                  <p className="text-sm text-gray-400 mt-2 group-hover:text-diamante">Haz clic para ver en grande</p>
                </div>
              }
              contentStyle={{
                width: '100%',
                maxWidth: '1000px',
                background: 'transparent',
                border: 'none',
                padding: '0',
              }}
              overlayStyle={{
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(4px)',
              }}
            >
              {(close) => (
                <div className="relative">
                  <button
                    onClick={close}
                    className="absolute top-2 right-2 text-white text-3xl z-10 hover:text-diamante"
                  >
                    &times;
                  </button>
                  <video
                    src="/video-tradition.mp4"
                    autoPlay
                    controls
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
              )}
            </Popup>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TraditionSection;
