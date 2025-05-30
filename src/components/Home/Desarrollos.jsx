import { NavLink }  from "react-router-dom"; 

const desarrollos = [
  {
    nombre: "Azores – Colección Atlántica",
    descripcion: "Minimalismo elegante, inspiración oceánica. Azores evoca la pureza del Atlántico con arquitectura sobria y estética. Rodeado de serenidad, diseño consciente y lujo. Mensualidades: $8,160.00 MXN.",
    imagen: "Anzores.jpeg",
    to: "/rosavento"
  },
  {
    nombre: "Madeira – Colección Natural",
    descripcion: "Refugio entre lo verde y lo sofisticado. Inspirada en los paisajes de Portugal, Madeira ofrece diseño sobrio, vegetación y materiales nobles. Mensualidades: $3,400.00 MXN.",
    imagen: "Madeira.jpeg",
    to: "/rosenda"
  },
  {
    nombre: "Boracay – Colección Tropical",
    descripcion: "Sofisticación cálida, esencia insular. Ambientes amplios, luz natural y acabados cálidos crean un oasis de relajación. Mensualidades: $3,124.00 MXN.",
    imagen: "Madeira.jpeg",
    to: "/terravento"
  },
  {
    nombre: "Santorini",
    descripcion: "Donde la elegancia se encuentra con el confort. Inspirado en los paisajes del mar Egeo. Privada con vista al lago, lujo cotidiano y seguridad. Mensualidades: $6,260.89 MXN.",
    imagen: "Santorini.jpeg",
    to: "/indo"
  }
];

const Desarrollos = () => {
    return (
        <div className="p-12 dark:bg-gray-700 dark:text-gray-200">
            <div className="xl:mb-8 ">
                <h1 className="text-[40px] font-title ">
                    Donde vivir e invertir coexisten
                </h1>
                <p className="text-xl text-gray-400 py-4 font-sans">
                    Desarrollos residenciales en Cancún. Cuatro colecciones. Cuatro formas de vivir con distinción.
                </p>
            </div>
            
            {/*Desarrollos*/}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <NavLink className ="text-center " to = "/rosavento" > 
                    <div className="flex flex-col gap-2 rounded-3xl py-2"> 
                            <img src="Isla_2.webp"  
                                 class="h-56 xl:h-[600px] w-full rounded-lg  shadow-xl dark:shadow-gray-800 transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-70  "  
                            // className="inline w-full h-56 xl:h-[600px] rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-70 hover:shadow-2xl" 
                                    alt='Terrenos residenciales Isla Dimante'/>
                                <h3 className="text-2xl font-bold text-gray-400 ">Isla Diamante</h3> 
                                <p>
                              
                                    En Isla Diamante, cada privada es una expresión de estilo, lujo y carácter. Inspiradas en rincones icónicos del mundo, nuestras colecciones residenciales ofrecen experiencias de vida únicas, diseñadas para quienes valoran lo excepcional. Cuatro colecciones. Cuatro formas de vivir con distinción.                                    
                                  </p>
                    </div>          
                </NavLink>   

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

     <NavLink className ="text-center " to = "/indo" > 
                        <div className="flex flex-col gap-4">
                                <img src="Santorini.jpeg" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
                                    alt='Yucatan crecimiento económico'/>
                    
                                    <h3 className="text-2xl font-bold text-gray-400 ">Santorini - Colección Mediterranea</h3>
                        </div>
                    </NavLink>   

                    <NavLink className ="text-center " to = "/rosavento" > 
                        <div className="flex flex-col gap-4">

                                <img  src="Anzores.jpeg" className="w-full h-56 object-cover rounded-3xl 
                                        transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                        alt='Desarrollos en Ciudad Maya' />
                       
                                    <h3 className="text-2xl font-bold text-gray-400 ">Azores – Colección Atlántica</h3>
                        </div>
                    </NavLink>   

                    <NavLink className ="text-center " to = "/rosenda" > 
                        <div className="flex flex-col gap-4">
                            <img    src="Madeira.jpeg" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                    alt='Invierte en rosenda' />
                         
                                <h3 className="text-2xl font-bold text-gray-400 ">Madeira - Colección Natural </h3> 
                        </div>
                    </NavLink>   

                    <NavLink className ="text-center " to = "/terravento" > 
                        <div className="flex flex-col gap-4">
                            <img src="Madeira.jpeg" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                                alt ='Plusvalía en Mérida'/>
                              <h3 className="text-2xl font-bold text-gray-400 ">Boracay – Colección Tropical </h3>
                        </div>
                    </NavLink>   

                </div>
            </div>

            <section className="bg-white dark:bg-gray-900 dark:text-white px-6 py-16">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {desarrollos.map((d, idx) => (
                    <NavLink to={d.to} key={idx} className="group">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition overflow-hidden">
                        <img
                            src={d.imagen}
                            alt={d.nombre}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-6 space-y-4 text-left">
                            <h3 className="text-2xl font-bold text-diamante dark:text-primary_isla">{d.nombre}</h3>
                            <p className="text-gray-700 dark:text-gray-300 font-chivo text-base leading-relaxed">{d.descripcion}</p>
                        </div>
                        </div>
                    </NavLink>
                    ))}
                </div>
            </section>
        </div>

        
    )
}

export default Desarrollos
