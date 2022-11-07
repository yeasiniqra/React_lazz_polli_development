import React from 'react';
import { useState } from 'react';
import styles from '../Auth.module.css';
import { useContext } from 'react';
import { userCamelCase } from '../auth.util';
import authContext from '../../store/auth-context';
import { postV2 } from '../../services/http-service-v2';
import { CREATE_REGISTRATION, GET_OTP, LOGIN, UPDATE_PASSWORD, UPDATE_PASSWORD_WEB, VERIFY_OTP } from '../../lib/endpoints';

const VerifyNumber = () => {
  const {
    close,
    signupData,
    login: loginCtx,
    form,
    storeSignupData,
  } = useContext(authContext);

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
    e.preventDefault();

    if (code.length === 0) {
      setCodeError(true);
      return;
    }

    const payload = {
      Code: code,
      Id: signupData.optId,
      ActivityId: window.ActivityId,
    };

    postV2({ url: VERIFY_OTP, payload })
      .then((data) => {
        if (!data.IsError && form === 'OTP') {
          register();
        } else if (!data.IsError && form === 'OTP_RESET_PASSWORD') {
          forgotPassword();
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
      Name: '',
      Phone: signupData.phone,
      Password: signupData.password,
      OTPId: signupData.optId,
      ActivityId: window.ActivityId,
    };

    postV2({ url: CREATE_REGISTRATION, payload })
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
      });
  };

  const login = () => {
    const payload = {
      Password: signupData.password,
      UserName: signupData.phone,
    };
    postV2({ url: LOGIN, payload })
      .then((data) => {
        if (!data.IsError) {
          const user = userCamelCase(data.Data);
          loginCtx(user);
          close();
        } else {
          console.log(data);
          setError(data.Msg);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.toString());
      });
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
    });
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
            />
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
            className={styles.auth_dialouge__actions__button}
            onClick={sendHandler}
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default VerifyNumber;
