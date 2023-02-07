import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { CONFIG } from "../../../services/config-service";




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

  // item.Images.map((banner) => (
  //  console.log(banner.ImagePath)
  // ))
  
  return (
    <div className="cottagesuits-grid">
      <div className="cottagesuits-single">
        <div className="cottagesuits-img">
           <Splide options={options} aria-label="React Splide Example">
              {
                  item.Images.map((banner, index) => (
                  <SplideSlide key={index}>
                      <img src={`${CONFIG.IMAGE_URL}/${banner.ImagePath}`}  alt="resort full pakage price in bangladesh" />
                  </SplideSlide>
                  ))
              }
           </Splide>
          <div className="book-overly">
            <div className="common-btn">
            <Link to={`${item.Permalink}`}>{item.Name}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cottagesuits-content">
        <div className="overly-content">
          <div className="hover-ef-1"></div>
          <div className="overly-content-inner">
            <h2>{item.Name}</h2>
            <p>{item.Description}</p>
            <div className="SuitSpecials">
              {/* {
                item.Name && 
                <h3>{item.Name}</h3>
              } */}
              <div className="SuitSpecials-item">
                
                {item.Facalities.map((product, index) => (
                  <div key={index}>
                     {
                      product &&
                        <div className="getway-single-item suitSpecials-single-item">
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            <h4>{product.Name}</h4>
                        </div>
                     }
                  </div>
                ))}
              </div>
            </div>
            <div className="common-btn">
              <Link to={`${item.Permalink}`}>{item.Name}</Link>
            </div>
          </div>

          <div className="hover-ef-2"></div>
        </div>
      </div>
    </div>
  );
};

export default CottagesSuits;
