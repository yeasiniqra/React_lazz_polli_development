import React from "react";
import { imageURL, IMAGE_CATEGORY } from "../../../../lib/galleryService";

const MudHouseTemplate = ({product, checkClickHandler, index, isLoading}) => {
    return (
        <div className="gallery-single-item">
                <img onClick={checkClickHandler.bind(null,index)} src={imageURL(IMAGE_CATEGORY.GALLERY,product.ImagePath)} alt="resort pools" />
            <div className="gallery-overly">
            <img 
                    onClick={checkClickHandler.bind(null, index)} 
                    className="gallery__Image" 
                    src={imageURL(IMAGE_CATEGORY.GALLERY,product.ImagePath)} 
                    alt="lazz polli resort Raniya" 
                    data-large={product.ImagePath} 
                />
            </div>
        </div> 
    );
};

export default MudHouseTemplate;