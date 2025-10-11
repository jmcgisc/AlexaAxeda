import { motion } from "framer-motion";
import {
  CheckCircle,
  PartyPopper,
  Sun,
  ShowerHead,
  Flame,
  WavesLadder,
  Users,
  Trees,
  Sofa,
  Dumbbell,
  Home,
  Shield,
  TrendingUp,
  MapPin,
  Calendar,
  Eye,
  Building,
  Landmark,
  BarChart3,
  Globe,
  Key,
  HomeIcon,
  Zap
} from "lucide-react";
import Popup from 'reactjs-popup'; 
import FormularioContactoPopup from '../Aux/FormularioContactoPopup'; 
import { Helmet } from "react-helmet-async";
import MetaTags from "../../../src/MetaTags";

const amenityGroups = [
  {
    title: "Social & Recreation",
    items: [
      { name: "Multi-purpose hall", icon: PartyPopper },
      { name: "Terraces", icon: Trees },
      { name: "Pergola with grill bar", icon: Flame },
      { name: "Thematic park with padel courts", icon: Users }
    ]
  },
  {
    title: "Sports",
    items: [
      { name: "Padel courts", icon: Dumbbell }
    ]
  },
  {
    title: "Family & Relaxation",
    items: [
      { name: "Adult swimming pool", icon: WavesLadder },
      { name: "Children's swimming pool", icon: WavesLadder },
      { name: "Sunbathing areas", icon: Sun },
      { name: "Bathrooms and showers", icon: ShowerHead }
    ]
  }
];

const features = [
  { icon: Home, text: "149 available lots" },
  { icon: Shield, text: "24/7 security" },
  { icon: TrendingUp, text: "High guaranteed appreciation" },
  { icon: MapPin, text: "Privileged location in Cancún" },
  { icon: Users, text: "Exclusive community" }
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

const SantoriniPageEn = () => {
  return (
    <>
      <Helmet>
        <title>Santorini - Residential Community with Mediterranean Style | Isla Diamante</title>
        <meta name="description" content="Discover Santorini: 149 lots with luxury amenities in Cancún. Inspired by the Aegean Sea, it fuses elegance, serenity and functionality in a secure environment." />
        <meta name="keywords" content="Santorini, Cancún lots, residential community, appreciation, swimming pools, padel courts, real estate development, Isla Diamante, Mediterranean style" />
        <link rel="canonical" href="https://desarrollosdiamante.com/en/santorini" />
        <meta property="og:title" content="Santorini Community - Residential Development with Mediterranean Style" />
        <meta property="og:description" content="Live in Santorini, the community inspired by the Aegean Sea with swimming pools, padel courts, social areas and 24/7 security. Lots with high appreciation in Cancún." />
        <meta property="og:image" content="https://desarrollosdiamante.com/Santorini/Santorini_1.webp" />
        <meta property="og:url" content="https://desarrollosdiamante.com/en/santorini" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Santorini - Residential Community in Cancún | Isla Diamante" />
        <meta name="twitter:description" content="Discover Santorini: residential lots with luxury amenities and Mediterranean design in Cancún. Guaranteed appreciation and secure environment for families." />
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
              className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-6"
            >
              <WavesLadder className="h-8 w-8 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-300">
              Santorini
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Inspired by the elegance of the Aegean Sea, <span className="font-semibold text-blue-600 dark:text-blue-400">Santorini fuses luxury, serenity and functionality</span>
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

          {/* Image + Description */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform -rotate-3 opacity-20"></div>
              <img
                src="/Santorini/planoSantorini.webp"
                alt="Floor plan of Santorini community with Mediterranean design and green areas"
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Mediterranean Elegance in Cancún</h2>
              <p className="mb-6 leading-relaxed">
                In Santorini you'll find a secure, modern and harmonious environment. With separate swimming pools for adults and children, 
                shaded terraces, social areas and sports zones, this development guarantees a fulfilling life for families and investors.
              </p>
              <p className="leading-relaxed">
                Every space has been carefully planned to provide wellbeing, privacy and connection with nature 
                without sacrificing comfort or style. A Mediterranean-inspired refuge in the heart of Cancún.
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Mediterranean Style <span className="text-blue-600">Amenities</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-200 mb-12 max-w-2xl mx-auto">
              Enjoy spaces designed for entertainment, relaxation and family gatherings with Greek inspiration
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
                        <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-full text-blue-600 dark:text-blue-400 mt-1">
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Experience <span className="text-blue-600">Santorini</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover the spaces that make Santorini the ideal place for your family
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["/Santorini/Santorini_1.webp", "/Santorini/Santorini_2.webp", "/Santorini/Santorini_3.webp"].map((src, i) => (
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
                    alt={`View ${i + 1} of Santorini community`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg">Unique spaces</h3>
                      <p className="text-sm">Mediterranean design in Cancún</p>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Our <span className="text-blue-600">Developments</span></h2>
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

          {/* Investment Information Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Invest in <span className="text-blue-600">Cancún</span></h2>
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

            {/* Additional information about Cancún */}
            <motion.div 
              className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Cancún: The Perfect Destination to Invest</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-700 dark:text-blue-400">Advantages of Investing in Cancún</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Constantly growing tourist market</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> World-class infrastructure</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> High demand for vacation rentals</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Appreciation above national average</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-700 dark:text-blue-400">Why Choose Isla Diamante</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Developments with premium amenities</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> 24/7 security in all communities</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Guaranteed appreciation with titling</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Strategic locations in Cancún</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl p-10 text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to live in Santorini?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a visit and discover why Santorini is the best investment for your family
            </p>
           
            <Popup
              trigger={
                <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors">
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
            {["/Santorini/Santorini_1.webp", "/Santorini/Santorini_2.webp", "/Santorini/Santorini_3.webp"].map((src, i) => (
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

        <MetaTags
          title="Isla Diamante - Invest with confidence"
          description="Residential lots in Cancún with guaranteed appreciation."
          url="https://desarrollosdiamante.com/en/"
          image="https://desarrollosdiamante.com/Alexa_.jpeg"
        />
      </section>
    </>
  );
};

export default SantoriniPageEn;