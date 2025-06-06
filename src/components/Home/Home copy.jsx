import React from 'react'

function Home copy() {
  return (
    <div>
      Esto mas bonito, los circulos en el centro de la otra imagen, con buen espaciado 

 <section id="home" className="min-h-[90vh] bg-diamonBlack grid grid-cols-1 xl:grid-cols-8">  

                  {/*Information*/}
                        <div className="md:col-span-5 flex items-center justify-center p-12 py-8 xl:p-16">
                            <div className="flex flex-col gap-10">
                                <h1 className="text-4xl xl:text-7xl font-title xl:leading-[7.5rem]"> 
                                    INVIERTE EN 
                                    <span className="text-diamante px-4 py-2 border-primary_isla relative inline-block">CANCÚN </span>
                                    Y HAZ REALIDAD TUS  {"  "}
                                    <span className="text-diamante px-4 py-2 border-8 border-primary_isla relative inline-block">SUEÑOS
                                    <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-4 p-2 bg-primary_isla rounded-full box-content"/>
                                    <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-4 p-2 bg-primary_isla rounded-full box-content"/>
                                    <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-4 p-2 bg-primary_isla rounded-full box-content"/>
                                    <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-4 p-2 bg-primary_isla rounded-full box-content"/>
                                    </span>
                                 </h1>
                                <p className="text-gray-500 text-xl leading-[2.5rem]">¡Tu paraíso comienza aqui! legado es lo más importante, .</p>
                    
                                    <div className="flex flex-col md:flex-row items-center gap-4">
                            
                                        <Popup trigger={<button className= "w-full xl:w-auto bg-diamante text-white py-2 px-8 rounded-xl text-xl shadow-lg shadow-indigo-500/40" 
                                        > Contáctame</button>} {...{   contentStyle }}
                                            position="right center">
                                            <div className="flex flex-full">
                                                <FormularioContactoPopup/>
                                            </div>
                                        </Popup> 
                                        {/* <button  onClick={(e) => {
                                                e.preventDefault();
                                                window.open('https://eva3d.com/recorridos-virtuales-360/axeda/rosavento/index.htm', '_blank');
                                                }} 
                                                className="text-xl flex items-center justify-start text-left gap-4 py-9 px-20 rounded-xl 
                                                hover:drop-shadow-xl
                                                " >
                                                    <RiPlayFill className="bg-diamante text-white p-8 rounded-full box-content"/> 
                                                
                                        </button> */}
                                    </div> 
                                </div>  
                            </div>



            <div className="md:col-span-3 flex items-center justify-center relative">
            {/* Content image */}
            <div>
            {/* <img    src="Alexa-removebg-preview.png" */}
            <img    
            //src="AlexaDelgado.webp"
            src="LAGO-CENTRAL-CASA-CLUB-PRINCIPAL.webp"
                    className="w-[280px] h-[280px] md:w-[280px] md:h-[280px] object-cover xl:-mt-8" 
                    alt="Asesor Axeda Terrenos en Mérida y Cancún"
            />
            <div className="relative bg-white shadow-xl rounded-lg p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-12">
                <div className="flex items-center">
                <img
                    src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300"
                    alt='Persona 1'
                />
                <img
                    src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                    alt='Persona 2'
                />
                <img
                    src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                    alt='Persona 3'
                />
                <img
                    src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                    alt='Persona 4'
                />
                <img
                    src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                    className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
                    alt='Persona 5'
                />
                </div>
                <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
                    Te asesoramos desde el inicio
                </h2>
                <div className="flex items-center gap-2 text-lg text-gray-500"> 5
                <RiStarFill className="text-diamon" /> 
                            <a href="https://web.facebook.com/profile.php?id=100063816524796&_rdc=1&_rdr" 
                            target="_blank"
                            rel="noopener"> 
                                    Conoce Nuestros Testimonios
                            </a>
                </div>
                <div className="absolute -right-12 -bottom-12 -z-10">
                <div className="relative">
                    <RiCheckboxBlankCircleFill className="text-diamante text-8xl" />
                    <div className="absolute left-0 top-0 bg-white w-14 h-14"></div>
                </div>
                </div>
            </div>
            </div>

            {/* Circle */}
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] bg-white border-[10px] border-diamante rounded-full -z-10"></div>

            {/* Logos */}
            <img
            src="Isla_4.webp"
            className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] right-[1%] xl:right-[10%]"
            alt=''
            />
            <img
            src="Isla_3.webp"
            className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[-12%] xl:top-[5%] left-[6%] xl:left-[10%]"
            alt=''
            />
            <img
            src="Isla_4.webp"
            className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[4%] xl:left-[3%] -rotate-12"
            alt=''
            />
            </div>
            
    </section> 
    </div>
  )
}

export default Home copy
