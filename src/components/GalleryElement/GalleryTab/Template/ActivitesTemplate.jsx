import React from "react";

const ActivitesTemplate = ({ product,checkClickHandler, index }) => {
  return (
    <div className="gallery-single-item">
          <img onClick={checkClickHandler.bind(null,index)} src={product.image} alt="resort in bd activitis" />
        <div className="gallery-overly">
          <img
             onClick={checkClickHandler.bind(null, index)}
            className="gallery__Image"
            src={product.image}
            alt="best resort in gallery bangladesh"
            data-large={product.image}
           
          />
        </div>
    </div>
  );
};

export default ActivitesTemplate;
