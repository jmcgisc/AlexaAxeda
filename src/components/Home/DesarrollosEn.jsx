import { NavLink }  from "react-router-dom"; 

const developments = [
  {
    name: "Santorini - Mediterranean Collection",
    description: "Where elegance meets comfort. Inspired by Aegean Sea landscapes. Private community with lake view, everyday luxury and security.",
    image: "Santorini.webp",
    price: "Monthly payments from $6,260 MXN",
    to: "/en-santorini"
  },
  {
    name: "Azores – Atlantic Collection",
    description: "Elegant minimalism, oceanic inspiration. Azores evokes Atlantic purity with sober architecture and aesthetics.",
    image: "Anzores.webp",
    price: "Monthly payments from $8,160 MXN",
    to: "/en-azores"
  },
  {
    name: "Madeira – Natural Collection",
    description: "Refuge between greenery and sophistication. Inspired by Portuguese landscapes, Madeira offers sober design, vegetation and noble materials.",
    image: "Madeira.webp",
    price: "Monthly payments from $3,400 MXN",
    to: "/en-madeira"
  },
  {
    name: "Boracay – Tropical Collection",
    description: "Warm sophistication, island essence. Spacious environments, natural light and warm finishes create an oasis of relaxation.",
    image: "Boracay.webp",
    price: "Monthly payments from $3,124 MXN",
    to: "/en-boracay",
    soldOut: true,
  },
  {
    name: "Palau – Serene Collection",
    description: "In the heart of Isla Diamante, the Palau Collection represents the most serene elegance.",
    image: "Palau1.jpeg",
    price: "Monthly payments from $3,613 MXN",
    to: "/en-palau",
  }
];

const Developments = () => {
    return (
        <div className="relative px-6 md:px-12 py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-center overflow-hidden">
        {/* Decorative watermark */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-5">
                <img src="/icons/logo-icon-transparente.svg" alt="logo isla diamante" className="w-[300px] md:w-[400px]" 
                loading="lazy"/>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                    Where living and investing <span className="text-diamante">coexist</span>
                </h1>
            <div className="w-24 h-1 mx-auto bg-diamante rounded-full" />
                <p className="text-lg md:text-xl dark:text-gray-200 font-sans mb-4">
                    Residential developments in Cancún with exclusive design. <br />
            <span className="font-mediumd dark:text-gray-200">Four collections. Four ways to live with distinction.</span>
            </p>
        </div>
        {/*Developments*/}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8"> 
                <div className="flex flex-col gap-2 rounded-3xl py-2"> 
                    <img    src="Isla_2.webp"  
                            className="h-56 xl:h-[600px] w-full rounded-lg  shadow-xl  transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-70  "  
                            alt='Isla Diamante residential lots'
                            loading="lazy"/>
                    <h3 className="text-2xl font-bold dark:text-gray-200 mb-4">Isla Diamante</h3> 
                     <p className="dark:text-gray-200 mb-4">
                        At Isla Diamante, each private community is an expression of style, luxury and character. Inspired by iconic corners of the world, our residential collections offer unique living experiences, designed for those who value the exceptional.                                  
                    </p>
                </div>     

            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">

            <NavLink className ="text-center " to = "/en-santorini" > 
                <div className="flex flex-col gap-4">
                    <img    src="Santorini.webp" 
                            className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
                            //srcSet="/Santorini-1440.webp 2x"
                            width="364"
                            height="428"
                            alt="Lot in Santorini Isla Diamante"
                            loading="lazy"
                    />
                    <h3 className="text-2xl font-bold text-gray-400 ">Santorini - Mediterranean Collection</h3>
                </div>
            </NavLink>   

            <NavLink className ="text-center " to = "/en-azores" > 
                <div className="flex flex-col gap-4">
                    <img    src="Anzores.webp" 
                            className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                            width="364"
                            height="428"
                            alt="Lot in Azores Isla Diamante"
                            loading="lazy" 
                    />   
                    <h3 className="text-2xl font-bold text-gray-400 ">Azores – Atlantic Collection</h3>
                </div> 
            </NavLink>   

            <NavLink className ="text-center " to = "/en-madeira" > 
                <div className="flex flex-col gap-4">
                    <img    src="Madeira.webp" 
                            className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl" 
                            alt='Invest in Madeira Isla Diamante' 
                            width="364"
                            height="428" 
                            loading="lazy" 
                    />     
                    <h3 className="text-2xl font-bold text-gray-400 ">Madeira - Natural Collection</h3> 
                </div>
            </NavLink>   


{/* 
            <NavLink className="text-center relative group" to="/en-boracay">
        
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow-md z-10">
                    SOLD OUT
                </div>

                <div className="flex flex-col gap-4">
                    <img
                    src="Boracay.webp"
                    className="w-full h-56 object-cover rounded-3xl grayscale opacity-60 transition duration-700 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-2xl"
                    alt="Appreciation in Cancún"
                    loading="lazy"
                    />
                    <h3 className="text-2xl font-bold text-gray-400">Boracay – Tropical Collection</h3>
                </div>
                </NavLink>  
 */}


            <NavLink className="text-center relative group" to="/en-palau">

                <div className="flex flex-col gap-4">
                    <img
                    src="Palau1.jpeg"
                    className="w-full h-56 object-cover rounded-3xl transition duration-700 ease-in-out transform group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-2xl"
                    alt="Appreciation in Cancún"
                    loading="lazy"
                    />
                    <h3 className="text-2xl font-bold text-gray-400">Palau – Serene Collection</h3>
                </div>
                </NavLink>  


            </div>
        </div>

 {/* Developments */}
      <section className="bg-white dark:bg-gray-900 dark:text-white px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {developments.map((d, idx) => (
            <NavLink
              to={d.soldOut ? "#" : d.to}
              key={idx}
              className={`group ${d.soldOut ? "pointer-events-none opacity-80" : ""}`}
            >
              <div className="relative bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition overflow-hidden">
            
                {/* Price tag */}
                {d.price && (
                  <div className="absolute top-4 left-4 bg-diamonBlack text-white text-sm px-3 py-1 rounded-full shadow-md z-10">
                    {d.price}
                  </div>
                )}   
                
                 {/* SOLD OUT tag */}
                {d.soldOut && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full z-10 shadow-md">
                    SOLD OUT
                  </div>
                )}

                <img
                  src={d.image}
                  alt={d.name}
                  className={`w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ${
                    d.soldOut ? "grayscale opacity-60" : ""
                  }`}
                  width="364"
                  height="428"
                  loading="lazy"
                />
                <div className="p-6 space-y-4 text-left">
                  <h3 className="text-2xl text-center font-bold text-diamante dark:text-primary_isla">
                    {d.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-chivo text-base leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div> 
    )
}

export default Developments