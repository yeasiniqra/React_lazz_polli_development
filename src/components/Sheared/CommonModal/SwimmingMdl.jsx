import React from "react";
import { useContext } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { POST_SWMMING_POOL_BOOKING } from "../../../lib/endpoints";
import { humanizeTime } from "../../../lib/utils";
import { postV2 } from "../../../services/http-service-v2";
import authContext from "../../../store/auth-context";
import Suspense from "../Suspense/Suspense";


const SwimmingMdl = ({ swimmin, setSwimmin }) => {
  const {profile} = useContext(authContext)
  const {FirstName,LastName,Phone} = profile
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [phone, setPhone] = useState("");
  const [fname, setFname] = useState("");
  const [adults, setAdults] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [remark, setRemark] = useState("");
  const [hours, setHours] = useState("");
  const [perhours, setPerhours] = useState(200);
  const [phoneError, setPhoneError] = useState(false);
  const [fnameError, setFnameError] = useState(false);
  const [adultsError, setAdultsError] = useState(false);
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);
  const [remarkError, setRemarkError] = useState(false);
  const [HoursError, setHoursError] = useState(false);
  const [paymentPercent, setPaymentPercent] = useState('100%')
  const [isOpen, setIsOpen] = useState(false);


  const handleClicekd = (percent) => {
    setPaymentPercent(percent)
  }
  const phoneChangeHandler = ({ target: el }) => {
    setPhone(el.value);
  };
  const fnameChangeHandler = ({ target: el }) => {
    setFname(el.value);
  };
  const adultsChangeHandler = ({ target: el }) => {
    setAdults(el.value);
    console.log(el.value)
  };
  const remarkChangeHandler = ({ target: el }) => {
    setRemark(el.value);
  };
  const startDateChangeHandler = (date) => {
    console.log("first Slot:", date)
    setStartDate(date);
  };

 const endDateChangeHandler = (date) => {
      setEndDate(date);
  };
  
  const hoursChangeHandler = ({ target: el }) => {
    setHours(el.value);
  };
  const perhoursChangeHandler = ({ target: el }) => {
    setPerhours(el.value);
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

  const remarkFocusHandler = () => {
    setRemarkError(false);
  };
  const hoursFocusHandler = () => {
    setHoursError(false);
  };

  // const totalTime = (humanizeTime(endDate) - humanizeTime(startDate)).toFixed(2)
  // const grandTotal = (adults * totalTime * perhours).toFixed(2);


  // note : time showing 1.5 

  function calculateSolidTime(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const timeDiff = Math.abs(end - start);
    const timeDiffHours = timeDiff / (1000 * 60 * 60);
    const totalTime = parseFloat(timeDiffHours.toFixed(3));
    return totalTime;
  }

  const totalTime = calculateSolidTime(startDate, endDate);
  const grandTotal = (adults * totalTime * perhours).toFixed(2); 

// note : time showing 60 min 

//   function calculateSolidTime(startTime, endTime) {
//     const start = new Date(startTime);
//     const end = new Date(endTime);
//     const timeDiff = Math.abs(end - start);
//     const timeDiffMinutes = Math.round(timeDiff / (1000 * 60));
//     return timeDiffMinutes;
//   }

//   const totalTime = calculateSolidTime(startDate, endDate);
// const grandTotal = (adults * totalTime / 30 * perhours).toFixed(2);





  const conventionHandler = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!startDate || !endDate) {
      alert('Please select start and end dates.');
      return;
    }
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    
    if (startDateObj.getDate() === endDateObj.getDate()) {
      if (startDateObj.getTime() >= endDateObj.getTime()) {
        alert('End time should be greater than start time.');
        return;
      }
    } else {
      if (startDateObj.getTime() > endDateObj.getTime()) {
        alert('End date and time should be greater than start date and time.');
        return;
      }
    }
   
   
    if (adults.length === 0) {
      setAdultsError(true);
      isValid = false;
      return
    }
    if ((totalTime && hours) === 0) {
      setHoursError(true);
      isValid = false;
      return
    }
    setIsLoading(true)
    //Note:  convert GMT to use toSTring()
    const payload = {
      StartingAt: startDate,
      EndingAt: endDate,
      Name : FirstName,
      Phone: Phone,
      Person : adults,
      Duration : totalTime,
      CostPerHour : perhours,
      Amount : grandTotal,
      remark: remark,
    }

    postV2({url: POST_SWMMING_POOL_BOOKING, payload,onError:(response)=>{
      toast.warning(response.Msg);
    }})
    .then(data => {
      if(data.IsError){
        console.log(data.Msg)
      } else {
        toast.success(`Your submission has been received. Our agent will call
         your number to reconfirm.`, {className: "login-popup-x"});
         window.location.href = data.Data.PaymentURL;
      }
    }).catch(err => {
      // toast.warning(err?.toString());
      console.log(err.Msg)
    }).finally(() => {
      setIsLoading(false)
    })
    if (!isValid) return;
  };
  


  return (
    <div className="parent-modal">
      <input type="checkbox" id="swimmin" />
      <label htmlFor="swimmin" className="modal-background"></label>
      <div className="modal">
        <div className="modal-inner swimmin-inner">
        <div className="modal-header">
          <h2>{swimmin.title}</h2>
          <label htmlFor="swimmin">
            <i className="fa fa-times" aria-hidden="true"></i>
          </label>
        </div>
        <form>
          <div className='dateFormate'>
            <div className='common-modal-label'>
              <label htmlFor="date">
                From <small className="dateTimes">Date And Time</small>
                  <DatePicker
                    selected={startDate}
                    onChange={startDateChangeHandler}
                    // onFocus={starDateFocusHandler}
                    onClickOutside={() => setIsOpen(false)}
                    onFocus={() => setIsOpen(true)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    timeCaption="time"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    isOpen={isOpen}
                    placeholderText="00/00/2023 0:00"
                    // placeholderText="Select Date And Time"
                  />
                <small>
                  {startDateError ? "startDateError is empty" : " "}
                </small>
              </label>
            </div>

            <div className='common-modal-label'>
              <label htmlFor="date">
              To <small className="dateTimes">Date And Time</small>
                <DatePicker
                  selected={endDate}
                  onChange={endDateChangeHandler}
                  // onFocus={endDateFocusHandler}
                  onClickOutside={() => setIsOpen(false)}
                  onFocus={() => setIsOpen(true)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={30}
                  timeCaption="time"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  isOpen={isOpen}
                  placeholderText="00/00/2023 0:00"
                  // placeholderText="Select Date And Time"
                  
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

          <div className='dateFormate'>
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
              <label htmlFor="hours">
                Hours
                <input
                  type="text"
                  id="hours"
                  name="hours"
                  onChange={hoursChangeHandler}
                  onFocus={hoursFocusHandler}
                  value={totalTime}
                  placeholder={"Type Your Hours"}
                  disabled
                />
                <small>{HoursError ? "Hours is empty" : " "}</small>
              </label>
            </div>
          </div>
          <div className='dateFormate'>
            <div className='common-modal-label'>
              <label htmlFor="perhours">
               Per Hours Cost
                <input
                  type="text"
                  id="perhours"
                  name="perhours"
                  onChange={perhoursChangeHandler}
                  value={perhours}
                  placeholder={"50 tk"}
                  disabled
                />
              </label>
            </div>
            <div className='common-modal-label'>
              <label htmlFor="totalAmount">
                Total Amount
                <input
                  type="text"
                  id="totalAmount"
                  name="totalAmount"
                  value={grandTotal}
                  disabled
                />
              </label>
            </div>
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
              <small>{remarkError ? "Remark is empty" : " "}</small>
            </label>
          </div>

          <div className="paymet-radio-btn">
              <input 
                type="radio" 
                id="swimming" 
                name="swimming_pool" 
                value="swimming" 
                defaultChecked={paymentPercent === '100%'}
                onClick={handleClicekd.bind(null, '100%')}
                
              />
              <label onClick={handleClicekd.bind(null, '100%')} htmlFor="swimming">Online Payment</label>
          </div> 


          <div className='common-modal-error'>
            <p>{error ? error : ""}</p>
          </div>
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

export default SwimmingMdl;