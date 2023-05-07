import React        from 'react'
import ReactPlayer  from 'react-player'
import Banner       from "../Aux/Banner" 
import pdf from '../../../public/INDO_Brochure.pdf'
import FormularioContacto from "../Aux/FormularioContacto"  
import LayoutMap from '../Aux/LayoutMap'
import Slider from './Slider';

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
        <div className="grid-cols-2 bg-[url('/public/homeBack1.png')]">
        
        {/*Desarrollos*/}
        <div className="grid xl:grid-cols-2 gap-4">
            <div className="flex flex-col lg:grid-cols-4 lg:gap-2 rounded-3xl"> 
                <div className="grid grid-cols-1">  
                    <h1 className="text-[45px] text-axeda font-title px-12 mt-24 lg:mt-24 ">
                        -ROSENDA INDO-
                    </h1>
                        <p className ="text-gray-600 text-xl font-body text-justify px-12 py-12">
                            TERRENOS INDUSTRIALES EN PREVENTA MENSUALIDADES DESDE $5,250.00 MXN
                        </p>   

                        <p className="text-gray-700 text-base font-body text-justify tracking-widest px-12 py-8">
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

        {/*Imagen Beneficios PlusValia*/}
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-20 place-items-center bg-[url('/public/homeBack2.png')]">

            <div className="lg:col-start-1 lg:col-end-5">
                <img className="hover:shadow-lg dark:hover:shadow-black/30" alt="cancun zona hotelera" src="https://paseodelaselva.com/hana/wp-content/themes/paseoHana/assets/homeSlide3.png"
                    alt="Cancun" />
            </div>

            <div className="lg:col-span-3 flex flex-col justify-center"> 
                <h1 className="font-sans text-lg uppercase tracking-[0.5rem] mb-4 italic text-clip"><span>Cancún</span>, Invierte de forma inteligente</h1>
            </div>
        </div> 
        
            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 rounded-lg" />
            
            <div className="p-12 xs:p-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-20 xl_ gap-8 ">
                <div className="flex flex-col "> 

                <ReactPlayer
                            url='https://www.youtube.com/watch?v=0a1AdQCK8yY&t=5s'
                            className='react-player' 
                            controls 
                            width='100%'
                            height='100%' 
                />
                </div>

                <div className="grid grid-cols-1 gap-4 xl:py-20 xl:px-20">
                        <p className="font-chivo xl:leading-10 text-xl text-gray-700 text-justify "> 
                            Es un parque industrial a 12 minutos del libramiento de Mérida, con gran vanguardia de tecnología en materia de 
                            seguridad para sus operaciones y funcionalidad, integrado por grandes vialidades, áreas verdes y recreativas como cancha de 
                            fútbol y amenidades idóneas para el esparcimiento del personal. 
                        </p> 
                </div>
            </div>
            </div>
 
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
 
        
        {/*By Grupo Axeda*/}
 
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

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-600 md:text-sm">
                            Una empresa inmobiliaria que busca facilitar el acceso al mundo de las inversiones  de forma inteligente y 
                            promoviendo alta calidad de vida, desarrollando bienes inmuebles en  las zonas de mayor crecimiento y demanda del 
                            sureste mexicano, con un solo objetivo en  mente: 

                            Superar sus límites y generar abundancia a sus inversionistas. 
                    </p>
                    </div>
                </div>
            </div>
        </div>
 
            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <LayoutMap/>    

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
