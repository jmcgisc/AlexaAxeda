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
                            <img src="Santorini.jpeg"  
                                 class="h-56 xl:h-[600px] w-full rounded-lg  shadow-xl dark:shadow-gray-800 transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-70  "  
                            // className="inline w-full h-56 xl:h-[600px] rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-70 hover:shadow-2xl" 
                                    alt='Terrenos residenciales Isla Dimante'/>
                                <h3 className="text-2xl font-bold text-gray-400 ">Santorini</h3> 
                                <p>  Donde la elegancia se encuentra con el confort.
                                    Inspirado en los paisajes blancos y azules de la joya del mar Egeo, esta privada redefine el lujo cotidiano en un ambiente íntimo, seguro y cuidadosamente diseñado con una increíble vista al lago. Mensualidades $6,260.89 MXN.
                                </p>
                    </div>          
                </NavLink>   

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <NavLink className ="text-center " to = "/rosavento" > 
                        <div className="flex flex-col gap-4">

                                <img  src="Anzores.jpeg" className="w-full h-56 object-cover rounded-3xl 
                                        transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                        alt='Desarrollos en Ciudad Maya' />
                                <p className="text-gray-500 font-chivo"> 
                                    Minimalismo elegante, inspiración oceánica.
                                    Azores evoca la pureza del Atlántico con una propuesta arquitectónica limpia, sobria y profundamente estética. Un estilo de vida refinado, rodeado de serenidad y diseño consciente, para quienes buscan una residencia con carácter. Menusualidades: $8,160.00 MXN
                                </p>
                                    <h3 className="text-2xl font-bold text-gray-400 ">Azores – Colección Atlántica</h3>
                        </div>
                    </NavLink>   

                    <NavLink className ="text-center " to = "/rosenda" > 
                        <div className="flex flex-col gap-4">
                            <img    src="Madeira.jpeg" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                    alt='Invierte en rosenda' />
                            <p className="text-gray-500 font-chivo"> 
                                Refugio entre lo verde y lo sofisticado.
                                        Inspirada en los paisajes exuberantes de Portugal, Madeira ofrece un estilo de vida íntimo, rodeado de vegetación, diseño sobrio y materiales nobles. Un enclave para reconectar con lo esencial sin renunciar a lo extraordinario. Mensualidades: $3,400.00 MXN.
                                 </p>
                                <h3 className="text-2xl font-bold text-gray-400 ">Madeira - Colección Natural </h3> 
                        </div>
                    </NavLink>   

                    <NavLink className ="text-center " to = "/terravento" > 
                        <div className="flex flex-col gap-4">
                            <img src="Madeira.jpeg" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                alt ='Plusvalía en Mérida'/>
                            <p className="text-gray-500 font-chivo">Sofisticación cálida, esencia insular.
Boracay captura la frescura del trópico con una visión contemporánea. Ambientes amplios, luz natural y acabados cálidos crean un oasis de relajación privada, ideal para quienes encuentran el lujo en la sencillez bien pensada. Mensualidades $3,124.00 MXN</p>
                                <h3 className="text-2xl font-bold text-gray-400 ">Boracay – Colección Tropical </h3>
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
