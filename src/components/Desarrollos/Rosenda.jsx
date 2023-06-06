import React        from 'react';
import ReactPlayer  from 'react-player';
import Banner       from "../Aux/Banner";
import pdf from '../../../public/ROSENDA_Brochure.pdf';
import FormularioContacto from "../Aux/FormularioContacto";
import MapSection from '../Aux/MapRosenda'
import Slider from './SliderRosenda'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import SliderAmenidades from './SliderAmenidades/SliderAmenidades';
import { Pagination } from "swiper";

const Rosenda = () => {  
    return (
        <> 
        {/*Slider Mobile*/}
        <div className="lg:hidden">
            <div className="grid grid-cols-1 gap-8">
                <div className="flex flex-row-reverse sm:col-start-1 w-full h-56 xl:h-[600px] xl:ellipse-desarrollos"> 
                    <Slider/>
                </div>
            </div>
        </div>

        {/*Background*/}
        <div className="grid-cols-2 bg-[url('/public/backGreen.png')]">

        {/*Desarrollos*/}
        <div className="grid xl:grid-cols-2 gap-4">
            <div className="flex flex-col lg:grid-cols-4 lg:gap-2 rounded-3xl"> 
                <div className="grid grid-cols-1 lg:mt-24">  
                    <h1 className="text-[45px] text-axeda font-title px-12 mt-10 lg:mt-18 ">
                        ROSENDA TEMOZÓN 
                    </h1>
                        <p className ="text-gray-100 text-xl font-body text-justify px-12">
                            Departamentos en Mérida Zona Norte desde 1.7 MDP
                        </p>   

                    <h1 className="text-[45px] text-axeda font-title px-12 py-6 mt-10 lg:mt-18 ">
                        ROSENDA TEMOZÓN II
                    </h1>   

                        <p className="text-gray-100 text-base font-body text-justify tracking-widest px-12 sm:py-2 sm:mb-4">
                            Tras el éxito de nuestro proyecto Rosenda, vendido en su totalidad de menos de 50 días; hemos creado Rosenda Temozón II, una colección de 80 departamentos en 10 modelos diferentes.
                        </p>
                </div> 
            </div>

            {/*Slider LG*/}
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-8">
                <div className="flex flex-row-reverse sm:col-start-1 w-full h-56 xl:h-[600px] xl:ellipse-desarrollos"> 
                    <Slider/>
                </div>
            </div>

        </div> 
        </div> 
              
        {/*/ Desarrollos Axeda */}
        <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-title text-center text-gray-800 capitalize lg:text-4xl dark:text-white"> 
                    ROSENDA TEMOZÓN MÉRIDA
                    
                </h1>

                <h1 className="text-3xl font-title text-center text-axeda capitalize lg:text-4xl ">  
                        Departamentos en
                        <strong className="underline decoration-axeda/[.33]"> venta. </strong>
                    </h1>
                
                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <div className="object-cover  w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96">
                        <ReactPlayer
                                    url='https://www.youtube.com/watch?v=oiZ4NmGF3h4&t=1s'
                                    className='react-player' 
                                    controls
                                    playIcon	
                                    width='100%'
                                    height='100%' 
                        />

                    </div>
            {/* <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://idesarges.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""/> */}

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p className="text-base text-cyan-900 font-bodoni uppercase">Departamentos</p> 

                    <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline md:text-3xl">
                        Compra en la zona de mayor auge de la República Mexiana
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-600 md:text-sm">
                            Es una colección de 51 departamentos exclusivos con 8 modelos diferentes que conjugan armonía, 
                            calidez y funcionalidad; adaptándose a tu estilo de vida, ubicados en una de las zonas más exclusivas en Mérida. 
                    </p>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-600 md:text-sm"> 
                            Cuenta con amenidades, así como proximidad a complejos comerciales de prestigio, hospitales y servicios de primer nivel.
                    </p>

                    </div>
                </div>
            </div>
        </div>
    
        {/*Ocultamos para mobile*/} 
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-8">
        <hr
            className="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
        {/*Amenidades*/} 
            <SliderAmenidades/>
        </div>  


            {/*MasterPlan*/} 
            <hr
                className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

            <div className="grid grid-cols-1 flex flex-cols lg:grid-cols-6 bg-[url('/public/homeBack2.png')]">

                <div className="lg:col-start-2 lg:col-end-6 mb-5">
                    <h1 className="text-axeda text-center font-title text-2xl lg:text-5xl mt-5">
                            ROSENDA TEMOZÓN II
                    </h1> 
                </div>

                <div className ="lg:col-start-2 lg:col-end-6 mb-5">
                    <h2 className ="lg:text-xl text-sm font-body text-justify text-gray-500 px-12"> 
                        Tras el éxito de nuestro proyecto Rosenda, vendido en su totalidad de menos de 50 días;
                        hemos creado Rosenda Temozón II, una colección de 80 departamentos en 10 modelos diferentes.
                    </h2>
                </div>

                <div className="lg:col-start-3 lg:col-end-6">
                    <img src="SENDA.jpg"
                                alt="MasterPlan Rosavento Axeda Cancún" /> 
                </div>   
            </div>

            {/* Maps Rosenda */}
            <hr
                className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

            <div className="p-8 flex flex-col gap-8 bg-gray-100">
                    <h1 className="text-[60px] text-center font-title ">
                            ¡La mejor Ubicación!
                    </h1>
                    <div className="flex justify-center gap-6"> 
                        <p className="lg:max-w-4xl text-center text-base lg:text-xl font-chivo text-gray-400">
                            Al invertir en Rosenda Temozón II, estarás eligiendo vivir en la zona más demandada y equilibrada de la ciudad,
                            dentro de un área que reúne servicios exclusivos y alta plusvalía al norte de Mérida.
                        </p>
                    </div>
                        <div className="flex xl:flex-col items-center justify-center gap-8">
                    <MapSection  
                        // center={{center}}  
                        />
                    </div>
            </div>   

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
                    
                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 "> 

                        <p className="block mt-4 text-2xl font-semibold text-axeda hover:underline md:text-3xl">
                            Empresa orgullosamente mexicana
                        </p>

                        <p className="mt-3 lg:text-xl lg:tracking-widest text-gray-700 lg:font-body text-justify">
                                Una empresa inmobiliaria que busca facilitar el acceso al mundo de las inversiones  de forma inteligente y 
                                promoviendo alta calidad de vida, desarrollando bienes inmuebles en  las zonas de mayor crecimiento y demanda del 
                                sureste mexicano, con un solo objetivo en  mente: 

                        </p>
                        <p className="mt-3 text-base  lg:text-xl lg:tracking-widest text-gray-700 font-body text-justify">
                            <strong> Superar sus límites y generar abundancia a sus inversionistas. </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
            
        <hr
            className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/> 

                <div className="place-items-center "> 
                    <button className={`btn`} >
                        <a href={pdf} target="_blank" rel="noopener noreferrer" download="ROSENDA_Brochure.pdf"> 
                            <img    className="w-22 h-20 py-2" 
                                    src="brochure.png"/> 
                                    Descarga el Brochure Rosenda
                        </a>
                    </button> 
                </div>
            <FormularioContacto/>  
        </>
    )
}

export default Rosenda
