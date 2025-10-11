import { motion } from "framer-motion";
import Popup from 'reactjs-popup'; 
import {
  Heart,
  Sun,
  Waves, 
  Trees,
  Home,
  Users,
  Shield,
  TrendingUp,
  MapPin,
  Leaf,
  Eye,
  Sparkles,
  Cloud,
  Mountain,
  WavesIcon
} from "lucide-react";
import FormularioContactoPopup from '../Aux/FormularioContactoPopup'; 
import { Helmet } from "react-helmet-async";
import MetaTags from "../../../src/MetaTags";

const amenityGroups = [
  {
    title: "Bienestar y Relax",
    items: [
      { name: "Espejo de agua contemplativo", icon: Waves },
      { name: "Amplias terrazas de descanso", icon: Sun },
      { name: "Jardines zen y áreas de meditación", icon: Leaf }
    ]
  },
  {
    title: "Espacios Sociales",
    items: [
      { name: "Casa club con diseño orgánico", icon: Home },
      { name: "Salón de usos múltiples", icon: Users },
      { name: "Áreas de convivencia al aire libre", icon: Trees }
    ]
  },
  {
    title: "Naturaleza y Diseño",
    items: [
      { name: "Parque temático inspirado en el mar", icon: WavesIcon },
      { name: "Senderos naturales", icon: Mountain },
      { name: "Arquitectura integrada con el entorno", icon: Eye }
    ]
  }
];

const features = [
  { icon: Home, text: "164 terrenos exclusivos" },
  { icon: Shield, text: "Privacidad y discreción" },
  { icon: TrendingUp, text: "Plusvalía garantizada" },
  { icon: MapPin, text: "Ubicación privilegiada" },
  { icon: Heart, text: "Diseño consciente" }
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
    name: "Madeira",
    description: "Enfocado en deporte y vitalidad, Madeira ofrece canchas, gimnasio y áreas de actividad física para familias activas.",
    image: "/Madeira/Madeira.webp",
    features: ["Enfoque deportivo", "Gimnasio equipado", "Canchas multiusos"],
    color: "from-emerald-500 to-emerald-700",
    icon: TrendingUp
  },
  {
    name: "Santorini",
    description: "Inspirado en las islas griegas, Santorini combina elegancia mediterránea con modernidad en un entorno exclusivo y seguro.",
    image: "/Santorini/Santorini_1.webp",
    features: ["Estilo mediterráneo", "Elegancia y modernidad", "Entorno exclusivo"],
    color: "from-blue-500 to-blue-700",
    icon: Home
  }
];

const investmentInfo = [
  {
    title: "Cancún: Refugio de Inversión",
    description: "Cancún ofrece uno de los mercados inmobiliarios más estables de México, con una apreciación constante del 8-12% anual. Destino preferido para inversores que buscan seguridad y crecimiento.",
    icon: Shield,
    stats: "8-12% apreciación anual"
  },
  {
    title: "Exclusividad en Terrenos",
    description: "Palau ofrece solo 164 terrenos, garantizando exclusividad y valor a largo plazo. Menor densidad significa mayor privacidad y plusvalía para cada propiedad.",
    icon: Sparkles,
    stats: "Solo 164 terrenos"
  },
  {
    title: "Diseño Consciente",
    description: "Cada elemento en Palau está pensado para harmonizar con la naturaleza. Arquitectura que respeta el entorno y crea espacios que promueven bienestar y tranquilidad.",
    icon: Leaf,
    stats: "Diseño sustentable"
  },
  {
    title: "Lujo Discreto",
    description: "En Palau, el lujo se expresa en detalles sutiles: materiales naturales, espacios fluidos y una estética que prioriza la calma sobre el exceso.",
    icon: Eye,
    stats: "Elegancia serena"
  }
];

