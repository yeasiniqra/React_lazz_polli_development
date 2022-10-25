import React, { useState, useEffect } from 'react';

const BackTotop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        });
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };
      
    return (
        <>
            {
            showButton && (
                <button onClick={scrollToTop} className="toTop" id='toTop'> </button>
            )
            }
        </>
    );
};

export default BackTotop;