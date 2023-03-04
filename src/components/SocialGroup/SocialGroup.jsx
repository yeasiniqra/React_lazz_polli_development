import React from "react";
import { useState } from "react";
import messanger from '../../images/social/messenger.png';
import whatsApp from '../../images/social/whatsapp.png';
import telPhone from '../../images/social/telephone.png';
import commentBox from '../../images/social/comments.png';
import "./SocialGroup.css";

const SocialGroup = () => {
  const [toggle, setToggle] = useState();

  const toggleClass = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="social-media-links sticky-call-to-action-btn hiddened">
        <ul className={`collapsible collapsed list-group ${toggle && 'show'}`}>
          <li className="list-group-item">
            <a
              className="messenger nav-link"
              target="_blank"
              rel="noreferrer"
              href="https://m.me/lazzpolli"
            >
              <img src={messanger} alt="best resot in bangladesh" />
            </a>
          </li>
          <li className="list-group-item">
            <a
              className="whatapp nav-link"
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/8801886136659"
            >
              <img src={whatsApp} alt="resort in bangladesh" />
            </a>
          </li>
          <li className="list-group-item">
            <a className="phnCall nav-link" href="tel:8801521561151">
              <img src={telPhone} alt="online booking system" />
            </a>
          </li>
        </ul>

        <ul onClick={toggleClass} className="chaticon list-group">
          <li className="list-group-item b-none">
            <span className="phnCall nav-link">
              <img src={commentBox} alt="lazz polli resort" />
            </span>
          </li>
        </ul>
        
      </div>
    </>
  );
};

export default SocialGroup;
