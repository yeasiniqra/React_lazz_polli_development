import React from "react";
import { useContext } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { POST_CONVENTION_BOOKING } from "../../../lib/endpoints";
import {  postV2 } from "../../../services/http-service-v2";
import authContext from "../../../store/auth-context";
import Suspense from "../Suspense/Suspense";

const ConventionMdl = ({ conventions, setConventions }) => {
  const {profile} = useContext(authContext)
  const {FirstName,LastName,Phone} = profile
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [phone, setPhone] = useState("");
  const [fname, setFname] = useState("");
  const [adults, setAdults] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [remark, setRemark] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [fnameError, setFnameError] = useState(false);
  const [adultsError, setAdultsError] = useState(false);
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);
  const [remarkError, setRemarkError] = useState(false);

  const phoneChangeHandler = ({ target: el }) => {
    setPhone(el.value);
  };
  const fnameChangeHandler = ({ target: el }) => {
    setFname(el.value);
  };
  const adultsChangeHandler = ({ target: el }) => {
    setAdults(el.value);
  };
  const remarkChangeHandler = ({ target: el }) => {
    setRemark(el.value);
  };
  const startDateChangeHandler = (date) => {
    setStartDate(date);
  };
  const endDateChangeHandler = (date) => {
    setEndDate(date);
  };
  const phoneFocusHandler = () => {
    setPhoneError(false);
  };
  const fnameFocusHandler = () => {
    setFnameError(false);
  };
  const adultsFocusHandler = () => {
    setAdultsError(false);
  };
  const starDateFocusHandler = () => {
    setStartDateError(false);
  };
  const endDateFocusHandler = () => {
    setEndDateError(false);
  };
  const remarkFocusHandler = () => {
    setRemarkError(false);
  };


  const conventionHandler = (e) => {
  
    e.preventDefault();
    let isValid = true;

    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    
    if (endDateObj.getTime() < startDateObj.getTime()) {
      alert('End date  should be greater than start date ');
      return;
    }
    

    if (adults.length === 0) {
      setAdultsError(true);
      isValid = false;
      return
    }
    setIsLoading(true)

    const payload = {
      StartingAt: startDate,
      EndingAt: endDate,
      Name : FirstName,
      phone: Phone,
      Person : adults,
      Duration : 1,
      remark: remark,
    }

    postV2({url: POST_CONVENTION_BOOKING, payload, onError:(response)=>{
      toast.warning(response.Msg);
    }})
    .then(data => {
      if(data.IsError){
        console.log(data.Msg)
      } else {
        toast.success(`Your submission has been received. Our agent will call
         your number to reconfirm.`, {className: "login-popup-x"});
      }
    }).catch(err => {
      // toast.warning(err?.toString());
      console.log(err)
    }).finally(() => {
      setIsLoading(true)
      setConventions(null) 
    })
    if (!isValid) return;
  };



  return (
    <div className="parent-modal">
      <input type="checkbox" id="swimmin" />
      <label htmlFor="swimmin" className="modal-background"></label>
      <div className="modal">
        <div className="modal-inner">
        <div className="modal-header">
          <h2>{conventions.title}</h2>
          <label htmlFor="swimmin">
             <i className="fa fa-times" aria-hidden="true"></i>
          </label>
        </div>
        <form>
          <div className='dateFormate'>
            <div className='common-modal-label'>
              <label htmlFor="date">
                From
                <DatePicker
                  selected={startDate}
                  onChange={startDateChangeHandler}
                  onFocus={starDateFocusHandler}
                  dateFormat="MM/dd/yyyy"
                  minDate={new Date()}
                  showDisabledMonthNavigation
                />
                <small>
                  {startDateError ? "startDateError is empty" : " "}
                </small>
              </label>
            </div>
            <div className='common-modal-label'>
              <label htmlFor="date">
                To
                <DatePicker
                  selected={endDate}
                  onChange={endDateChangeHandler}
                  onFocus={endDateFocusHandler}
                  dateFormat="MM/dd/yyyy"
                  minDate={new Date()}
                  showDisabledMonthNavigation
                />
                <small>{endDateError ? "endDateError is empty" : " "}</small>
              </label>
            </div>
          </div>
          <div className='dateFormate'>
            <div className='common-modal-label'>
              <label htmlFor="fname">
                Name
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={fnameChangeHandler}
                  onFocus={fnameFocusHandler}
                  value={FirstName}
                  readOnly
                  placeholder={"Type Your First Name"}
                />
                <small>{fnameError ? "First Name is empty" : " "}</small>
              </label>
            </div>
            <div className='common-modal-label'>
              <label htmlFor="phone">
                Phone Number
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={phoneChangeHandler}
                  onFocus={phoneFocusHandler}
                  value={Phone}
                  placeholder={"Type Your Phon Number"}
                />
                <small>{phoneError ? "Phone number is empty" : " "}</small>
              </label>
            </div>
          </div>
          <div className='common-modal-label'>
            <label htmlFor="adults">
              Person
              <input
                type="text"
                id="adults"
                name="adults"
                onChange={adultsChangeHandler}
                onFocus={adultsFocusHandler}
                value={adults}
                placeholder={"Type Your Person"}
              />
              <small>{adultsError ? "Person is empty" : " "}</small>
            </label>
          </div>
          <div className='common-modal-label'>
            <label htmlFor="remark">
              Remarks
              <input
                type="text"
                id="remark"
                name="remark"
                onChange={remarkChangeHandler}
                onFocus={remarkFocusHandler}
                value={remark}
                placeholder={"Type Your remark"}
              />
            </label>
          </div>
          {/* <div className='common-modal-error'>
            <p>{error ? error : ""}</p>
          </div> */}
          <div className='common-modal-action'>
            <button
              className='common-modal-submit'
              onClick={conventionHandler}
              type={"button"}
            >
              Submit
            </button>
          </div>
          {isLoading && <Suspense />}
        </form>
        </div>
      </div>
    </div>
  );
};

export default ConventionMdl;
