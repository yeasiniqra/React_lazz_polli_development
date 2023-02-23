import React, { useState } from 'react';
import PreviewImage from '../../Sheared/PreviewImage/PreviewImage';
import IchamotiHouseTemplate from './Template/IchamotiHouseTemplate';

const IchamotiHouse = ({galleryImage, isLoading}) => {
 

    const [preview, setPreview] = useState({ show: false, images: {}, start: 0});

    const previewCloseHandler = () => {
      setPreview({ show: false, images: [], start: 0});
    };
  
    const checkClickHandler = (index) => {
      const images = galleryImage.map(item => item.ImagePath);
      console.log(index)
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
                        galleryImage.filter((product) => product.Category === "Ichamoti House").map( (product, index ) => 
                         <IchamotiHouseTemplate 
                          product={product} 
                          isLoading={isLoading} 
                          key={index} index={index}  
                          checkClickHandler={checkClickHandler} 
                         />
                        )
                    }    
                </div>
            </div>
           <PreviewImage start={preview.start} show={preview.show} images={preview.images} onClose={previewCloseHandler} />   
        </>
    );
};

export default IchamotiHouse;