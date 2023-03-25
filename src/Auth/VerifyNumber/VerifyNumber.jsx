import React from 'react';
import { useState } from 'react';
import styles from '../Auth.module.css';
import { useContext } from 'react';
import { userCamelCase } from '../auth.util';
import authContext from '../../store/auth-context';
import { postV2 } from '../../services/http-service-v2';
import { REGISTER, GET_OTP, LOGIN, UPDATE_PASSWORD, UPDATE_PASSWORD_WEB } from '../../lib/endpoints';
import { toast } from 'react-toastify';
import SmallLoder from '../../components/Sheared/SmallLoder/SmallLoder';

const VerifyNumber = () => {
  const {
    close,
    signupData,
    login: loginCtx,
    form,
    storeSignupData,
  } = useContext(authContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState(false);

  const codeChangeHandler = ({ target: el }) => {
    setCode(el.value);
  };
  const codeFocusHandler = () => {
    setCodeError(false);
  };
  const sendHandler = (e) => {
    setIsLoading(true)
    e.preventDefault();
    if (code.length === 0) {
      setCodeError(true);
      return;
    }
    if (form === 'OTP') {
      register();
    }else{
      login();
      toast.success('You are successfully logged in 😊', {className: "login-popup",  autoClose: 1000})
      setIsLoading(false)
    }
  };

  

  const forgotPassword = () => {
    const payload = {
      Name: '',
      Phone: signupData.phone,
      Password: signupData.password,
      OTPId: signupData.optId,
      ActivityId: window.ActivityId,
    };

    postV2({ url: UPDATE_PASSWORD, payload })
      .then((data) => {
        if (!data.IsError) {
          login();
        } else {
          console.log(data);
          setError(data.Msg);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.toString());
      });
  };

  const register = () => {
    const payload = {
      "PhoneNumber": signupData.phoneNumber,
      "FirstName": signupData.firstName,
      "LastName": signupData.lastName,
      "MessageId": signupData.messageId,
      "OTP": code
    };
    postV2({ url: REGISTER, payload })
      .then((data) => {
        if (!data.IsError) {
          login();
        } else {
          console.log(data);
          setError(data.Msg);
        }
      })
      .catch((err) => {
        console.log('inside err', err);
        setError(err.toString());
      }).finally(() => {
      });
  };

  const login = () => {
    const payload = {
      UserName : signupData.phoneNumber,
      Password : ''
    }

    postV2({url: LOGIN, payload})
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
    }).finally(() => {
    });;
  };

  const getCodeFromForResetPassword = () => {
    const payload = {
      ActivityId: window.ActivityId,
      Phone: signupData.phone,
    };
    postV2({ url: UPDATE_PASSWORD_WEB, payload }).then((data) => {
      if (!data.IsError) {
        storeSignupData({ ...signupData, optId: data.Id });
        setError('New OTP code sent successfully');
      } else {
        console.log(data);
        setError(data.Msg);
      }
    });
  };

  const getCodeFromForSignup = () => {
    const payload = {
      ActivityId: window.ActivityId,
      Phone: signupData.phone,
    };
    postV2({ url: GET_OTP, payload }).then((data) => {
      if (!data.IsError) {
        storeSignupData({ ...signupData, optId: data.Id });
        setError('New OTP code sent successfully');
      } else {
        console.log(data);
        setError(data.Msg);
      }
    }).finally(() => {
    });;
  };

  const resendClickHandler = () => {
    if (form === 'OTP') {
      getCodeFromForSignup();
    } else if (form === 'OTP_RESET_PASSWORD') {
      getCodeFromForResetPassword();
    }
  };

  return (
    <>
      <form>
        <div className={styles.auth_dialouge__form_field}>
          <label htmlFor='phone'>
            Please Enter Your OTP Code
            <input
              type='text'
              id='phone'
              onChange={codeChangeHandler}
              onFocus={codeFocusHandler}
              value={code}
              placeholder={"Otp Code Here"}
            />
             <div className={styles['mobile-icon']}>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <small>{codeError ? 'Code number is empty' : ' '}</small>
          </label>
        </div>
        <div className={styles.auth_dialouge__error}>
          <p>{error ? error : ''}</p>
        </div>
        <div className={styles.auth_dialouge__actions}>
          <div>
            <p>
              Did not get OTP code ?{' '}
              <span
                className={styles['auth_dialouge__actions__button--text']}
                onClick={resendClickHandler}
              >
                Resend
              </span>
            </p>
          </div>

          <button
            className={styles.LogInBtn}
            onClick={sendHandler}
          >
            Send
          </button>
        </div>
      </form>
      {isLoading && <SmallLoder />}
    </>
  );
};

export default VerifyNumber;
