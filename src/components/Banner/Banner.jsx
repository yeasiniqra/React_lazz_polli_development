import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { getBanners } from "../../services/data-service";
import BannerTemplate from "./BannerTemplate/BannerTemplate";
import butterfly from '../../images/butterfly3.gif'

const Banner = () => {
  const banners = getBanners();

  const options = {
    rewind: true,
    type: "fade",
    autoplay: true,
    rewindSpeed: 1000,
    speed: 500,
    pauseOnHover: false,
    fixedWidth: "100%",
    fixedHeight: "auto",
  };

  return (
    <div className="banner-area">
      <div className="butterfly-stacic">
        <img src={butterfly} alt="0butterfly" />
      </div>
      <Splide options={options} aria-label="React Splide Example">
        {
            banners.map((banner, index) => (
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
