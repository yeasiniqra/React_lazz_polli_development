import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CottagesSuits = ({ item }) => {
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
    <div className="cottagesuits-grid">
      <div className="cottagesuits-single">
        <div className="cottagesuits-img">
           <Splide options={options} aria-label="React Splide Example">
              {
                  item.images.map((banner, index) => (
                  <SplideSlide key={index}>
                      <img src={banner.image} alt="resort full pakage price in bangladesh" />
                  </SplideSlide>
                  ))
              }
           </Splide>
          <div className="book-overly">
            <div className="common-btn">
              <Link to={`${item.Id}`}>{item.btnText}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cottagesuits-content">
        <div className="overly-content">
          <div className="hover-ef-1"></div>
          <div className="overly-content-inner">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="SuitSpecials">
              <h3>{item.cottagesTitle}</h3>
              <div className="SuitSpecials-item">
                {item.cottagesSpecials.map((product, index) => (
                  <div
                    key={index}
                    className="getway-single-item suitSpecials-single-item"
                  >
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    <h4>{product.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="common-btn">
              <Link to={`${item.Id}`}>{item.btnText}</Link>
            </div>
          </div>

          <div className="hover-ef-2"></div>
        </div>
      </div>
    </div>
  );
};

export default CottagesSuits;
