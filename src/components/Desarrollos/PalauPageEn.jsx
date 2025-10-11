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
    title: "Wellness & Relaxation",
    items: [
      { name: "Contemplative water mirror", icon: Waves },
      { name: "Spacious relaxation terraces", icon: Sun },
      { name: "Zen gardens and meditation areas", icon: Leaf }
    ]
  },
  {
    title: "Social Spaces",
    items: [
      { name: "Clubhouse with organic design", icon: Home },
      { name: "Multi-purpose hall", icon: Users },
      { name: "Outdoor gathering areas", icon: Trees }
    ]
  },
  {
    title: "Nature & Design",
    items: [
      { name: "Sea-inspired thematic park", icon: WavesIcon },
      { name: "Natural trails", icon: Mountain },
      { name: "Architecture integrated with environment", icon: Eye }
    ]
  }
];

const features = [
  { icon: Home, text: "164 exclusive lots" },
  { icon: Shield, text: "Privacy and discretion" },
  { icon: TrendingUp, text: "Guanteed appreciation" },
  { icon: MapPin, text: "Privileged location" },
  { icon: Heart, text: "Conscious design" }
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
    description: "With tropical style, Boracay evokes beach paradises with aquatic amenities, palm trees, and a permanent vacation atmosphere.",
    image: "/Boracay/Boracay.webp",
    features: ["Tropical style", "Aquatic amenities", "Vacation atmosphere"],
    color: "from-amber-500 to-amber-700",
    icon: Sun
  },
  {
    name: "Madeira",
    description: "Focused on sports and vitality, Madeira offers courts, gym, and physical activity areas for active families.",
    image: "/Madeira/Madeira.webp",
    features: ["Sports focus", "Equipped gym", "Multi-purpose courts"],
    color: "from-emerald-500 to-emerald-700",
    icon: TrendingUp
  },
  {
    name: "Santorini",
    description: "Inspired by the Greek islands, Santorini combines Mediterranean elegance with modernity in an exclusive and secure environment.",
    image: "/Santorini/Santorini_1.webp",
    features: ["Mediterranean style", "Elegance and modernity", "Exclusive environment"],
    color: "from-blue-500 to-blue-700",
    icon: Home
  }
];

const investmentInfo = [
  {
    title: "Cancún: Investment Sanctuary",
    description: "Cancún offers one of Mexico's most stable real estate markets, with consistent 8-12% annual appreciation. Preferred destination for investors seeking security and growth.",
    icon: Shield,
    stats: "8-12% annual appreciation"
  },
  {
    title: "Lot Exclusivity",
    description: "Palau offers only 164 lots, guaranteeing exclusivity and long-term value. Lower density means greater privacy and appreciation for each property.",
    icon: Sparkles,
    stats: "Only 164 lots"
  },
  {
    title: "Conscious Design",
    description: "Every element in Palau is designed to harmonize with nature. Architecture that respects the environment and creates spaces promoting wellness and tranquility.",
    icon: Leaf,
    stats: "Sustainable design"
  },
  {
    title: "Discreet Luxury",
    description: "In Palau, luxury is expressed in subtle details: natural materials, fluid spaces, and an aesthetic that prioritizes calm over excess.",
    icon: Eye,
    stats: "Serene elegance"
  }
];

