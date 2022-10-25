import React from 'react';
import BackTotop from './Clock/BackTotop';
import FooterMiddle from './FooterTemplate/FooterMiddle';
import FooterTop from './FooterTemplate/FooterTop';

const Footer = () => {
    return (
        <>
            <FooterTop />
            <FooterMiddle />
            <BackTotop />
        </>
    );
};

export default Footer;