import { motion } from "framer-motion";
import {
  PartyPopper,
  Sun,
  ShowerHead, 
  WavesLadder,
  LandPlot,
  Trees, 
  Flame
} from "lucide-react";

const amenityGroups = [
  {
    title: "Social y Recreación",
    items: [
      { name: "Salón de usos múltiples", icon: PartyPopper },
      { name: "Salón con firepit", icon: Flame },
      { name: "Terrazas", icon: Trees }
    ]
  },
  {
    title: "Deportivas",
    items: [
      { name: "Mini golf ", icon: LandPlot }
    ]
  },
  {
    title: "Familiares y Relax",
    items: [
      { name: "Alberca para adultos", icon: WavesLadder },
      { name: "Chapoteadero", icon: WavesLadder },
      { name: "Asoleaderos", icon: Sun },
      { name: "Baños y regaderas", icon: ShowerHead }
    ]
  }
];

const BoracayPage = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold dark:text-gray-200">Boracay</h1>
          <p className="text-xl text-gray-600 dark:text-gray-200">
            Boracay 171 terrenos 
          </p>
        </motion.div>

        {/* Imagen + Descripción */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          <motion.img
            src="/Boracay/Boracay.webp"
            alt="Boracay desarrollo"
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
              Boracay evoca la calidez del trópico con un toque contemporáneo.
              Cada espacio ha sido diseñado para quienes valoran la convivencia, la alegría y el descanso en un entorno cuidado y sereno.
           </p>
            <p>
              La privada ofrece una alberca para adultos, una alberca infantil, jacuzzi, y zonas de esparcimiento que invitan a disfrutar con estilo.
              El salón de usos múltiples y los asoleaderos complementan una vida diaria sin prisa, mientras el parque temático —un Kids Club lleno de encanto— brinda a los más pequeños un mundo de juego seguro, imaginativo y elegante.
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
          <h3 className="text-2xl font-semibold text-center mb-8 dark:text-white">Vistas del desarrollo</h3>
          <div className="flex flex-wrap justify-between gap-6">
            {["/Boracay/BoracayAcceso.jpg", "/Boracay/BoracayAmenidades.webp", "/Boracay/BoracayAmenidades_2.webp"].map((src, i) => (
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

    </section>
  );
};

export default BoracayPage;
