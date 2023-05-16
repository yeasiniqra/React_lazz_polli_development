import React from "react";

const ContactAddress = () => {
  const title = {
    title : 'Lazzpolli,  Rajfulbaria, Darbarsharif, Savar PS, Dhaka -1340, Bangladesh'
  }
  return (
    <>
      <div className="reqest-demo-right">
        <ul>
          <li>
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>{title.title}</span>
          </li>
          <li>
            <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
            <a href="tel:01810136609​">+88 01810136609​</a>
          </li>
          <li>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <a href="mailto:lazzpolli1@gmail.com">lazzpolli1@gmail.com</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactAddress;
