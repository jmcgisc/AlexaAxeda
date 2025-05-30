import React from 'react'

function SeccionInvestment() {
  return (
    <div>

     <section id="home" className="min-h-[100vh] bg-diamonBlack text-white grid grid-cols-1 xl:grid-cols-8 px-6 xl:px-24 py-24 gap-8 relative overflow-hidden">
      {/* Información */}
      <div className="xl:col-span-5 flex items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="flex flex-col gap-10"
        >
          <h1 className="text-4xl xl:text-6xl text-white tracking-widest xl:leading-[5.5rem]">
            INVIERTE EN
            <span className="text-diamante px-3 py-1 border border-primary_isla rounded-md ml-2">CANCÚN</span>
            Y HAZ REALIDAD TUS
            <span className="text-diamante px-4 py-2 border-8 border-primary_isla relative inline-block">
              SUEÑOS
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-4 p-2 bg-primary_isla rounded-full box-content"/>
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-4 p-2 bg-primary_isla rounded-full box-content"/>
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-4 p-2 bg-primary_isla rounded-full box-content"/>
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-4 p-2 bg-primary_isla rounded-full box-content"/>
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            ¡Tu paraíso comienza aquí! Tu legado es lo más importante.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
            
            </motion.div>

            <motion.button
              onClick={() => window.open('https://eva3d.com/recorridos-virtuales-360/axeda/rosavento/index.htm', '_blank')}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-white text-lg hover:text-diamante transition"
            >
              <RiPlayFill className="text-4xl bg-diamante text-white p-2 rounded-full shadow-lg" />
              Mira nuestro recorrido 360º
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Imagen y círculo */}
      <motion.div 
        className="xl:col-span-3 flex flex-col items-center justify-center relative"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-10">
          <img
            src="LAGO-CENTRAL-CASA-CLUB-PRINCIPAL.webp"
            alt="Asesor Axeda Terrenos en Mérida y Cancún"
            className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] object-cover rounded-full border-8 border-white shadow-2xl"
          />

          {/* Círculo decorativo detrás */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] border-[10px] border-diamante rounded-full z-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          />

          {/* Mini Card */}
          <div className="relative bg-white shadow-2xl rounded-xl p-6 mt-6 flex flex-col items-center gap-4 max-w-xs mx-auto z-10">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <img
                  key={i}
                  src={`https://img.freepik.com/foto-gratis/foto-persona-${i + 1}.jpg`}
                  alt={`Persona ${i + 1}`}
                  className="w-10 h-10 object-cover rounded-full ring-2 ring-white"
                />
              ))}
            </div>
            <h2 className="text-lg font-semibold text-gray-800 text-center">
              Te asesoramos desde el inicio
            </h2>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <RiStarFill className="text-diamon" />
              <a
                href="https://web.facebook.com/profile.php?id=100063816524796&_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Conoce Nuestros Testimonios
              </a>
            </div>
          </div>
        </div>

        {/* Logos flotantes */}
        <img
          src="Isla_4.webp"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute top-[10%] right-[5%] xl:right-[10%] border-4 border-white shadow-xl"
          alt="Logo flotante"
        />
        <img
          src="Isla_3.webp"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute top-[5%] left-[10%] border-4 border-white shadow-xl"
          alt="Logo flotante"
        />
        <img
          src="Isla_4.webp"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full absolute bottom-[5%] left-[5%] -rotate-12 border-4 border-white shadow-xl"
          alt="Logo flotante"
        />
      </motion.div>
    </section>
      
    </div>
  )
}

export default SeccionInvestment
