import React from 'react';
import Clock from '../Clock/Clock';

const FooterTop = () => {
    const footerHeadingTag = {
        topHeading : 'Lazz Polli Convention, Hemayetpur Saver',
        bottomHeading : 'Local Time',
    }
    
    return (
            <div className="footer-area-top">
                <div className="container">
                    <div className="footer-top-flex">
                       
                        <div className="header-top-right">
                            <ul className="d-flex cmn">
                                <li>
                                  {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                  <a href="https://www.facebook.com/lazzpolli/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                    <a href='https://twitter.com' target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                    <a href='https://www.youtube.com' target="_blank" rel='noopener noreferrer'><i className="fa fa-youtube" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                    <a href='https://google.com' target="_blank" rel='noopener noreferrer'><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                                    <a href='https://linkedin.com' target="_blank" rel='noopener noreferrer'><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-top-content">
                            <p>{footerHeadingTag.topHeading}</p>
                            <div className="header-top-left">
                                <ul className="d-flex al-center">
                                    <li>
                                        <a href='tel:01778-772327'><i className="fa fa-volume-control-phone" aria-hidden="true"></i><span className="ex-number">+88 01778-772327</span></a>
                                    </li>
                                    <li>
                                        <a href='mailto:info@lazzpolli.com'><i className="fa fa-envelope-o" aria-hidden="true"></i>info@lazzpolli.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-time">
                            <span>{footerHeadingTag.bottomHeading}</span>
                            <Clock />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default FooterTop;