import React from 'react'
import {RiPhoneFill, RiMailFill} from "react-icons/ri"
import {ImLocation} from "react-icons/im"

const FormularioContacto = () => {
    return ( 
        <div className ="antialiased bg-gray-100 overflow-hidden">

            <div className="flex flex-col grid grid-cols-1 w-full justify-center items-center overflow-hidden">
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
                                    <label  for="fname" class="text-sm text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Nombre Completo</label>
                                    <input  type="text" placeholder="Nombre Completo" 
                                            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none requiere
                                    focus:ring-2 focus:ring-teal-300 "/>
                                </div>

                                <div className=""> 
                                    <label  for="" class="text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                                        Correo Electrónico </label> 

                                    <input  type="email" 
                                            required class="peer w-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-2 
                                            focus:ring-teal-300 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 
                                            focus:invalid:ring-pink-500" placeholder="asesor.alexadelgado@gmail.com" 
                                       />
                                        <p class="peer-valid:invisible text-pink-600 text-sm">
                                            Por favor introduce un E-mail valido.
                                        </p> 
                                </div> 
                                        
                                <div>
                                    <label for="" class="text-sm after:content-['*'] after:ml-0.5 after:text-red-500">Teléfono Móvil</label>
                                    <input type="text" placeholder="+52 55 55 55 55 55" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300 "/>
                                </div>

                                <div>
                                    <label for="" class="text-sm">Desarrollos</label>
                               
                                </div>

                                <div>
                                <select className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300">
                                        <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                            focus:ring-2 focus:ring-teal-300 " >
                                            Estoy interesado/a en...
                                        </option>

                                        <option value="Merida">
                                            Rosavento Mérida
                                        </option>

                                        <option value ="Cancun"> 
                                            Rosavento Cancún
                                        </option>

                                        <option value="Indo">
                                             Indo
                                        </option>

                                        <option value="Rosenda Temozon">
                                             Rosenda Temozón
                                        </option>

                                        <option value="Rosavento Merida y Cancun">
                                             Rosavento Mérida y Cancún 
                                        </option>

                                        <option value="Terravento">
                                             Terravento
                                        </option>
                                    </select> 
                                </div>

                                <div>
                                    <label for="" class="text-sm">Inversión estimada para el enganche</label> 
                                </div>

                                <div>
                                <select  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300">

                                        <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                            focus:ring-2 focus:ring-teal-300 ">
                                            Click para ver opciones
                                        </option>

                                        <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                            focus:ring-2 focus:ring-teal-300 " value="Al rededor de  $45,000 mil y mensualidades 1890 de enganche 140 m2 de terreno">
                                            Al rededor de  $45,000 mil y mensualidades 1890 de enganche 140 m2 de terreno
                                        </option>

                                        <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                            focus:ring-2 focus:ring-teal-300 " value="Al rededor de $95,000 mil y mensualidades 6500 de enganche 300 m2 de terreno">
                                            Al rededor de $95,000 mil y mensualidades 6500 de enganche 300 m2 de terreno
                                        </option>

                                        <option className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                            focus:ring-2 focus:ring-teal-300 " value="Aun no se,  esto evaluandolo">
                                            Aun no lo sé, estoy evaluandolo
                                        </option>
                                </select >
                                </div>

                                <div>
                                    <label for="" class="text-sm">Interesado en: </label> 
                                </div>
                                
                                <div>

                                <select  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300">

                                        <option value="opcion 3" >
                                            Click para ver opciones
                                        </option>

                                        <option value="Quiero comprar un terreno residencial para construir una casa">
                                            Quiero comprar un terreno residencial para construir una casa
                                        </option>

                                        <option value="Quiero empezar a invertir en bienes inmuebles por primera vez">
                                            Quiero empezar a invertir en bienes inmuebles por primera vez
                                        </option>

                                        <option value="Quiero invertir en un patrimonio para mi familia">
                                            Quiero invertir en un patrimonio para mi familia
                                        </option>

                                        <option value="Quiero comprar un terreno para después re-vender y generar ingresos">
                                            Quiero comprar un terreno para después re-vender y generar ingresos
                                        </option>

                                        <option value="Quiero comprar un terreno para tener un lugar para vacacionar con mi familia">
                                            Quiero comprar un terreno para tener un lugar para vacacionar con mi familia
                                        </option>

                                        <option value="Estoy interesado pero aún no se para que usaré mi terreno">
                                            Estoy interesado pero aún no se para que usaré mi terreno
                                        </option>
                                </select >            
                                </div>

                                <div>
                                    <label for="" class="text-sm">Mensaje</label> 
                                    <textarea
                                    type="textarea" placeholder="Deja que te asesoremos, escribenos cualquier duda y con gusto te atenderemos" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none 
                                    focus:ring-2 focus:ring-teal-300"
                                    />
                                </div>
 
                                <button
                                    type="button"
                                    className=" inline-block self-end font-semibold py-2 px-6 bg-axeda text-white rounded-xl shadow-lg shadow-indigo-500/40 py-2 uppercase text-sm"
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
