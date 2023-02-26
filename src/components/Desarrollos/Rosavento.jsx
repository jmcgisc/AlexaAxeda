import React from 'react'
import ReactPlayer from 'react-player'

const Rosavento = () => {
    return (
        <>
        <div class="grid grid-cols-6 gap-4">
            <div class="col-start-2 col-span-4 bg-primary ...">01</div>
            <div class="col-start-1 col-end-3 ...">02</div>
            <div class="col-end-7 col-span-2 ...">03</div>
            <div class="col-start-2 col-span-4 bg-primary ...">
                <h2 className="text-5xl underline font-sans italic	">Conoce tus  </h2>
                <h1 className="text-5xl underline font-sans italic font-bold tracking-wide	">oportunidades Rosavento</h1>
            </div>
            <div class="col-start-2 col-end-7 ...">
                <p>Elige e invierte en tu próximo patrimonio en las zonas con mejor plusvalía de Mérida y  Cancún. </p>
            </div>
        </div>

        <div class="grid grid-cols-6 gap-4"> 
            <div class="col-start-1 col-end-3 ...">02</div>
            <div class="col-end-7 col-span-2 ...">03</div>
            <div class="col-start-2 col-span-4 bg-primary ...">
                <h2 className="text-5xl underline font-sans italic	">Conoce los beneficios de la </h2>
                <h1 className="text-5xl underline font-sans italic font-bold tracking-wide	">ubicación de tu próxima inversión.</h1>
            </div>
            <div class="col-start-2 col-end-7 ..."> 
            </div>
        </div>
 
        <div class="grid grid-cols-4 gap-4">
            <div>01</div>
            <div className="col-start-2" >
                <div className ="flex flex-cols py-8 px-6 ">
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=e6qNM45bUHg'
                        className='react-player' 
                        controls
                        playIcon	
                        width='532px'
                        height='281px' 
                    />
                </div>
            </div>
            <div>
                <p className="py-8">
                Destaca por su belleza, cultura, calidad de vida y seguridad, lo que la ha posicionado a su capital entre las mejores ciudades para vivir e invertir del sureste mexicano.
                Su ubicación permite gran conectividad hacia diversos sitios de interés, así como a otros países a través de su Aeropuerto Internacional y el Puerto de Progreso.
                </p>
            </div>
            <div>04</div>

        </div>

            <div className ="flex flex-cols py-8 px-6 ">
                <ReactPlayer
                    url=' https://www.youtube.com/watch?v=pnsNE5oqZOo&t=3s'
                    className='react-player'
                    controls
                    playIcon	
                    width='1000px'
                    height='563px' 
                />
            </div>
        </>
    )
}

export default Rosavento
