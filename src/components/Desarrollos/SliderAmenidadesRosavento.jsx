import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import './Rosavento/styles.css'

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';

export default function Slider(props) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress); 
  };
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true, 
          
        }}
        navigation={false}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >

            <SwiperSlide>
              <div className="grid grid-cols-2 gap-8 place-items-center bg-[url('/public/backGreen.png')]">
                    <img src="amenidades.png" className="h-12 w-10 py-4 "/>    
                    <p className ="text-3xl text-axeda py-10">Amenidades</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-2 gap-8 place-items-center bg-[url('/public/backGreen.png')]">
                        <img src="maps.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda py-10 ">Ubicación</p>
              </div>
            </SwiperSlide>        
            
            <SwiperSlide>
              <div className="grid grid-cols-2 gap-8 place-items-center bg-[url('/public/backGreen.png')]">
                        <img src="areasv.png" className="h-28 w-14 py-4"/>
                        <p className ="text-3xl text-axeda  py-10">Áreas Verdes</p>
              </div>
            </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg  ref={progressCircle}> 
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
