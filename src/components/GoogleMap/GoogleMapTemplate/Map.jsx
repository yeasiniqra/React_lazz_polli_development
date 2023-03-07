import React, { useState } from 'react';

const Map = () => {
    const [mapInteracted, setMapInteracted] = useState(false);
    const  handleMapInteraction = () => {
        setMapInteracted(true);
      }
      
    return (
        <>
            <iframe
            onLoad={handleMapInteraction}
            title="Gooogle Map"
            src={mapInteracted ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3835401431706!2d90.2598539!3d23.8049568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755eb01964f0f8b%3A0x61de440329a821fc!2sLazz%20Polli%20Convention!5e0!3m2!1sen!2sbd!4v1658041586709!5m2!1sen!2sbd" : ""}
            width="100%"
            height="600"
            frameBorder="0"
            
            />
        </>
    );
};

export default Map;