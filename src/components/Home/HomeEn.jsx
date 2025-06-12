import { getAnalytics, logEvent, setUserProperties } from "firebase/analytics"; 
import 'reactjs-popup/dist/index.css';
import "../Aux/style.css";
import Popup                from 'reactjs-popup'; 
import DesarrollosEn        from "./DesarrollosEn";
import SliderEn             from '../Aux/SliderEn';   
import FormularioContactoEn from "../Aux/FormularioContactoEn";
import { motion }           from "framer-motion";  
import FormularioContactoPopup  from '../Aux/FormularioContactoPopup'; 
import ConnectivitySectionEn    from '../ConnectivitySectionEn';
import SeccionModernEn          from '../SeccionModernEn';
import LocationSectionEn        from '../LocationSectionEn';
import MapaInteractivo          from '../MapaInteractivo';
import TraditionSectionEn       from '../TraditionSectionEn';
import DesingSectionEn          from '../DesingSectionEn';
import LivingSectionEn          from '../LivingSectionEn';
import EngineeringSectionEn     from '../EngineeringSectionEn'; 
import TestimoniosSlider        from '../Aux/TestimoniosSlider';
import pdf                      from '../../../public/ISLA_DIAMANTE.pdf';
 
const contentStyle = { width: 1000 };
 
export const HomeEn = () => {
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
              Your browser does not support HTML5 video.
            </video>
        ) : (
        
        )
        {/* Capa oscura para contraste */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-8" />

        {/* Contenido centrado con animación */}
        <div className="relative px-6 md:mt-8 mt-6 flex flex-col items-center justify-center h-full text-center ">
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-white md:mb-2 mb-6 drop-shadow-lg"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Invest in  <span className="text-primary_isla">Cancun</span> and make your dreams come true
            </motion.h1>


            <motion.p
                className="text-xl md:text-2xl text-white max-w-2xl mb-4 mt-4 drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Live in paradise with Isla Diamante. Capital gains, nature and ease of investment.
            </motion.p>

            <motion.div
                className="flex flex-col md:flex-row items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
            
            <div className="flex flex-col md:flex-row items-center gap-6 sm:mt-2 mt-8">
            {/* Botón de contacto */}
            <Popup
                trigger={
                <button className="bg-diamante text-white md:py-3 px-8 rounded-xl text-lg shadow-lg hover:bg-diamante/90 transition duration-300">
                    Contact me
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
            <div className="flex items-center gap-4 border border-white sm:py-1 py-3 px-6 rounded-xl text-white hover:text-diamante transition duration-300 text-lg shadow-md">
            {/* Solo el ícono es clickeable */}
            <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="BROCHURE_EN.pdf"
                className="cursor-pointer"
            >
            <img
                src="brochure.png"
                alt="Brochure Isla Diamante"
                className="w-10 h-10 object-contain hover:scale-105 transition-transform duration-300"
            />
            </a>
            {/* El texto no tiene cursor-pointer */}
            <span className="select-none">Download the Brochure</span>
            </div>

            </div>
                </motion.div>
            </div>

            </section>
 
      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <SeccionModernEn />

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <LocationSectionEn />

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <MapaInteractivo/>

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <ConnectivitySectionEn />

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <TraditionSectionEn />

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <DesingSectionEn/>

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <LivingSectionEn/>

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        <EngineeringSectionEn/>
        
      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        {/*Body Page*/}
        <DesarrollosEn/>

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />
        {/*Imagenes*/}
        <SliderEn/>

      {/* Línea decorativa inferior */}
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-200" />

        {/*Opioniones*/}
        {/* <Reviews/> */}

        {/*Testimonios*/}
        <TestimoniosSlider/> 
 
        {/*Llamado a la acción*/}
        <FormularioContactoEn/> 
        </>
    ) 

}
