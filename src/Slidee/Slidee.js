import prd1 from '../image/prd1.webp'
import prd2 from '../image/prd2.webp'
import prd3 from '../image/prd3.webp'
import prd4 from '../image/prd4.webp'
import prd5 from '../image/prd5.webp'
import prd6 from '../image/prd6.webp'
import prd8 from '../image/prd8.webp'
import prd9 from '../image/prd9.webp'

import prd11 from '../image/prd11.webp'
import prd12 from '../image/prd12.webp'


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
          <img src={prd9} />
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