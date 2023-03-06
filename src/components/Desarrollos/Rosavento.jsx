import React from 'react'
import ReactPlayer from 'react-player'
import Banner from "../Aux/Banner"
import pdf from '../../../public/ROSAVENTO CANCÚN_Brochure.pdf'
import pdf from '../../../public/Brochure_Rosavento_Merida.pdf'

const Rosavento = () => { 
    return (
        <> 

        <div className="bg-no-repeat bg-cover bg-center bg-fixed bg-auto opacity-70
                bg-[url('https://st.depositphotos.com/1491329/2197/i/950/depositphotos_21976063-stock-photo-ik-kil-cenote-chichen-itza.jpg')]">

           <div className="bg-no-repeat bg-cover bg-center bg-fixed w-full h-full py-2
                                                                bg-[url('/public/fondo2.jpg')] text-white ">

              <div class="flex flex-wrap grid grid-cols-6 gap-4"> 
            <div class="col-start-1 col-end-3"></div> 
            <div class="col-start-2 col-span-4 ">
                <h2 className="text-3xl text-center ">Descubre las  </h2>
                <h1 className="text-5xl font-bold py-3 tracking-wide text-center">OPORTUNIDADES DE ROSAVENTO</h1>
            </div>
            <div class="col-start-1 col-end-7 py-3 text-center ">
                <p>Elige e invierte en tu próximo patrimonio en las zonas con mejor plusvalía de Mérida y  Cancún. </p>
            </div>
            </div>
            </div>
        </div> 
        <div className="h4/5">

        </div>
        <div className ="flex bg-axeda overflow-hidden justify-content-center mt-md-3 mb-3">

            <Banner/> 
        </div>
        
        <div className="bg-no-repeat bg-cover bg-center bg-fixed w-full h-full
            bg-[url('/public/fondo2.jpg')] text-white hover:bg-gradient-to-r">
                <div class="flex flex-wrap grid grid-cols-6 gap-4"> 
                <div class="col-start-1 col-end-3"></div> 
                <div class="col-start-2 col-span-4 ">
                    <h2 className="text-xl ">Descubre las  </h2>
                    <h1 className="text-2xl underline italic font-bold tracking-wide">oportunidades de Rosavento</h1>
                </div>
                <div class="col-start-2 col-end-7 py-3 px-8 ">
                    <p>Elige e invierte en tu próximo patrimonio en las zonas con mejor plusvalía de Mérida y  Cancún. </p>
                </div>
            </div>
        </div>


        <div class="flex flex-wrap grid grid-cols-6 gap-4"> 
            <div class="col-start-1 col-end-3"></div> 
            <div class="col-start-2 col-span-4 ">
                <h2 className="text-xl ">Descubre las  </h2>
                <h1 className="text-2xl underline italic font-bold tracking-wide">oportunidades de Rosavento</h1>
            </div>
            <div class="col-start-2 col-end-7 py-3 px-8 ">
                <p>Elige e invierte en tu próximo patrimonio en las zonas con mejor plusvalía de Mérida y  Cancún. </p>
            </div>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
            <div class="md:col-start-1 "></div>
            <div class="md:col-start-2 "> 
                <img    className="md:w-[350px] md:h-[450px] hover:shadow-2xl rounded-3xl" 
                        src="oportunidades-rosavento-cun.webp"/>
            </div>

            <div class="md:col-start-3 ">   
                <img    className="md:w-[350px] md:h-[450px] hover:shadow-2xl rounded-3xl  " 
                        src="oportunidades-rosavento-mid.webp" />
            </div>

            <div class="md:col-start-4"></div>
        </div>

 
        <div class="grid grid-cols-6 gap-4 mx-auto py-8"> 
            <div class="col-start-1 col-end-3 "></div>
            <div class="col-end-7 col-span-2 "></div>
            <div class="col-start-2 col-span-4">
                <h2 className="text-xl italic">Conoce los beneficios de la </h2>
                <h1 className="text-2xl underline italic font-bold tracking-wide">ubicación de tu próxima inversión.</h1>
            </div>
            <div class="col-start-2 col-end-7 ..."> 
            </div>
        </div>
 
        <div class="grid grid-cols-4 gap-4">
            <div></div>
            <div className="col-start-2" >
                <div className ="flex flex-cols py-8 px-6 ">
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=e6qNM45bUHg'
                        className='react-player' 
                        controls
                        playIcon	
                        width='533px'
                        height='300px' 
                    />
                </div>
            </div>
            <div>
                <p className="py-8">
                    Destaca por su belleza, cultura, calidad de vida y seguridad, lo que la ha posicionado a su capital entre las mejores 
                    ciudades para vivir e invertir del sureste mexicano.
                
                 </p>  <p className="py-8">
                    Su ubicación permite gran conectividad hacia diversos sitios de interés, así como a otros países a través de su Aeropuerto 
                    Internacional y el Puerto de Progreso.
                </p>
            </div>
            <div>
            </div>
        </div>

    
        <div class="grid grid-cols-4 gap-4">
            <div></div>
            
            <div>
                <p className="py-8">
                   Desarrollado por Grupo Axeda
                
                 </p> 
                  <p className="py-8">
                 Una empresa inmobiliaria que busca facilitar el acceso al mundo de las inversiones  de forma inteligente y 
                 promoviendo alta calidad de vida, desarrollando bienes inmuebles en  las zonas de mayor crecimiento y demanda del 
                 sureste mexicano, con un solo objetivo en  mente: Superar sus límites y generar abundancia a sus inversionistas. 
                </p>
            </div>
            <div><div className="col-start-2" >
                <div className ="flex flex-cols py-8 px-6 ">
                    <ReactPlayer
                        url=' https://www.youtube.com/watch?v=pnsNE5oqZOo&t=3s'
                        className='react-player' 
                        controls
                        playIcon	
                        width='533px'
                        height='300px' 
                    />
                </div>
            </div>
            </div>
        </div>

        <div class="grid grid-cols-4 gap-4">
            <div></div>
            
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

        <div> 
            <button className={`btn`}>
                <a href={pdf} target="_blank" rel="noopener noreferrer" download="ROSAVENTO CANCÚN_Brochure.pdf"> 
                    Brochure Rosavento Cancún 
                </a>
            </button> 
        </div>

        <div> 
            <button className={`btn`}>
                <a href={pdf} target="_blank" rel="noopener noreferrer" download="Brochure_Rosavento_Merida.pdf"> 
                    Brochure Rosavento Mérida 
                </a>
            </button> 
        </div>

        </>
    )
}

export default Rosavento
