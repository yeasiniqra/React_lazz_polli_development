import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const RestaurantDineTemplate = ({dine}) => {
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

    return (
            <div className="relax-spa-inner-grid convention-hall-area">
                <div className="relax-spa-img-left">
                    <Splide options={options} aria-label="React Splide Example">
                        {
                            dine.images.map((banner, index) => (
                            <SplideSlide key={index}>
                                <img src={banner.image} alt="resort full pakage price in bangladesh" />
                            </SplideSlide>
                            ))
                        }
                    </Splide>
                </div>
                <div className="relax-spa-img-content">
                    <h1>{dine.title}</h1>
                    <p dangerouslySetInnerHTML={{__html: dine.description}}></p>
                </div>
            </div>
    );
};

export default RestaurantDineTemplate;