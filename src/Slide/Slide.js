
import img18 from '../image/img18.webp'
import img19 from '../image/img19.webp'
import img20 from '../image/img20.webp'
import img21 from '../image/img21.webp'
import img22 from '../image/img22.webp'
import img23 from '../image/img23.webp'
import img24 from '../image/img24.webp'
import img25 from '../image/img25.webp'
import img26 from '../image/img26.webp'
import img27 from '../image/img27.webp'
import img28 from '../image/img28.webp'
import img29 from '../image/img29.webp'
import img30 from '../image/img30.webp'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Slide/slide.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slide() {
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