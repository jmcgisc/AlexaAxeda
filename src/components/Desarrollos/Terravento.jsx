import React        from 'react'
import Banner       from "../Aux/Banner" 
import MapSection   from '../Aux/MapTerravento'
import YoutubeEmbed from "../Aux/YoutubeEmbed";
import FormularioContacto from "../Aux/FormularioContacto"
import SliderTerravento from './SliderTerravento'; 
import {RiCheckboxBlankCircleFill}  from "react-icons/ri";
import SliderAmenidadesTerravento   from './SliderAmenidades/SliderAmenidadesTerravento';

const Terravento = () => { 
    return (
        <> 
        {/*Slider Mobile*/}
        <div className="lg:hidden">
            <div className="grid grid-cols-1 gap-8">
                <div className="flex flex-row-reverse sm:col-start-1 w-full h-56 xl:h-[600px] xl:ellipse-desarrollos"> 
                    <SliderTerravento/>
                </div>
            </div>
        </div>

        {/*Background*/}
        <div className="grid-cols-2 bg-[url('/public/backGreen.png')]">

        {/*Desarrollos*/}
        <div className="grid xl:grid-cols-2 gap-4">
            <div className="flex flex-col lg:grid-cols-4 lg:gap-2 rounded-3xl"> 
                <div className="grid grid-cols-1">  
                    <h1 className="text-[45px] text-axeda font-title px-4 lg:px-36 lg:mt-14 mt-6">
                        Terravento -Pedregal Residencial-
                    </h1>
                        <p className ="text-lg lg:text-2xl lg:mt-2 lg:font-body font-serif text-justify text-gray-100 py-2 px-4 lg:px-36 ">
                           Un desarrollo de 412 terrenos residenciales, ubicados al noreste de Mérida, a solo 25 minutos de las hermosas 
                           playas que conforman la costa esmeralda de Yucatán.
                        </p>   

                    <h2 className="text-axeda text-3xl font-title px-6 lg:px-36 py-2 mt-6">
                        Amenidades exclusivas para los residentes
                    </h2>   

                        <p className="text-lg lg:text-xl lg:font-body font-serif text-justify text-gray-100 py-2 px-6 lg:px-36 lg:mt-2 mb-4">
                            Un lugar donde el estilo mediterraneo y el cuidado en los detalles convergen bajo un lujo discreto    
                        </p>

                </div> 
            </div>

        {/*Slider LG*/}
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-8">
                    <div className="flex flex-row-reverse sm:col-start-1 w-full h-56 xl:h-[600px] xl:ellipse-desarrollos"> 
                        <SliderTerravento/>
                    </div>
                </div>
            </div>
        </div>

        {/*Imagen Beneficios PlusValia*/}
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-20 place-items-center bg-[url('/public/homeBack2.png')]">

            <div className="lg:col-start-1 lg:col-end-5">
                <img className="hover:shadow-lg dark:hover:shadow-black/30" alt="ciudad de Mérida" src="merida.jpg" />
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center"> 
                <h1 className="text-lg font-serif px-3 uppercase tracking-[0.5rem] mb-4 mt-4 italic text-clip"><span>Mérida</span>, 
             la animada capital del estado de Yucatán en México, tiene una rica herencia maya y colonial.</h1>
            </div>
        </div> 

          {/*Beneficios Terravento*/}
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
         
        <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-title text-center text-gray-600 capitalize lg:text-4xl"> 
                Pedregal Residencial Beneficios 
                <strong className="underline decoration-axeda/[.33]"> terravento.</strong>
                </h1>

                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <div className="object-cover  w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96">
                        <YoutubeEmbed embedId="QOOoKhYc9cI" />
                    </div>
                    
            {/* <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""/> */}

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 "> 

                    <a href="#" className="block mt-4 text-2xl text-axeda font-semibold  hover:underline md:text-3xl">
                        Mérida, oportunidad única para invertir
                    </a>

                    <p className="lg:text-xl text-lg lg:font-body font-serif text-gray-500 text-justify mb-4 mt-4"> 
                        Es un desarrollo residenciales diseñado con la finalidad de rodearse de bienestar, y sumergirse en la armonía que brinda el lugar más pacífico de sureste de México.
                    </p>

                    <p className="lg:text-xl text-lg lg:font-body font-serif text-gray-500 text-justify"> 
                          
                        Un lugar donde el estilo mediterráneo y el cuidado de los detalles convergen bajo el lujo discreto, creando espacios que reflejan la calidez humana y el espíritu de sentirse en
                        libertad.

                        Un desarrollo residencial al noreste de Mérida, a sólo 30 minutos de las hermosas playas que conforman la Costa Esmeralda de Yucatán.
                    </p>

                    </div>
                </div>
            </div>
        </div>

        {/*Ocultamos para mobile*/} 
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-8">
            
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

        {/*Amenidades*/} 
            <div className="grid xl:grid-cols-7 xl:gap-4 place-items-center xl:py-30 bg-[url('/public/backGreen.png')]">
                <div></div>
                        <img src="amenidades.png" className="h-28 w-14 py-4 "/>    
                        <p className ="text-3xl text-axeda py-10">Amenidades</p>
                <div></div>
                        <img src="maps.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10 ">Ubicación</p>
                <div></div>

                <div></div>
                        <img src="plusvalia.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10">Plusvalía</p>
                <div></div>
                        <img src="areasv.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda  py-10">Áreas Verdes</p>
                <div></div>
 
                <div></div>
                        <img src="familia.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10">Ambiente Familiar</p>
                <div></div>
                        <img src="credito.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10 ">Facilidad de pago</p>
                <div></div>

                <div></div> 
                        <img src="desarrollos.png" className="h-28 w-14 py-4"/>
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
                        <SliderAmenidadesTerravento/>
                    </div>
                </div>
        </div>
        
        {/*Mapa*/}
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
        
        <div className="p-8 flex flex-col gap-8 bg-gray-100">
                    <h1 className="lg:text-[60px] text-[35px] text-center font-title ">
                            ¡Zonas comerciales, áreas verdes e increibles ventajas cerca de tu terreno!
                    </h1>
                    <div className="flex justify-center gap-6"> 
                        <p className="lg:text-3xl text-xl text-center lg:font-chivo font-serif lg:text-gray-400">
                            Un desarrollo residencial al noreste de Mérida, a sólo 30 minutos de las hermosas playas que conforman la Costa Esmeralda de Yucatán.
                        </p>
                    </div>
                        <div className="flex xl:flex-col items-center justify-center gap-8">
                    <MapSection  
                        // center={{center}}  
                        />
                    </div>
            </div>   


    {/*Cotizador Indo*/} 
        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

        <div className="grid grid-cols-1 flex flex-cols lg:grid-cols-8 bg-orange-700 lg:bg-gradient-to-r from-orange-500 to-orange-900">
            <div className="lg:col-start-2 lg:col-end-8 mb-5 ">
                <h1 className="text-4xl xl:text-4xl font-title text-white text-center underline text-lg lg:text-5xl mt-5">
                    ¡ Desde: $1,405.00 MXN. al mes !
                </h1> 
        </div>
 
        <div className="lg:col-start-2 lg:col-end-8 mb-5 text-center">
            <span className="text-xl xl:text-4xl xl:leading-[5.5rem] text-cyan-100 px-24 py-2 border-8 border-axeda relative inline-block">
                <a className="text-4xl xl:text-4xl text-white  font-body lg:text-5xl mt-5"
                href={"https://crm.rosavento.mx/cotizador/terravento/terravento/terravento?vendedor=MTk2%0A"} target="_blank" rel="noopener noreferrer">
                    Cotiza aquí TU lote en Terravento
                </a> 
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -left-5 -top-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -right-5 -top-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -left-5 -bottom-4 p-2 bg-axeda rounded-full box-content"/>
                    <RiCheckboxBlankCircleFill className="text-orange-400 text-base absolute -right-5 -bottom-4 p-2 bg-axeda rounded-full box-content"/>
            </span> 
        </div>

        <div className ="lg:col-start-2 lg:col-end-8  mb-5">
            <h2 className = "text-3xl text-white text-center font-sans px-12 py-2"> 
                    ¡Conoce la exclusividad de Terravento y sus 412 terrenos!
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
                        <YoutubeEmbed embedId="e6qNM45bUHg" />
                    </div> 
                    
                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 "> 

                        <p className="block mt-4 text-2xl font-semibold text-axeda hover:underline md:text-3xl">
                            Empresa orgullosamente mexicana
                        </p>

                        <p className="text-lg lg:text-xl lg:tracking-widest text-gray-700 lg:font-body font-serif text-justify mt-3"> 
                                Una empresa inmobiliaria que busca facilitar el acceso al mundo de las inversiones  de forma inteligente y 
                                promoviendo alta calidad de vida, desarrollando bienes inmuebles en  las zonas de mayor crecimiento y demanda del 
                                sureste mexicano, con un solo objetivo en  mente: 

                        </p>
                        <p className="text-xl lg:tracking-widest text-gray-900 lg:font-body font-serif text-justify mt-3"> 
                            <strong> Superar sus límites y generar abundancia a sus inversionistas. </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

    {/* <Banner/>  */}
    
            {/* <div className ="flex bg-axeda overflow-hidden justify-content-center mt-md-3 mb-3">

            </div> */}

{/*         
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

            <FormularioContacto/>  
        </>
    )
}

export default Terravento