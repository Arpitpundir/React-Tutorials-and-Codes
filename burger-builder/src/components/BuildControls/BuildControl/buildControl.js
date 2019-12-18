import React from "react";
import styles from "./buildControl.module.css";

const burgerControl = (props) =>{
  return(
    <div className = {styles.BuildControl}>
      <div className = {styles.label}>{props.label}</div>
      <button className = {styles.More} onClick = {() => props.addIngredient(props.type)}>More</button>
      <button className = {styles.Less} onClick = {() => props.removeIngredient(props.type)}>Less</button>
    </div>
  );
};

export default burgerControl;

