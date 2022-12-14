import React from 'react';
import { useState } from 'react';
import styles from '../Auth.module.css';
import { useContext } from 'react';
import authContext from '../../store/auth-context';
import { getV2, postV2 } from '../../services/http-service-v2';
import { GET_CUSTOMERIS_EXIST, GET_OTP} from '../../lib/endpoints';



const Signup = () => {
  const { open, storeSignupData } = useContext(authContext);

  // console.log(storeSignupData);

  const [error, setError] = useState(null);
  const [isValid, setIsvalid] = useState(false)

  const [phone, setPhone] = useState('');
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [phoneError, setPhoneError] = useState(false);
  const [fnameError, setFnameError] = useState(false);
  const [lnameError, setLnameError] = useState(false);



  const phoneChangeHandler = ({ target: el }) => {
    setPhone(el.value);
  };

  const fnameChangeHandler = ({ target: el }) => {
    setFname(el.value);
  };

  const lnameChangeHandler = ({ target: el }) => {
    setLname(el.value);
  };

  const phoneFocusHandler = () => {
    setPhoneError(false);
  };

  const fnameFocusHandler = () => {
    setFnameError(false);
  };

  const lnameFocusHandler = () => {
    setLnameError(false);
  };

  const signupHandler = (e) => {
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
    if (lname.length === 0) {
      setLnameError(true)
      isValid = false
    }

    console.log(fname,lname,phone)

    if (!isValid) return;
    requestOTP();

  };

  const requestOTP = () => {
    getV2({ url: GET_OTP(phone, false) }).then((data) => {
      if (!data.IsError) {
        storeSignupData({ phoneNumber: phone, firstName: fname, lastName:lname, messageId : data.Id, otp : ''});
        console.log(data)
        open('OTP');
      } else {
        console.log(data);
        setError('inside err', data.Msg);
      }
    });
  };

  const customertIsExist = (phone) => {
    getV2({ url: GET_CUSTOMERIS_EXIST+ phone }).then((data) => {
      if (!data.IsError) {
        setIsvalid(data.Data)
        if (data.Data) {
          alert("Phone Number is Exist")
        }
      } else {
       
      }
    });
  };

  const loginClickHandler = () => {
    open('LOGIN');
  };

  const phoneOnBluer = ({ target: el }) => {
    customertIsExist(el.value)
  }


  return (
    <>
      <form>
        <div className={styles.auth_dialouge__form_field}>
          <label htmlFor='fname'>
           First Name
            <input
              type='text'
              id='fname'
              name='fname'
              onChange={fnameChangeHandler}
              onFocus={fnameFocusHandler}
              value={fname}
              placeholder={"Type Your First Name"}
            />
            <div className={styles['mobile-icon']}>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <small>{fnameError ? 'First Name is empty' : ' '}</small>
          </label>
        </div>
        <div className={styles.auth_dialouge__form_field}>
          <label htmlFor='lname'>
            Last Name
            <input
              type='text'
              id='lname'
              name='lname'
              onChange={lnameChangeHandler}
              onFocus={lnameFocusHandler}
              value={lname}
              placeholder={"Type Your Last Name"}
            />
            <div className={styles['mobile-icon']}>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <small>
              {lnameError ? 'Last Name is empty' : ' '}
            </small>
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
              onBlur={phoneOnBluer}
            />
            <div className={styles['mobile-icon']}>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <small>{phoneError ? 'Phone number is empty' : ' '}</small>
          </label>
        </div>
        <div className={styles.auth_dialouge__error}>
          <p>{error ? error : ''}</p>
        </div>
        <div className={styles.auth_dialouge__actions}>
          <div>
            <p className={styles.signUp}>
              Already have account ?{' '}
              <span
                className={styles['auth_dialouge__actions__button--text']}
                onClick={loginClickHandler}
              >
                Login
              </span>
            </p>
          </div>

           <button className={styles.LogInBtn} onClick={signupHandler} type={'button'} >Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default Signup;
