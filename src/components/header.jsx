import React, { useState } from "react";
import Navbar from "./navbar";
import "../style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


import SliderComponent from "./slider-component";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperComponent from "./swiper-component";

function Header(props) {
  const [toggleState, changeToggleState] = useState(false);

  const toggleNavbar = (value)=>{
changeToggleState(value);
if(value === true){
  const navbar = document.querySelector(`nav`);
 navbar.style.display = 'flex';
}
else if(value === false){
  const navbar = document.querySelector(`nav`);
 navbar.style.display = 'none';
}
  }

  return (
    <div id="header">
      {props.hasNavbar && <Navbar />}
      <div className="hamburger-menu">
      {toggleState == false && <GiHamburgerMenu  onClick={()=>{
        toggleNavbar(true);
      }}/>}
     {toggleState == true && <IoClose onClick={()=>{
                toggleNavbar(false);

      }}/>}

        </div>

      <SwiperComponent
      firstTitle ="travel blog"
      firstContent='The principle of perception reflects a typical sign. Hence it follows naturally that bhatavada makes a sign. Common sense, of course, is ambiguous, According to the opinion of well-lnown philosophers, the pain decomposes structuralism into elements. Structuralism mentally takes into account the deductive method.'
      secondTitle='Discover Hidden Gems'
      secondContent='Exploring off-the-beaten-path destinations unveils the true essence of travel. Serene landscapes, untouched by the masses, offer a glimpse into the soul of a place. As you venture into these hidden gems, each step unravels a new chapter, painting memories that last a lifetime.'
      thirdTitle='Immerse in Local Culture'
      thirdContent='Dive deep into the heart of local culture and traditions. Engage with communities, savor authentic cuisine, and partake in age-old customs. Every interaction is a window to a world of diversity, enriching your journey with invaluable experiences and insights.'
     
      />
    </div>
  );
}

export default Header;
