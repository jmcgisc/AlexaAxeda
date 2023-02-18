import React from 'react'

const Menciones = () => {
    return (
        <div className="bg-gray-300 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
            <h1 className="text-2xl font-medium text-gray-800 text-center">Menciones por grandes empresas y medios periodisticos </h1>
            <div className="flex flex-col md:flex-row flex-wrap items-center gap-20">
                <img src="lajornadamaya.png" className ="w-40" />
                <img src="larevistapeninsular.png" className ="w-40" />
                <img src="logo-cancunissimo-retina.png" className ="w-40" />
                <img src="logo-real-estate-2019.png" className ="w-40" />
                <img src="logo-vip-exp.png" className ="w-40" />  
                <img src="tecnoempresa.webp" className ="w-40" />  
            </div>
        </div> 
    );
};


export default Menciones;