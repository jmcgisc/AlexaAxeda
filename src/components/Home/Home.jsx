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
import TestimoniosSlider from '../Aux/TestimoniosSlider';
import pdf from '../../../public/ISLA_DIAMANTE.pdf';
 
const contentStyle = { width: 1000 };
 
export const Home = () => {
    return ( 
    <> 
        <section id="home" className="relative w-full h-screen overflow-hidden">
        {/* Video o imagen de fondo */}
            <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
            >
            <source src="/video-presentacion.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
        ) : (
            <img
            src="/fallback-movil.jpg"
            alt="Fondo móvil"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />
        )

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

        {/*Opioniones*/}
        <Reviews/>

        {/*Testimonios*/}
        <TestimoniosSlider/> 
 
        {/*Llamado a la acción*/}
        <FormularioContacto/> 
        </>
    ) 

}
