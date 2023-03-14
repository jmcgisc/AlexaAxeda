// import React from 'react'
// import ReactPlayer from 'react-player'
// import pdf from '../../../public/INDO_Brochure.pdf'

// const Indo = () => {
//     return (
//         <>
//             <div className ="flex flex-cols py-8 px-6 ">
//                 <ReactPlayer
//                     url='https://www.youtube.com/watch?v=e6qNM45bUHg'
//                     className='react-player'
//                     controls
//                     playIcon	
//                     width='1000px'
//                     height='563px' 
//                 />
//             </div>

//             <div className ="flex flex-cols py-8 px-6 ">
//                 <ReactPlayer
//                     url='https://www.youtube.com/watch?v=0a1AdQCK8yY'
//                     className='react-player'
//                     controls
//                     playIcon	
//                     width='1000px'
//                     height='563px' 
//                 />
//             </div>

//             <div className ="flex flex-cols py-8 px-6 ">
//                 <ReactPlayer
//                     url=' https://www.youtube.com/watch?v=pnsNE5oqZOo&t=3s'
//                     className='react-player'
//                     controls
//                     playIcon	
//                     width='1000px'
//                     height='563px' 
//                 />
//             </div>

//             <div> 
//                 <button className={`btn`}>
//                     <a href={pdf} target="_blank" rel="noopener noreferrer" download="INDO_Brochure.pdf"> 
//                     Brochure Indo   
//                     </a>
//                 </button> 
//             </div>


//         </>
//     )
// }

// export default Indo


import React        from 'react'
import ReactPlayer  from 'react-player'
import Banner       from "../Aux/Banner"
import pdf from '../../../public/ROSENDA_Brochure.pdf'
import FormularioContacto from "./../Home/FormularioContacto"

const Indo = () => { 
    return (
        <> 
            <div className="bg-[url('/public/homeBack1.png')] flex flex-row-reverse "> 
                <img src="carrusel11.jpg" className="ellipse(50% 65% at 70% 50%)"/> 
            </div>

            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

            <div className ="container mx-auto grid grid-cols-1 xl:grid-cols-4 gap-4">
                <div className="col-start-1 col-end-4 xl:col-span-2"> 
                    <h2 className="font-serif text-2xl xl:text-4xl tracking-widest leading-normal xl:col-span-2 text-orange-900">
                        INDO Parque Industrial
                    </h2>
                    <h2 className="font-serif text-2xl md:text-xl xl:text-3xl tracking-widest leading-normal text-rose-900 px-4 xl:px-16">
                    Terrenos industriales en 
                        <strong className="underline decoration-axeda/[.33]"> Yucatán. </strong>
                    </h2>
                </div>   
            </div>
            
            <div className="p-12 xs:p-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:px-20 xl_ gap-8">
                <div className="flex flex-col"> 

                <ReactPlayer
                            url='https://www.youtube.com/watch?v=0a1AdQCK8yY&t=5s'
                            className='react-player' 
                            controls
                            playIcon	
                            width='100%'
                            height='100%' 
                />
                </div>

                <div className="grid grid-cols-1 gap-4 xl:py-20 xl:px-20">
                    <div className="flex flex-col xl:py-20"> 
                        <p className="text-gray-500 text-xl text-justify"> 
                            Es un parque industrial a 12 minutos del libramiento de Mérida, con gran vanguardia de tecnología en materia de 
                            seguridad para sus operaciones y funcionalidad, integrado por grandes vialidades, áreas verdes y recreativas como cancha de 
                            fútbol y amenidades idóneas para el esparcimiento del personal. 
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
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

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
                        <p className="text-gray-500 text-justify text-xl xl:py-20"> 
                            Una empresa inmobiliaria que busca facilitar el acceso al mundo de las inversiones  de forma inteligente y 
                            promoviendo alta calidad de vida, desarrollando bienes inmuebles en  las zonas de mayor crecimiento y demanda del 
                            sureste mexicano, con un solo objetivo en  mente: 
                        </p>

                        <p className="text-gray-500 text-justify text-xl"> 
                            Superar sus límites y generar abundancia a sus inversionistas. 
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 rounded-3xl"> 

                <ReactPlayer
                            url='https://www.youtube.com/watch?v=pnsNE5oqZOo&t=3s'
                            className='react-player' 
                            controls
                            playIcon	
                            width='100%'
                            height='100%' 
                />
                </div>
            </div>
            </div>

            <hr
                className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" /> 
 

                <div className="place-items-center "> 
                    <button className={`btn`} >
                        <a href={pdf} target="_blank" rel="noopener noreferrer" download="ROSENDA_Brochure.pdf"> 
                            <img    className="w-22 h-20 py-2" 
                                    src="brochure.png"/> 
                                    Brochure Rosenda
                        </a>
                    </button> 
                </div>
            <FormularioContacto/>  
        </>
    )
}

export default Indo
