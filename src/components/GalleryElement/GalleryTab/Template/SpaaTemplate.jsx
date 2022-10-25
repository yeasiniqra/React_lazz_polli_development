import React from "react";

const SpaaTemplate = ({product,checkClickHandler, index}) => {

    return (
        <div className="gallery-single-item">
             <img onClick={checkClickHandler.bind(null, index)} src={product.image} alt="lorem" />
            <div className="gallery-overly">
                <img onClick={checkClickHandler.bind(null, index)} className="gallery__Image" src={product.image} alt="lorem" data-large={product.image} />
            </div>
        </div> 
    );
};

export default SpaaTemplate;