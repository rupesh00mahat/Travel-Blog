import React from 'react'
import Navbar from './navbar'
import '../style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import SliderComponent from './slider-component';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Header() {
 
  return (
    <div id='header'>
        <Navbar/>
       <div id="swiper-wrapper">
       <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={50}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
     scrollbar={{ draggable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
    >
         <SwiperSlide> <SliderComponent/></SwiperSlide>
         <SwiperSlide> <SliderComponent/></SwiperSlide>
         <SwiperSlide> <SliderComponent/></SwiperSlide>
        
        </Swiper>
       </div>
    </div>
  )
}

export default Header