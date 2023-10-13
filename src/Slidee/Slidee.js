import prd1 from '../images/prd1.png'
import prd2 from '../images/prd2.png'
import prd3 from '../images/prd3.png'
import prd4 from '../images/prd4.png'
import prd5 from '../images/prd5.png'
import prd6 from '../images/prd6.png'

import prd8 from '../images/prd8.jpg'
import prd9 from '../images/prd9.png'

import prd11 from '../images/prd11.png'
import prd12 from '../images/prd12.PNG'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "../Slide/slide.css"



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slidee() {
  return (
    <>
   
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={prd1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prd2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prd3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prd4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prd5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prd6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prd8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prd9} />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src={prd11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={prd12} />
        </SwiperSlide>
       
        
      </Swiper>
      
    </>
  );
}