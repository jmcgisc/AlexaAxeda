import React from 'react'
import {RiCheckboxBlankCircleFill, RiPlayFill, RiStarFill} from "react-icons/ri"
import Menciones from "./Menciones" 
import Desarrollos from "./Desarrollos"
import Reviews from "./Reviews"
import FormularioContacto from "../Aux/FormularioContacto"

export const Home = () => {
    return ( 
        <>
        <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">  
        {/*Information*/}
        <div className="md:col-span-5 flex items-center justify-center p-12 py-8 xl:p-16">
            <div className="flex flex-col gap-10">
                <h1 className="text-4xl xl:text-7xl font-title xl:leading-[7.5rem]"> 
                    INVERSIONES INMOBILIARIAS EN LAS ZONAS DE MÁS ALTA {"  "}
                    <span className="text-axeda px-4 py-2 border-8 border-axeda relative inline-block">PLUSVALÍA
                    <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-4 p-2 bg-axeda rounded-full box-content"/>
                    </span>
                 </h1>
                <p className="text-gray-500 text-xl leading-[2.5rem]">Tu legado es lo más importante, por eso desarrollamos proyectos en las zonas de mayor crecimiento y demanda con un solo objetivo en mente: Generar abundancia para nuestros inversionistas.</p>
    
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="w-full xl:w-auto bg-axeda text-white py-2 px-8 rounded-xl text-xl shadow-lg shadow-indigo-500/40">
                        Contáctame 
                    </button>
                    <button  onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://eva3d.com/recorridos-virtuales-360/axeda/rosavento/index.htm';
                            }} 
                            className="text-xl flex items-center justify-start text-left gap-4 py-9 px-20 rounded-xl 
                            hover:drop-shadow-xl
                            " >
                                <RiPlayFill className="bg-axeda text-white p-8 rounded-full box-content"/> 
                                Mira nuestro recorrido 360º 
                    </button>
                </div> 
            </div>  
        </div>

            <div className="md:col-span-3 flex items-center justify-center relative">
            {/* Content image */}
            <div>
            <img    src="Alexa-removebg-preview.png"
                    className="w-[250px] h-[250px] md:w-[250px] md:h-[250px] object-cover xl:-mt-8" 
            />
            <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
                <div className="flex items-center">
                <img
                    src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300"
                />
                <img
                    src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                />
                <img
                    src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                />
                <img
                    src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                />
                <img
                    src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                />
                </div>
                <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
                Clientes Satisfechos
                </h2>
                <div className="flex items-center gap-2 text-lg text-gray-500">
                <RiStarFill className="text-axeda" /> 5.0 (+1000 testimonios)
                </div>
                <div className="absolute -right-12 -bottom-12 -z-10">
                <div className="relative">
                    <RiCheckboxBlankCircleFill className="text-axeda text-8xl" />
                    <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
                </div>
                </div>
            </div>
            </div>

            {/* Circle */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-axeda rounded-full -z-10"></div>

            {/* Logos */}
            <img
            src="Desarrollos.jpg"
            className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%]"
            />
            <img
            src="slide-1.png"
            className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
            />
            <img
            src="Rosavento Cancun .png"
            className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[15%] xl:left-[3%] -rotate-12"
            />
            </div>
            
            </section> 
            
            {/*Body Page*/}
            <Desarrollos/>
            <Reviews/>
            <Menciones/>
            <FormularioContacto/> 
        </>
    ) 

}
