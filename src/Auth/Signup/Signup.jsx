import React from 'react';
import { useState } from 'react';
import styles from '../Auth.module.css';
import { useContext } from 'react';
import authContext from '../../store/auth-context';
import { getV2 } from '../../services/http-service-v2';
import { GET_CUSTOMERIS_EXIST, GET_OTP} from '../../lib/endpoints';
import SmallLoder from '../../components/Sheared/SmallLoder/SmallLoder';
import { toast } from 'react-toastify';

const Signup = () => {
  const { open, storeSignupData } = useContext(authContext);
  const [isLoading, setIsLoading] = useState(false);

  const [isExist, setIsExist] = useState(false);
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
    setIsLoading(true)
    let isValid = true;
    if (phone.length === 0) {
      setPhoneError(true);
      setIsLoading(false)
      isValid = false;
    }
    if (fname.length === 0) {
      setFnameError(true)
      setIsLoading(false)
      isValid = false
    }
    if (lname.length === 0) {
      setLnameError(true)
      setIsLoading(false)
      isValid = false
    }

    if (!isValid) return;
    requestOTP();
  };

  const requestOTP = () => {
    getV2({ url: GET_OTP(phone, false),onError:(response)=>{
      toast.warning(response.Msg);
    } }).then((data) => {
      if (!data.IsError) {
        storeSignupData({ phoneNumber: phone, firstName: fname, lastName:lname, messageId : data.Id, otp : ''});
        console.log(data)
        open('OTP');
      } else {
        console.log(data.Msg);
        setError('inside err', data.Msg);
      }
    });
  };

  const customertIsExist = (phone) => {
    getV2({ url: GET_CUSTOMERIS_EXIST+ phone,onError:(response)=>{
      toast.warning(response.Msg);
    } }).then((data) => {
      if (!data.IsError) {
        setIsvalid(data.Data)
        if (data.Data) {
          setIsExist(true);
          setIsLoading(false)
        } else {
          setIsExist(false);
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
            <small>{isExist ? 'Phone Number Already Exist' : ' '}</small>
          </label>
        </div>
        <div className={styles.auth_dialouge__error}>
          <p>{error ? error : ''}</p>
        </div>
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
           <div className="login-btn-small">
              <button disabled={isExist} className={styles.LogInBtn} onClick={signupHandler} type={'button'} >Sign Up</button>
              {isLoading && <SmallLoder />}
           </div>
        </div>
      
      </form>
    </>
  );
};

export default Signup;
