import React from "react";
import { useState } from "react";
import {
  FaFacebookMessenger,
  FaPhoneAlt,
  FaWhatsapp,
  FaCommentDots,
} from "react-icons/fa";
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
              <FaFacebookMessenger />
            </a>
          </li>
          <li className="list-group-item">
            <a
              className="whatapp nav-link"
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/8801886136659"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li className="list-group-item">
            <a className="phnCall nav-link" href="tel:8801521561151">
              <FaPhoneAlt />
            </a>
          </li>
        </ul>

        <ul onClick={toggleClass} className="chaticon list-group">
          <li className="list-group-item b-none">
            <span className="phnCall nav-link">
              <FaCommentDots />
            </span>
          </li>
        </ul>
        
      </div>
    </>
  );
};

export default SocialGroup;
