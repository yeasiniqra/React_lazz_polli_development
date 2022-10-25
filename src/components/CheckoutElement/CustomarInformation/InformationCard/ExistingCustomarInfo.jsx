import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ExistingCustomarInfo = () => {
  //set button click
  const [btnClicked, setBtnClicked] = useState(false);

  //set phone state
  const [phone, setPhone] = useState("");
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  //set phone function
  const phoneOnChangeHandler = ({ target }) => {
    setPhone(target.value);
  };
  const phoneTouchedHandler = () => {
    setPhoneIsTouched(true);
  };

  useEffect(() => {
    if (btnClicked) {
      if (
        (phoneIsTouched && phone.length === 0) ||
        (!phoneIsTouched && phone.length === 0)
      ) {
        setPhoneIsValid(true);
      }
    } else setPhoneIsValid(false);
  }, [phone.length, phoneIsTouched, btnClicked]);

  const sendOnClickedHandler = (evt) => {
    setBtnClicked(true)
    evt.preventDefault();
  }

  return (
    <div id="Tab2" className="tabcontent">
      <div className="ex-customar">
        <form>
          <div className="custom-input-resort">
            <label htmlFor="ename">Phone </label>
            <input 
              type="text" 
              name="" 
              id="phone" 
              placeholder="Phone" 
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
           <div className="book_table_item dtl-btn">
            <button onClick={sendOnClickedHandler} type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExistingCustomarInfo;
