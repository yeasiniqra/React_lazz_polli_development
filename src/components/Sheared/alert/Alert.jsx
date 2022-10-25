import React from "react";
import styles from "./Alert.module.css";
import image from "../../../images/check-icon.png";
import logo from "../../../images/logo-black.png";

const Alert = ({ show, text, onClose }) => {
  if (!show) return <></>;
  return (
    <div className={styles.backDrop}  onClick={onClose}>
      <div className={styles.modal} id="modal-one">
        <div className={`${styles["modal-bg"]} ${styles["modal-close"]}`}></div>
          <div className={`${styles["modal-container"]}`}>
            <img src={image} alt="" />
            <h1>{text}</h1>
            <img className={`${styles["popup-img"]}`} src={logo} alt="" />
            <h2>Thank You</h2>
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
