import React, { useRef } from 'react';
import images from '../../exports/imagesSlider';
import '../Aux/Styles/slider.css';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = () => {
  const sliderRef = useRef(null);
  const scrollStep = 450;

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: scrollStep, behavior: 'smooth' });
  };

  return (
    <>
      <div className="px-6 py-12 dark:bg-gray-800 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Echa un vistazo a nuestras{' '}
          <span className="text-diamante">urbanizaciones de lujo</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Todas nuestras construcciones están diseñadas a un alto nivel residencial con accesibles formas de pago.
        </p>
      </div>

      <div className="relative dark:bg-gray-800 px-6">
        {/* Botones arriba a la derecha */} 
        <div className="flex justify-end gap-4 mb-6">
          <button
            onClick={scrollLeft}
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-white/30 p-2 rounded-full shadow-md hover:bg-primary_isla hover:text-primary_isla transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-primary_isla" />
          </button>
          <button
            onClick={scrollRight}
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-white/30 p-2 rounded-full shadow-md hover:bg-primary_isla hover:text-primary_isla transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-primary_isla" />
          </button>
        </div>

        {/* Slider */}
        <motion.div
          ref={sliderRef}
          className="slider flex overflow-x-auto scroll-smooth gap-6 pb-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] max-w-[400px] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <img src={image} alt={`slide-${index}`} className="w-full h-[250px] object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Slider;
