import React from 'react';
import GalleryElement from '../components/GalleryElement/GalleryElement';
import { useTitle } from '../hooks/UseTitle';

const Gallery = () => {
  useTitle('Gallery')
    return (
        <>
          <GalleryElement />  
        </>
    );
};

export default Gallery;