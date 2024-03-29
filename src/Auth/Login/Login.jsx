import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import SmallLoder from '../../components/Sheared/SmallLoder/SmallLoder';
import { GET_CUSTOMERIS_EXIST, GET_OTP } from '../../lib/endpoints';
import { getV2 } from '../../services/http-service-v2';
import authContext from '../../store/auth-context';
import styles from '../Auth.module.css';
import { toast } from 'react-toastify';

const Login = () => {
  const {  open, login: loginCtx, storeSignupData } = useContext(authContext);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true)
    if (phone.length === 0){
      setPhoneError(true);
      setIsLoading(false)
      return;
    } 
    // check if user is registered
    getV2({ url: GET_CUSTOMERIS_EXIST+ phone,onError:(response)=>{
      toast.warning(response.Msg);
    } }).then((data) => {
      if (!data.IsError) {
        if (data.Data) { // user is registered
          // request OTP
          getV2({ url: GET_OTP(phone),onError:(response)=>{
            toast.warning(response.Msg);
          } }).then((data) => {
            if (!data.IsError) {
              storeSignupData({ phoneNumber: phone, messageId : data.Id, otp : ''});
              console.log(data)
              open('OTP_LOGIN');
            } else {
              console.log(data.Msg);
              setError('inside err', data.Msg);
            }
          });
        } else {
          setIsExist(true)
          setIsLoading(false)
        }
      } else {
        console.log(data);
        setError('Error occured while checking registration', data.Msg);
        setIsLoading(false)
      }
    });
  };
  const singupClickHandler = () => {
    open('SIGNUP'); 
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      requestOTP();
    }
  };

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
              onKeyPress={handleKeyPress}
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
        <div className="login-btn-small">
          <button className={styles.LogInBtn} label={'Login'} onClick={requestOTP} type={'button'} >Login</button>
          {isLoading && <SmallLoder />}
        </div>
      </form>
     
    </>
  );
};

export default Login;
