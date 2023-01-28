import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { GET_CUSTOMERIS_EXIST, GET_OTP, LOGIN } from '../../lib/endpoints';
import { getV2, postV2 } from '../../services/http-service-v2';
import authContext from '../../store/auth-context';
import styles from '../Auth.module.css';
import { userCamelCase } from '../auth.util';


const Login = () => {
  const { close, open, login: loginCtx, storeSignupData } = useContext(authContext);


  const [error, setError] = useState(null);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [isExist, setIsExist] = useState(false);


  const phoneChangeHandler = ({ target: el }) => {
    setPhone(el.value);
  };

  const phoneFocusHandler = () => {
    setPhoneError(false);
  };

  const requestOTP = () => {
    if (phone.length === 0){
      setPhoneError(true);
      return;
    } 
    // check if user is registered
    getV2({ url: GET_CUSTOMERIS_EXIST+ phone }).then((data) => {
      if (!data.IsError) {
        if (data.Data) { // user is registered
          // request OTP
          getV2({ url: GET_OTP(phone) }).then((data) => {
            if (!data.IsError) {
              storeSignupData({ phoneNumber: phone, messageId : data.Id, otp : ''});
              console.log(data)
              open('OTP_LOGIN');
            } else {
              console.log(data);
              setError('inside err', data.Msg);
            }
          });
        } else {
          setIsExist(true)
          // alert("User is not registered, please sign up.")
        }
      } else {
        console.log(data);
        setError('Error occured while checking registration', data.Msg);
      }
    });
  };
  


// ======================= start its old code 

  // const loginHandler = (e) => {
  //   e.preventDefault();
  //   console.log(phone);
  //   if (phone.length === 0){
  //     setPhoneError(true);
  //     return;
  //   } 
  //   login();
  //   requestOTP();
  // };

  // const login = () => {
  //   const payload = {
  //     UserName : phone,
  //     Password : ''
  //   }

  //   postV2({url: LOGIN, payload})
  //   .then(data => {
  //     if(!data.IsError){
  //       const user = userCamelCase(data.Data);
  //       loginCtx(user);
  //       close();
  //     } else {
  //       console.log(data);
  //       setError(data.Msg);
  //     }
      
  //   }).catch(error => {
  //     setError(error.toString())
  //   });
  // };

  // const requestOTP = () => {
  //   getV2({ url: GET_OTP(phone) }).then((data) => {
  //     if (!data.IsError) {
  //       storeSignupData({ phoneNumber: phone, messageId : data.Id, otp : ''});
  //       console.log(data)
  //       open('OTP_LOGIN');
  //     } else {
  //       console.log(data);
  //       setError('inside err', data.Msg);
  //     }
  //   });
  // };

  // ======================= End its old code 

  const singupClickHandler = () => {
    open('SIGNUP'); 
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
              onChange={phoneChangeHandler}
              onFocus={phoneFocusHandler}
              value={phone}
              placeholder={"Type Your Phon Number"}
            />
            <div className={styles['mobile-icon']}>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <small>{phoneError ? 'Phone number is empty' : ' '}</small>
            <small>{isExist ? 'User is not registered, please sign up.' : ' '}</small>
          </label>
        </div>
        <div className={styles.auth_dialouge__error}>
          <p>{error ? error : ''}</p>
        </div>
        <div className={styles.auth_dialouge__actions}>
          <div>
            <p className={styles.signUp}>
              Create new account{' '}
              <span className={styles['auth_dialouge__actions__button--text']} onClick={singupClickHandler}>
                Sign up
              </span>
            </p>
          </div>
        </div>

        <button className={styles.LogInBtn} label={'Login'} onClick={requestOTP} type={'button'} >Login</button>

      </form>
    </>
  );
};

export default Login;
