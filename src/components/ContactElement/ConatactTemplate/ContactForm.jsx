import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { POST_CONTACT } from "../../../lib/endpoints";
import { postV2 } from "../../../services/http-service-v2";
import Suspense from "../../Sheared/Suspense/Suspense";


const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const title = {
      title : 'How Can We Help?',
    }

    //set button state

    //set name state
    const [name, setName] = useState("");
    //set Email state
    const [email, setEmail] = useState("");
    //set phone state
    const [phone, setPhone] = useState("");
    //message State
    const [message, setMessage] = useState("");


    //Name Funcction
    const nameOnChangeHandler = ({ target }) => {
        setName(target.value);
    };
    //email functions
    const emailOnChangeHandler = ({ target }) => {
        setEmail(target.value);
    };

    //phone Funcction
    const phoneOnChangeHandler = ({ target }) => {
        setPhone(target.value);
    };

    //Message Funcction
    const messageOnChangeHandler = ({ target }) => {
        setMessage(target.value);
    };



      const checkField = (fieldName) => {
        if (!fieldName) {
          return true;
        }
        return false;
      };


      const sendOnClickedHandler = (evt) => {
        
        evt.preventDefault();


        let emptyFields = [];
        if (checkField(name)) {
          emptyFields.push(' Name');
        }
        if (checkField(email)) {
          emptyFields.push('Email');
        }
        if (checkField(phone)) {
          emptyFields.push('phone');
        }
        if (checkField(message)) {
          emptyFields.push('message');
        }
    
        if (emptyFields.length > 0) {
          const errorMessage = `${emptyFields.join(', ')} ${emptyFields.length > 1 ? 'are' : 'is'} required.`;
          toast.warning(errorMessage);
          return;
        }

        setIsLoading(true)
        const payload = {
          Name : name,
          PhoneNumber : phone,
          Email : email,
          Message : message,
          changeLog: ""
        }

        postV2({url: POST_CONTACT, payload, onError:(response)=>{
          toast.warning(response.Msg);
        }})
        .then(data => {
          if(!data.IsError){
            toast.success("message sent successfully 😊", {className: "login-popup-x"});
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
          } else {
            // toast.warning(data.Msg);
            console.log(data.Msg)
          }
        }).catch(err => {
          // toast.warning(err?.toString());
          console.log(err)
        }).finally(() => {
          setIsLoading(false)
          
        })
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
                      value={name}
                    />
                  </div>
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
                />
              </div>
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
                ></textarea>
              </div>
              <div className="custom-submit">
                <input onClick={sendOnClickedHandler} id="submit" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {isLoading && <Suspense />}
    </>
  );
};

export default ContactForm;
