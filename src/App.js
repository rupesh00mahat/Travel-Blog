import BodyComponent from "./components/body-component";
import Header from "./components/header";
import React from "react";
import "./style.css";
import SwiperComponent from "./components/swiper-component";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoMdSearch } from "react-icons/io";
import { CiLogin, CiTwitter } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { PiTelegramLogoLight } from "react-icons/pi";


function App() {
  return (
    <div className="App">
      <Header hasNavbar={true} />
      <BodyComponent imgAlign="left" />
      <div id="section-two">
        <SwiperComponent 
        firstTitle ='Trolltunga'
        firstContent={`Norway's Trolltunga, a stunning rock formation, offers daredevils breathtaking views over Lake Ringedalsvatnet. A challenging hike leads to this iconic spot, where nature's power and beauty converge, leaving adventurers in awe.`}
        secondTitle ='Kjeragbolten'
        secondContent={`Suspended between cliffs in Norway's Lysefjord, Kjeragbolten captivates with its audacious presence. Journey through Nordic wilderness to stand atop this giant boulder, where awe-inspiring views humble and inspire.`}
        thirdTitle ="Preikestolen"
        thirdContent={`Preikestolen, rising 604 meters above Lysefjord, offers panoramic vistas of Norway's natural beauty. A trek through forests leads to this flat-topped cliff, where nature's grandeur unfolds, leaving visitors spellbound and humbled.`}
        />
      </div>
      <BodyComponent imgAlign="right" />
      <div id="footer">
        <div className="footer-wrapper">
          <div className="footer-nav">
            <ul className="nav-list">
              <li>home</li>
              <li>articles</li>
              <li>news</li>
              <li>about me</li>
            </ul>
            <div className="navbar-button-wrapper">
              <div className="search-wrapper">
                <IoMdSearch />
                search
              </div>
              <div className="login-wrapper">
                <CiLogin />
                log in
              </div>
            </div>
          </div>
          <div id="footer-social-icons">
          <FiYoutube />
          <CiTwitter />
          <FaInstagram />
          <RiFacebookLine />
          <PiTelegramLogoLight />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
