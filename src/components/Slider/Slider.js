

import img18 from '../images/img18.PNG'
import img19 from '../images/img19.PNG'
import img20 from '../images/img20.PNG'
import img21 from '../images/img21.PNG'
import img22 from '../images/img22.PNG'
import img23 from '../images/img23.PNG'
import img24 from '../images/img24.png'
import img25 from '../images/img25.PNG'
import img26 from '../images/img26.PNG'
import img27 from '../images/img27.PNG'
import img28 from '../images/img28.png'
import img29 from '../images/img29.PNG'
import img30 from '../images/img30.PNG'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
   
      <Swiper data-aos="fade-up"
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
          <img src={img18} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img19} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img20} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img21} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img22} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img23} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img24} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img25} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img26} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img27} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img28} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img29} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img30} />
        </SwiperSlide>
      </Swiper>
      
    </>
  );
}