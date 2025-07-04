import { motion } from "framer-motion";
import {
  PartyPopper,
  Sun,
  ShowerHead, 
  WavesLadder,
  Volleyball,
  Trees, 
  Dumbbell,
  Medal
} from "lucide-react";
import MetaTags from "../../../src/MetaTags";
import SEO from "../SEO"; 

const amenityGroups = [{
    title: "Social and Recreation",
    items: [
      { name: "Multipurpose Room", icon: PartyPopper },
      { name: "Terraces", icon: Trees }
    ]
  },
  {
    title: "Sports",
    items: [
      { name: "Paddle courts", icon: Medal },
      { name: "Equipped gym", icon: Dumbbell },
      { name: "Multi-sport courts", icon: Volleyball }
    ]
  },
  {
    title: "Family and Relax",
    items: [
      { name: "Adult pool", icon: WavesLadder },
      { name: "Splash Pool", icon: WavesLadder },
      { name: "Asoleras", icon: Sun },
      { name: "Bathrooms and showers", icon: ShowerHead }
    ]
  }
];

const MadeiraPageEn = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-diamonBlack dark:from-black dark:to-gray-900 py-36 px-6 md:px-16 text-black dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold dark:text-gray-200">Madeira</h1>
          <p className="text-xl text-gray-600 dark:text-gray-200">
            165 lots - (from $480,000).
          </p>
        </motion.div>

        {/* Imagen + Descripción */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          <motion.img
            src="/Madeira/Madeira.webp"
            alt="Madeira desarrollo"
            className="w-full h-[400px] object-cover rounded-full border-[8px] border-diamante shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            <p className="mb-6">
              A sanctuary for sport and vitality. Gym and multi-court theme park. Multisport court, equipped gym. Pools, terraces and multipurpose room.
            </p>
            <p>
              A visionary community where every day is an extraordinary experience.
            </p>
          </motion.div>
        </div>

        {/* Amenidades */}
       {/* Grid de amenidades por categoría */}
        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {amenityGroups.map((group, i) => (
            <motion.div
              key={i}
              className="bg-white/80 dark:bg-gray-800 border border-diamante/20 rounded-2xl p-6 shadow-lg backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold dark:text-white mb-4 border-b border-diamante/30 pb-2">{group.title}</h3>
              <ul className="space-y-4 text-left dark:text-white">
                {group.items.map(({ name, icon: Icon }, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="bg-diamante/10 p-2 rounded-full text-diamante">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-base text-gray-800 dark:text-gray-200">{name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Galería de imágenes */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-8 dark:text-white">Master plan full views</h3>
          <div className="flex flex-wrap justify-between gap-6">
            {["/Madeira/MadeiraAcceso.png", "/Madeira/MadeiraCancha.webp", "/Madeira/MadeiraCasaClub.webp"].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Vista ${i + 1}`}
                className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
              />
            ))}
          </div>
        </div>
      </div>

        <div className="mt-20">
          {/* Galería flotante */}
          {/* <GaleriaFlotante />  */}
        </div>


        <MetaTags
          title="Isla Diamante - Invierte con confianza"
          description="Residential land in Cancún with guaranteed capital gains."
          url="https://desarrollosdiamante.com/"
          image="https://desarrollosdiamante.com/Alexa_.jpeg"
        />

        <SEO
          title="Santorini - Isla Diamante"
          description="Get to know Santorini: exclusive residential land in Cancun, connected with nature and modernity."
          image="https://desarrollosdiamante.com/santorini.jpg"
          url="https://desarrollosdiamante.com/santorini"
        />


    </section>
  );
};

export default MadeiraPageEn;
