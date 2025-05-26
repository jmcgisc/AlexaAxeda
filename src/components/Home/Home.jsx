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
            className="text-4xl md:text-6xl font-title font-bold text-white mb-6 drop-shadow-lg"
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
            <Popup
                trigger={
                <button className="bg-diamante text-white py-3 px-8 rounded-xl text-lg shadow-xl hover:bg-diamante/90 transition">
                    Contáctanos
                </button>
                }
                contentStyle={{ width: 400 }}
                position="center center"
            >
                <FormularioContactoPopup />
            </Popup>

            <button
                onClick={() =>
                window.open(
                    "https://eva3d.com/recorridos-virtuales-360/axeda/rosavento/index.htm",
                    "_blank"
                )
                }
                className="flex items-center gap-3 border border-white py-3 px-8 rounded-xl text-white hover:bg-white hover:text-diamante transition text-lg"
            >
                <RiPlayFill className="text-2xl" />
                Ver recorrido 360º
            </button>
            </motion.div>
        </div>
        </section>

        {/**/}
        <SeccionModern />

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

        <section id="home" className="min-h-[90vh] bg-diamonBlack grid grid-cols-1 xl:grid-cols-8">  

        {/*Information*/}
 
        <div className="md:col-span-5 flex items-center justify-center p-12 py-8 xl:p-16">

            <div className="flex flex-col gap-10 ">
                <h1 className="text-4xl xl:text-7xl text-white font-title xl:leading-[7.5rem]"> 
                    INVIERTE EN
                    <span className="text-diamante px-4 py-2 border-secundary relative inline-block">CANCÚN </span>
                    Y HAZ REALIDAD TUS  {"  "}
                    <span className="text-diamante px-4 py-2 border-8 border-primary_isla relative inline-block">SUEÑOS
                    <RiCheckboxBlankCircleFill className="text-diamondBlack text-base absolute -left-5 -top-4 p-2 bg-primary_isla rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-diamondBlack text-base absolute -right-5 -top-4 p-2 bg-primary_isla rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-diamondBlack text-base absolute -left-5 -bottom-4 p-2 bg-primary_isla rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-diamondBlack text-base absolute -right-5 -bottom-4 p-2 bg-primary_isla rounded-full box-content"/>
                    </span>
                 </h1>

                <p className="text-primary_isla text-xl leading-[2.5rem]">¡Tu paraíso comienza aqui! legado es lo más importante...</p>
    
                    <div className="flex flex-col md:flex-row items-center gap-4">
            
                        <Popup trigger={<button className= "w-full xl:w-auto bg-diamon text-diamonBlack py-2 px-8 rounded-xl text-xl shadow-lg shadow-indigo-500/40" 
                        > Contáctame</button>} {...{   contentStyle }}
                            position="right center">
                            <div className="flex flex-full">
                                <FormularioContactoPopup/>
                            </div>
                        </Popup> 

                       {/*  Hasta tener el recorrido 360
                        <button  onClick={(e) => {
                                e.preventDefault();
                                window.open('https://eva3d.com/recorridos-virtuales-360/axeda/rosavento/index.htm', '_blank');
                                }} 
                                className="text-xl flex items-center justify-start text-left gap-4 py-9 px-20 rounded-xl 
                                hover:drop-shadow-xl
                                " >
                                    <RiPlayFill className="bg-diamante text-white p-8 rounded-full box-content"/> 
                                    Mira nuestro recorrido 360º 
                        </button>*/}

                    </div> 
                </div>  
            </div>

            <div className="md:col-span-3 flex items-center justify-center relative">
            {/* Content image */}
            <div>
            {/* <img    src="Alexa-removebg-preview.png" */}
            <img    
             
            //src="AlexaDelgado.webp"
            src="LAGO-CENTRAL-CASA-CLUB-PRINCIPAL.webp"
                    className="w-[280px] h-[280px] md:w-[280px] md:h-[280px] object-cover xl:-mt-8" 
                    alt="Asesor Axeda Terrenos en Mérida y Cancún"
            />
            <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
                <div className="flex items-center">
                <img
                    src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300"
                    alt='Persona 1'
                />
                <img
                    src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                    alt='Persona 2'
                />
                <img
                    src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                    alt='Persona 3'
                />
                <img
                    src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                    alt='Persona 4'
                />
                <img
                    src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                    alt='Persona 5'
                />
                </div>
                <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
                    Te asesoramos desde el inicio
                </h2>
                <div className="flex items-center gap-2 text-lg text-gray-500"> 5
                <RiStarFill className="text-diamon" /> 
                            <a href="https://web.facebook.com/profile.php?id=100063816524796&_rdc=1&_rdr" 
                            target="_blank"
                            rel="noopener"> 
                                    Conoce Nuestros Testimonios
                            </a>
                </div>
                <div className="absolute -right-12 -bottom-12 -z-10">
                <div className="relative">
                    <RiCheckboxBlankCircleFill className="text-diamante text-8xl" />
                    <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
                </div>
                </div>
            </div>
            </div>

            {/* Circle */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-diamante rounded-full -z-10"></div>

            {/* Logos */}
            <img
            src="Isla_4.webp"
            className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] right-[1%] xl:right-[10%]"
            alt=''
            />
            <img
            src="Isla_3.webp"
            className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[-12%] xl:top-[5%] left-[6%] xl:left-[10%]"
            alt=''
            />
            <img
            src="Isla_4.webp"
            className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[4%] xl:left-[3%] -rotate-12"
            alt=''
            />
            </div>
            
    </section> 

        {/*Opioniones*/}
        <Reviews/>

        {/*Llamado a la acción*/}
        <FormularioContacto/> 
        </>
    ) 

}
