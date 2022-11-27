import React from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const FullPackageTemplate = ({item}) => {
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
        <div className='package-grid-inner'>
            <div className="package-grid-img">
               <div className="package-img">
                  <Splide options={options} aria-label="React Splide Example">
                    {
                        item.images.map((banner, index) => (
                        <SplideSlide key={index}>
                            <img src={banner.image} alt="resort cottage & hotel price in bangladesh" />
                        </SplideSlide>
                        ))
                    }
                </Splide>
               </div>
            </div>
            <div className="package-grid-content">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <div className="getway-item">
                   {
                    item.guests.map((product, index)  => 
                    <div key={index} className='getway-single-item'>
                        <h4>{product.heading}</h4>
                        <h5>{product.subHeading}</h5>
                    </div> 
                    )
                   }
                </div>
                <div className='SuitSpecials'>
                   <h3>{item.specialTitle}</h3>
                   <div className='SuitSpecials-item'>
                   {
                    item.suitSpecials.map((product, index)  => 
                    <div key={index} className='getway-single-item suitSpecials-single-item'>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                        <h4>{product.title}</h4>
                    </div> 
                    )
                   }
                   </div>
                </div>
                <div className='SuitSpecials'>
                   <h3>{item.standerdTitle}</h3>
                   <div className='SuitSpecials-item'>
                   {
                    item.standard.map((product, index)  => 
                    <div key={index} className='getway-single-item suitSpecials-single-item full-pkg'>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                        <h4>{product.title}</h4>
                    </div> 
                    )
                   }
                   </div>
                </div> 
                <div className='common-btn'>
                    <Link to={item.link}>Book Now</Link>
                </div>    
            </div>
        </div>
    );
};

export default FullPackageTemplate;