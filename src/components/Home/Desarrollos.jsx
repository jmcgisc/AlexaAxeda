import React from 'react'

const Desarrollos = () => {
    return (
        <div className="p-12">
            <div className="mb-8 ">
                <h1 className="text-[40px] font-bold ">
                    Conoce nuestros desarrollos
                </h1>
                <p className="text-xl text-gray-500 py-2 font-sans">
                    Desarrollos residenciales en Cancún y Mérida. Departamentos con las mejores ubicaciones y más.
                </p>
            </div>
            {/*Desarrollos*/}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2 rounded-3xl"> 

                    <img src="carrusel8.jpg" className="w-full h-56 xl:h-[600px] rounded-3xl" />
                        <p className="text-gray-500 py-5s"> Tu terreno la ciudad más bonita y segura de México.
                        <h3 className="text-2xl font-bold py-5">ROSAVENTO Ciudad Maya</h3>
                        </p>
                        <p className="text-gray-500 "> Terrenos residenciales al norte de Mérida Un paraíso con mensualidades desde $1,890.00 MXN.</p> 
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="flex flex-col gap-4">
                        <img src="carrusel11.jpg" className="w-full h-56 object-cover rounded-3xl 
                        transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl
                        "/>
                        <p className="text-gray-500"> 
                        Terrenos residenciales en Cancún. Mensualidades desde $3,097.05 MX.
                         </p>
                            <h3 className="text-2xl font-bold text-gray-400 ">ROSAVENTO Cancún</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src="rosenda.webp" className="w-full h-56 object-cover rounded-3xl 
                        transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl
                        "/>
                        <p className="text-gray-500"> Tras el éxito de nuestro proyecto Rosenda, vendido en su totalidad de menos de 50 días; hemos creado Rosenda Temozón II, una colección de 80 departamentos en 10 modelos diferentes. </p>
                            <h3 className="text-2xl font-bold text-gray-400 ">ROSENDA TEMOZÓN II </h3> 
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src="rosenda departamento.webp" className="w-full h-56 object-cover rounded-3xl 
                        transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl
                        "/>
                        <p className="text-gray-500"> La  plusvalía inmobiliaria en Mérida creció un 7.4% y tiene un escenario de crecimiento hacia la próxima década. </p>
                            <h3 className="text-2xl font-bold text-gray-400 ">Terravento Pedregal Residencial </h3>
                    </div>

                    <div className="flex flex-col gap-4">
                            <img src="INDO.webp" className="w-full h-56 object-cover rounded-3xl 
                            transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl
                            "/>
                            <p className="text-gray-500"> 
                            Yucatán es considerado como el estado con mayor crecimiento económico de México, además es líder en la generación y distribución de energía eléctrica. </p>
                                <h3 className="text-2xl font-bold text-gray-400 ">INDO Parque Industrial</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Desarrollos
