import React     ,   { useRef, useState } from 'react';
import ReactPlayer  from 'react-player'
import Banner       from "../Aux/Banner"
import pdfC         from '../../../public/ROSAVENTO CANCÚN_Brochure.pdf'
import pdfM         from '../../../public/Brochure_Rosavento_Merida.pdf'
import FormularioContacto from "../Aux/FormularioContacto"
import LayoutMap from '../Aux/LayoutMap' 
import Slider from './Slider'

const Rosavento = () => { 
    return (
        <>  
        <div className="lg:hidden">
        <div className="grid grid-cols-1 gap-8">
                    <div className="flex flex-row-reverse sm:col-start-1 w-full h-56 xl:h-[600px] xl:ellipse-desarrollos"> 
                        <Slider/>
                    </div>
                </div>
        </div>
        <div className="grid-cols-2 bg-[url('/public/homeBack1.png')]">
            {/*Desarrollos*/}

            <div className="grid xl:grid-cols-2 gap-4">
                <div className="flex flex-col lg:grid-cols-4 lg:gap-2 rounded-3xl"> 

                <div className="grid grid-cols-1">  
                    <h1 className="text-[45px] text-axeda font-title px-12 mt-10 lg:mt-24 ">
                        Rosavento -Tierra Maya-</h1>
                        <p className ="text-gray-600 text-xl font-body text-justify px-12 py-2">
                            Terrenos residenciales al norte de Mérida  
                                Un paraíso con mensualidades desde $1,992.00 MXN 
                        </p>   

                        <p className="text-axeda font-title text-3xl px-12 py-2 mt-3">
                            Rosavento Merida
                        </p>   

                        <p className="text-gray-600 text-base font-body text-justify px-12 py-2">
                            Nuestros terrenos residenciales se encuentran situados dentro de un desarrollo al norte de Mérida, con todos los servicios a pie de lote. Su excelente ubicación ofrece cercanía con hospitales de primer nivel y centros comerciales; así como de playas y sitios turísticos.
                        </p>

                        <p className="text-axeda font-title text-3xl py-2 mt-3 px-12">
                            Rosavento Cancún
                        </p>   
 
                        <p className="text-gray-600 text-base font-body text-justify px-12 py-2">
                            Nuestros terrenos se encuentran dentro de un desarrollo residencial con amenidades que aseguran tu calidad de vida, seguridad y la plusvalía de tu patrimonio. La ubicación perfecta para invertir y disfrutar de la vida que siempre quisiste en el caribe mexicano.
                        </p>
                </div> 
                </div>

                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-8">
                    <div className="flex flex-row-reverse sm:col-start-1 w-full h-56 xl:h-[600px] xl:ellipse-desarrollos"> 
                        <Slider/>
                    </div>
                </div>
            </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-20 place-items-center
        
        bg-[url('/public/homeBack2.png')]">

            <div class="lg:col-start-1 lg:col-end-5">
                <img class="hover:shadow-lg dark:hover:shadow-black/30" alt="cancun zona hotelera" src="https://paseodelaselva.com/hana/wp-content/themes/paseoHana/assets/homeSlide3.png"
                    alt="Cancun" />
            </div>

            <div class="lg:col-span-3 flex flex-col justify-center"> 
                <h1 class="font-sans text-lg uppercase tracking-[0.5rem] mb-4"><span>Cancún</span>, Invierte de forma inteligente</h1>
            </div>
        </div> 

            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

        <div className ="container mx-auto grid grid-cols-1 xl:grid-cols-4 gap-4">
            <div className="col-start-1 col-end-4 xl:col-span-2"> 
                <h2 className="font-title text-2xl xl:text-4xl tracking-widest leading-normal xl:col-span-2 text-orange-900">
                    Conoce los beneficios de la
                </h2>
                <h2 className="font-title text-3xl md:text-xl xl:text-3xl tracking-widest leading-normal text-rose-900 px-4 xl:px-16">
                    ubicación de tu
                    <strong className="underline decoration-axeda/[.33]"> próxima inversión. </strong>
                </h2>
            </div>

        {/* 
                <div className="col-start-3 col-end-4 col-span-2 px-12">
                    <button className="">

                    </button>
                </div>

                <ul className="nav nav-tabs mb-4 justify-content-end" id="investmentTab-widget_1673888685032" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="tab-elem-widget_1673888685032-1" data-toggle="tab" href="#tab-widget_1673888685032-1" role="tab" aria-controls="tab-widget_1673888685032-1" aria-selected="true">Yucatán</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="tab-elem-widget_1673888685032-2" data-toggle="tab" href="#tab-widget_1673888685032-2" role="tab" aria-controls="tab-widget_1673888685032-2" aria-selected="false">Quintana Roo</a>
                    </li>
                </ul> */}      
            </div>
            
            <div className="p-12 xs:p-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-20 gap-8">
                <div className="flex flex-col"> 

                <ReactPlayer
                            url='https://www.youtube.com/watch?v=e6qNM45bUHg'
                            className='react-player' 
                            controls 
                            width='100%'
                            height='100%' 
                />
                </div>

                <div className="grid grid-cols-1 gap-4 xl:py-20 xl:px-20">

                    <div className="flex flex-col gap-4"> 
                        <p className="font-chivo text-xl text-gray-500 text-justify"> 
                            Destaca por su belleza, cultura, calidad de vida y seguridad, lo que la ha posicionado a su capital entre las mejores 
                            ciudades para vivir e invertir del sureste mexicano.
                         </p>
                        <p className="font-chivo text-xl text-gray-500 text-justify"> 
                            Su ubicación permite gran conectividad hacia diversos sitios de interés, así como a otros países a través de su Aeropuerto 
                            Internacional y el Puerto de Progreso.
                         </p>
                    </div>
                </div>
            </div>
            </div>
 
            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
 
            <div className="grid xl:grid-cols-7 xl:gap-4 place-items-center xl:py-30 bg-[url('/public/backGreen.png')]">
                <div></div>
                        <img src="amenidades.png" className="h-28 w-14 py-4 "/>    
                        <p className ="text-3xl text-axeda font-light py-10">Amenidades</p>
                <div></div>
                        <img src="maps.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda font-light py-10 ">Ubicación</p>
                <div></div>

                <div></div>
                        <img src="plusvalia.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda font-light py-10">Plusvalía</p>
                <div></div>
                        <img src="areasv.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda font-light py-10">Áreas Verdes</p>
                <div></div>
 
                <div></div>
                        <img src="familia.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda font-light py-10">Ambiente Familiar</p>
                <div></div>
                        <img src="credito.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda font-light py-10 ">Facilidad de pago</p>
                <div></div>

                <div></div> 
                        <img src="desarrollos.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda font-light py-10">Desarrollos</p>
                <div></div>
                        <img src="ubicacion.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda font-light py-10 ">Facilidad de pago</p>
                <div></div>
            </div>
 
            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 " />

            <LayoutMap/>    

 
            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 " />

            <div className ="container mx-auto grid grid-cols-1 xl:grid-cols-4 gap-8 ">
                <div className="col-start-1 col-end-4 xl:col-span-2"> 
                    <h2 className="font-title text-2xl xl:text-3xl tracking-widest leading-normal text-orange-900 px-16">
                        Desarrollado por
                    </h2>
                    <h2 className="font-title text-2xl xl:text-3xl tracking-widest leading-normal text-rose-900 xl:px-28">
                        Grupo
                        <strong className="underline decoration-axeda/[.33]"> Axeda.</strong>
                    </h2>
                </div>  
            </div>
            
            <div className="p-12 xs:p-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-20 gap-8 ">

                <div className="grid grid-cols-1 xl:py-20 xl:px-20">
                    <div className="flex flex-col gap-8"> 
                        <p className="font-chivo text-xl text-gray-500 text-justify"> 
                            Una empresa inmobiliaria que busca facilitar el acceso al mundo de las inversiones  de forma inteligente y 
                            promoviendo alta calidad de vida, desarrollando bienes inmuebles en  las zonas de mayor crecimiento y demanda del 
                            sureste mexicano, con un solo objetivo en  mente: 
                        </p>

                        <p className="font-chivo text-xl text-gray-500 text-justify"> 
                            Superar sus límites y generar abundancia a sus inversionistas. 
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 rounded-3xl"> 

                <ReactPlayer
                            url=' https://www.youtube.com/watch?v=pnsNE5oqZOo&t=3s'
                            className='react-player' 
                            controls 
                            width='100%'
                            height='100%' 
                />
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

            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <div className="grid grid-cols">   
                
            <div className ="mx-auto grid grid-cols-2 bg-gray-100">
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
            </div>

            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <div className="flex flex-wrap grid gap-2 grid-cols-2 place-items-center">
                <div> 
                    <button className={`btn`}>
                        <a href={pdfC} target="_blank" rel="noopener noreferrer" download="ROSAVENTO CANCÚN_Brochure.pdf"> 
                        </a>
                            <img    className="w-22 h-20 py-2 " 
                                    src="brochure.png"/> 
                                    Descarga el Brochure Rosavento Cancún 
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

            <FormularioContacto/>  
        </>
    )
}

export default Rosavento
