/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ConventionTemplate = ({convention, setConventions}) => {
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
        <>
            <div className="relax-spa-inner-grid convention-hall-area">
                <div className="relax-spa-img-left">
                    <Splide options={options} aria-label="React Splide Example">
                        {
                            convention.images.map((banner, index) => (
                            <SplideSlide key={index}>
                                <img src={banner.image} alt="resort full pakage price in bangladesh" />
                            </SplideSlide>
                            ))
                        }
                    </Splide>
                </div>
                <div className="relax-spa-img-content">
                    <h1>{convention.title}</h1>
                    <p>{convention.description}</p>
                    <label className="example-label common-btn" htmlFor="swimmin" onClick={() => setConventions(convention)}> 
                     <a>Book Now</a>
                    </label>
                </div>
            </div>
        </>
    );
};

export default ConventionTemplate;