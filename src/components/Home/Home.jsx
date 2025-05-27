import React        from 'react';
import {RiCheckboxBlankCircleFill, RiPlayFill, RiStarFill} 
                    from "react-icons/ri";
import Popup        from 'reactjs-popup'; 
import Desarrollos  from "./Desarrollos";
import Slider       from '../Aux/Slider'; 
import YoutubeEmbed from "../Aux/YoutubeEmbed"
import Reviews      from "./Reviews"; 
import FormularioContacto from "../Aux/FormularioContacto";
import 'reactjs-popup/dist/index.css';
import "../Aux/style.css";
import { motion } from "framer-motion";  
import { getAnalytics, logEvent, setUserProperties } from "firebase/analytics"; 
import FormularioContactoPopup from '../Aux/FormularioContactoPopup'; 
import SeccionModern from '../../components/SeccionModern';
import LocationSection from '../../components/LocationSection';
import ConnectivitySection from '../../components/ConnectivitySection';
import MapaInteractivo from '../MapaInteractivo';
import TraditionSection from '../../components/TraditionSection';
import DesingSection from '../../components/DesingSection';
import LivingSection from '../../components/LivingSection';
import EngineeringSection from '../../components/EngineeringSection'; 
import pdf from '../../../public/ISLA_DIAMANTE.pdf'; 
 
const contentStyle = { width: 1000 }; 
const isMobile = window.innerWidth < 768;

export const Home = () => {
    return ( 
    <> 
        <section id="home" className="relative w-full h-screen overflow-hidden">
        {/* Video o imagen de fondo */}
        {!isMobile ? (
            <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
            >
            <source src="/video-presentacion.mp4" type="video/mp4" />
            </video>
        ) : (
            <img
            src="/fallback-movil.jpg"
            alt="Fondo móvil"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
        )}

        {/* Capa oscura para contraste */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

        {/* Contenido centrado con animación */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Invierte en <span className="text-diamante">Cancún</span> y haz realidad tus sueños
            </motion.h1>

            <motion.p
                className="text-xl md:text-2xl text-white max-w-2xl mb-10 drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
            Vive en el paraíso con Isla Diamante. Plusvalía, naturaleza y facilidad de inversión.
            </motion.p>

            <motion.div
                className="flex flex-col md:flex-row items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
            
            <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
            {/* Botón de contacto */}
            <Popup
                trigger={
                <button className="bg-diamante text-white py-3 px-8 rounded-xl text-lg shadow-lg hover:bg-diamante/90 transition duration-300">
                    Contáctame
                </button>
                }
                modal
                nested
                contentStyle={{ width: 400 }}
                position="center center"
            >
                {(close) => <FormularioContactoPopup onClose={close} />}
            </Popup>
            {/* Botón de Brochure separado */}
            <div className="flex items-center gap-4 border border-white py-3 px-6 rounded-xl text-white hover:text-diamante transition duration-300 text-lg shadow-md">
            {/* Solo el ícono es clickeable */}
            <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="ISLA_DIAMANTE.pdf"
                className="cursor-pointer"
            >
            <img
                src="brochure.png"
                alt="Brochure Isla Diamante"
                className="w-10 h-10 object-contain hover:scale-105 transition-transform duration-300"
            />
            </a>
            {/* El texto no tiene cursor-pointer */}
            <span className="select-none">Descarga el Brochure</span>
            </div>

            </div>
                </motion.div>
            </div>

            </section>
 
      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <SeccionModern />

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <LocationSection />

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <MapaInteractivo/>

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <ConnectivitySection />

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <TraditionSection />

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <DesingSection />

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <LivingSection />

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <EngineeringSection />
        
      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        {/*Body Page*/}
        <Desarrollos/>

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        {/*Imagenes*/}
        <Slider/>

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />

     <section id="home" className="min-h-[100vh] bg-diamonBlack text-white grid grid-cols-1 xl:grid-cols-8 px-6 xl:px-24 py-24 gap-8 relative overflow-hidden">
      {/* Información */}
      <div className="xl:col-span-5 flex items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="flex flex-col gap-10"
        >
          <h1 className="text-4xl xl:text-6xl text-white tracking-widest xl:leading-[5.5rem]">
            INVIERTE EN
            <span className="text-diamante px-3 py-1 border border-primary_isla rounded-md ml-2">CANCÚN</span>
            Y HAZ REALIDAD TUS
            <span className="text-diamante px-4 py-2 border-8 border-primary_isla relative inline-block">
              SUEÑOS
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-4 p-2 bg-primary_isla rounded-full box-content"/>
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-4 p-2 bg-primary_isla rounded-full box-content"/>
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-4 p-2 bg-primary_isla rounded-full box-content"/>
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-4 p-2 bg-primary_isla rounded-full box-content"/>
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            ¡Tu paraíso comienza aquí! Tu legado es lo más importante.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
            
            </motion.div>

            <motion.button
              onClick={() => window.open('https://eva3d.com/recorridos-virtuales-360/axeda/rosavento/index.htm', '_blank')}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-white text-lg hover:text-diamante transition"
            >
              <RiPlayFill className="text-4xl bg-diamante text-white p-2 rounded-full shadow-lg" />
              Mira nuestro recorrido 360º
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Imagen y círculo */}
      <motion.div 
        className="xl:col-span-3 flex flex-col items-center justify-center relative"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-10">
          <img
            src="LAGO-CENTRAL-CASA-CLUB-PRINCIPAL.webp"
            alt="Asesor Axeda Terrenos en Mérida y Cancún"
            className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] object-cover rounded-full border-8 border-white shadow-2xl"
          />

          {/* Círculo decorativo detrás */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] border-[10px] border-diamante rounded-full z-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          />

          {/* Mini Card */}
          <div className="relative bg-white shadow-2xl rounded-xl p-6 mt-6 flex flex-col items-center gap-4 max-w-xs mx-auto z-10">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <img
                  key={i}
                  src={`https://img.freepik.com/foto-gratis/foto-persona-${i + 1}.jpg`}
                  alt={`Persona ${i + 1}`}
                  className="w-10 h-10 object-cover rounded-full ring-2 ring-white"
                />
              ))}
            </div>
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              Te asesoramos desde el inicio
            </h2>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <RiStarFill className="text-diamon" />
              <a
                href="https://web.facebook.com/profile.php?id=100063816524796&_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Conoce Nuestros Testimonios
              </a>
            </div>
          </div>
        </div>

        {/* Logos flotantes */}
        <img
          src="Isla_4.webp"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute top-[10%] right-[5%] xl:right-[10%] border-4 border-white shadow-xl"
          alt="Logo flotante"
        />
        <img
          src="Isla_3.webp"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute top-[5%] left-[10%] border-4 border-white shadow-xl"
          alt="Logo flotante"
        />
        <img
          src="Isla_4.webp"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[5%] -rotate-12 border-4 border-white shadow-xl"
          alt="Logo flotante"
        />
      </motion.div>
    </section>

        {/*Opioniones*/}
        <Reviews/>
 
        {/*Llamado a la acción*/}
        <FormularioContacto/> 
        </>
    ) 

}
