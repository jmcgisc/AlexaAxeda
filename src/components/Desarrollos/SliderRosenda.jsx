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

export default function Slider() {
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
          delay: 2500,
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
                <img src="Rosenda1.jpg"/> 
            </SwiperSlide>

            <SwiperSlide>
                <img src="Rosenda2.jpg"/> 
            </SwiperSlide>        
            
            <SwiperSlide>
                <img src="Rosenda3.jpg"/> 
            </SwiperSlide>

            <SwiperSlide>
                <img src="Rosenda4.jpg"/> 
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