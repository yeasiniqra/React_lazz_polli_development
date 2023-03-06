/* eslint-disable jsx-a11y/anchor-is-valid */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


import React from 'react';
import { useState } from "react";
import Suspense from "../Sheared/Suspense/Suspense";
const SwimmingPoolTemplate = ({pool, setSwimmin}) => {
    const options = {
        rewind: true,
        type: "slide",
        autoplay: true,
        rewindSpeed: 1000,
        speed: 500,
        pauseOnHover: false,
        fixedWidth: "100%",
        fixedHeight: "auto",
      };
      const [loading, setLoading] = useState(true);

      const handleImageLoad = () => {
          setLoading(false);
      };  

    return (
        <div className="relax-spa-inner-grid convention-hall-area">
            <div className="relax-spa-img-left">
             {loading && (
                    <div className="loader">
                        <Suspense />
                    </div>
                )}
                   <Splide options={options} aria-label="React Splide Example">
                        {
                            pool.images.map((banner, index) => (
                            <SplideSlide key={index}>
                                <img src={banner.image} alt="resort full pakage price in bangladesh" onLoad={handleImageLoad} />
                            </SplideSlide>
                            ))
                        }
                    </Splide>
            </div>
            <div className="relax-spa-img-content">
                <h1>{pool.title}</h1>
                <p dangerouslySetInnerHTML={{__html: pool.description}}></p>
                <label className="example-label common-btn" htmlFor="swimmin" onClick={() => setSwimmin(pool)}> 
                     <a>Book Now</a>
                </label>
            </div>
        </div>
    );
};

export default SwimmingPoolTemplate;