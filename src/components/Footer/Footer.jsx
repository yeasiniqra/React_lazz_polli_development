import React from 'react';
import BackTotop from './Clock/BackTotop';
import FooterMiddle from './FooterTemplate/FooterMiddle';
import FooterTop from './FooterTemplate/FooterTop';

const Footer = () => {
    return (
        <div className='hide-on-print'>
            <FooterTop />
            <FooterMiddle />
            <BackTotop />
        </div>
    );
};

export default Footer;