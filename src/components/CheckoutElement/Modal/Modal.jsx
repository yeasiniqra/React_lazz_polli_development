import React from 'react';
import image from '../../../images/check-icon.png';
import logo from '../../../images/logo-black.png';

const Modal = () => {
    return (
        <div className="modal" id="modal-one">
            <div className="modal-bg modal-exit"></div>
            <div className="modal-container">
                <img src={image} alt="modal logos" />
                <h1>
                    <span>Your submission has been received.</span>
                    <span>Your order number is "0723009"</span>
                    <span>Our agent will call your number "01720000000" to reconfirm.</span>
                </h1>
                <img className="popup-img" src={logo} alt="" />
                <h2>Thank You</h2>
                <button className="modal-close modal-exit">×</button>
            </div>
         </div>
    );
};

export default Modal;