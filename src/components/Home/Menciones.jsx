import React from 'react'

const Menciones = () => {
    return (
        <div className="bg-gray-300 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0 overflow-x-auto">
            <h1 className="text-2xl font-medium text-gray-800 text-center">Menciones por grandes empresas y medios periodisticos </h1>
            <div className="flex flex-col md:flex-row flex-wrap items-center gap-20 ">
                
                <a  title="Presentan Rosavento Ciudad Maya, en la ''zona dorada'' entre Mérida y Progreso lajornadamaya" href="https://www.lajornadamaya.mx/yucatan/193749/presentan-rosavento-ciudad-maya-en-la-zona-dorada-entre-merida-y-progreso"  
                    target="_blank" alt="Presentan Rosavento Ciudad Maya, en la ''zona dorada'' entre Mérida y Progreso La jornada maya">
                    <img src="lajornadamaya.png" className ="w-40" alt=''/>
                </a>

                <a  title="ELABORA TU PLAN DE INVERSIÓN INMOBILIARIA EN TIEMPO DE CRISIS Real State" href="https://vipexperiences.mx/2020/07/22/elabora-tu-plan-de-inversion-inmobiliaria-en-tiempo-de-crisis/"  
                    target="_blank" alt="ELABORA TU PLAN DE INVERSIÓN INMOBILIARIA EN TIEMPO DE CRISIS Real Estate">
                    <img src="logo-vip-exp.png" className ="w-40" alt=''/>
                </a>

                <a  title="Grupo Inmobiliario Axeda invertirá 1,900 mdp en Progreso, Yucatán" href="https://tecnoempresa.mx/index.php/2022/04/13/grupo-inmobiliario-axeda-invertira-1900-mdp-en-progreso-yucatan/"  
                    target="_blank" alt="Grupo Inmobiliario Axeda invertirá 1,900 mdp en Progreso, Yucatán Tecnoempresa">
                    <img src="tecnoempresa.webp" className ="w-40" alt=''/>
                </a>
                
                <a  title="5 pasos para elaborar tu propio plan de inversión inmobiliaria en tiempo de crisis" href="https://www.larevista.com.mx/nacional/5-pasos-para-elaborar-tu-propio-plan-de-inversion-inmobiliaria-en-tiempo-de-crisis-49152"  
                    target="_blank" alt="Revista Peninsular Rosavento 5 pasos para elaborar tu propio plan de inversión inmobiliaria en tiempo de crisis">
                    <img src="larevistapeninsular.png" className ="w-40" alt=''/>
                </a>

                <a  classname="text-xs" title="Mercado inmobiliario Ranking: Yucatán" href="https://realestatemarket.com.mx/mercado-inmobiliario/33997-ranking-yucatan"  
                    target="_blank" alt="Real Estate">
                    <img src="logo-real-estate-2019.png" className ="w-40" alt=''/>
                </a>

                <a  title="5 pasos para elaborar tu propio plan de inversión inmobiliaria" href="https://cancunissimo.mx/5-pasos-para-elaborar-tu-propio-plan-de-inversion-inmobiliaria/"  
                    target="_blank" alt="5 pasos para elaborar tu propio plan de inversión inmobiliaria Cancunissimo">
                    <img src="logo-cancunissimo-retina.png" className ="w-40" alt=''/>
                </a>

            </div>
        </div> 
    );
};


export default Menciones;