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
  Landmark,
  BarChart3,
  Heart,
  Globe,
  Key,
  HomeIcon,
  Zap
} from "lucide-react";
import FormularioContactoPopup from '../Aux/FormularioContactoPopup'; 
import { Helmet } from "react-helmet-async";
import MetaTags from "../../../src/MetaTags";

const amenityGroups = [
  {
    title: "Social & Recreation",
    items: [
      { name: "Multi-purpose hall", icon: PartyPopper },
      { name: "Terraces", icon: Trees }
    ]
  },
  {
    title: "Sports",
    items: [
      { name: "Padel courts", icon: Medal },
      { name: "Equipped gym", icon: Dumbbell },
      { name: "Multi-sport courts", icon: Volleyball }
    ]
  },
  {
    title: "Family & Relaxation",
    items: [
      { name: "Adult swimming pool", icon: WavesLadder },
      { name: "Children's pool", icon: WavesLadder },
      { name: "Sunbathing areas", icon: Sun },
      { name: "Bathrooms and showers", icon: ShowerHead }
    ]
  }
];

const features = [
  { icon: Home, text: "165 available lots" },
  { icon: Shield, text: "24/7 security" },
  { icon: TrendingUp, text: "High guaranteed appreciation" },
  { icon: MapPin, text: "Privileged location" },
  { icon: Users, text: "Sports community" }
];

const developmentInfo = [
  {
    name: "Azores",
    description: "Inspired by the Portuguese islands, Azores offers a tranquil and natural living concept with extensive green areas and sustainable design.",
    image: "/Azores/Azores.webp",
    features: ["Extensive green areas", "Sustainable design", "Tranquil community"],
    color: "from-green-500 to-green-700",
    icon: Trees
  },
  {
    name: "Boracay",
    description: "With tropical style, Boracay evokes beach paradises with aquatic amenities, palm trees and a permanent vacation atmosphere.",
    image: "/Boracay/Boracay.webp",
    features: ["Tropical style", "Aquatic amenities", "Vacation atmosphere"],
    color: "from-amber-500 to-amber-700",
    icon: Sun
  },
  {
    name: "Madeira",
    description: "Focused on sports and vitality, Madeira offers courts, gym and physical activity areas for active families.",
    image: "/Madeira/Madeira.webp",
    features: ["Sports focus", "Equipped gym", "Multi-purpose courts"],
    color: "from-emerald-500 to-emerald-700",
    icon: Dumbbell
  },
  {
    name: "Santorini",
    description: "Inspired by the Greek islands, Santorini combines Mediterranean elegance with modernity in an exclusive and secure environment.",
    image: "/Santorini/Santorini_1.webp",
    features: ["Mediterranean style", "Elegance and modernity", "Exclusive environment"],
    color: "from-blue-500 to-blue-700",
    icon: HomeIcon
  }
];

const investmentInfo = [
  {
    title: "Cancún: Investment Paradise",
    description: "Cancún leads real estate growth in Mexico with 8-12% annual appreciation. World tourist destination with over 10 million annual visitors driving housing and rental demand.",
    icon: Globe,
    stats: "8-12% annual appreciation"
  },
  {
    title: "Land Investment Advantages",
    description: "Investing in land offers higher appreciation than built properties, flexibility to design your ideal space and lower maintenance during development. Ideal for long-term planning.",
    icon: Key,
    stats: "20-30% more appreciation"
  },
  {
    title: "Guaranteed Appreciation",
    description: "Our developments offer an average of 15-20% annual appreciation thanks to strategic locations, careful planning and exclusive amenities that increase value over time.",
    icon: TrendingUp,
    stats: "15-20% annual appreciation"
  },
  {
    title: "Visionary Developments",
    description: "Isla Diamante creates planned communities with luxury amenities, 24/7 security and modern designs that meet contemporary family needs and maximize investment.",
    icon: Building,
    stats: "Planned communities"
  }
];

