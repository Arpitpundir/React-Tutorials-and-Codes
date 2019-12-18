import React from "react";
import styles from "./backDrop.module.css";

const BackDrop = (props) => {
  return(
      props.show?<div className = {[styles.BackDrop, props.className].join(" ")} onClick = {props.clicked}></div>:null
  );
}

export default BackDrop;