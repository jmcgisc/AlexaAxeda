import { motion } from "framer-motion";
import Popup from 'reactjs-popup'; 
import {
  PartyPopper,
  Sun,
  ShowerHead, 
  WavesLadder,
  LandPlot,
  Trees, 
  Flame,
  Home,
  Users,
  Shield,
  TrendingUp,
  MapPin,
  Building,
  Landmark,
  BarChart3,
  Globe,
  Key,
  HomeIcon,
  Zap
} from "lucide-react";
import FormularioContactoPopup from '../Aux/FormularioContactoPopup'; 
import MetaTags from "../../../src/MetaTags";
import { Helmet } from "react-helmet-async";

const amenityGroups = [
  {
    title: "Social y Recreación",
    items: [
      { name: "Salón de usos múltiples", icon: PartyPopper },
      { name: "Terrazas", icon: Trees }
    ]
  },
  {
    title: "Deportivas",
    items: [
      { name: "Parque Infantil", icon: LandPlot }
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
  { icon: Home, text: "171 terrenos disponibles" },
  { icon: Shield, text: "Privada con seguridad 24/7" },
  { icon: TrendingUp, text: "Alta plusvalía garantizada" },
  { icon: MapPin, text: "Ubicación privilegiada en Cancún" },
  { icon: Users, text: "Comunidad familiar" }
];

const developmentInfo = [
  {
    name: "Azores",
    description: "Inspirado en las islas portuguesas, Azores ofrece un concepto de vida tranquilo y natural con amplias áreas verdes y diseño sustentable.",
    image: "/Azores/Azores.webp",
    features: ["Amplias áreas verdes", "Diseño sustentable", "Comunidad tranquila"],
    color: "from-green-500 to-green-700",
    icon: Trees
  },
  {
    name: "Boracay",
    description: "Con estilo tropical, Boracay evoca paraísos playeros con amenidades acuáticas, palmeras y un ambiente vacacional permanente.",
    image: "/Boracay/Boracay.webp",
    features: ["Estilo tropical", "Amenidades acuáticas", "Ambiente vacacional"],
    color: "from-amber-500 to-amber-700",
    icon: Trees
  },
  {
    name: "Madeira",
    description: "Enfocado en deporte y vitalidad, Madeira ofrece canchas, gimnasio y áreas de actividad física para familias activas.",
    image: "/Madeira/Madeira.webp",
    features: ["Enfoque deportivo", "Gimnasio equipado", "Canchas multiusos"],
    color: "from-emerald-500 to-emerald-700",
    icon: Zap
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

const BoracayPage = () => {
  return (
    <>
      <Helmet>
        <title>Boracay - Privada Residencial con Estilo Tropical | Isla Diamante</title>
        <meta name="description" content="Descubre Boracay: 171 terrenos con amenidades de lujo en Cancún. Albercas, áreas recreativas y plusvalía garantizada en un entorno tropical único." />
        <meta name="keywords" content="Boracay, terrenos Cancún, privada residencial, plusvalía, albercas, parque infantil, desarrollo inmobiliario, Isla Diamante" />
        <link rel="canonical" href="https://desarrollosdiamante.com/boracay" />
        <meta property="og:title" content="Privada Boracay - Desarrollo Residencial con Amenidades de Lujo" />
        <meta property="og:description" content="Vive en Boracay, la privada con estilo tropical, albercas, áreas recreativas y seguridad 24/7. Terrenos con alta plusvalía en Cancún." />
        <meta property="og:image" content="https://desarrollosdiamante.com/Boracay/BoracayAcceso.webp" />
        <meta property="og:url" content="https://desarrollosdiamante.com/boracay" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boracay - Privada Residencial en Cancún | Isla Diamante" />
        <meta name="twitter:description" content="Conoce Boracay: terrenos residenciales con amenidades de lujo y diseño tropical en Cancún. Plusvalía garantizada y entorno seguro para familias." />
      </Helmet>

      <MetaTags
        title="Isla Diamante - Invierte con confianza"
        description="Terrenos residenciales en Cancún con plusvalía garantizada."
        url="https://desarrollosdiamante.com/"
        image="https://desarrollosdiamante.com/Alexa_.jpeg"
      />

      <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-diamonBlack py-20 px-4 md:px-8 text-gray-800 ">
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
              className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6"
            >
              <Trees className="h-8 w-8 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 dark:from-amber-400 dark:to-amber-300">
              Boracay
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Vive la experiencia de un <span className="font-semibold text-amber-600 dark:text-amber-400">paraíso tropical</span> con todas las comodidades modernas
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
                    <Icon className="h-5 w-5 text-amber-600" />
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
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl transform -rotate-3 opacity-20"></div>
              <img
                src="/Boracay/Boracay.webp"
                alt="Vista aérea de la privada Boracay con diseño tropical y áreas verdes"
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Un Oasis Tropical en Cancún</h2>
              <p className="mb-6 leading-relaxed">
                Boracay evoca la calidez del trópico con un toque contemporáneo. Cada espacio ha sido diseñado para quienes valoran la convivencia, la alegría y el descanso en un entorno cuidado y sereno.
              </p>
              <p className="leading-relaxed">
                La privada ofrece una alberca para adultos, una alberca infantil, jacuzzi, y zonas de esparcimiento que invitan a disfrutar con estilo. El salón de usos múltiples y los asoleaderos complementan una vida diaria sin prisa, mientras el parque temático —un Kids Club lleno de encanto— brinda a los más pequeños un mundo de juego seguro, imaginativo y elegante.
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
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">Amenidades de <span className="text-amber-600">Primer Nivel</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Disfruta de espacios diseñados para el entretenimiento, relajación y convivencia familiar
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {amenityGroups.map((group, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-amber-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-amber-200 dark:border-amber-700/30 flex items-center gap-2">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      {group.items[0] && (() => {
                        const Icon = group.items[0].icon;
                        return <Icon className="h-5 w-5 text-amber-600 " />;
                      })()}
                    </div>
                    {group.title}
                  </h3>
                  <ul className="space-y-4 text-left ">
                    {group.items.map(({ name, icon: Icon }, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="bg-amber-100 dark:bg-amber-900/20 p-2 rounded-full text-amber-600 mt-1">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-base text-gray-800 ">{name}</span>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Vive la Experiencia <span className="text-amber-600">Boracay</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Conoce los espacios que hacen de Boracay el lugar ideal para tu familia
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["/Boracay/BoracayAcceso.jpg", "/Boracay/BoracayAmenidades.webp", "/Boracay/BoracayAmenidades_2.webp"].map((src, i) => (
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
                    alt={`Vista ${i + 1} de la privada Boracay`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg">Espacios únicos</h3>
                      <p className="text-sm">Diseñados para tu comodidad</p>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Nuestros <span className="text-amber-600">Desarrollos</span></h2>
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
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-dark">{dev.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{dev.description}</p>
                    <ul className="space-y-2 mb-4">
                      {dev.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-1 h-1 bg-amber-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-sm font-medium text-amber-600">Isla Diamante</span>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Invertir en <span className="text-amber-600">Cancún</span></h2>
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
                      <div className="bg-amber-100 dark:bg-amber-900/20 p-3 rounded-full mr-4">
                        <Icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{info.title}</h3>
                        <p className="text-amber-600 font-medium mt-1">{info.stats}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{info.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Información adicional sobre Cancún */}
            <motion.div 
              className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Cancún: El Destino Perfecto para Invertir</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-amber-700 dark:text-amber-400">Ventajas de Invertir en Cancún</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div> Mercado turístico en constante crecimiento</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div> Infraestructura de clase mundial</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div> Alta demanda de rentas vacacionales</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div> Plusvalía superior al promedio nacional</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-amber-700 dark:text-amber-400">Por qué Elegir Isla Diamante</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div> Desarrollos con amenities premium</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div> Seguridad 24/7 en todas las privadas</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div> Plusvalía garantizada con escrituración</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div> Ubicaciones estratégicas en Cancún</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-gradient-to-r from-amber-600 to-amber-900 rounded-3xl p-10 text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para vivir en Boracay?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo para agendar una visita y descubrir por qué Boracay es la mejor inversión para tu familia
            </p>
            <Popup
              trigger={
                <button className="bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors">
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
      
        {/* Galería de imágenes */}
        <div className="mt-20">
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
      </section>
    </>
  );
};

export default BoracayPage;