const PalauPageEn = () => {
  return (
    <>
      <Helmet>
        <title>Palau - Serene Luxury Residential Collection | Isla Diamante</title>
        <meta name="description" content="Discover Palau: 164 exclusive lots with conscious design and wellness amenities. Water mirrors, organic clubhouse, and architecture integrating luxury with tranquility." />
        <meta name="keywords" content="Palau, Cancún lots, serene luxury, appreciation, water mirror, clubhouse, sustainable development, Isla Diamante, exclusive collection" />
        <link rel="canonical" href="https://desarrollosdiamante.com/en-palau" />
        <meta property="og:title" content="Palau Collection - Serene Luxury and Conscious Design" />
        <meta property="og:description" content="Live in Palau, the collection celebrating the connection between luxury and tranquility. Exclusive lots with wellness amenities and organic design." />
        <meta property="og:image" content="https://desarrollosdiamante.com/Palau/Palau1.jpeg" />
        <meta property="og:url" content="https://desarrollosdiamante.com/en-palau" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Palau - Serene Luxury Residential Collection | Isla Diamante" />
        <meta name="twitter:description" content="Discover Palau: residential lots with conscious design and wellness amenities. Exclusivity and appreciation in a completely tranquil environment." />
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
              The art of <span className="font-semibold text-blue-600 dark:text-blue-400">calm and serene elegance</span>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-teal-600 rounded-3xl transform -rotate-3 opacity-20"></div>
              <img
                src="/Palau/Palau1.jpeg"
                alt="View of Palau Collection with serene design and natural integration"
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
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">The Art of Calm</h2>
              <p className="mb-6 leading-relaxed">
                In the heart of Isla Diamante, the <strong>Palau Collection</strong> represents the most serene elegance.
                Inspired by natural landscapes and the pure atmosphere of Pacific islands, Palau celebrates 
                the connection between luxury and tranquility.
              </p>
              <p className="leading-relaxed">
                With a limited number of lots, this private community invites those who value discretion, comfort, 
                and subtle beauty. Its design prioritizes open spaces, harmony with nature, and architecture that breathes calm.
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Wellness <span className="text-blue-600">Amenities</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Spaces designed to reconnect with the essential and find inner peace
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

          {/* Detailed Description */}
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
              
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">True Exclusivity</h2>
              
              <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6 text-left">
                <p className="leading-relaxed">
                  In its clubhouse, time seems to stand still: <strong>spacious terraces, relaxation areas, 
                  a water mirror reflecting the sky</strong> and a thematic park inspired by seaside living —an environment designed to reconnect with the essential.
                </p>
                
                <p className="leading-relaxed">
                  <strong>Palau doesn't seek to impress with excess, but to conquer with balance.</strong> 
                  It's a collection created for those who understand that true exclusivity lies in the details, 
                  and that the greatest luxury is living in peace.
                </p>
                
                <p className="leading-relaxed font-medium text-blue-700 dark:text-blue-300">
                  Discover the art of living in calm. Only 164 lots available for serene souls.
                </p>
              </div>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Experience the <span className="text-blue-600">Serenity</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover the spaces that make Palau a sanctuary of peace and elegance
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
                    alt={`View ${i + 1} of Palau Collection`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-lg">Perfect harmony</h3>
                      <p className="text-sm">Where luxury meets tranquility</p>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Our Development <span className="text-blue-600">Family</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover the complete collection of exclusive developments by Isla Diamante in Cancún
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
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{dev.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{dev.description}</p>
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
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Investment with <span className="text-blue-600">Purpose</span></h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover why Palau is more than an investment, it's a lifestyle
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

            {/* Additional information about Palau concept */}
            <motion.div 
              className="mt-12 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Palau: Where Luxury Meets Calm</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-700 dark:text-blue-400">Design Philosophy</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Organic and fluid architecture</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Total integration with nature</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Spaces promoting wellbeing</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Natural and sustainable materials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-blue-700 dark:text-blue-400">Exclusive Advantages</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Only 164 lots for maximum exclusivity</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Community of like-minded profiles</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Conscious and sustainable design</li>
                    <li className="flex items-center"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Appreciation secured by limited edition</li>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to find your inner peace in Palau?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to learn about the 164 exclusive lots and discover why Palau is the perfect refuge for serene souls
            </p>
            <Popup
              trigger={
                <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors">
                  Request exclusive information
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
          <div className="flex flex-wrap justify-center gap-6">
            {["/Palau/Palau1.jpeg", "/Palau/Palau2.jpeg", "/Palau/Palau3.jpeg"].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`View ${i + 1} of Palau`}
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
        title="Palau Collection - Serene Luxury in Isla Diamante"
        description="164 exclusive lots with conscious design. Water mirrors, organic clubhouse, and architecture integrating luxury and tranquility in Cancún."
        url="https://desarrollosdiamante.com/en/palau"
        image="https://desarrollosdiamante.com/Palau/Palau1.jpeg"
      />
    </>
  );
};

export default PalauPageEn;