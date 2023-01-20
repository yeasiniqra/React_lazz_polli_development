import React from "react";
import styles from "./Preloader.module.css";

const Preloader = ({size = 'normal'}) => {


  return (
    <div className={size === 'normal' ? styles["lds-dual-ring"] : styles["lds-dual-ring--small"]} >
      <div></div>
      <div></div>
    </div>
  );
};

export default Preloader;
