import React from 'react'

const Desarrollos = () => {
    return (
        <div className="p-12">
            <div className="mb-8">
                <h1 className="text-[40px] font-bold ">
                    Conoce nuestros desarrollos
                </h1>
                <p className="text-xl text-gray-500 py-2">
                    Desarrollos residenciales en Cancún y Mérida. Departamentos con las mejores ubicaciones y más.
                </p>
            </div>
            {/*Desarrollos*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2"> 
                <img src="INDO.webp" className="w-full rounded-3xl" />
                    <p className="text-gray-500"> Terrenos industriales en Yucatán
                      <h3 className="text-2xl font-bold">INDO Parque Industrial</h3>
                    </p>
                        <p className="text-gray-500 ">
                        Yucatán es considerado como el estado con mayor crecimiento económico de México, además es líder en la generación y distribución de energía eléctrica.
                        </p> 
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-4">
                        <img src="carrusel8.jpg" className="w-full rounded-3xl"/>
                        <p className="text-gray-500"> Terrenos residenciales al norte de Mérida Un paraíso con mensualidades desde $1,890.00 MXN </p>
                            <h3 className="text-2xl font-bold text-gray-400 ">ROSAVENTO Ciudad Maya </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src="carrusel8.jpg" className="w-full rounded-3xl"/>
                        <p className="text-gray-500"> Terrenos residenciales al norte de Mérida Un paraíso con mensualidades desde $1,890.00 MXN </p>
                            <h3 className="text-2xl font-bold text-gray-400 ">ROSAVENTO Ciudad Maya </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src="carrusel8.jpg" className="w-full rounded-3xl"/>
                        <p className="text-gray-500"> Terrenos residenciales al norte de Mérida Un paraíso con mensualidades desde $1,890.00 MXN </p>
                            <h3 className="text-2xl font-bold text-gray-400 ">ROSAVENTO Ciudad Maya </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src="carrusel8.jpg" className="w-full rounded-3xl"/>
                        <p className="text-gray-500"> Terrenos residenciales al norte de Mérida Un paraíso con mensualidades desde $1,890.00 MXN </p>
                            <h3 className="text-2xl font-bold text-gray-400 ">ROSAVENTO Ciudad Maya </h3>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Desarrollos
