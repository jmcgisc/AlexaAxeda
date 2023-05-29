import React from 'react';
import ReactPlayer  from 'react-player';

const Video = () => {
    return ( 
        <div className="bg-BackgroundGray lg:py-24 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0 overflow-x-auto">
        {/*/ Desarrollos Axeda */} 
              <div className="container px-6 py-8 mx-auto">
                  <h1 className="text-3xl font-title text-center text-axeda capitalize lg:text-4xl"> 
                    Evento de "Supervisión de obra de "
                  <strong className="underline decoration-axeda/[.33]"> ROSAVENTO Ciudad Maya.</strong>
                  </h1>
  
                  <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                      <div className="object-cover  w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96">
                          <ReactPlayer
                                      url='https://www.youtube.com/watch?v=FEHDi1T5dFM'
                                      className='react-player' 
                                      controls 
                                      width='100%'
                                      height='100%' 
                          />
  
                      </div> 
                      
                      <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 "> 
                          <p className="block mt-4 text-2xl font-semibold text-axeda hover:underline md:text-3xl">
                            Julián Zacarías Curi
                          </p>
                          <p className="mt-3 text-base lg:text-xl lg:tracking-widest text-gray-700 font-body text-justify">
                                  Presidente Municipal de Progreso  
                          </p>
                          <p className="mt-3 text-base  lg:text-xl lg:tracking-widest text-gray-700 font-body text-justify">
                              <strong> El presidente municipal de Progreso, Julían Zacarías Curi, en el acto de Supervisión de la Obra
                                  de Rosavento, Ciudad Maya, felicita al grupo Axeda por la apuesta y progreso de esta infraestructura. </strong>
                          </p>
                      </div>
                  </div>
              </div> 
        </div>
    )
}

export default Video
