import React from "react";
import Navbar from "./navbar";
import "../style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import SliderComponent from "./slider-component";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwiperComponent(props) {
  return ( <div id="swiper-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            {" "}
            <SliderComponent 
            title={props.firstTitle}
            content={props.firstContent}
            />
          </SwiperSlide>
          <SwiperSlide >
            {" "}
            <SliderComponent
            title={props.secondTitle}
            content={props.secondContent}  />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <SliderComponent 
            title={props.thirdTitle}
            content={props.thirdContent}  />
          </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default SwiperComponent