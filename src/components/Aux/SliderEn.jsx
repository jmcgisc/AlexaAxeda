import React, { useRef, useState } from 'react';
import images from '../../exports/imagesSlider';
import '../Aux/Styles/slider.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Slider = () => {
  const sliderRef = useRef(null);
  const scrollStep = 450;
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -scrollStep, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: scrollStep, behavior: 'smooth' });
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="px-6 py-12 dark:bg-gray-800 text-center">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
         Take a look at our{' '}
          <span className="text-diamante">luxury developments</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
         All our buildings are designed to a high residential level with accessible payment methods.
        </p>
      </div>

      <div className="relative dark:bg-gray-800 px-6">
        {/* Botones arriba a la derecha */}
        <div className="flex justify-end gap-4 mb-6">
          <button
            id="click left"
            onClick={scrollLeft}
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-white/30 p-2 rounded-full shadow-md hover:bg-primary_isla hover:text-primary_isla transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-primary_isla" />
          </button>
          <button
            id="click right"
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
              className="min-w-[280px] max-w-[400px] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleImageClick(image)}
            >
              <img src={image} alt={`slide-${index}`} className="w-full h-[250px] object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal de imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                id="CLose Modal"
                onClick={closeModal}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
              >
                <X className="w-6 h-6 text-black" />
              </button>
              <img
                src={selectedImage}
                alt="Ampliada"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Slider;
