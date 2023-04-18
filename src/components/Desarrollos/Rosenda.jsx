import React        from 'react';
import ReactPlayer  from 'react-player';
import Banner       from "../Aux/Banner";
import pdf from '../../../public/ROSENDA_Brochure.pdf';
import FormularioContacto from "../Aux/FormularioContacto";
import LayoutMap from '../Aux/LayoutMap';
import Slider from './Slider';

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
        <div className="grid-cols-2 bg-[url('/public/homeBack1.png')]">

        {/*Desarrollos*/}
        <div className="grid xl:grid-cols-2 gap-4">
            <div className="flex flex-col lg:grid-cols-4 lg:gap-2 rounded-3xl"> 
                <div className="grid grid-cols-1 lg:mt-24">  
                    <h1 className="text-[45px] text-axeda font-title px-12 mt-10 lg:mt-18 ">
                        ROSENDA TEMOZÓN 
                    </h1>
                        <p className ="text-gray-600 text-xl font-body text-justify px-12">
                            Departamentos en Mérida Zona Norte desde 1.5 MDP
                        </p>   

                    <h1 className="text-[45px] text-axeda font-title px-12 mt-10 lg:mt-18 ">
                        ROSENDA TEMOZÓN II
                    </h1>   

                        <p className="text-gray-700 text-base font-body text-justify tracking-widest px-12 py-2">
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

            <hr
                className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

            <div className ="container mx-auto grid grid-cols-1 xl:grid-cols-4 gap-4">
                <div className="col-start-1 col-end-4 xl:col-span-2"> 
                    <h2 className="font-title xl:text-2xl xl:text-4xl tracking-widest leading-normal xl:col-span-2 text-orange-900">
                        ROSENDA TEMOZÓN MÉRIDA
                    </h2>
                    <h2 className="font-title text-2xl md:text-xl xl:text-3xl tracking-widest leading-normal text-rose-900 px-4 xl:px-16">
                        Departamentos en
                        <strong className="underline decoration-axeda/[.33]"> venta. </strong>
                    </h2>
                </div>   
            </div>
            
            <div className="p-12 xs:p-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-20 gap-8">
                <div className="flex flex-col"> 

                <ReactPlayer
                            url='https://www.youtube.com/watch?v=oiZ4NmGF3h4&t=1s'
                            className='react-player' 
                            controls
                            playIcon	
                            width='100%'
                            height='100%' 
                />
                </div>

                <div className="grid grid-cols-1 gap-4 xl:py-20 xl:px-20">
                    <div className="flex flex-col gap-4"> 
                        <p className="font-chivo text-xl text-gray-500 text-justify"> 
                            Es una colección de 51 departamentos exclusivos con 8 modelos diferentes que conjugan armonía, 
                            calidez y funcionalidad; adaptándose a tu estilo de vida, ubicados en una de las zonas más exclusivas en Mérida. 
                        </p>
                        <p className="font-chivo text-xl text-gray-500 text-justify"> 
                            Cuenta con amenidades, así como proximidad a complejos comerciales de prestigio, hospitales y servicios de primer nivel.
                        </p>
                    </div>
                </div>
            </div>
            </div>
 
            <hr
                className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
 
            <div className="grid xl:grid-cols-7 xl:gap-4 place-items-center xl:py-30 bg-[url('/public/homeBack1.png')]">
                <div></div>
                        <img src="amenidades_azul.png" className="h-28 w-14 py-4 "/>    
                        <p className ="text-3xl text-axeda py-10">Amenidades</p>
                <div></div>
                        <img src="maps_azul.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10 ">Ubicación</p>
                <div></div>

                <div></div>
                        <img src="plusvalia_azul.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10">Plusvalía</p>
                <div></div>
                        <img src="areasv_azul.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda  py-10">Áreas Verdes</p>
                <div></div>
 
                <div></div>
                        <img src="familia_azul.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10">Ambiente Familiar</p>
                <div></div>
                        <img src="credito_azul.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10 ">Facilidad de pago</p>
                <div></div>

                <div></div> 
                        <img src="desarrollos_azul.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10">Desarrollos</p>
                <div></div>
                        <img src="ubicacion_azul.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10 ">Facilidad de pago</p>
                <div></div>
            </div> 

            <hr
                className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>


            <LayoutMap/>    

            <hr
                className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

            <div className ="container mx-auto grid grid-cols-1 xl:grid-cols-4 gap-8">
                <div className="col-start-1 col-end-4 xl:col-span-2"> 
                    <h2 className="font-title text-2xl xl:text-3xl tracking-widest leading-normal text-orange-900">
                        Desarrollado por
                    </h2>
                    <h2 className="font-title text-2xl xl:text-3xl tracking-widest leading-normal text-rose-900 px-16">
                        Grupo
                        <strong className="underline decoration-axeda/[.33]"> Axeda.</strong>
                    </h2>
                </div>  
            </div>
            
            <div className="p-10 xs:p-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-20 gap-4">

                <div className="grid grid-cols-1 xl:py-20 xl:px-20">

                    <div className="flex flex-col gap-4"> 
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
                            url='https://www.youtube.com/watch?v=pnsNE5oqZOo&t=3s'
                            className='react-player' 
                            controls 
                            width='100%'
                            height='100%' 
                />
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