const PalauPage = () => {
  return (
    <>
      <Helmet>
        <title>Palau - Residencial de Lujo Sereno | Isla Diamante</title>
        <meta name="description" content="Descubre Palau: 164 terrenos exclusivos con diseño consciente y amenities de bienestar. Espejos de agua, casa club orgánica y arquitectura integrada con la naturaleza." />
        <meta name="keywords" content="Palau, terrenos Cancún, lujo sereno, plusvalía, espejo de agua, casa club, desarrollo sustentable, Isla Diamante, colección exclusiva" />
        <link rel="canonical" href="https://desarrollosdiamante.com/palau" />
        <meta property="og:title" content="Palau - Lujo Sereno y Diseño Consciente" />
        <meta property="og:description" content="Vive en Palau, la colección que celebra la conexión entre lujo y tranquilidad. Terrenos exclusivos con amenities de bienestar y diseño orgánico." />
        <meta property="og:image" content="https://desarrollosdiamante.com/Palau/Palau.jpg" />
        <meta property="og:url" content="https://desarrollosdiamante.com/palau" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Palau - Colección Residencial de Lujo Sereno | Isla Diamante" />
        <meta name="twitter:description" content="Conoce Palau: terrenos residenciales con diseño consciente y amenities de bienestar. Exclusividad y plusvalía en un entorno de completa tranquilidad." />
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
              className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-400 to-teal-600 rounded-full mb-6"
            >
              <Sparkles className="h-8 w-8 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-800 dark:from-blue-400 dark:to-teal-300">
              Palau
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              El arte de la <span className="font-semibold text-blue-600 dark:text-blue-400">calma y la elegancia serena</span>
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
                    <Icon className="h-5 w-5 text-blue-600" />
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
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-600 rounded-3xl transform -rotate-3 opacity-20"></div>
              <img
                src="/Palau/Palau.jpeg"
                alt="Vista de la Colección Palau con diseño sereno y integración natural"
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">El Arte de la Calma</h2>
              <p className="mb-6 leading-relaxed">
                En el corazón de Isla Diamante, la <strong>Colección Palau</strong> representa la elegancia más serena.
                Inspirada en los paisajes naturales y la atmósfera pura de las islas del Pacífico, Palau celebra 
                la conexión entre el lujo y la tranquilidad.
              </p>
              <p className="leading-relaxed">
                Con un número limitado de terrenos, esta privada invita a quienes valoran la discreción, el confort 
                y la belleza sutil. Su diseño prioriza los espacios abiertos, la armonía con la naturaleza y una 
                arquitectura que respira calma.
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Amenidades de <span className="text-blue-600">Bienestar</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Espacios diseñados para reconectar con lo esencial y encontrar la paz interior
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {amenityGroups.map((group, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-blue-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-blue-200 dark:border-blue-700/30 flex items-center gap-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {group.items[0] && (() => {
                        const Icon = group.items[0].icon;
                        return <Icon className="h-5 w-5 text-blue-600" />;
                      })()}
                    </div>
                    {group.title}
                  </h3>
                  <ul className="space-y-4 text-left">
                    {group.items.map(({ name, icon: Icon }, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-full text-blue-600 mt-1">
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

          {/* Descripción Detallada */}
          <motion.div 
            className="mb-20 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-full mb-6 shadow-lg"
              >
                <Heart className="h-8 w-8 text-blue-600" />
              </motion.div>
              
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Verdadera Exclusividad</h2>
              
              <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6 text-left">
                <p className="leading-relaxed">
                  En su casa club, el tiempo parece detenerse: <strong>amplias terrazas, áreas de descanso, 
                  un espejo de agua que refleja el cielo</strong> y un parque temático inspirado en la vida 
                  junto al mar —un entorno pensado para reconectar con lo esencial.
                </p>
                
                <p className="leading-relaxed">
                  <strong>Palau no busca impresionar con exceso, sino conquistar con equilibrio.</strong> 
                  Es una colección creada para quienes entienden que la verdadera exclusividad está en los detalles, 
                  y que el lujo más grande es vivir en paz.
                </p>
                
                <p className="leading-relaxed font-medium text-blue-700 dark:text-blue-300">
                  Descubre el arte de vivir en calma. Solo 164 terrenos disponibles para almas serenas.
                </p>
              </div>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Experimenta la <span className="text-blue-600">Serenidad</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Conoce los espacios que hacen de Palau un refugio de paz y elegancia
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["/Palau/Palau1.jpeg", "/Palau/Palau2.jpeg", "/Palau/Palau3.jpeg"].map((src, i) => (
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
                    alt={`Vista ${i + 1} de la Colección Palau`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg">Armonía perfecta</h3>
                      <p className="text-sm">Donde el lujo se encuentra con la tranquilidad</p>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Nuestra <span className="text-blue-600">Familia</span> de Desarrollos</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Conoce la colección completa de desarrollos exclusivos de Isla Diamante en Cancún
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
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-600">{dev.name}</h3>
                    <p className="text-gray-600 dark:text-gray-600 mb-4 flex-grow">{dev.description}</p>
                    <ul className="space-y-2 mb-4">
                      {dev.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-sm font-medium text-blue-600">Isla Diamante</span>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Inversión con <span className="text-blue-600">Propósito</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Descubre por qué Palau es más que una inversión, es un estilo de vida
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
                      <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full mr-4">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{info.title}</h3>
                        <p className="text-blue-600 font-medium mt-1">{info.stats}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{info.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Información adicional sobre el concepto Palau */}
            <motion.div 
              className="mt-12 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Palau: Donde el Lujo Encuentra la Calma</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-700 dark:text-blue-400">Filosofía de Diseño</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Arquitectura orgánica y fluida</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Integración total con la naturaleza</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Espacios que promueven bienestar</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Materiales naturales y sustentables</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-700 dark:text-blue-400">Ventajas Exclusivas</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Solo 164 terrenos para máxima exclusividad</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Comunidad de perfiles afines</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Diseño consciente y sustentable</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Plusvalía asegurada por limited edition</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-teal-900 rounded-3xl p-10 text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para encontrar tu paz interior en Palau?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo para conocer los 164 terrenos exclusivos y descubrir por qué Palau es el refugio perfecto para almas serenas
            </p>
            <Popup
              trigger={
                <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors">
                  Solicitar información exclusiva
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
          <div className="flex flex-wrap justify-center gap-6">
            {["/Palau/Palau1.jpeg", "/Palau/Palau2.jpeg", "/Palau/Palau3.jpeg"].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`Vista ${i + 1} de Palau`}
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
        title="Palau - Lujo Sereno en Isla Diamante"
        description="164 terrenos exclusivos con diseño consciente. Espejos de agua, casa club orgánica y arquitectura que integra lujo y tranquilidad en Cancún."
        url="https://desarrollosdiamante.com/palau"
        image="https://desarrollosdiamante.com/Palau/Palau.jpeg"
      />
    </>
  );
};

export default PalauPage;