import React,  {  useState } from 'react';
import ReactPlayer  from 'react-player';
import Banner       from "../Aux/Banner";
import pdfC         from '../../../public/Brochure_Rosavento_Cancun.pdf';
import pdfM         from '../../../public/Brochure_Rosavento_Merida.pdf';
import pdfP         from '../../../public/ROSAVENTO Maya_Master Plan.pdf';
import FormularioContacto from "../Aux/FormularioContacto";
import MapSection   from '../Aux/MapRosavento'
import SliderRosavento  from './SliderRosavento';
import SliderAmenidades from './SliderAmenidades/SliderAmenidades';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; 

import {RiCheckboxBlankCircleFill} from "react-icons/ri"


const center = {
    lat: 21.098064163906468,
    lng: -89.39039837301571
  }; 
 
const Rosavento = () => { 
    return (
        <>  
        {/*Slider Mobile*/}
        <div className="lg:hidden">
            <div className="grid grid-cols-1 gap-8">
                <div className="flex flex-row-reverse sm:col-start-1 w-full h-56 xl:h-[600px] xl:ellipse-desarrollos"> 
                    <SliderRosavento/>
                </div>
            </div>
        </div>

        {/*Background*/}
        <div className="grid-cols-2 bg-[url('/public/homeBack1.png')]">
        
        {/*Desarrollos*/}
        <div className="grid xl:grid-cols-2 gap-4">
            <div className="flex flex-col lg:grid-cols-4 lg:gap-2 rounded-3xl"> 
                <div className="grid grid-cols-1">  
                    <h1 className="text-[45px] text-axeda font-title px-6 lg:px-24 mt-10 lg:mt-18 ">
                        Rosavento -Ciudad Maya-
                    </h1>
                        <p className ="text-gray-700 text-xl xl:font-body text-bold text-justify px-6 lg:px-24 py-2">
                            Terrenos residenciales al norte de Mérida. Un paraíso con mensualidades desde $1,992.00 MXN 
                        </p>   

                    <h2 className="text-axeda text-3xl font-title px-6 lg:px-24 py-2 mt-3">
                            Rosavento Mérida
                    </h2>   

                        <p className="text-gray-700 text-xl xl:font-body text-justify tracking-widest px-6 lg:px-24 py-2">
                            Nuestros terrenos residenciales se encuentran situados dentro de un desarrollo al norte de Mérida, con todos los servicios a pie de lote. 
                        </p>

                    <h2 className="text-axeda text-3xl font-title py-2 mt-3 px-6 lg:px-24">
                            Rosavento Cancún
                    </h2>   
 
                        <p className="text-gray-700 text-xl xl:font-body text-justify tracking-widest px-6 lg:px-24 py-2 mb-4">
                            Nuestros terrenos se encuentran dentro de un desarrollo residencial con amenidades que aseguran tu calidad de vida, seguridad y la plusvalía de tu patrimonio. 
                        </p>
                </div> 
            </div>

        {/*Slider LG*/}
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-8">
                    <div className="flex flex-row-reverse sm:col-start-1 w-full h-56 xl:h-[600px] xl:ellipse-desarrollos"> 
                            <SliderRosavento/>
                    </div>
                </div>
            </div> 
        </div>

        {/*Imagen Beneficios PlusValia*/}
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-20 place-items-center bg-[url('/public/homeBack2.png')]">

            <div className="lg:col-start-1 lg:col-end-5">
                <img className="hover:shadow-lg dark:hover:shadow-black/30" 
                        alt="cancun zona hotelera" 
                        src="Cancun.webp"
                        />
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center"> 
                <h1 className="font-sans text-base text-center lg:text-3xl uppercase tracking-[0.5rem] italic text-clip"><span>Cancún</span>, Invierte de forma inteligente</h1>
            </div>
        </div> 
 
    {/*Beneficios Yucatán*/}
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

        <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-title text-center text-axeda capitalize lg:text-4xl "> Conoce los beneficios de la  ubicación de tu <strong>PRÓXIMA INVERSÓN. </strong></h1>

                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <div className="object-cover  w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96">
                        <ReactPlayer
                                            url='https://www.youtube.com/watch?v=e6qNM45bUHg'
                                            className='react-player' 
                                            controls 
                                            width='100%'
                                            height='100%' 
                        /> 
                    </div>
            {/* <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""/> */}

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p className="text-base text-cyan-900 font-bodoni uppercase">Yucatán</p>

                    <a href="#" className="block mt-4 text-2xl font-semibold text-axeda hover:underline md:text-3xl">
                        Mérida, Yucatán.
                    </a>
                    
                    <p className="mt-3 text-sm lg:text-xl lg:font-body text-justify text-gray-500 dark:text-gray-600 md:text-sm">
                            Destaca por su belleza, cultura, calidad de vida y seguridad, lo que la ha posicionado a su capital entre las mejores ciudades para vivir e 
                            invertir del sureste mexicano.  
                    </p>

                    <p className="mt-3 text-sm lg:text-xl lg:font-body text-justify text-gray-500 dark:text-gray-600 md:text-sm">
                            Su ubicación permite gran conectividad hacia diversos sitios de interés, así como a otros países a través de su Aeropuerto 
                            Internacional y el Puerto de Progreso. Su excelente ubicación ofrece cercanía con hospitales de primer nivel y centros comerciales; así como de playas y sitios turísticos.
                    </p>
                    <p className="mt-3 text-sm lg:text-xl lg:font-body text-justify text-gray-500 dark:text-gray-600 md:text-sm">
                            “Rosavento lo elegí por su ubicación y porque Mérida es una de las ciudades más  seguras, esta ciudad tiene mucho futuro, 
                            aparte de que el financiamiento es bastante  cómodo”
                    </p>
 
                    <div className="flex items-center mt-6"> 
                        <img className="object-cover object-center w-10 h-10 rounded-full" src='/ErikaHerrera.png' alt="ErikaHerrera"/>

                        <div className="mx-4">
                            <h1 className="text-sm lg:text-base text-gray-700 dark:text-gray-800">Erika Herrera</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Inversionista</p> 
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
 
    {/*Beneficios Quintana Roo*/}
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent "/>

        <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto"> 

                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                   
            {/* <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""/> */}

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p className="text-base text-cyan-900 font-bodoni uppercase">Quintana Roo</p> 

                    <a href="#" className="block mt-4 text-2xl font-semibold text-axeda hover:underline md:text-3xl">
                        Cancún, Quintana Roo.
                    </a>
                    
                    <p className="mt-3 text-sm lg:text-xl lg:font-body text-justify text-gray-500 dark:text-gray-600 md:text-sm">
                            Cuenta con municipios turísticos de alta demanda nacional e internacional, gracias a su ubicación privilegiada al colindar con el mar caribe, 
                            su Aeropuerto Internacional y su estilo de vida donde la naturaleza converge con infraestructuras de primer nivel, favoreciendo las inversiones y plusvalía.
                    </p>
 
                    <p className="mt-3 text-sm lg:text-xl lg:font-body text-justify text-gray-500 dark:text-gray-600 md:text-sm">
                            “Me parece muy interesante todo lo que se ha desarrollado, afortunadamente la  inversión está bien respaldada, además de que la gente que trabaja en 
                            Axeda es muy  positiva, lo cual te motiva a invertir".
                    </p>
 
                    <div className="flex items-center mt-6">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src="/IgnacioPadilla.jpg" alt="IgnacioPadilla cliente rosavento"/>
 
                        <div className="mx-4">
                            <h1 className="text-sm lg:text-base text-gray-700 dark:text-gray-800">Ignacio Padilla</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Inversionista</p>
                        </div>
                    </div>
                    </div> 
                    
                    <div className="object-cover mt-4 lg:mt-0 w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96">
                        <ReactPlayer
                                            url='https://www.youtube.com/watch?v=KdN-h8qob10'
                                            className='react-player' 
                                            controls 
                                            width='100%'
                                            height='100%' 
                        /> 
                    </div>
                </div>
            </div>
        </div>

    {/*MasterPlan*/} 
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

        <div className="grid grid-cols-1 flex flex-cols lg:grid-cols-6 bg-[url('/public/homeBack2.png')]">

            <div className="lg:col-start-2 lg:col-end-6 mb-5">
                <h1 className="text-axeda text-center font-title text-2xl lg:text-5xl mt-5">
                    ROSAVENTO MÁSTER PLAN 
                </h1> 
            </div>

            <div className ="lg:col-start-2 lg:col-end-6  mb-5">
                <h2 className ="text-gray-600 text-xl text-center xl:font-body text-justify px-12 py-2"> 
                    El máster plan de Rosavento incluye 142 lotes unifamiliares excelentes para construir casas o villas individuales.
                    Las medidas de los terrenos van desde 240 m2
                </h2>
            </div>

            <div className="lg:col-start-2 lg:col-end-6">
                <img src="MasterPlanRosavento.png"
                            alt="MasterPlan Rosavento Axeda Cancún" /> 
            </div>   
        </div>

    {/*Download Master plan*/}
        <div className="lg:col-start-2 lg:col-end-6">
            <div className="place-items-center "> 
                    <button className={`btn`} >
                        <a href={pdfP} target="_blank" rel="noopener noreferrer" download="ROSAVENTO Maya_Master Plan.pdf"> 
                            <img    className="w-22 h-20 py-2" 
                                    src="brochure.png"/> 
                                    Descarga nuestro máster plan
                        </a>
                    </button> 
            </div>
        </div>

    {/*Cotizador Cancún*/} 
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

        <div className="grid grid-cols-1 flex flex-cols lg:grid-cols-8 bg-gradient-to-r from-orange-500 to-orange-900">
            <div className="lg:col-start-2 lg:col-end-8 mb-5 ">
                <h1 className="text-4xl xl:text-4xl font-title text-white text-center underline font-title text-lg text-2xl lg:text-5xl mt-5">
                    ¡ INVIERTE DESDE $1,906.00 MXN al mes ! 
                </h1> 
        </div>
 
        <div className="lg:col-start-2 lg:col-end-8 mb-5 text-center">
            <span className="text-xl  xl:leading-[5.5rem] text-cyan-100 px-24 py-2 border-8 border-axeda relative inline-block">
                <a className=" text-white font-body lg:text-5xl mt-5 sm:title"
                href={"https://crm.rosavento.mx/cotizador/ciudad-maya/bora_cdmaya/bora_real?vendedor=MTk2%0A"} target="_blank" rel="noopener noreferrer">
                    Cotiza TU lote en Bora Real
                </a> 
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -left-5 -top-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -right-5 -top-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -left-5 -bottom-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -right-5 -bottom-4 p-2 bg-axeda rounded-full box-content"/>
            </span> 
        </div>

        <div className ="lg:col-start-2 lg:col-end-8  mb-5">
            <h2 className ="text-gray-800 text-3xl text-white text-center font-sans text-justify px-12 py-2"> 
                Una ciudad planeada con todo lo que necesitas para disfrutar de la naturaleza.
            </h2>
        </div> </div>

    {/*Cotizador Cancún*/}  
        <div className="grid grid-cols-1 flex flex-cols lg:grid-cols-8 bg-gradient-to-r from-emerald-900 to-emerald-300">
            <div className="lg:col-start-2 lg:col-end-8 mb-5 ">
                <h1 className="text-4xl xl:text-4xl font-title text-white text-center underline font-title text-lg text-2xl lg:text-5xl mt-5">
                    ¡ INVIERTE DESDE $3,162.77 MXN al mes ! 
                </h1> 
            </div>

        <div className="lg:col-start-2 lg:col-end-8 mb-5 text-center">
            <span className="text-xl  xl:leading-[5.5rem] text-cyan-100 px-24 py-2 border-8 border-axeda relative inline-block">
                <a className=" text-white font-body lg:text-5xl mt-5 sm:title"
                href={"https://crm.rosavento.mx/cotizador/cancun/cancun_levante/levante_real?vendedor=MTk2%0A"} target="_blank" rel="noopener noreferrer">
                    Cotiza TU lote en Cancún
                </a> 
                        <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -left-5 -top-4 p-2 bg-axeda rounded-full box-content"/>
                        <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -right-5 -top-4 p-2 bg-axeda rounded-full box-content"/>
                        <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -left-5 -bottom-4 p-2 bg-axeda rounded-full box-content"/>
                        <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -right-5 -bottom-4 p-2 bg-axeda rounded-full box-content"/>
                </span> 
        </div>   

        <div className ="lg:col-start-2 lg:col-end-8  mb-5">
            <h2 className ="text-gray-800 text-3xl text-white text-center font-sans text-justify px-12 py-2"> 
                El lugar perfecto para disfrutar de la vida que siempre quisiste, en el caribe mexicano, últimos días de financiamiento a 240 meses.
            </h2>
        </div> </div>

        {/*Ocultamos para mobile*/} 
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-8">
        <hr
            className="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
        {/*Amenidades*/} 
            <SliderAmenidades/>
        </div>  

        {/*Mapa*/}
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
        
        <div className="p-8 flex flex-col gap-8 bg-gray-100">
                    <h1 className="text-[60px] text-center font-title ">
                            ¡Estarás cerca de todo!
                    </h1>
                    <div className="flex justify-center gap-6"> 
                        <p className="max-w-2xl text-center text-xl lg:font-chivo text-gray-400">
                            La perfecta ubicación del desarrollo en una de las carreteras más importantes de Cancún te conecta en solo minutos a paradisíacas playas.
                        </p>
                    </div>
                        <div className="flex xl:flex-col items-center justify-center gap-8">
                    <MapSection  
                        // center={{center}}  
                        />
                    </div>
            </div>   

        {/*By Grupo Axeda*/}
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
        
        {/*/ Desarrollos Axeda */}
        <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-title text-center text-axeda capitalize lg:text-4xl"> 
                Desarrollado por Grupo
                <strong className="underline decoration-axeda/[.33]"> AXEDA.</strong>
                </h1>

                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <div className="object-cover  w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96">
                        <ReactPlayer
                                    url='https://www.youtube.com/watch?v=e6qNM45bUHg'
                                    className='react-player' 
                                    controls 
                                    width='100%'
                                    height='100%' 
                        />

                </div>
            {/* <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""/> */}

                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 "> 

                        <p className="block mt-4 text-2xl font-semibold text-axeda hover:underline md:text-3xl">
                            Empresa orgullosamente mexicana
                        </p>

                        <p className="mt-3 lg:text-xl lg:tracking-widest text-gray-700 lg:font-body text-justify">
                                Una empresa inmobiliaria que busca facilitar el acceso al mundo de las inversiones  de forma inteligente y 
                                promoviendo alta calidad de vida, desarrollando bienes inmuebles en  las zonas de mayor crecimiento y demanda del 
                                sureste mexicano, con un solo objetivo en  mente: 

                        </p>
                        <p className="mt-3 lg:text-xl lg:tracking-widest text-gray-700 lg:font-body text-justify">
                            <strong> Superar sus límites y generar abundancia a sus inversionistas. </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>

{/* 
            <div className="grid md:grid-cols-4 gap-8">
                <div className="md:col-start-1 "></div>
                <div className="md:col-start-2 "> 
                    <img    className="md:w-[350px] md:h-[450px] hover:shadow-2xl rounded-3xl" 
                            src="oportunidades-rosavento-cun.webp"/>
                </div>

                <div className="md:col-start-3 ">   
                    <img    className="md:w-[350px] md:h-[450px] hover:shadow-2xl rounded-3xl  " 
                            src="oportunidades-rosavento-mid.webp" />
                </div>

                <div className="md:col-start-4"></div>
            </div>  */}

            {/* <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <div className="h4/5">
            </div>
            <div className ="flex bg-axeda overflow-hidden justify-content-center mt-md-3 mb-3">
              */}
                {/* <Banner/>  */}
            {/* </div>
        
            <div className="bg-no-repeat bg-cover bg-center bg-fixed
                bg-[url('/public/fondo2.jpg')] text-white ">
                    <div className="flex flex-wrap grid grid-cols-6 gap-4"> 
                    <div className="col-start-1 col-end-3"></div> 
                    <div className="col-start-2 col-span-4 ">
                        <h2 className="text-xl ">Terrenos residenciales al norte de Mérida   </h2>
                        <h1 className="text-2xl underline italic font-bold tracking-wide">Un paraíso con mensualidades desde $1,992.00 MXN.</h1>
                    </div>
                    <div className="col-start-2 col-end-7 py-3 px-8 ">
                        <p>Elige e invierte en tu próximo patrimonio en las zonas con mejor plusvalía de Mérida y  Cancún. </p>
                    </div>
                </div>
            </div> */}
 
        {/*Rosavento*/}
        {/* <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

        <div className="grid grid-cols">   
                
            <div className ="mx-auto grid grid-cols-2  border-t-0 bg-transparent bg-gradient-to-r from-transparen">
                <div className="col-start-1 col-end-4 xl:col-span-4 xl:px-12"> 
                    <h2 className="font-title text-3xl tracking-widest leading-normal text-orange-900 px-12">
                        Rosavento
                    </h2> 
                    <div className="font-sans col-start-2 col-end-8 py-6 px-6 text-gray-500 text-justify text-xl tracking-widest">
                        <p>
                            Un desarrollo con un concepto único en el sureste de México, donde gracias a su  ubicación en las mejores zonas de 
                            Mérida y Cancún, es ideal para alcanzar tus objetivos de  inversión, ya sea para contruir tu patrimonio o para generar 
                            rendimientos gracias a su  plusvalía en ascenso.
                        </p>
                    </div>

                    <div className="font-sans col-start-2 col-end-8 py-6 px-6 text-gray-500 text-justify text-xl tracking-widest">
                        <p>
                            Además, cuenta con características y amenidades premium en las que toda la  
                            familia podrán disfrutar de una vida tranquila en Mérida y Cancún.
                        </p>
                    </div>
                </div>  
            </div>
        </div> */}

        {/*Brochure*/}
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

            <div className="flex flex-wrap grid gap-2 grid-cols-2 place-items-center">
                <div> 
                    <button className={`btn`}>
                        <a href={pdfC} target="_blank" rel="noopener noreferrer" download="Brochure_Rosavento_Cancun.pdf"> 
                            <img    className="w-22 h-20 py-2 "
                                    src="brochure.png"/> 
                                    Descarga el Brochure Rosavento Cancún 
                                    </a>
                    </button> 
                </div>

                <div className="place-items-center "> 
                    <button className={`btn`} >
                        <a href={pdfM} target="_blank" rel="noopener noreferrer" download="Brochure_Rosavento_Merida.pdf"> 
                            <img    className="w-22 h-20 py-2" 
                                    src="brochure.png"/> 
                                    Descarga el Brochure Rosavento Mérida
                        </a>
                    </button> 
                </div>
            </div>

        {/*Formulario*/}
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
            <FormularioContacto/>  
        </>
    )
}

export default Rosavento
