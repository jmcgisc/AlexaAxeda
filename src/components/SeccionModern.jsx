import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { MapPin, Wifi, Landmark, PencilRuler, Home, Hammer } from "lucide-react";
         
const features = [
  {
    id: "location",
    title: "Ubicación Estratégica",
    icon: <MapPin className="w-8 h-8 text-diamante" />,
    description: "Conectado con las mejores zonas de Cancún para disfrutar, invertir o vivir."
},
  {
    id: "connectivity",
    title: "Conectividad",
    icon: <Wifi className="w-8 h-8 text-diamante" />,
    description: "Cerca de vías rápidas, servicios, aeropuerto y movilidad 24/7."
  },
  {
    id: "tradition",
    title: "Tradición y Cultura",
    icon: <Landmark className="w-8 h-8 text-diamante" />,
    description: "Inspirado en el legado y riqueza cultural de Yucatán y el Caribe mexicano."
  },
  {
    id: "design",
    title: "Diseño Vanguardista",
    icon: <PencilRuler className="w-8 h-8 text-diamante" />,
    description: "Trazos únicos, espacios modernos y materiales sustentables."
  },
  {
    id: "living",
    title: "Estilo de Vida",
    icon: <Home className="w-8 h-8 text-diamante" />,
    description: "Amenidades para cada etapa de tu vida: relajación, deporte, comunidad."
  },
  {
    id: "engineering",
    title: "Ingeniería Inteligente",
    icon: <Hammer className="w-8 h-8 text-diamante" />,
    description: "Infraestructura preparada para el futuro con tecnología y eficiencia."
  }
];

const SeccionValores = () => {
  return (
    <section className="dark:bg-black dark:text-white py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Descubre el poder de invertir con visión</h2>
        <p className="text-xl dark:text-gray-300 max-w-2xl mx-auto">
          Isla Diamante es más que un desarrollo, es un legado que combina tradición, innovación y calidad de vida.
        </p>
      </div>
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 transform dark:text-gray-400 text-white text-center">
        {features.map((feature, i) => (
          <Link to={feature.id} smooth={true} duration={600} offset={-80}>
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 relative rounded-3xl shadow-2xl hover:shadow-[0_0_10px_2px_#00fff7] transition-all duration-900 cursor-pointer">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description} href={`#${feature.id}`} </p>
            </motion.div>
          </Link>

        ))}
      </div>
    </section>
  );
};

export default SeccionValores;
