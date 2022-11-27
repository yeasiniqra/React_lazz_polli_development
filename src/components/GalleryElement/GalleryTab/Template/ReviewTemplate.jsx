import React from "react";

const ReviewTemplate = ({product,checkClickHandler,index}) => {
    return (
        <div className="gallery-single-item">
            <img onClick={checkClickHandler.bind(null, index)} src={product.image} alt="bset resort in bangladesh" />
            <div className="gallery-overly">
                <img onClick={checkClickHandler.bind(null, index)} className="gallery__Image" src={product.image} alt="cottage hottel rooms" data-large={product.image} />
            </div>
        </div> 
    );
};

export default ReviewTemplate;