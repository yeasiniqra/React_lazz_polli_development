import React from 'react';
import logo from '../../../images/logo-white.png';
import NewsLogo from '../../../images/logo-black.png';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const FooterMiddle = () => {
    return (
         <section className="footer-area">
            <div className="container">
                <div className="footer-main-flex">
                    <div className="footer-logo">
                        <Link to="/home"><img src={logo} alt="footer logo" /></Link>
                    </div>
                    <div className="footer-menu">
                        <div className="footer-menu">
                            <ul className="footer-links">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/searchroom">Search Room</Link></li>
                                <li><Link to="/room">Rooms</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/career">Career</Link></li>
                                <li><Link to="/room">Suites</Link></li>
                                <li><Link to="/dine">Dine</Link></li>
                                <li><Link to="/relax">Relax</Link></li>
                                <li><Link to="/enjoy">Enjoy</Link></li>
                                <li><Link to="/checkout">Checkout</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-news footer-logo">
                        <div className="footer-marque">
                            <Marquee behavior={"scrolling"} direction={"left"} scrollamount={3}>
                               <h2>Explore & Enjoy With Our Resort.</h2>
                             </Marquee>
                            <div className="footer-overly">
                                <img src={NewsLogo} alt="Footer Logo" />
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="footer-bottom">
                    <p>&copy; 2022. Lazz Polli Resort. All rights reserved.</p>
                    <span>Site Developed by - <a target="_blank" href='https://iqrasys.com' rel="noopener noreferrer">Iqrasys Solutions Ltd.</a></span>
                </div>
            </div>
        </section>
    );
};

export default FooterMiddle;