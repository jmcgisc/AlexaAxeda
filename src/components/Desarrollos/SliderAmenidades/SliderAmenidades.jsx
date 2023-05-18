import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import SliderAmenidadesRosavento from './SliderAmenidadesRosavento';
import { Pagination } from "swiper"; 

const SliderAmenidades = () => {
    return (
        <div>      
        <Swiper
            pagination={{
            dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
        <SwiperSlide> 
        
        <div className="grid xl:grid-cols-12 place-items-center xl:py-4 xl:gap-20 place-items-center bg-[url('/public/backGreen.png')]">
    
                <div className="col-start-2">
                        <img src="amenidades.png"  alt="amenidades"/>    
                        <p className ="text-3xl text-axeda py-10">Amenidades</p>
                </div>
                <div className="col-start-5">
                        <img src="maps.png"/>
                        <p className ="text-3xl text-axeda py-10 ">Ubicación</p>
                </div>

                <div className="col-start-8">
                        <img src="plusvalia.png "/>    
                        <p className ="text-3xl text-axeda py-10">Plusvalía</p>
                </div>
                <div className="col-start-11">
                        <img src="areasv.png"/>
                        <p className ="text-3xl text-axeda py-10 ">Áreas Verde</p>
                </div>

                <div className="col-start-2">
                        <img src="credito.png "/>    
                        <p className ="text-3xl text-axeda py-10">Facilidad de pago</p>
                </div>
                <div className="col-start-5">
                        <img src="familia.png"/>
                        <p className ="text-3xl text-axeda py-10 ">Ambiente Familiar</p>
                </div>

                <div className="col-start-8">
                        <img src="desarrollos.png "/>    
                        <p className ="text-3xl text-axeda py-10">Desarrollos</p>
                </div>
                <div className="col-start-11">
                        <img src="ubicacion.png"/>
                        <p className ="text-3xl text-axeda py-10 ">Terrenos Residenciales</p>
                </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="grid xl:grid-cols-12 place-items-center xl:py-4 xl:gap-20 place-items-center bg-[url('/public/homeBack2.png')]">
            <div></div>         <div className=" mt-7"></div>      
            <div className="col-start-2">
                    <img src="icon-blue-camaras_azul.png "/>    
                    <p className ="text-3xl text-blue-400 py-10">Seguridad</p>
            </div>

            <div className="col-start-5">
                    <img src="icon-blue-asadores_azul.png"/>
                    <p className ="text-3xl text-blue-400 py-10 ">Asadores</p>
            </div>

            <div className="col-start-8">
                    <img src="icon-blue-canchas padel_azul.png "/>    
                    <p className ="text-3xl text-blue-400 py-10">Canchas de padel</p>
            </div>

            <div className="col-start-11">
                    <img src="icon-blue-ciclovia_azul.png"/>
                    <p className ="text-3xl text-blue-400 py-10 ">Ciclovía</p>
            </div>

            <div className="col-start-2">
                    <img src="icon-blue-alberca_azul.png"  alt="amenidades"/>    
                    <p className ="text-3xl text-blue-400 py-10">Alberca</p>
            </div>

            <div className="col-start-5">
                    <img src="icon-blue-roof_azul.png"/>
                    <p className ="text-3xl text-blue-400 py-10 ">Roof Garden</p>
            </div>

            <div className="col-start-8">
                    <img src="icon-blue-kidsa_azul.png "/>    
                    <p className ="text-3xl text-blue-400 py-10">Área infantil</p>
            </div>
            <div className="col-start-11">
                    <img src="icon-blue-gym_azul.png"/>
                    <p className ="text-3xl text-blue-400 py-10 ">Gimnasio</p>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
 
        {/*Slider Mobile*/}
        <div className="lg:hidden">
                <div className="grid grid-cols-1 gap-8">
                    <div className="flex flex-row-reverse sm:col-start-1 w-full h-56 xl:h-[600px] xl:ellipse-desarrollos"> 
                        <SliderAmenidadesRosavento/>
                    </div>
                </div>
        </div>
            
        </div>
    )
}

export default SliderAmenidades
