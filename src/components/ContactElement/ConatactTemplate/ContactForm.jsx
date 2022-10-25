import React from "react";
import { useEffect, useState } from "react";


const ContactForm = () => {
    const title = {
      title : 'How Can We Help?',
    }

    //set button state
    const [clicked, setClicked] = useState(false);

    //set name state
    const [name, setName] = useState("");
    const [nameIsTouched, setNameIsTouched] = useState(false);
    const [nameIsValid, setNameIsValid] = useState(false);

    //set Email state
    const [email, setEmail] = useState("");

    //set phone state
    const [phone, setPhone] = useState("");
    const [phoneIsTouched, setPhoneIsTouched] = useState(false);
    const [phoneIsValid, setPhoneIsValid] = useState(false);

    //message State
    const [message, setMessage] = useState("");
    const [messageIsTouched, setMessageIsTouched] = useState(false);
    const [messageIsValid, setMessageIsValid] = useState(false);

    //Name Funcction
    const nameOnChangeHandler = ({ target }) => {
        setName(target.value);
    };
    const nameTouchedHandler = () => {
        setNameIsTouched(true);
    };

    //email functions
    const emailOnChangeHandler = ({ target }) => {
        setEmail(target.value);
    };

    //phone Funcction
    const phoneOnChangeHandler = ({ target }) => {
        setPhone(target.value);
    };
    const phoneTouchedHandler = () => {
        setPhoneIsTouched(true);
    };

    //Message Funcction
    const messageOnChangeHandler = ({ target }) => {
        setMessage(target.value);
    };
    const messageTouchedHandler = () => {
        setMessageIsTouched(true);
    };

    useEffect(() => {
        if (clicked) {
          if (
            (messageIsTouched && message.length === 0) ||
            (!messageIsTouched && message.length === 0)
          ) {
            setMessageIsValid(true);
          } else setMessageIsValid(false);
    
          if (
            (nameIsTouched && name.length === 0) ||
            (!nameIsTouched && name.length === 0)
          ) {
            setNameIsValid(true);
          } else setNameIsValid(false);
    
          if (
            (phoneIsTouched && phone.length === 0) ||
            (!phoneIsTouched && phone.length === 0)
          ) {
            setPhoneIsValid(true);
          } else setPhoneIsValid(false);
        }
      }, [
        message.length,
        messageIsTouched,
        nameIsTouched,
        name.length,
        phone.length,
        phoneIsTouched,
        clicked,
      ]);

      const sendOnClickedHandler = (evt) => {
        setClicked(true);
        evt.preventDefault();
      }
  

  return (
    <>
      <div className="reqest-demo-left">
        <div className="contact-inner-gradient">
          <h3>{title.title}</h3>
          <div className="reqest-demo-from">
            <form id="contact-form">
              <div className="reqest-inner-content-flex">
                <div className="custom-input">
                  <div className="custom-input">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="auto_bind"
                      data-binding="name"
                      placeholder="Name"
                      onChange={nameOnChangeHandler}
                      onBlur={nameTouchedHandler}
                      value={name}
                    />
                  </div>
                  {nameIsValid && (
                  <div className="alert alert-error">Name is required.</div>
                  )}
                  {nameIsTouched && name.length === 0 && !nameIsValid && (
                  <div className="alert alert-error newAlert">Name is required.</div>
                  )}
                </div>
                <div className="custom-input">
                  <div className="custom-input">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="text"
                      id="email"
                      className="auto_bind"
                      data-binding="email"
                      placeholder="Email"
                      value={email}
                      onChange={emailOnChangeHandler}
                    />
                  </div>
                </div>     
              </div>
              <div className="custom-input">
                <label htmlFor="mobile">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  className="auto_bind"
                  data-binding="mobile"
                  placeholder="phone"
                  value={phone}
                  onChange={phoneOnChangeHandler}
                  onBlur={phoneTouchedHandler}
                />
              </div>
              {phoneIsValid && (
                <div className="alert alert-error">Phone is required.</div>
                )}
                {phoneIsTouched && phone.length === 0 && !phoneIsValid && (
                <div className="alert alert-error">Phone is required.</div>
                )}
              <div className="custom-input">
                <label htmlFor="textarea">Message</label>
                <textarea
                  name="text"
                  id="textarea"
                  className="auto_bind"
                  data-binding="textarea"
                  placeholder="Enter Your Message"
                  required=""
                  value={message}
                  onChange={messageOnChangeHandler}
                  onBlur={messageTouchedHandler}
                ></textarea>
              </div>
              {messageIsValid && (
                <div className="alert alert-error">Message is required.</div>
              )}
              {messageIsTouched && message.length === 0 && !messageIsValid && (
                <div className="alert alert-error">Message is required.</div>
              )}
              <div className="custom-submit">
                <input onClick={sendOnClickedHandler} id="submit" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
