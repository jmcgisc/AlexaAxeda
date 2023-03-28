import React from 'react' 
import MapSection from '../Aux/Map'

const LayoutMap = () => {
    return (
        <div className="p-8 flex flex-col gap-8 bg-gray-100">
            <h1 className="text-[60px] text-center font-title ">
                    ¡Estarás cerca de todo!
            </h1>
            <div className="flex justify-center gap-6"> 
                <p className="max-w-2xl text-center text-base font-chivo text-gray-400">
                    La perfecta ubicación del desarrollo en una de las carreteras más importantes de Cancún te conecta en solo minutos a paradisíacas playas.
                </p>
            </div>
                <div className="flex xl:flex-col items-center justify-center gap-8"> 
                <MapSection  />  
            </div>
        </div>
    );
};

export default LayoutMap
