import React from "react";
import { imageURL, IMAGE_CATEGORY } from "../../../../lib/galleryService";
import Suspense from "../../../Sheared/Suspense/Suspense";


const RaniyaHouseTemplate = ({product, checkClickHandler, index, isLoading}) => {
    //  console.log('inside gallery ss', product)
    return (
        <div className="gallery-single-item">
            <img onClick={checkClickHandler.bind(null, index)} src={imageURL(IMAGE_CATEGORY.GALLERY,product.ImagePath)} alt="lazz polli resort space" />
            <div className="gallery-overly">
                <img 
                    onClick={checkClickHandler.bind(null, index)} 
                    className="gallery__Image" 
                    src={imageURL(IMAGE_CATEGORY.GALLERY,product.ImagePath)} 
                    alt="lazz polli resort Raniya" 
                    data-large={product.ImagePath} 
                />
            </div>
            {isLoading && <Suspense />}
        </div> 
    );
};

export default RaniyaHouseTemplate;