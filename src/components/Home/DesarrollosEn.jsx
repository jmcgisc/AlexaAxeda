import { NavLink }  from "react-router-dom"; 

const developments = [
  {
    nombre: "Santorini – Mediterranean Collection",
    descripcion: "Where elegance meets comfort. Inspired by the landscapes of the Aegean Sea. A gated community with lake views, everyday luxury, and security.",
    imagen: "Santorini.webp",
    precio: "Monthly payments from $6,260 MXN",
    to: "/santorini"
  },
  {
    nombre: "Azores – Atlantic Collection",
    descripcion: "Elegant minimalism with oceanic inspiration. Azores evokes the purity of the Atlantic with a clean and aesthetic architecture.",
    imagen: "Anzores.webp",
    precio: "Monthly payments from $8,160 MXN",
    to: "/azores"
  },
  {
    nombre: "Madeira – Natural Collection",
    descripcion: "A refuge between greenery and sophistication. Inspired by the landscapes of Portugal, Madeira offers a clean design, vegetation, and noble materials.",
    imagen: "Madeira.webp",
    precio: "Monthly payments from $3,400 MXN",
    to: "/madeira"
  },
  {
    nombre: "Boracay – Tropical Collection",
    descripcion: "Warm sophistication with island essence. Spacious environments, natural light, and warm finishes create an oasis of relaxation.",
    imagen: "Boracay.webp",
    precio: "Monthly payments from $3,124 MXN",
    to: "/boracay"
  }
];

const DesarrollosEn = () => {
  return (
    <div className="relative px-6 md:px-12 py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-center overflow-hidden">
      {/* Decorative watermark */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-5">
        <img src="/icons/logo-icon-transparente.svg" alt="" className="w-[300px] md:w-[400px]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          Where living and investing <span className="text-diamante">coexist</span>
        </h1>
        <div className="w-24 h-1 mx-auto bg-diamante rounded-full" />
        <p className="text-lg md:text-xl dark:text-gray-200 font-sans mb-4">
          Residential developments in Cancún with exclusive design. <br />
          <span className="font-medium dark:text-gray-200">Four collections. Four ways to live with distinction.</span>
        </p>
      </div>

      {/* Developments */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8"> 
        <div className="flex flex-col gap-2 rounded-3xl py-2"> 
          <img
            src="DesarrollosEN.webp"
            className="h-56 xl:h-[600px] w-full rounded-lg shadow-xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-70"
            alt='Residential land Isla Diamante'
          />
          <h3 className="text-2xl font-bold dark:text-gray-200 mb-4">Isla Diamante</h3> 
          <p className="dark:text-gray-200 mb-4">
            In Isla Diamante, each gated community is an expression of style, luxury, and character. Inspired by iconic corners of the world, our residential collections offer unique living experiences, designed for those who value the exceptional.
          </p>
        </div>     

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
          <NavLink className="text-center" to="/en-santorini"> 
            <div className="flex flex-col gap-4">
              <img
                src="Santorini.webp"
                className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
                alt='Yucatan economic growth'
              />
              <h3 className="text-2xl font-bold text-gray-400">Santorini – Mediterranean Collection</h3>
            </div>
          </NavLink>   

          <NavLink className="text-center" to="/en-azores"> 
            <div className="flex flex-col gap-4">
              <img
                src="Anzores.webp"
                className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
                alt='Developments in Ciudad Maya'
              />   
              <h3 className="text-2xl font-bold text-gray-400">Azores – Atlantic Collection</h3>
            </div> 
          </NavLink>   

          <NavLink className="text-center" to="/en-madeira"> 
            <div className="flex flex-col gap-4">
              <img
                src="Madeira.webp"
                className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
                alt='Invest in Madeira'
              />     
              <h3 className="text-2xl font-bold text-gray-400">Madeira – Natural Collection</h3> 
            </div>
          </NavLink>   

          <NavLink className="text-center" to="/en-boracay"> 
            <div className="flex flex-col gap-4">
              <img
                src="Boracay.webp"
                className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
                alt='Value appreciation in Mérida'
              />
              <h3 className="text-2xl font-bold text-gray-400">Boracay – Tropical Collection</h3>
            </div>
          </NavLink>   
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900 dark:text-white px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {developments.map((d, idx) => (
            <NavLink to={d.to} key={idx} className="group">
              <div className="relative bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition overflow-hidden"> 
                {/* Price tag */}
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

export default DesarrollosEn;
