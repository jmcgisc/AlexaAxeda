import React        from 'react'
import ReactPlayer  from 'react-player'
import Banner       from "../Aux/Banner" 
import FormularioContacto from "../Aux/FormularioContacto"
import SliderTerravento from './SliderTerravento'; 

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
        <div className="grid-cols-2 bg-[url('/public/homeBack1.png')]">

        {/*Desarrollos*/}
        <div className="grid xl:grid-cols-2 gap-4">
            <div className="flex flex-col lg:grid-cols-4 lg:gap-2 rounded-3xl"> 
                <div className="grid grid-cols-1">  
                    <h1 className="text-[45px] text-axeda font-title px-12 mt-10 lg:mt-24">
                        Terravento -Pedregal Residencial-
                    </h1>
                        <p className ="text-gray-600 text-xl font-body text-justify px-12 py-2">
                           Un desarrollo de 412 terrenos residenciales, ubicados al noreste de Mérida, a solo 25 minutos de las hermosas 
                           playas que conforman la costa esmeralda de Yucatán.
                        </p>   

                    <h3 className="text-axeda font-title text-3xl px-12 py-2 mt-20">
                        Amenidades exclusivas para los residentes
                    </h3>   

                        <p className="text-gray-700 text-base font-body text-justify tracking-widest px-12 py-2">
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

        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

            <div className ="container mx-auto grid grid-cols-1 xl:grid-cols-4 gap-4">
                <div className="col-start-1 col-end-4 xl:col-span-2"> 
                    <h2 className="font-title text-2xl xl:text-4xl tracking-widest leading-normal xl:col-span-2 text-orange-900">
                        Conoce los beneficios de la
                    </h2>
                    <h2 className="font-serif text-2xl md:text-xl xl:text-3xl tracking-widest leading-normal text-rose-900 px-4 xl:px-16">
                        ubicación de tu
                        <strong className="underline decoration-axeda/[.33]"> próxima inversión. </strong>
                    </h2>
                </div>    
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
                        <p className="font-body text-xl text-gray-500 text-justify"> 
                            Su ubicación permite gran conectividad hacia diversos sitios de interés, así como a otros países a través de su Aeropuerto 
                            Internacional y el Puerto de Progreso.
                         </p>
                    </div>
                </div>
            </div>
            </div>
 
            <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>
 
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

        <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>


            <div className ="container mx-auto grid grid-cols-1 xl:grid-cols-4 gap-8">
                <div className="col-start-1 col-end-4 xl:col-span-2"> 
                    <h2 className="font-serif text-2xl xl:text-3xl tracking-widest leading-normal text-orange-900">
                        Desarrollado por
                    </h2>
                    <h2 className="font-serif text-2xl xl:text-3xl tracking-widest leading-normal text-rose-900 px-16">
                        Grupo
                        <strong className="underline decoration-axeda/[.33]"> Axeda.</strong>
                    </h2>
                </div>  
            </div>
            
            <div className="p-12 xs:p-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-20 gap-8">

                <div className="grid grid-cols-1 xl:py-20 xl:px-20">

                    <div className="flex flex-col gap-4"> 
                        <p className="font-body text-xl text-gray-500 text-justify"> 
                        Una empresa inmobiliaria que busca facilitar el acceso al mundo de las inversiones  de forma inteligente y 
                        promoviendo alta calidad de vida, desarrollando bienes inmuebles en  las zonas de mayor crecimiento y demanda del 
                        sureste mexicano, con un solo objetivo en  mente: 
                        </p>

                        <p className="font-body text-xl text-gray-500 text-justify"> 
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
  
            <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

            <div className="h4/5">
            </div>
            <div className ="flex bg-axeda overflow-hidden justify-content-center mt-md-3 mb-3">
                {/* <Banner/>  */}
            </div>
        
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
            </div>
 
            <hr
            className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100"/>

            <FormularioContacto/>  
        </>
    )
}

export default Terravento