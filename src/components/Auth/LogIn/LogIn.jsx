import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../Sheared/Input/Input';
import SignUp from '../SignUp/SignUp';
import styles from "./Login.module.css";


const LogIn = ({ show, onClose }) => {
    const navigate = useNavigate();

    const [phone, setPhone] = useState("")

    const phoneChangeHandlers = (phone) => {
        setPhone(phone)
        console.log(phone);
    }

   const handleSubmit = (e) => {
    e.preventDefault()
     navigate('/profile/order')
   } 

  if (!show) return <></>;
  return (
    <>
    <div className={styles.backDrop} >
      <div className={styles.modal} id="modal-one">
        <div className={`${styles["modal-bg"]} ${styles["modal-close"]}`}></div>
          <div className={`${styles["modal-container"]}`}>
            <form>
                <div className={styles['login-form']}>
                    <h2>LogIn</h2>
                    <div className={styles.single}>
                        <label htmlFor="phone">Phon Number</label>
                        <Input
                            onChange={phoneChangeHandlers}
                            value={phone}
                            id='phone'
                            placeholder={"Type Your Phon Number"}
                        />
                        <div className={styles['mobile-icon']}>
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                    </div>
                    <h3 className={styles.signUp}>Create new account <Link onClick={onClose} to='/profile/signup'>SignUP</Link></h3>
                    <button onClick={onClose} className={styles.LogInBtn}>
                        <span onClick={handleSubmit}>LogIn</span>
                    </button>
                </div>
            </form>
            
            <button
              className={`${styles["modal-close"]} ${styles["modal-close"]}`}
              onClick={onClose}
            >
              ×
            </button>
          </div>
      </div>
    </div>
    <SignUp />
    </>
  );
};

export default LogIn;