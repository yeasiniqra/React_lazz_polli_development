import React from 'react';
import logo from '../../../images/logo-white.png';
import NewsLogo from '../../../images/logo-black.png';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import SocialGroup from '../../SocialGroup/SocialGroup';
import payment from '../../../images/payment2.jpg'

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
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/career">Career</Link></li>
                                <li><Link to="/room">Room & Suites</Link></li>
                                <li><Link to="/dine">Dine</Link></li>
                                {/* <li><Link to="/checkout">Checkout</Link></li> */}
                                <li><Link to="/termsconditions">Terms Conditions</Link></li>
                                <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                <li><Link to="/refund">Refund Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-news footer-logo">
                        <div className="payment-method">
                            <h2>Accepted Payment Methods</h2>
                            <img src={payment} alt="payment" />
                        </div>
                        <div className="footer-marque">
                            <Marquee behavior={"scrolling"} direction={"left"} scrollamount={3}>
                               <h2>Explore & Enjoy With Our Resort.</h2>
                             </Marquee>
                            <div className="footer-overly">
                                <img src={NewsLogo} alt="best resort in bangldesh online book" />
                            </div>
                        </div>
                        <div className="tin-number">
                            <h5>Trade License No : </h5>
                            <p>20192617289009012</p>
                        </div>
                    </div>
                </div>
              
                <div className="footer-bottom">
                    <p>&copy; 2023. Lazz Polli Resort. All rights reserved.</p>
                    <span>Site Developed by - <a target="_blank" href='https://iqrasys.com' rel="dofollow">Iqrasys Solutions Ltd.</a></span>
                </div>
            </div>
            <SocialGroup />
        </section>
    );
};

export default FooterMiddle;