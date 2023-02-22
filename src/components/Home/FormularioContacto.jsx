import React from 'react'
import {RiPhoneFill, RiMailFill} from "react-icons/ri"
import {ImLocation} from "react-icons/im"

const FormularioContacto = () => {
    return ( 
        <div className ="antialiased bg-gray-100 overflow-hidden">

            <div className="flex flex-col w-full justify-center items-center overflow-hidden">
                <div className ="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 p-8 rounded-xl shadow-lg text-white overflow-hidden">  
                        
                        <div className ="flex flex-col space-y-8 justify-berween">
                            <div>    
                                <h1 className="font-bold text-4xl tracking-wide py-20"> Contáctame </h1>
                                <p  className ="p-2 text-cyan-100 text-sm">Te asesoramos desde el primer momento y te acompañamos en todo el proceso de compra, estás a un paso de comenzar con la mejor inversión</p>
                            </div> 
                            <div className="inline-flex space-x-2 items-center">
                                <RiPhoneFill className="text-teal-300 text-xl"/>
                                <span> +(52) 55 7013 7764 </span>  
                            </div>  
                            <div className="inline-flex space-x-2 items-center">
                                <RiMailFill className="text-teal-300 text-xl"/>
                                <span> asesor.alexadelgado@gmail.com </span>  
                            </div> 
                            <div className="inline-flex space-x-2 items-center">
                                <ImLocation className="text-teal-300 text-xl"/>º
                                <span> Cd. México, Merida, Cancún </span>  
                            </div>  

                            </div>
                        <div className="relative"> 
                         <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -right-top-28"></div>
                        <div className="absolute  w-40 h-40 bg-teal-400 rounded-full -left-16 -bottom-16"></div> 
 
                        <div className="relative z-10 bg-white rounded-xl shadow-lg hover:shadow-indigo-500/40 p-8 text-gray-600 md:w-90 " >

                            <form action ="" className="flex flex-col space-y-4 " >
                                <div>
                                    <label for="" class="text-sm">Nombre Completo*</label>
                                    <input type="text" placeholder="Nombre Completo" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300 "/>
                                </div>

                                <div>
                                    <label for="" class="text-sm">Correo electrónico*</label>
                                    <input type="text" placeholder="Correo electrónico*" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300 "/>
                                </div>

                                <div>
                                    <label for="" class="text-sm">Número de movil*</label>
                                    <input type="text" placeholder="Número de movil*" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300 "/>
                                </div>

                                <div>
                                    <label for="" class="text-sm">Desarrollo de interés</label>
                                    <input type="text" placeholder="Desarrollo de interés" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300 "/>
                                </div>

                                <div>
                                    <label for="" class="text-sm">alguna pregunta del terreno...</label> 
                                    <input type="text" placeholder="xxxx" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300 "/>
                                </div>

                                <div>
                                    <label for="" class="text-sm">Inversión estimada para el enganche</label> 
                                    <input type="text" placeholder="Inversión estimada para el enganche" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300 "/>
                                </div>

                                <div>
                                    <label for="" class="text-sm">Mensaje</label> 
                                    <input type="text" placeholder="Mensaje" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300 "/>
                                </div>
 
                                <button
                                    type="button"
                                    className=" inline-block self-end font-semibold py-2 px-6 bg-primary text-white rounded-xl shadow-lg shadow-indigo-500/40 py-2 uppercase text-sm"
                                >
                                    Envíar Formulario
                                </button>
                            </form> 

                        </div>   
                        </div>
                    </div>
                </div>
        </div> 
    )
}

export default FormularioContacto
