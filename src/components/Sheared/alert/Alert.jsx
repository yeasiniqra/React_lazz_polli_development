import React from "react";
import styles from "./Alert.module.css";
import image from "../../../images/check-icon.png";
import { Link } from "react-router-dom";

const Alert = ({ show, text, onClose }) => {
  if (!show) return <></>;
  return (
    <div className={styles.backDrop}  onClick={onClose}>
      <div className={styles.modal} id="modal-one">
        <div className={`${styles["modal-bg"]} ${styles["modal-close"]}`}></div>
          <div className={`${styles["modal-container"]}`}>
            <img src={image} alt="lazz polli resort" />
            <h1>{text}</h1>
            <div className={styles.popbtn}>
                 <Link to='/profile/order'>View Order</Link>
            </div>
            <button
              className={`${styles["modal-close"]} ${styles["modal-close"]}`}
              onClick={onClose}
            >
              ×
            </button>
          </div>
      </div>
    </div>
  );
};

export default Alert;
