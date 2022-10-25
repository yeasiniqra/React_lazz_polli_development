import React, { useState, useEffect } from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderNav from './HeaderNav/HeaderNav';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect( () => (
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 40)
        })
    ),[]);
    return (
        <>
        <div className={`main-header-area ${scroll && 'fade-in'}`}>
            <HeaderTop /> 
            <HeaderNav />
         </div>
        </>
    );
};

export default Header;