import { motion } from "framer-motion";
import Popup from 'reactjs-popup'; 
import {
  PartyPopper,
  Sun,
  ShowerHead, 
  WavesLadder,
  Volleyball,
  Trees, 
  Dumbbell,
  Medal,
  Home,
  Users,
  Shield,
  TrendingUp,
  MapPin,
  Building,
  Globe,
  Key,
  HomeIcon
} from "lucide-react";
import FormularioContactoPopup from '../Aux/FormularioContactoPopup'; 
import { Helmet } from "react-helmet-async";
import MetaTags from "../../../src/MetaTags";
import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";

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
      { name: "Canchas de pádel", icon: Medal },
      { name: "Gimnasio equipado", icon: Dumbbell },
      { name: "Canchas multideporte", icon: Volleyball }
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
  { icon: Home, text: "165 terrenos disponibles" },
  { icon: Shield, text: "Seguridad 24/7" },
  { icon: TrendingUp, text: "Alta plusvalía garantizada" },
  { icon: MapPin, text: "Ubicación privilegiada" },
  { icon: Users, text: "Comunidad deportiva" }
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
    icon: Sun
  },
  {
    name: "Palau",
    description: "Una propuesta de naturaleza y aventura con senderos, miradores y vegetación tropical para un estilo de vida activo y relajado.",
    image: "/Palau/Palau.webp",
    features: ["Naturaleza exuberante", "Rutas y aventura", "Ambiente relajado"],
    color: "from-teal-500 to-teal-700",
    icon: WavesLadder
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

const MadeiraPage = () => {
  return (
    <>
      <Helmet>
        <title>Madeira - Privada Residencial Deportiva | Isla Diamante</title>
        <meta name="description" content="Descubre Madeira: 165 terrenos con amenidades deportivas de lujo. Gimnasio, canchas multideporte, albercas y áreas sociales en un entorno seguro y moderno." />
        <meta name="keywords" content="Madeira, terrenos Cancún, privada residencial, plusvalía, albercas, canchas deportivas, gimnasio, desarrollo inmobiliario, Isla Diamante" />
        <link rel="canonical" href="https://desarrollosdiamante.com/madeira" />
        <meta property="og:title" content="Privada Madeira - Desarrollo Residencial Deportivo" />
        <meta property="og:description" content="Vive en Madeira, la privada con enfoque deportivo: gimnasio, canchas multideporte, albercas y seguridad 24/7. Terrenos con alta plusvalía." />
        <meta property="og:image" content="https://desarrollosdiamante.com/Madeira/Madeira.webp" />
        <meta property="og:url" content="https://desarrollosdiamante.com/madeira" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Madeira - Privada Residencial Deportiva | Isla Diamante" />
        <meta name="twitter:description" content="Conoce Madeira: terrenos residenciales con amenidades deportivas de lujo. Plusvalía garantizada y entorno seguro para familias activas." />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 py-20 px-4 md:px-8 text-gray-800 ">
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
              className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mb-6"
            >
              <Medal className="h-8 w-8 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-400 dark:to-emerald-300">
              Madeira
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Un santuario para el <span className="font-semibold text-emerald-600 dark:text-emerald-400">deporte y la vitalidad</span> con todas las comodidades modernas
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
                    <Icon className="h-5 w-5 text-emerald-600" />
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
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-3xl transform -rotate-3 opacity-20"></div>
              <img
                src="/Madeira/Madeira.webp"
                alt="Vista aérea de la privada Madeira con diseño deportivo y áreas verdes"
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Paraíso Deportivo en Cancún</h2>
              <p className="mb-6 leading-relaxed">
                Madeira es un santuario para el deporte y la vitalidad. Con un parque temático de gimnasio y multicanchas, 
                canchas multideporte, gimnasio equipado, albercas, terrazas y salón de usos múltiples.
              </p>
              <p className="leading-relaxed">
                Una comunidad visionaria donde cada día es una experiencia extraordinaria, diseñada para quienes valoran 
                un estilo de vida activo, saludable y en conexión con la naturaleza sin sacrificar comodidad ni seguridad.
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Amenidades <span className="text-emerald-600">Deportivas</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Disfruta de espacios diseñados para el deporte, relajación y convivencia familiar
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {amenityGroups.map((group, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-emerald-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-emerald-200 dark:border-emerald-700/30 flex items-center gap-2">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      {group.items[0] && (() => {
                        const Icon = group.items[0].icon;
                        return <Icon className="h-5 w-5 text-emerald-600" />;
                      })()}
                    </div>
                    {group.title}
                  </h3>
                  <ul className="space-y-4 text-left">
                    {group.items.map(({ name, icon: Icon }, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="bg-emerald-100 dark:bg-emerald-900/20 p-2 rounded-full text-emerald-600 mt-1">
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

          <div className="mt-10">  
            <Link
              to="/privadas/blog"
              className="
                group
                block 
                rounded-3xl 
                border border-gray-200 dark:border-gray-700 
                bg-white/90 dark:bg-gray-800/70 
                backdrop-blur-sm
                p-6 
                text-center 
                shadow-lg hover:shadow-2xl transition-all duration-300 ease-out
                transform hover:-translate-y-1
                hover:border-indigo-200 dark:hover:border-green-800
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                active:scale-95
              "
            >
              <div className="flex items-center justify-center gap-3 text-green-600 dark:text-green-400">
                <Newspaper className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-green-600 dark:from-green-400 dark:to-green-400 bg-clip-text text-transparent">
                  Explora nuestro Blog
                </span>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                Consejos de inversión, plusvalía y análisis de desarrollos en Cancún.
              </p>
              
              {/* Indicador visual adicional */}
              <div className="flex items-center justify-center gap-1 mt-4 text-sm text-gray-400 dark:text-gray-500 group-hover:text-green-500 transition-colors duration-300">
                <span>Descubre más</span> 
              </div>
            </Link>
          </div>

          {/* Galería de imágenes */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 mt-12 text-gray-800 dark:text-white">Vive la Experiencia <span className="text-emerald-600">Madeira</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
              Conoce los espacios que hacen de Madeira el lugar ideal para tu familia activa
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["/Madeira/MadeiraAcceso.png", "/Madeira/MadeiraCancha.webp", "/Madeira/MadeiraCasaClub.webp"].map((src, i) => (
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
                    alt={`Vista ${i + 1} de la privada Madeira`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg">Espacios únicos</h3>
                      <p className="text-sm">Diseñados para tu actividad y comodidad</p>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Nuestros <span className="text-emerald-600">Desarrollos</span></h2>
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
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-green">{dev.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{dev.description}</p>
                    <ul className="space-y-2 mb-4">
                      {dev.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-sm font-medium text-emerald-600">Isla Diamante</span>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Invertir en <span className="text-emerald-600">Cancún</span></h2>
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
                      <div className="bg-emerald-100 dark:bg-emerald-900/20 p-3 rounded-full mr-4">
                        <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{info.title}</h3>
                        <p className="text-emerald-600 font-medium mt-1">{info.stats}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{info.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Información adicional sobre Cancún */}
            <motion.div 
              className="mt-12 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Cancún: El Destino Perfecto para Invertir</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-emerald-700 dark:text-emerald-400">Ventajas de Invertir en Cancún</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Mercado turístico en constante crecimiento</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Infraestructura de clase mundial</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Alta demanda de rentas vacacionales</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Plusvalía superior al promedio nacional</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-emerald-700 dark:text-emerald-400">Por qué Elegir Isla Diamante</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Desarrollos con amenities premium</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Seguridad 24/7 en todas las privadas</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Plusvalía garantizada con escrituración</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Ubicaciones estratégicas en Cancún</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-gradient-to-r from-emerald-600 to-emerald-900 rounded-3xl p-10 text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para vivir en Madeira?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo para agendar una visita y descubrir por qué Madeira es la mejor inversión para tu familia activa
            </p>
            <Popup
              trigger={
                <button className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors">
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
      
        {/* Galería de imágenes circular al final */}
        <div className="mt-20">
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
      </section>

      <MetaTags
        title="Isla Diamante - Invierte con confianza"
        description="Terrenos residenciales en Cancún con plusvalía garantizada."
        url="https://desarrollosdiamante.com/"
        image="https://desarrollosdiamante.com/Alexa_.jpeg"
      />
    </>
  );
};

export default MadeiraPage;