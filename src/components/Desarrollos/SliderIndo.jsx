import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";

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
                <img src="Indo.jpg"/> 
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
