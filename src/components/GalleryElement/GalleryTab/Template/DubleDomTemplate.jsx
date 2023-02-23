import React from "react";
import { imageURL, IMAGE_CATEGORY } from "../../../../lib/galleryService";
import Suspense from "../../../Sheared/Suspense/Suspense";

const DubleDomTemplate = ({ product,checkClickHandler, index, isLoading }) => {
  return (
    <div className="gallery-single-item">
          <img onClick={checkClickHandler.bind(null,index)} src={imageURL(IMAGE_CATEGORY.GALLERY,product.ImagePath)} alt="resort in bd activitis" />
        <div className="gallery-overly">
          <img
             onClick={checkClickHandler.bind(null, index)}
            className="gallery__Image"
            src={imageURL(IMAGE_CATEGORY.GALLERY,product.ImagePath)}
            alt="best resort in gallery bangladesh"
            data-large={product.ImagePath}
           
          />
        </div>
        {isLoading && <Suspense />}
    </div>
  );
};

export default DubleDomTemplate;
