import React from "react";

const ContactAddress = () => {
  const title = {
    title : 'Lazz Polli Convention, Hemayetpur Saver'
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
            <a href="tel:01521-561151​">+88 01521-561151​</a>
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
