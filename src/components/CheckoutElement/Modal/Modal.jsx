import React from 'react';
// import image from '../../../images/check-icon.png';
import logo from '../../../images/logo-black.png';

const Modal = ({image,heading,subHeding,contactInfo}) => {
    return (
        <div className="modal" id="modal-one">
            <div className="modal-bg modal-exit"></div>
            <div className="modal-container">
                <img src={image} alt="modal resort lazz polli" />
                <h1>
                    <span>{heading}</span>
                    <br />
                    <span>{subHeding}</span>
                    <span>{contactInfo}</span>
                </h1>
                <img className="popup-img" src={logo} alt="modal resort lazz polli" />
                <h2>Thank You</h2>
                <button className="modal-close modal-exit">×</button>
            </div>
         </div>
    );
};

export default Modal;