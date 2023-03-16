import React, { useState } from 'react';

import PreviewImage from '../../Sheared/PreviewImage/PreviewImage';
import Suspense from '../../Sheared/Suspense/Suspense';
import RaniyaHouseTemplate from './Template/RaniyaHouseTemplate';

const RaniyaHouse = ({galleryImage, isLoading}) => {
    const [preview, setPreview] = useState({ show: false, images: {}, start: 0});
    const previewCloseHandler = () => {
      setPreview({ show: false, images: [], start: 0});
    };
    const checkClickHandler = (index) => {
        const images =galleryImage.filter((product) => product.Category === "Rania House" ).map(item => item.ImagePath);
        setPreview({
          show: true,
          images,
          start: index
        });
    };

    return (
        <>
           <div id="Tab7" className="tabcontent">
                <div className="gallery-grid">
                    {
                        galleryImage.filter((product) => product.Category === "Rania House" ).map( (product, index ) => 
                         <RaniyaHouseTemplate product={product} isLoading={isLoading} key={index} index={index}  checkClickHandler={checkClickHandler} />
                        )
                    }                 
                </div>
            </div>
            <PreviewImage start={preview.start} show={preview.show} images={preview.images} onClose={previewCloseHandler} />
            {isLoading && <Suspense />}   
        </>
    );
};

export default RaniyaHouse;