import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import { getBanners } from "../../services/data-service";
import BannerTemplate from "./BannerTemplate/BannerTemplate";
import butterfly from '../../images/butterfly3.gif'
import { getBanners2 } from "../../services/AppDataService";

const Banner = () => {
  // const banners = getBanners();
  const newBanner = getBanners2();
 
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

/*
Banner
Width : 1900px
height : 855px

Home box
width : 700px
height : 400px

Home Full Package
width : 900px
height : 400px

Room & Suites
Width : 800px
height : 800px

Book Single Room From -
width : 770px
height : 550px

gallery -
width : 550px
height : 450px


raniya 32000 full | icamoti
single 4500 

dbl 10000 full
single 4500

mud h 2000
single 2000

swmming pool 200 hour


*/