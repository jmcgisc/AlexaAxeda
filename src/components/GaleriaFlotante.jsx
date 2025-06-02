import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const galleryImages = [
  "/Santorini.webp",
  "/Santorini.webp",
  "/Santorini.webp",
  "/Santorini.webp",
  "/Santorini.webp"
];

const GaleriaFlotante = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-diamonBlack dark:from-black dark:to-gray-900 py-24 px-6 md:px-16 text-black dark:text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
              {/* Galería flotante */}
        <div className="relative w-full flex justify-center gap-6 overflow-x-auto pb-4">
          {galleryImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Santorini ${i + 1}`}
              className="w-52 h-52 object-cover rounded-full shadow-lg cursor-pointer hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setIsOpen(true);
                setPhotoIndex(i);
              }}
            />
          ))}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={galleryImages[photoIndex]}
            nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]}
            prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % galleryImages.length)
            }
          />
        )}
      </div>
    </section>
  );
};

export default GaleriaFlotante;
