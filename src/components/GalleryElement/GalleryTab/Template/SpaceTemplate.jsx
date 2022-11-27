import React from "react";


const SpaceTemplate = ({product, checkClickHandler, index}) => {
    return (
        <div className="gallery-single-item">
            <img onClick={checkClickHandler.bind(null, index)} src={product.image} alt="lazz polli resort space" />
            <div className="gallery-overly">
                <img onClick={checkClickHandler.bind(null, index)} className="gallery__Image" src={product.image} alt="lazz polli resort space" data-large={product.image} />
            </div>
        </div> 
    );
};

export default SpaceTemplate;