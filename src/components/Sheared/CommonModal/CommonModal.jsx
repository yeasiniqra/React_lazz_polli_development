import React, { useContext, useState } from 'react';
// import ReactDatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";
import { toast } from 'react-toastify';
import authContext from '../../../store/auth-context';
import styles from './Common.module.css';

const CommonModal = () => {
    const { open } = useContext(authContext);
    
    // console.log(storeSignupData);
  
    const [error, setError] = useState(null);
  
    const [phone, setPhone] = useState('');
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
      if (phone.length === 0) {
        setPhoneError(true);
        isValid = false;
      }
      if (fname.length === 0) {
        setFnameError(true)
        isValid = false
      }
      if (adults.length === 0) {
        setAdultsError(true)
        isValid = false
      }
      if (remark.length === 0) {
        setRemarkError(true)
        isValid = false
      }
  
      console.log({
        fname: fname,
        adults : adults,
        phone : phone, 
        startDate : startDate,
        endDate : endDate,
        remark : remark
      })
  
      if (!isValid) return;
      toast.success(`Your submission has been received. Our agent will call
      your number to reconfirm.`)
  
    };
  


  
    return (
      <>
        <form>
          <div className={styles.dateFormate}>
            <div className={styles.auth_dialouge__form_field}>
                <label htmlFor='date'>
                From
                <DatePicker
                    selected={startDate}
                    onChange={startDateChangeHandler}
                    onFocus={starDateFocusHandler}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                />
                <small>
                    {startDateError ? 'startDateError is empty' : ' '}
                </small>
                </label>
            </div>

            <div className={styles.auth_dialouge__form_field}>
                <label htmlFor='date'>
                To
                <DatePicker
                    selected={endDate}
                    onChange={endDateChangeHandler}
                    onFocus={endDateFocusHandler}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                />
                <small>
                    {endDateError ? 'endDateError is empty' : ' '}
                </small>
                </label>
            </div>
          </div>  

          <div className={styles.dateFormate}>  
          <div className={styles.auth_dialouge__form_field}>
            <label htmlFor='fname'>
             Name
              <input
                type='text'
                id='fname'
                name='fname'
                onChange={fnameChangeHandler}
                onFocus={fnameFocusHandler}
                value={fname}
                placeholder={"Type Your First Name"}
              />
              <small>{fnameError ? 'First Name is empty' : ' '}</small>
            </label>
          </div>
   
          <div className={styles.auth_dialouge__form_field}>
            <label htmlFor='phone'>
              Phone Number
              <input
                type='text'
                id='phone'
                name='phone'
                onChange={phoneChangeHandler}
                onFocus={phoneFocusHandler}
                value={phone}
                placeholder={"Type Your Phon Number"}
              />
              <small>{phoneError ? 'Phone number is empty' : ' '}</small>
            </label>
          </div>
          </div>  

          <div className={styles.auth_dialouge__form_field}>
            <label htmlFor='adults'>
              Person
              <input
                type='text'
                id='adults'
                name='adults'
                onChange={adultsChangeHandler}
                onFocus={adultsFocusHandler}
                value={adults}
                placeholder={"Type Your Adults"}
              />
              <small>
                {adultsError ? 'Person is empty' : ' '}
              </small>
            </label>
          </div>

          <div className={styles.auth_dialouge__form_field}>
            <label htmlFor='remark'>
              Remarks
              <input
                type='text'
                id='remark'
                name='remark'
                onChange={remarkChangeHandler}
                onFocus={remarkFocusHandler}
                value={remark}
                placeholder={"Type Your remark"}
              />
              <small>
                {remarkError ? 'Remark is empty' : ' '}
              </small>
            </label>
          </div>

          
  
          <div className={styles.auth_dialouge__error}>
            <p>{error ? error : ''}</p>
          </div>
          <div className={styles.auth_dialouge__actions}>
             <button className={styles.LogInBtn} onClick={conventionHandler} type={'button'} >Submit</button>
          </div>
        </form>
      </>
    );
};

export default CommonModal;