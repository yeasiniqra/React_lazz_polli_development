import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import BannerTemplate from "./BannerTemplate/BannerTemplate";
import butterfly from '../../images/butterfly3.gif'
import { getBanners2 } from "../../services/AppDataService";

const Banner = () => {
  const newBanner = getBanners2();
  const options = {
    rewind: true,
    type: "fade",
    autoplay: true,
    rewindSpeed: 1500,
    speed: 1000,
    pauseOnHover: false,
    fixedWidth: "100%",
    fixedHeight: "auto",
  };

  return (
    <div className="banner-area">
      <div className="butterfly-stacic">
        <img src={butterfly} alt="lazz polli butterfly" />
      </div>
      <Splide options={options} aria-label="React Splide Example">
        {
            newBanner.map((banner, index) => (
            <SplideSlide key={index}>
                <BannerTemplate banner={banner}></BannerTemplate>
            </SplideSlide>
            ))
        }
      </Splide>
    </div>
  );
};

export default Banner;

