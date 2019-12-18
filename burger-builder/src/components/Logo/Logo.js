import React from "react";
import styles from "./Logo.module.css";
import burgerLogo from "./../../assets/images/logo/burger-logo.png";


const Logo = (props) => {
  return(
    <div className = {styles.Logo}>
      <img src = {burgerLogo}></img>
    </div>
  )
}

export default Logo;