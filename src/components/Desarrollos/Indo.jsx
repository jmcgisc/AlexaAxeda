import React        from 'react'
import ReactPlayer  from 'react-player'
import Banner       from "../Aux/Banner" 
import pdf from '../../../public/INDO_Brochure.pdf'
import FormularioContacto from "../Aux/FormularioContacto"  
import MapSection from '../Aux/MapIndo'
import Slider from './SliderIndo';
import {RiCheckboxBlankCircleFill} from "react-icons/ri";
import SliderAmenidadesIndo from './SliderAmenidades/SliderAmenidadesIndo';

//Esta dirreccion es la correcta de indo en la pagina de Axeda
const center = {
    lat: 21.098023925357964,
    lng: -89.39039807301391
  };

const Indo = () => { 
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
        <div className="grid-cols-2 bg-[url('/public/homeBack2.png')]">
        
        {/*Desarrollos*/}
        <div className="grid xl:grid-cols-2 gap-4">
            <div className="flex flex-col lg:grid-cols-4 lg:gap-2 rounded-3xl"> 
                <div className="grid grid-cols-1">  
                    <h1 className="text-[45px] text-axeda font-title px-12 mt-24 lg:mt-24 ">
                        -ROSENDA INDO-
                    </h1>
                        <p className ="text-gray-500 lg:text-2xl font-body text-justify px-12 py-12">
                            TERRENOS INDUSTRIALES EN <strong>PREVENTA</strong> MENSUALIDADES DESDE <strong> $3,937.50 MXN </strong>
                        </p>   

                        <p className="text-gray-700 text-xl font-body text-justify tracking-widest px-12 py-8">
                            Es un parque industrial a 12 minutos del libramiento de Mérida, con gran vanguardia de tecnología en materia de seguridad para sus operaciones y funcionalidad, integrado por grandes vialidades, áreas verdes y recreativas como cancha de fútbol y amenidades idóneas para el esparcimiento del personal.
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
        
        {/*Video Indo*/}
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

           <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-title text-center text-axeda capitalize lg:text-4xl text-justify"> 
                 ¿Por qué 
                <strong className="underline decoration-axeda/[.33]"> Yucatán </strong>
                es tan buena opción para invertir?
                </h1>

                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <div className="object-cover  w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96">
                        <ReactPlayer
                                    url='https://www.youtube.com/watch?v=0a1AdQCK8yY&t=5s'
                                    className='react-player' 
                                    controls 
                                    width='100%'
                                    height='100%' 
                        />

                    </div> 
                    
                <div className="mt-2 lg:w-1/2 lg:mt-0 lg:mx-6 "> 

                    <p className="block mt-2 text-xl font-semibold text-axeda hover:underline md:text-2xl text-justify ">
                    Durante 2022, Yucatán registró un histórico flujo acumulado de Inversión Extranjera Directa al alcanzar los 535.9 millones de dólares (mdd).
                    </p>

                    <p className="mt-3 text-base lg:text-xl lg:tracking-widest text-gray-700 font-body text-justify">
                            Indo es Parque industrial a 12 minutos del libramiento de Mérida, con gran vanguardia de tecnología en materia de 
                            seguridad para sus operaciones y funcionalidad, integrado por grandes vialidades, áreas verdes y recreativas como cancha de 
                            fútbol y amenidades idóneas para el esparcimiento del personal. 
                    </p>
                    </div>
                </div>
            </div>
        </div> 

        {/*Ocultamos para mobile*/} 
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-8">
            
        <hr
            className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
 
            <div className="grid xl:grid-cols-7 xl:gap-4 place-items-center xl:py-30 bg-[url('/public/homeBack2.png')]">
                <div></div>
                        <img src="amenidades.png" className="h-28 w-14 py-4 "/>    
                        <p className ="text-3xl text-axeda py-10">Amenidades</p>
                <div></div>
                        <img src="maps_azul.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10 ">Ubicación</p>
                <div></div>

                <div></div>
                        <img src="plusvalia_azul.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10">Plusvalía</p>
                <div></div>
                        <img src="areasv.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda  py-10">Áreas Verdes</p>
                <div></div>
 
                <div></div>
                        <img src="familia.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10">Ambiente Familiar</p>
                <div></div>
                        <img src="credito_azul.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10 ">Facilidad de pago</p>
                <div></div>

                <div></div> 
                        <img src="desarrollos_azul.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10">Desarrollos</p>
                <div></div>
                        <img src="ubicacion.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10 ">Facilidad de pago</p>
                <div></div>
            </div>
        </div>

        {/*Slider Mobile*/}
        <div className="lg:hidden">
                <div className="grid grid-cols-1 gap-8">
                    <div className="flex flex-row-reverse sm:col-start-1 w-full h-56 xl:h-[600px] xl:ellipse-desarrollos"> 
                        <SliderAmenidadesIndo/>
                    </div>
                </div>
        </div>

        {/*Cotizador Indo*/} 
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

        <div className="grid grid-cols-1 flex flex-cols lg:grid-cols-8 bg-gradient-to-r from-orange-500 to-orange-900">
            <div className="lg:col-start-2 lg:col-end-8 mb-5 ">
                <h1 className="text-4xl xl:text-4xl font-title text-white text-center underline font-title text-lg text-2xl lg:text-5xl mt-5">
                    ¡ INVIERTE DESDE $1,906.00 MXN al mes ! 
                </h1> 
        </div>
 
        <div className="lg:col-start-2 lg:col-end-8 mb-5 text-center">
            <span className="text-xl xl:text-4xl xl:leading-[5.5rem] text-cyan-100 px-24 py-2 border-8 border-axeda relative inline-block">
                <a className="text-4xl xl:text-4xl text-white font-body text-base text-2xl lg:text-5xl mt-5"
                href={"https://crm.rosavento.mx/cotizador/ciudad-maya/bora_cdmaya/bora_real?vendedor=MTk2%0A"} target="_blank" rel="noopener noreferrer">
                    Cotiza aquí TU lote 
                </a> 
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -left-5 -top-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -right-5 -top-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -left-5 -bottom-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -right-5 -bottom-4 p-2 bg-axeda rounded-full box-content"/>
            </span> 
        </div>

        <div className ="lg:col-start-2 lg:col-end-8  mb-5">
            <h2 className ="text-gray-800 text-3xl text-white text-center font-sans text-justify px-12 py-2"> 
                INDO en un paraíso productivo, un parque industrial a 12 minutos del libramiento de Mérida.
            </h2>
        </div> </div>
        
        {/*By Grupo Axeda*/}
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

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

                        <p className="mt-3 text-base lg:text-xl lg:tracking-widest text-gray-700 font-body text-justify">
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
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <div className="p-8 flex flex-col gap-8 bg-gray-100">
                    <h1 className="text-[60px] text-center font-title ">
                            ¡Privilegiada ubicación y conectividad!
                    </h1>
                    <div className="flex justify-center gap-6"> 
                        <p className="max-w-2xl text-center text-base font-chivo text-gray-400">
                            Yucatán es considerado como el estado con mayor crecimiento económico de México, además es líder en la generación y distribución de energía eléctrica.
                        </p>
                    </div>
                        <div className="flex xl:flex-col items-center justify-center gap-8">
                    <MapSection  
                    
                        // center={{center}}  
                        />
                    </div>
            </div>   

            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 " />

                <div className="place-items-center "> 
                    <button className={`btn`} >
                        <a href={pdf} target="_blank" rel="noopener noreferrer" download="INDO_Brochure.pdf"> 
                            <img    className="w-22 h-20 py-2" 
                                    src="brochure.png"/> 
                                    Descarga el Brochure Indo
                        </a>
                    </button> 
                </div>
            <FormularioContacto/>  

        </>
    )
}

export default Indo
