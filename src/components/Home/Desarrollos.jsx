import { NavLink }  from "react-router-dom"; 

const desarrollos = [
  {
    nombre: "Santorini - Colección Mediterránea",
    descripcion: "Donde la elegancia se encuentra con el confort. Inspirado en los paisajes del mar Egeo. Privada con vista al lago, lujo cotidiano y seguridad.",
    imagen: "Santorini.webp",
    precio: "Mensualidades desde $6,260 MXN",
    to: "/santorini"
  },
  {
    nombre: "Azores – Colección Atlántica",
    descripcion: "Minimalismo elegante, inspiración oceánica. Azores evoca la pureza del Atlántico con arquitectura sobria y estética.",
    imagen: "Anzores.webp",
    precio: "Mensualidades desde $8,160 MXN",
    to: "/anzores"
  },
  {
    nombre: "Madeira – Colección Natural",
    descripcion: "Refugio entre lo verde y lo sofisticado. Inspirada en los paisajes de Portugal, Madeira ofrece diseño sobrio, vegetación y materiales nobles.",
    imagen: "Madeira.webp",
    precio: "Mensualidades desde $3,400 MXN",
    to: "/madeira"
  },
  {
    nombre: "Boracay – Colección Tropical",
    descripcion: "Sofisticación cálida, esencia insular. Ambientes amplios, luz natural y acabados cálidos crean un oasis de relajación.",
    imagen: "Boracay.webp",
    precio: "Mensualidades desde $3,124 MXN",
    to: "/boracay"
  }
];

const Desarrollos = () => {
    return (
        <div className="relative px-6 md:px-12 py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-center overflow-hidden">
        {/* Marca de agua decorativa */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-5">
                <img src="/icons/logo-icon-transparente.svg" alt="Decoración" className="w-[300px] md:w-[400px]" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-title font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                    Donde vivir e invertir <span className="text-diamante">coexisten</span>
                </h1>
            <div className="w-24 h-1 mx-auto bg-diamante rounded-full" />
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-sans mb-4">
                    Desarrollos residenciales en Cancún con diseño exclusivo. <br />
            <span className="font-medium text-diamonBlack">Cuatro colecciones. Cuatro formas de vivir con distinción.</span>
            </p>
        </div>
        {/*Desarrollos*/}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <NavLink className ="text-center " to = "/rosavento" > 
                <div className="flex flex-col gap-2 rounded-3xl py-2"> 
                    <img    src="Isla_2.webp"  
                            class="h-56 xl:h-[600px] w-full rounded-lg  shadow-xl dark:shadow-gray-800 transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-70  "  
                            alt='Terrenos residenciales Isla Dimante'/>
                    <h3 className="text-2xl font-bold text-gray-400 ">Isla Diamante</h3> 
                     <p>
                        En Isla Diamante, cada privada es una expresión de estilo, lujo y carácter. Inspiradas en rincones icónicos del mundo, nuestras colecciones residenciales ofrecen experiencias de vida únicas, diseñadas para quienes valoran lo excepcional. Cuatro colecciones. Cuatro formas de vivir con distinción.                                    
                    </p>
                </div>          
            </NavLink>   

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <NavLink className ="text-center " to = "/santorini" > 
                <div className="flex flex-col gap-4">
                    <img    src="Santorini.webp" className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
                            alt='Yucatan crecimiento económico'
                    />
                    <h3 className="text-2xl font-bold text-gray-400 ">Santorini - Colección Mediterranea</h3>
                </div>
            </NavLink>   

            <NavLink className ="text-center " to = "/azores" > 
                <div className="flex flex-col gap-4">
                    <img    src="Anzores.webp" 
                            className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                            alt='Desarrollos en Ciudad Maya' 
                    />   
                    <h3 className="text-2xl font-bold text-gray-400 ">Azores – Colección Atlántica</h3>
                </div> 
            </NavLink>   

            <NavLink className ="text-center " to = "/madeira" > 
                <div className="flex flex-col gap-4">
                    <img    src="Madeira.webp" 
                            className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                            alt='Invierte en Maderira' 
                    />     
                    <h3 className="text-2xl font-bold text-gray-400 ">Madeira - Colección Natural </h3> 
                </div>
            </NavLink>   

            <NavLink className ="text-center " to = "/boracay" > 
                <div className="flex flex-col gap-4">
                    <img    src="Boracay.webp" 
                            className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                            alt ='Plusvalía en Mérida'
                    />
                    <h3 className="text-2xl font-bold text-gray-400 ">Boracay – Colección Tropical </h3>
                </div>
            </NavLink>   
            </div>
        </div>

        <section className="bg-white dark:bg-gray-900 dark:text-white px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {desarrollos.map((d, idx) => (
                <NavLink to={d.to} key={idx} className="group">
                    <div className="relative bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition overflow-hidden"> 
                    {/* Etiqueta de precio */}
                    {d.precio && (
                        <div className="absolute top-4 left-4 bg-diamonBlack text-white text-sm px-3 py-1 rounded-full shadow-md z-10">
                        {d.precio}
                        </div>
                    )}
                    <img
                        src={d.imagen}
                        alt={d.nombre}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-6 space-y-4 text-left">
                        <h3 className="text-2xl text-center font-bold text-diamante dark:text-primary_isla">{d.nombre}</h3>
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
