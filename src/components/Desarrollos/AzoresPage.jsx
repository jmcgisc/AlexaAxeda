import { motion } from "framer-motion";
import {
  PartyPopper,
  Sun,
  ShowerHead, 
  WavesLadder,
  Volleyball,
  Trees, 
  Dumbbell,
  Medal,
  Flame,
  LandPlot,
  Home,
  Shield,
  TrendingUp,
  MapPin,
  Eye,
  Calendar,
  Leaf,
  Building,
  Landmark,
  BarChart3,
  Globe,
  Key,
  HomeIcon,
  Zap
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import MetaTags from "../../../src/MetaTags";
import FormularioContactoPopup from '../Aux/FormularioContactoPopup'; 
import Popup from 'reactjs-popup'; 

const amenityGroups = [
  {
    title: "Social y Recreación",
    items: [
      { name: "Salón de usos múltiples", icon: PartyPopper },
      { name: "Terrazas", icon: Trees },
      { name: "Fire Pit", icon: Flame }
    ]
  },
  {
    title: "Deportivas",
    items: [
      { name: "Canchas de pádel", icon: Medal },
      { name: "Gimnasio equipado", icon: Dumbbell },
      { name: "Canchas multideporte", icon: Volleyball },
      { name: "Mini golf", icon: LandPlot }
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

const features = [
  { icon: Home, text: "174 terrenos disponibles" },
  { icon: Shield, text: "Seguridad 24/7" },
  { icon: TrendingUp, text: "Alta plusvalía garantizada" },
  { icon: MapPin, text: "Ubicación privilegiada en Cancún" },
  { icon: Leaf, text: "Diseño minimalista y natural" }
];

const developmentInfo = [
  {
    name: "Azores",
    description: "Inspirado en las islas portuguesas, Azores ofrece un concepto de vida tranquilo y natural con amplias áreas verdes y diseño sustentable.",
    image: "/Azores/Azores.webp",
    features: ["Amplias áreas verdes", "Diseño sustentable", "Comunidad tranquila"],
    color: "from-rose-500 to-rose-700",
    icon: Leaf
  },
  {
    name: "Boracay",
    description: "Con estilo tropical, Boracay evoca paraísos playeros con amenidades acuáticas, palmeras y un ambiente vacacional permanente.",
    image: "/Boracay/Boracay.webp",
    features: ["Estilo tropical", "Amenidades acuáticas", "Ambiente vacacional"],
    color: "from-amber-500 to-amber-700",
    icon: Sun
  },
  {
    name: "Madeira",
    description: "Enfocado en deporte y vitalidad, Madeira ofrece canchas, gimnasio y áreas de actividad física para familias activas.",
    image: "/Madeira/Madeira.webp",
    features: ["Enfoque deportivo", "Gimnasio equipado", "Canchas multiusos"],
    color: "from-emerald-500 to-emerald-700",
    icon: Dumbbell
  },
  {
    name: "Santorini",
    description: "Inspirado en las islas griegas, Santorini combina elegancia mediterránea con modernidad en un entorno exclusivo y seguro.",
    image: "/Santorini/Santorini_1.webp",
    features: ["Estilo mediterráneo", "Elegancia y modernidad", "Entorno exclusivo"],
    color: "from-blue-500 to-blue-700",
    icon: HomeIcon
  }
];

const investmentInfo = [
  {
    title: "Cancún: Paraíso de Inversión",
    description: "Cancún lidera el crecimiento inmobiliario en México con una apreciación anual del 8-12%. Destino turístico mundial con más de 10 millones de visitantes anuales que impulsan la demanda de vivienda y rental.",
    icon: Globe,
    stats: "8-12% apreciación anual"
  },
  {
    title: "Ventajas de los Terrenos",
    description: "Invertir en terrenos ofrece mayor plusvalía que propiedades construidas, flexibilidad para diseñar tu espacio ideal y menor mantenimiento durante el desarrollo. Ideal para planificar a largo plazo.",
    icon: Key,
    stats: "20-30% más plusvalía"
  },
  {
    title: "Plusvalía Garantizada",
    description: "Nuestros desarrollos ofrecen un promedio de 15-20% de apreciación anual gracias a ubicaciones estratégicas, planificación cuidadosa y amenities exclusivas que aumentan el valor con el tiempo.",
    icon: TrendingUp,
    stats: "15-20% apreciación anual"
  },
  {
    title: "Desarrollos con Visión",
    description: "Isla Diamante crea comunidades planificadas con amenities de lujo, seguridad 24/7 y diseños modernos que responden a las necesidades de las familias contemporáneas y maximizan la inversión.",
    icon: Building,
    stats: "Comunidades planificadas"
  }
];

const AzoresPage = () => {
  return (
    <>          
      <Helmet>
        <title>Azores - Privada Residencial con Diseño Minimalista y Natural | Isla Diamante</title>
        <meta name="description" content="Descubre Azores: 174 terrenos con amenidades premium in Cancún. Combina naturaleza y arquitectura minimalista en un entorno tranquilo y seguro con alta plusvalía." />
        <meta name="keywords" content="Azores, terrenos Cancún, privada residencial, plusvalía, albercas, mini golf, canchas pádel, desarrollo inmobiliario, Isla Diamante, diseño minimalista" />
        <link rel="canonical" href="https://desarrollosdiamante.com/azores" />
        <meta property="og:title" content="Privada Azores - Desarrollo Residencial con Estilo Minimalista" />
        <meta property="og:description" content="Vive en Azores, la privada que combina naturaleza y arquitectura minimalista. Albercas, mini golf, áreas deportivas y seguridad 24/7 en Cancún." />
        <meta property="og:image" content="https://desarrollosdiamante.com/Azores/AzoresAcceso.webp" />
        <meta property="og:url" content="https://desarrollosdiamante.com/azores" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Azores - Privada Residencial en Cancún | Isla Diamante" />
        <meta name="twitter:description" content="Conoce Azores: terrenos residenciales con diseño minimalista, amenidades premium y conexión con la naturaleza en Cancún." />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-white to-rose-50 dark:from-gray-900 dark:to-rose-950 py-20 px-4 md:px-8 text-gray-800 ">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16 pt-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full mb-6"
            >
              <Leaf className="h-8 w-8 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-800 dark:from-rose-400 dark:to-rose-300">
              Azores
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Donde el <span className="font-semibold text-rose-600 dark:text-rose-400">minimalismo se encuentra con la naturaleza</span> en un entorno de tranquilidad y elegancia
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md"
                  >
                    <Icon className="h-5 w-5 text-rose-600" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Imagen + Descripción */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-rose-600 rounded-3xl transform -rotate-3 opacity-20"></div>
              <img
                src="/Azores/Azores.webp"
                alt="Vista de la privada Azores con diseño minimalista y áreas verdes"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl relative z-10"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Minimalismo Natural en Cancún</h2>
              <p className="mb-6 leading-relaxed">
                Azores representa la sofisticación del minimalismo: espacios de líneas limpias, atmósferas tranquilas y una estética que abraza lo esencial. 
                Con alberca para adultos, chapoteadero, y terrazas diseñadas para la contemplación, esta privada ofrece un refugio con carácter.
              </p>
              <p className="leading-relaxed">
                La casa club incorpora un salón de usos múltiples, pergolado con barra grill, y una refinada sala con firepit para veladas íntimas al aire libre.
                El parque temático, con su distintivo campo de mini golf, brinda una experiencia lúdica elevada, ideal para quienes encuentran el placer en los detalles bien ejecutados.
              </p>
            </motion.div>
          </div>

          {/* Amenidades */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Amenidades de <span className="text-rose-600">Estilo Minimalista</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Disfruta de espacios diseñados para la armonía, el deporte y la convivencia en un entorno natural
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {amenityGroups.map((group, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-rose-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-rose-200 dark:border-rose-700/30 flex items-center gap-2">
                    <div className="p-2 bg-rose-100 rounded-lg">
                      {group.items[0] && (() => {
                        const Icon = group.items[0].icon;
                        return <Icon className="h-5 w-5 text-rose-600" />;
                      })()}
                    </div>
                    {group.title}
                  </h3>
                  <ul className="space-y-4 text-left">
                    {group.items.map(({ name, icon: Icon }, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="bg-rose-100 dark:bg-rose-900/20 p-2 rounded-full text-rose-600 dark:text-rose-400 mt-1">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-base text-gray-800">{name}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Galería de imágenes */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Descubre el <span className="text-rose-600">Estilo Azores</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Conoce los espacios que hacen de Azores el refugio ideal para quienes valoran el diseño y la tranquilidad
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["/Azores/AzoresAcceso.webp", "/Azores/AzoresTerraza.webp", "/Azores/AlbercaAzores.webp"].map((src, i) => (
                <motion.div
                  key={i}
                  className="relative overflow-hidden rounded-2xl group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={src}
                    alt={`Vista ${i + 1} de la privada Azores`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg">Armonía y diseño</h3>
                      <p className="text-sm">Espacios minimalistas en la naturaleza</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sección de Desarrollos Diamante */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Nuestros <span className="text-rose-600">Desarrollos</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Conoce la familia de desarrollos exclusivos de Isla Diamante en Cancún
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentInfo.map((dev, i) => {
                const Icon = dev.icon;
                return (
                  <motion.div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${dev.color} rounded-full mb-4 self-start`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-black">{dev.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{dev.description}</p>
                    <ul className="space-y-2 mb-4">
                      {dev.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-1 h-1 bg-rose-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-sm font-medium text-rose-600">Isla Diamante</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Sección de Información de Inversión */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Invertir en <span className="text-rose-600">Cancún</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Descubre por qué Cancún es el destino ideal para tu inversión inmobiliaria
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {investmentInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start mb-4">
                      <div className="bg-rose-100 dark:bg-rose-900/20 p-3 rounded-full mr-4">
                        <Icon className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{info.title}</h3>
                        <p className="text-rose-600 font-medium mt-1">{info.stats}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{info.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Información adicional sobre Cancún */}
            <motion.div 
              className="mt-12 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Cancún: El Destino Perfecto para Invertir</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-rose-700 dark:text-rose-400">Ventajas de Invertir en Cancún</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div> Mercado turístico en constante crecimiento</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div> Infraestructura de clase mundial</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div> Alta demanda de rentas vacacionales</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div> Plusvalía superior al promedio nacional</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-rose-700 dark:text-rose-400">Por qué Elegir Isla Diamante</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div> Desarrollos con amenities premium</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div> Seguridad 24/7 en todas las privadas</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div> Plusvalía garantizada con escrituración</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div> Ubicaciones estratégicas en Cancún</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-gradient-to-r from-rose-500 to-rose-700 rounded-3xl p-10 text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para vivir en Azores?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo para agendar una visita y descubrir por qué Azores es el nuevo paraíso en Cancún
            </p>
           
            <Popup
              trigger={
                <button className="bg-white text-rose-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors">
                  Solicitar información
                </button>
              }
              modal
              nested
              contentStyle={{ width: 400 }}
              position="center center"
            >
              {(close) => <FormularioContactoPopup onClose={close} />}
            </Popup>
          </motion.div>
        </div>
      </section>

      {/* Galería de imágenes circular al final */}
      <div className="mt-20">
        <div className="flex flex-wrap justify-between gap-6">
          {["/Azores/AzoresAcceso.webp", "/Azores/AzoresTerraza.webp", "/Azores/AlbercaAzores.webp"].map((src, i) => (
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

      <MetaTags
        title="Isla Diamante - Invierte con confianza"
        description="Terrenos residenciales en Cancún con plusvalía garantizada."
        url="https://desarrollosdiamante.com/"
        image="https://desarrollosdiamante.com/Alexa_.jpeg"
      />
    </>
  );
};

export default AzoresPage;