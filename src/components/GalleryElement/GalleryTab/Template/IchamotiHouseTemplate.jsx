import React from "react";
import { imageURL, IMAGE_CATEGORY } from "../../../../lib/galleryService";

const IchamotiHouseTemplate = ({product,index,checkClickHandler,isLoading}) => {
    return (
        <div className="gallery-single-item">
            <img onClick={checkClickHandler.bind(null,index)} src={imageURL(IMAGE_CATEGORY.GALLERY,product.ImagePath)} alt="bangladesh resturent" />
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

export default IchamotiHouseTemplate;