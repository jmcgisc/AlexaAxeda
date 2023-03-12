import React        from 'react'
import ReactPlayer  from 'react-player'
import Banner       from "../Aux/Banner"
import pdfC         from '../../../public/ROSAVENTO CANCÚN_Brochure.pdf'
import pdfM         from '../../../public/Brochure_Rosavento_Merida.pdf'

const Rosavento = () => { 
    return (
        <> 
            <div className="bg-[url('/public/homeBack1.png')] flex flex-row-reverse "> 
                <img src="carrusel11.jpg" className="ellipse(50% 65% at 70% 50%)"/> 
            </div>
            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <div className ="container mx-auto grid grid-cols-4">
                <div className="col-start-1 col-end-4 col-span-2 px-12"> 
                    <h2 className="font-serif text-3xl tracking-wider leading-normal text-orange-900">
                        Conoce los beneficios de  
                    </h2>
                    <h2 className="font-serif text-3xl tracking-wider leading-normal text-rose-900 px-16">
                        ubicación de tu
                        <strong class="underline decoration-axeda/[.33]"> próxima inversión. </strong>
                    </h2>
                </div>

                <div className="col-start-3 col-end-4 col-span-2 px-12">
                    <button className="">

                    </button>
                </div>

                <ul class="nav nav-tabs mb-4 justify-content-end" id="investmentTab-widget_1673888685032" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="tab-elem-widget_1673888685032-1" data-toggle="tab" href="#tab-widget_1673888685032-1" role="tab" aria-controls="tab-widget_1673888685032-1" aria-selected="true">Yucatán</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="tab-elem-widget_1673888685032-2" data-toggle="tab" href="#tab-widget_1673888685032-2" role="tab" aria-controls="tab-widget_1673888685032-2" aria-selected="false">Quintana Roo</a>
                    </li>
                </ul>
                
                {/*                 
                <div class="col-start-1 col-end-2 py-4 px-20 mx-auto sm:w-auto">


                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=e6qNM45bUHg'
                            className='react-player' 
                            controls
                            playIcon	
                            width='100%'
                            height='100%' 
                        />
                </div>  */}
 
                <div class="col-start-3 mx-auto">
                    <p className="py-8">
                        Destaca por su belleza, cultura, calidad de vida y seguridad, lo que la ha posicionado a su capital entre las mejores 
                        ciudades para vivir e invertir del sureste mexicano.
                    </p>  
                    <p className="py-8">
                        Su ubicación permite gran conectividad hacia diversos sitios de interés, así como a otros países a través de su Aeropuerto 
                        Internacional y el Puerto de Progreso.
                    </p>
                </div>
            </div>
 
            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
 

            <div class="grid grid-cols-7 gap-4 place-items-center py-30 bg-[url('/public/backGreen.png')]">
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
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <div className ="container mx-auto grid grid-cols-4">
                <div className="col-start-1 col-end-4 col-span-2 px-12 "> 
                    <h2 className="font-serif text-3xl tracking-wider leading-normal text-orange-900">
                        Desarrollado por
                    </h2>
                    <h2 className="font-serif text-3xl tracking-wider leading-normal text-rose-900 px-16">
                        Grupo
                        <strong class="underline decoration-axeda/[.33]"> Axeda.</strong>
                    </h2>
                </div>
                <div class="col-start-1 col-end-3 py-16 px-20">
                    <h2 className="">
                    Una empresa inmobiliaria que busca facilitar el acceso al mundo de las inversiones  de forma inteligente y 
                    promoviendo alta calidad de vida, desarrollando bienes inmuebles en  las zonas de mayor crecimiento y demanda del 
                    sureste mexicano, con un solo objetivo en  mente: Superar sus límites y generar abundancia a sus inversionistas. 
                    </h2>  
                </div>
                {/* <div class="col-start-3 col-end-3 py-4">
                <ReactPlayer
                            url=' https://www.youtube.com/watch?v=pnsNE5oqZOo&t=3s'
                            className='react-player' 
                            controls
                            playIcon	
                            width='533px'
                            height='300px' 
                        />
                </div> */}
            </div>

            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

<div class="mx-auto ">

<ReactPlayer
                            url=' https://www.youtube.com/watch?v=pnsNE5oqZOo&t=3s'
    className='react-player' 
    controls
    playIcon	
    width='100%'
    height='100%' 
/>
</div> 

            <div className ="container mx-auto grid grid-cols-4">
                <div className="col-start-1 col-end-4 col-span-2 px-12"> 
                    <h2 className="font-serif text-3xl tracking-wider leading-normal text-orange-900">
                            Descubre las 
                    </h2>
                    <h2 className="font-serif text-3xl tracking-wider leading-normal text-rose-900 px-16">
                            oportunidades de  
                        <strong class="underline decoration-axeda/[.33]"> Rosavento. </strong>
                    </h2>
                    <div className="col-start-2 col-end-7 py-3 px-8 ">
                        <p>Elige e invierte en tu próximo patrimonio en las zonas con mejor plusvalía de Mérida y  Cancún. </p>
                    </div>
                </div>
            </div>

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
            </div> 
            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />


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

            <div className="grid grid-cols-4 gap-4">
                <div></div>
                
            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

                <div>
                    <p className="py-8">
                    Rosavento 
                    </p> 
                    <p className="py-8">
                    Un desarrollo con un concepto único en el sureste de México, donde gracias a su  ubicación en las mejores zonas de 
                    Mérida y Cancún, es ideal para alcanzar tus objetivos de  inversión, ya sea para contruir tu patrimonio o para generar 
                    rendimientos gracias a su  plusvalía en ascenso. Además, cuenta con características y amenidades premium en las que toda la  familia podrán disfrutar de una vida tranquila en Mérida y Cancún.  
                    </p>
                </div>
            </div>

            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <div className="flex flex-wrap grid gap-2 grid-cols-2 place-items-center">
                <div> 
                    <button className={`btn`}>
                        <a href={pdfC} target="_blank" rel="noopener noreferrer" download="ROSAVENTO CANCÚN_Brochure.pdf"> 
                        </a>
                            <img    className="w-22 h-20 py-2 " 
                                    src="brochure.png"/> 
                                    Brochure Rosavento Cancún 
                    </button> 
                </div>

                <div className="place-items-center "> 
                    <button className={`btn`} >
                        <a href={pdfM} target="_blank" rel="noopener noreferrer" download="Brochure_Rosavento_Merida.pdf"> 
                            <img    className="w-22 h-20 py-2" 
                                    src="brochure.png"/> 
                                    Brochure Rosavento Mérida 
                        </a>
                    </button> 
                </div>
            </div>

            <hr
                class="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

        </>
    )
}

export default Rosavento
