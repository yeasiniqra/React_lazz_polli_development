import React, { useContext, useState } from 'react';
import { Link, useNavigate, NavLink, } from "react-router-dom";
import logo from '../../../images/logo-white.png';
import logoBlack from '../../../images/logo-black.png';
import authContext from '../../../store/auth-context';


const HeaderNav = () => {
    const { open, user } = useContext(authContext);
    const [isActive, setActive] = useState(false);
    const [isActiveSub, setActiveSub] = useState(false);
    const navigate = useNavigate();

    const profileHandler = () => {
        navigate('/profile/order')
    }
    const toggleClass = (e) => {
        setActive(!isActive)
    };
    const toggleClassSub = () => {
        setActiveSub(!isActiveSub)
    }; 
    const loginClickHandler = () => {
        open();
    }     

    return (
        <>
            <div className="header-top-area">
                <div className="container">
                    <div className="main-menu-flex">
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                        <div className='normal-mobile-view'>
                            <button className="nav_icon mobile-desk" onClick={toggleClass}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <li className="book-now mobile-desk nav-login"><Link to="/searchroom">Book Now</Link></li>
                        </div>
                        <div id="mySidepanel" className={`main-menu sidepanel ${isActive ? 'showMenu' : ''}`}   >
                            <div  className="mobile-desk closebtn" onClick={toggleClass}>&times;</div>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/room"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Room & Suite
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
                                                to="/convention"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                            Convention
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                
                                <li className="book-now login-mobile-hide"><Link to="/searchroom">Book Now</Link></li>
                                {
                                    user && user.id ? 
                                    <><button onClick={() => {
                                        profileHandler();
                                        toggleClass();
                                      }} className='nav-login nav-login-mobile'><i className="fa fa-user-circle-o" aria-hidden="true"></i>Profile</button></>
                                    :
                                    <><button onClick={() => {
                                        loginClickHandler();
                                        toggleClass();
                                      }} className='nav-login nav-login-mobile'><i className="fa fa-user-circle-o" aria-hidden="true"></i>Login</button></>
                                    
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hide-menu animi slideInDown">
                <div className="container">
                    <div className="main-menu-flex">
                        <div className="logo">
                            <Link to="/"><img src={logoBlack} alt="logo" /></Link>
                        </div>
                        <div className='normal-mobile-view'>
                            <button className="nav_icon mobile-desk" onClick={toggleClass}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <li className="book-now mobile-desk nav-login"><Link to="/searchroom">Book Now</Link></li>
                        </div>
                        <div id="mySidepanel2" className={`main-menu sidepanel ${isActive ? 'showMenu' : ''}`}>
                           <div  className="mobile-desk closebtn" onClick={toggleClass}>&times;</div>
                           <ul>
                                <li>
                                    <NavLink
                                       onClick={toggleClass}
                                        to="/"
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Home
                                    </NavLink>
                                </li>
                                 <li>
                                    <NavLink
                                        to="/room"
                                        onClick={toggleClass}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                    >
                                    Room & Suite
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
                                                to="/convention"
                                                onClick={toggleClass}
                                                className={({ isActive }) => (isActive ? "link-active" : "link")}
                                            >
                                             Convention
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="book-now login-mobile-hide"><Link to="/searchroom">Book Now</Link></li>
                                {
                                     user && user.id ? 
                                    <><button onClick={() => {
                                        profileHandler();
                                        toggleClass();
                                      }} className='nav-login nav-login-mobile'><i className="fa fa-user-circle-o" aria-hidden="true"></i>Profile</button></>
                                    :
                                    <><button onClick={() => {
                                        loginClickHandler();
                                        toggleClass();
                                      }} className='nav-login nav-login-mobile'><i className="fa fa-user-circle-o" aria-hidden="true"></i>Login</button></>
                                    
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderNav;