import React from "react";

const RestaurantTemplate = ({product,index,checkClickHandler}) => {

    return (
        <div className="gallery-single-item">
           <img onClick={checkClickHandler.bind(null,index)} src={product.image} alt="bangladesh resturent" />
        <div className="gallery-overly">
            <img onClick={checkClickHandler.bind(null,index)} className="gallery__Image" src={product.image} alt="coxs barger resort" data-large={product.image} />
        </div>
    </div> 
    ); 
};

export default RestaurantTemplate;