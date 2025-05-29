import React        from 'react';
import { NavLink }  from "react-router-dom"; 

const Desarrollos = () => {
    return (
        <div className="p-12 dark:bg-gray-700 dark:text-gray-200">
            <div className="xl:mb-8 ">
                <h1 className="text-[40px] font-title ">
                    Donde vivir e invertir coexisten
                </h1>
                <p className="text-xl text-gray-400 py-4 font-sans">
                    Desarrollos residenciales en Cancún y Mérida. Departamentos con las mejores ubicaciones y más.
                </p>
            </div>
            
            {/*Desarrollos*/}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <NavLink className ="text-center " to = "/rosavento" > 
                    <div className="flex flex-col gap-2 rounded-3xl py-2"> 
                            <img src="Isla_1.webp"  
                                 class="h-56 xl:h-[600px] w-full rounded-lg  shadow-xl dark:shadow-gray-800 transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-70  "  
                            // className="inline w-full h-56 xl:h-[600px] rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-70 hover:shadow-2xl" 
                                    alt='Terrenos residenciales Isla Dimante'/>
                                <p className="text-axeda py-5 text-center"> Tu terreno la ciudad más bonita y segura de México.
                                    <h3 className="text-2xl font-bold py-4 text-center">ROSAVENTO Ciudad Maya</h3> 
                                <p className="text-gray-500 font-chivo text-xl"> Terrenos residenciales al norte de Mérida Un paraíso con enganche desde $71,400.00 MXN. y mensualidades desde $2,182.00 MXN.</p> 
                                </p>
                    </div>          
                </NavLink>   

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <NavLink className ="text-center " to = "/rosavento" > 
                        <div className="flex flex-col gap-4">

                                <img  src="Isla_4.webp" className="w-full h-56 object-cover rounded-3xl 
                                        transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                        alt='Desarrollos en Ciudad Maya' />
                                <p className="text-gray-500 font-chivo"> 
                                    Terrenos residenciales en Cancún. Enganche desde $208,780.00 MXN. y mensualidades desde $3,480.00 MXN.
                                </p>
                                    <h3 className="text-2xl font-bold text-gray-400 ">ROSAVENTO Cancún</h3>
                        </div>
                    </NavLink>   

                    <NavLink className ="text-center " to = "/rosenda" > 
                        <div className="flex flex-col gap-4">
                            <img    src="Isla_3.webp" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                    alt='Invierte en rosenda' />
                            <p className="text-gray-500 font-chivo"> Rosenda Temozón, una colección de 80 departamentos en 10 modelos diferentes. </p>
                                <h3 className="text-2xl font-bold text-gray-400 ">ROSENDA TEMOZÓN </h3> 
                        </div>
                    </NavLink>   

                    <NavLink className ="text-center " to = "/terravento" > 
                        <div className="flex flex-col gap-4">
                            <img src="Isla_2.webp" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                alt ='Plusvalía en Mérida'/>
                            <p className="text-gray-500 font-chivo">Un proyecto en preventa con rendimientos del 48% y 4 años de financiamiento sin intereses. </p>
                                <h3 className="text-2xl font-bold text-gray-400 ">Terravento Pedregal Residencial </h3>
                        </div>
                    </NavLink>   

                    <NavLink className ="text-center " to = "/indo" > 
                        <div className="flex flex-col gap-4">
                                <img src="Isla_2.webp" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
                                    alt='Yucatan crecimiento económico'/>
                                <p className="text-gray-500 font-chivo"> 
                                Yucatán es considerado como el estado con mayor crecimiento económico de México, líder en la generación de energía eléctrica. </p>
                                    <h3 className="text-xl font-bold text-orange-900 line-through">INDO Parque Industrial</h3>
                                    <h3 className="text-2xl font-bold text-gray-400 ">SOLD OUT</h3>
                        </div>
                    </NavLink>   

                </div>
            </div>
        </div>
    )
}

export default Desarrollos
