import React from 'react'
import {RiDoubleQuotesL, RiDoubleQuotesR} from "react-icons/ri"

const Reviews = () => {
    return (
        <div className="p-8 flex flex-col gap-8">
            <h1 className="text-[40px] text-center font-black">
                ¿Qué dicen nuestros clientes?
            </h1>

            <div className="flex justify-center gap-4">

                <span className="text-5xl text-axeda">
                    <RiDoubleQuotesL/>
                </span>

                <p className="max-w-2xl text-center text-gray-400">Alexa me transmitió desde el inicio una gran confianza, es una 
                            profesional increíble que domina su campo y me ayudo en todo momento de la compra, ha sido una gran desición el invertir con 
                            Axeda y con Alexa Delgado como asesor.
                </p>

                <span className="text-5xl text-axeda">
                    <RiDoubleQuotesR/>
                </span>
            </div>

                <div className="flex flex-col items-center justify-center gap-8">
        
                <div className="flex items-center justify-center gap-8 md:gap-12">
                <img
                    src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                    className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
                />
                <img
                    src="https://img.freepik.com/foto-gratis/hombre-barbudo-feliz-sorprendido-camisa-apuntando-lejos_171337-5021.jpg"
                    className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
                />
                <img
                    src="https://img.freepik.com/foto-gratis/hombre-negocios-dueno-empresa-oficina_1303-15851.jpg"
                    className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-axeda p-1 bg-white"
                />
                <img
                    src="https://img.freepik.com/foto-gratis/retrato-hombre-afroamericano-inteligente-profesional-pie-manos-cruzadas-sobre-pecho-pose-confianza_176420-33861.jpg"
                    className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
                />
                <img
                    src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg"
                    className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
                />
                </div>
             
                <div >
                    <h3 className="text-center text-[24px] font-bold ">José Manuel Carreiro</h3>
                    <h5 className="text-center text-[20px] font-bold text-gray-500">CEO Buceapp</h5>
                </div>
            </div>
        </div>
    );
};

export default Reviews
