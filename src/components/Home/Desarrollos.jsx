import React        from 'react';
import { NavLink }  from "react-router-dom"; 

const Desarrollos = () => {
    return (
        <div className="p-12">
            <div className="xl:mb-8 ">
                <h1 className="text-[40px] font-title ">
                    Conoce nuestros desarrollos
                </h1>
                <p className="text-xl text-gray-500 py-4 font-sans">
                    Desarrollos residenciales en Cancún y Mérida. Departamentos con las mejores ubicaciones y más.
                </p>
            </div>
            
            {/*Desarrollos*/}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <NavLink className ="text-center " to = "/rosavento" > 
                    <div className="flex flex-col gap-2 rounded-3xl py-2"> 
                            <img src="carrusel8.webp" 
    //   class="rounded-full w-96 h-96 "        imagen redonda
      class="h-56 xl:h-[600px] w-full rounded-lg  shadow-xl dark:shadow-gray-800 transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-70  "  
                            // className="inline w-full h-56 xl:h-[600px] rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-70 hover:shadow-2xl" 
                                    alt='Terrenos residenciales Axeda'/>
                                <p className="text-axeda py-5 text-center"> Tu terreno la ciudad más bonita y segura de México.
                                    <h3 className="text-2xl font-bold py-4 text-center">ROSAVENTO Ciudad Maya</h3> 
                                <p className="text-gray-500 font-chivo text-xl"> Terrenos residenciales al norte de Mérida Un paraíso con mensualidades desde $1,890.00 MXN.</p> 
                                </p>
                    </div>          
                </NavLink>   

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <NavLink className ="text-center " to = "/rosavento" > 
                        <div className="flex flex-col gap-4">

                                <img    src="carrusel11.webp" className="w-full h-56 object-cover rounded-3xl 
                                        transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                        alt='Desarrollos en Ciudad Maya' />
                                <p className="text-gray-500 font-chivo"> 
                                Terrenos residenciales en Cancún. Mensualidades desde $3,097.05 MX.
                                </p>
                                    <h3 className="text-2xl font-bold text-gray-400 ">ROSAVENTO Cancún</h3>
                        </div>
                    </NavLink>   

                    <NavLink className ="text-center " to = "/rosenda" > 
                        <div className="flex flex-col gap-4">
                            <img    src="rosenda.webp" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                    alt='Invierte en rosenda' />
                            <p className="text-gray-500 font-chivo"> Rosenda Temozón II, una colección de 80 departamentos en 10 modelos diferentes. </p>
                                <h3 className="text-2xl font-bold text-gray-400 ">ROSENDA TEMOZÓN II </h3> 
                        </div>
                    </NavLink>   

                    <NavLink className ="text-center " to = "/terravento" > 
                        <div className="flex flex-col gap-4">
                            <img src="rosenda departamento.webp" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                alt ='Plusvalía en Mérida'/>
                            <p className="text-gray-500 font-chivo"> La  plusvalía inmobiliaria en Mérida creció un 7.4% y tiene un escenario de crecimiento hacia la próxima década. </p>
                                <h3 className="text-2xl font-bold text-gray-400 ">Terravento Pedregal Residencial </h3>
                        </div>
                    </NavLink>   

                    <NavLink className ="text-center " to = "/indo" > 
                        <div className="flex flex-col gap-4">
                                <img src="INDO.webp" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
                                    alt='Yucatan crecimiento económico' 
                                alt='INDO AXEDA' />
                                <p className="text-gray-500 font-chivo"> 
                                Yucatán es considerado como el estado con mayor crecimiento económico de México, líder en la generación de energía eléctrica. </p>
                                    <h3 className="text-2xl font-bold text-gray-400 ">INDO Parque Industrial</h3>
                        </div>
                    </NavLink>   

                </div>
            </div>
        </div>
    )
}

export default Desarrollos
