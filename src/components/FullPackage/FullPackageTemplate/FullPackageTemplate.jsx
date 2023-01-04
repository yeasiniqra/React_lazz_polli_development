/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const FullPackageTemplate = ({item, setPackage}) => {
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
        <div className="relax-spa-inner-grid convention-hall-area full-package-area">
        <div className="relax-spa-img-left">
            <Splide options={options} aria-label="React Splide Example">
                {
                    item.images.map((banner, index) => (
                    <SplideSlide key={index}>
                        <img src={banner.image} alt="resort full pakage price in bangladesh" />
                    </SplideSlide>
                    ))
                }
            </Splide>
        </div>
        <div className="relax-spa-img-content">
            <h1>{item.title}</h1>
            <p dangerouslySetInnerHTML={{__html: item.description}}></p>
            <label className="example-label common-btn" htmlFor="swimmin" onClick={() => setPackage(item)}> 
             <a>Book Now</a>
            </label>
        </div>
    </div>
    );
};

export default FullPackageTemplate;