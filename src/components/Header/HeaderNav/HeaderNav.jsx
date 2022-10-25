import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../../../images/logo-white.png';
import logoBlack from '../../../images/logo-black.png';


const HeaderNav = () => {
    const [isActive, setActive] = useState();
    const toggleClass = () => {
        setActive(!isActive)
    };

    const [isActiveSub, setActiveSub] = useState();
    const toggleClassSub = () => {
        setActiveSub(!isActiveSub)
    }; 

    const [isActiveSearch, setActiveSearch] = useState();
    const toggleClassSearch = () => {
        setActiveSearch(!isActiveSearch)
    };

    return (
        <>
            <div className="header-top-area">
                <div className="container">
                    <div className="main-menu-flex">
                        <div className="logo">
                            <Link to="/home"><img src={logo} alt="logo" /></Link>
                        </div>
                        <button className="nav_icon mobile-desk openbtn" onClick={toggleClass}>
                            <i className="fa fa-bars"></i>
                        </button>
                        <div id="mySidepanel" className={`main-menu sidepanel ${isActive && 'showMenu'}`}   >
                            <div  className="mobile-desk closebtn" onClick={toggleClass}>&times;</div>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/home"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/searchroom"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Search Room
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/room"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Rooms
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    About
                                    </NavLink>
                                </li>
                                <li className="prent-dropdown">
                                    <Link onClick={toggleClassSub} to="#">
                                        Other Page 
                                        <span className="caret"></span>
                                    </Link>
                                    <ul className={`child-dropdown ${isActiveSub && 'showSubMenu'}`}>
                                        <li>
                                            <NavLink
                                                to="/gallery"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                            Gallery
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/career"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                            Career
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/suits"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                            Suites
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dine"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                            Dine
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/relax"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                            Relax
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/enjoy"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                            Enjoy
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="search-mobile">
                                    <Link to="#"><i className="fa fa-search openBtn" onClick={toggleClassSearch}></i> </Link>
                                </li>
                                <li className="book-now"><Link  onClick={toggleClass} to="/searchroom">Book Now</Link></li>
                              
                                <div id="myOverlay" className={`overlaySearch ${isActiveSearch && 'showMenuSearch'}`}>
                                    <span className="closebtn" onClick={toggleClassSearch} title="Close Overlay">×</span>
                                    <div className="overlay-content">
                                        <form action="#">
                                            <input type="text" placeholder="Search Here..." name="search" />
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hide-menu animi slideInDown">
                <div className="container">
                    <div className="main-menu-flex">
                        <div className="logo">
                            <Link to="/home"><img src={logoBlack} alt="logo" /></Link>
                        </div>
                        <button className="nav_icon mobile-desk openbtn" onClick={toggleClass}>
                            <i className="fa fa-bars"></i>
                        </button>
                        <div id="mySidepanel2" className={`main-menu sidepanel ${isActive && 'showMenu'}`}>
                           <div  className="mobile-desk closebtn" onClick={toggleClass}>&times;</div>
                           <ul>
                                <li>
                                    <NavLink
                                       onClick={toggleClass}
                                        to="/home"
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Home
                                    </NavLink>
                                </li>
                                 <li>
                                    <NavLink
                                        to="/searchroom"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Search Room
                                    </NavLink>
                                </li>
                                 <li>
                                    <NavLink
                                        to="/room"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Rooms
                                    </NavLink>
                                </li>
                                 <li>
                                    <NavLink
                                        to="/contact"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Contact
                                    </NavLink>
                                </li>
                                 <li>
                                    <NavLink
                                        to="/about"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    About
                                    </NavLink>
                                </li>
                                <li className="prent-dropdown">
                                    <Link onClick={toggleClassSub} to="#">
                                        Other Page 
                                        <span className="caret"></span>
                                    </Link>
                                    <ul className={`child-dropdown ${isActiveSub && 'showSubMenu'}`} >
                                        <li>
                                            <NavLink
                                                to="/gallery"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                             Gallery
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/career"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                             Career
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/suits"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                             Suites
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dine"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                             Dine
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/relax"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                             Relax
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/enjoy"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                             Enjoy
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="search-mobile">
                                   <Link onClick={toggleClassSearch} to="#"><i className="fa fa-search openBtn" ></i> </Link>
                                </li>
                                <li className="book-now"><Link  onClick={toggleClass} to="/searchroom">Book Now</Link></li>
                              
                                <div id="myOverlay" className={`overlaySearch ${isActiveSearch && 'showMenuSearch'}`}>
                                <span className="closebtn" onClick={toggleClassSearch} title="Close Overlay">×</span>
                                    <div className="overlay-content">
                                        <form action="#">
                                            <input type="text" placeholder="Search Here..." name="search" />
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderNav;