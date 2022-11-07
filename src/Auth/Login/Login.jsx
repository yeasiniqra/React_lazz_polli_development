import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { postV2 } from '../../services/http-service-v2';
import authContext from '../../store/auth-context';
import styles from '../Auth.module.css';
import { userCamelCase } from '../auth.util';

const Login = () => {
  const { close, open, login: loginCtx } = useContext(authContext);

  const [error, setError] = useState(null);

  const [phone, setPhone] = useState('');
 

  const [phoneError, setPhoneError] = useState(false);


  const phoneChangeHandler = ({ target: el }) => {
    setPhone(el.value);
  };

  const phoneFocusHandler = () => {
    setPhoneError(false);
  };


  const loginHandler = (e) => {
    e.preventDefault();
    console.log(phone);
    if (phone.length === 0){
      setPhoneError(true);
      return;
    } 

    login();
  };

  const login = () => {
    const payload = {
      UserName: phone
    }

    postV2({url: 'LOGIN', payload})
    .then(data => {
      if(!data.IsError){
        const user = userCamelCase(data.Data);
        loginCtx(user);
        close();
      } else {
        console.log(data);
        setError(data.Msg);
      }
      
    }).catch(error => {
      setError(error.toString())
    });
  };

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
        <button className={styles.LogInBtn} label={'Login'} onClick={loginHandler} type={'button'} >Login</button>
      </form>
    </>
  );
};

export default Login;
