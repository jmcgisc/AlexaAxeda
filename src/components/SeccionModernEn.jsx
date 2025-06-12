import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { MapPin, Wifi, Landmark, PencilRuler, Home, Hammer } from "lucide-react";
         
const features = [
  {
    id: "location",
    title:  "Strategic Location",
    icon: <MapPin className="w-8 h-8 text-diamante" />,
    description: "Connected to the best areas of Cancún to enjoy, invest, or live."
},
   {
    id: "connectivity",
    title: "Connectivity",
    icon: <Wifi className="w-8 h-8 text-diamante" />,
    description: "Close to main roads, services, the airport, and 24/7 mobility."
  },
  {
    id: "tradition",
    title: "Tradition & Culture",
    icon: <Landmark className="w-8 h-8 text-diamante" />,
    description: "Inspired by the heritage and cultural richness of Yucatán and the Mexican Caribbean."
  },
  {
    id: "design",
    title: "Avant-garde Design",
    icon: <PencilRuler className="w-8 h-8 text-diamante" />,
    description: "Unique layouts, modern spaces, and sustainable materials."
  },
  {
    id: "living",
    title: "Lifestyle",
    icon: <Home className="w-8 h-8 text-diamante" />,
    description: "Amenities for every stage of life: relaxation, sports, and community."
  },
  {
    id: "engineering",
    title: "Smart Engineering",
    icon: <Hammer className="w-8 h-8 text-diamante" />,
    description: "Future-ready infrastructure with technology and efficiency."
  }
];

const SeccionValoresEn = () => {
  return (
    <section className="dark:bg-black dark:text-white py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Discover the power of investing with vision</h2>
        <p className="text-xl dark:text-gray-300 max-w-2xl mx-auto">
          Isla Diamante is more than a development, it is a legacy that combines tradition, innovation and quality of life.
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
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          </Link>

        ))}
      </div>
    </section>
  );
};

export default SeccionValoresEn;
