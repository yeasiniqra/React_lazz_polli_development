import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Review = () => {
  //email
  const [clicked, setClicked] = useState(false);

  //email state
  const [email, setEmail] = useState("");
  const [emaileIsTouched, setEmaileIsTouched] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  //email functions
  const emailOnChangeHandeler = ({ target }) => {
    setEmail(target.value);
  };
  const emailTouchedHandeler = () => {
    setEmaileIsTouched(true);
  };

  useEffect(() => {
    if (clicked) {
      if (
        (emaileIsTouched && email.length === 0) ||
        (!emaileIsTouched && email.length === 0)
      ) {
        setEmailIsValid(true);
      }
    } else setEmailIsValid(false);
  }, [email.length, emaileIsTouched, clicked]);

  const sendOnClickedHandler = (evt) => {
    setClicked(true);
    evt.preventDefault();
  };

  return (
    <div id="Tab5" className="tabcontent">
      <div className="room-detaits-main">
        <div className="ex-customar">
          <form>
            <div className="custom-input-resort">
              <label htmlFor="ename">Your Review </label>
              <input
                type="text"
                name=""
                id="ename"
                placeholder="Write Review...."
                value={email} 
                onChange={emailOnChangeHandeler} 
                onBlur={emailTouchedHandeler}
              />
            </div>
            {emailIsValid && (
              <div className="alert alert-error">Is required.</div>
           )}
            {emailIsValid && email.length === 0 && !emailIsValid && (
              <div className="alert alert-error">Is required.</div>
            )}
            <div className="book_table_item dtl-btn">
              <button onClick={sendOnClickedHandler} type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
