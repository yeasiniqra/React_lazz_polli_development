import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import authContext from '../store/auth-context';
import styles from './Auth.module.css';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import VerifyNumber from './VerifyNumber/VerifyNumber';


const Auth = () => {
  const { form, close } = useContext(authContext);

  const authEl = document.querySelector('#auth');

  useEffect(() => {
    if (form) document.querySelector('body').style.position = 'fixed';
    else document.querySelector('body').style.position = 'unset';
  }, [form]);

  if (!form) return <></>;

  let title = 'Login';
  let formComponent = Login;

  switch (form) {
    case 'LOGIN':
      title = 'Login';
      formComponent = <Login />;
      break;
    case 'SIGNUP':
      title = 'Sign Up';
      formComponent = <Signup />;
      break;
    case 'OTP_RESET_PASSWORD':
      title = 'Verify Phone Number';
      formComponent = <VerifyNumber />;
      break;
    case 'OTP':
      title = 'Verify Phone Number';
      formComponent = <VerifyNumber />;
      break;
    default:
      title = 'Login';
      formComponent = <Login />;
      break;
  }

  return (
    <>
      {createPortal(
        <div className={styles.auth}>
          <div className={styles.auth_dialouge}>
            <div className={styles.auth_dialouge__header}>
              <h4 className='text-white'>{title}</h4>
              <i className='fa fa-times' onClick={close}></i>
            </div>
            <div className={styles.auth_dialouge__body}>{formComponent}</div>
          </div>
        </div>,
        authEl
      )}
    </>
  );
};

export default Auth;