const MadeiraPageEn = () => {
  return (
    <>
      <Helmet>
        <title>Madeira - Sports Residential Community | Isla Diamante</title>
        <meta name="description" content="Discover Madeira: 165 lots with luxury sports amenities. Gym, multi-sport courts, swimming pools and social areas in a safe and modern environment." />
        <meta name="keywords" content="Isla Diamante Cancún, Terrenos en Cancún, Inversiones" />
        <link rel="canonical" href="https://desarrollosdiamante.com/en-madeira" />
        <meta property="og:title" content="Madeira Community - Sports Residential Development" />
        <meta property="og:description" content="Live in Madeira, the community with sports focus: gym, multi-sport courts, swimming pools and 24/7 security. Lots with high appreciation." />
        <meta property="og:image" content="https://desarrollosdiamante.com/Madeira/Madeira.webp" />
        <meta property="og:url" content="https://desarrollosdiamante.com/en-madeira" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Madeira - Sports Residential Community | Isla Diamante" />
        <meta name="twitter:description" content="Discover Madeira: residential lots with luxury sports amenities. Guaranteed appreciation and safe environment for active families." />
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
              A sanctuary for <span className="font-semibold text-emerald-600 dark:text-emerald-400">sports and vitality</span> with all modern comforts
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

          {/* Image + Description */}
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
                alt="Aerial view of Madeira community with sports design and green areas"
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Sports Paradise in Cancún</h2>
              <p className="mb-6 leading-relaxed">
                Madeira is a sanctuary for sports and vitality. With a thematic gym and multi-court park, 
                multi-sport courts, equipped gym, swimming pools, terraces and multi-purpose hall.
              </p>
              <p className="leading-relaxed">
                A visionary community where every day is an extraordinary experience, designed for those who value 
                an active, healthy lifestyle connected with nature without sacrificing comfort or security.
              </p>
            </motion.div>
          </div>

          {/* Amenities */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Sports <span className="text-emerald-600">Amenities</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Enjoy spaces designed for sports, relaxation and family gatherings
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

          {/* Image Gallery */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Experience <span className="text-emerald-600">Madeira</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover the spaces that make Madeira the ideal place for your active family
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
                    alt={`View ${i + 1} of Madeira community`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg">Unique spaces</h3>
                      <p className="text-sm">Designed for your activity and comfort</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Isla Diamante Developments Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Our <span className="text-emerald-600">Developments</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover the family of exclusive developments by Isla Diamante in Cancún
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
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{dev.description}</p>
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

          {/* Investment Information Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Invest in <span className="text-emerald-600">Cancún</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover why Cancún is the ideal destination for your real estate investment
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

            {/* Additional information about Cancún */}
            <motion.div 
              className="mt-12 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Cancún: The Perfect Destination to Invest</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-emerald-700 dark:text-emerald-400">Advantages of Investing in Cancún</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Constantly growing tourist market</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> World-class infrastructure</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> High demand for vacation rentals</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Appreciation above national average</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-emerald-700 dark:text-emerald-400">Why Choose Isla Diamante</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Developments with premium amenities</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> 24/7 security in all communities</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Guaranteed appreciation with titling</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div> Strategic locations in Cancún</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to live in Madeira?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a visit and discover why Madeira is the best investment for your active family
            </p>
            <Popup
              trigger={
                <button className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors">
                  Request information
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
      
        {/* Circular image gallery at the end */}
        <div className="mt-20">
          <div className="flex flex-wrap justify-between gap-6">
            {["/Madeira/MadeiraAcceso.png", "/Madeira/MadeiraCancha.webp", "/Madeira/MadeiraCasaClub.webp"].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`View ${i + 1}`}
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
        title="Isla Diamante - Invest with confidence"
        description="Residential lots in Cancún with guaranteed appreciation."
        url="https://desarrollosdiamante.com/en/"
        image="https://desarrollosdiamante.com/Alexa_.jpeg"
      />
    </>
  );
};

export default MadeiraPageEn;