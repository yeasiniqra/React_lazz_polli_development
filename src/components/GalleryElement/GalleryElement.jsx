import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import bg from '../../images/room.jpg'
import GalleryTabLink from './GalleryTab/GalleryTabLink';

const GalleryElement = () => {
    return (
        <>
            <PageHeader imageURL={bg} title={'Gallery'} />
            <section className="gallery-area">
              <div className="container">
                <div className="gallery-main-grid">
                    <GalleryTabLink />
                 </div>
               </div>
            </section>     
        </>
    );
};

export default GalleryElement;