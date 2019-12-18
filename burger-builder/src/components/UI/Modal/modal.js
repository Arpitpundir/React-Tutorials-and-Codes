import React from "react";
import styles from "./modal.module.css";
import BackDrop from "./../Backdrop/backDrop";
import Aux from "./../../../hocs/aux";
const Modal = (props) => {
  return(
    <Aux>
      <BackDrop show = {props.showBackdrop} clicked = {props.backDropClicked}/>
      <div className = {styles.Modal}>{
        props.children
      }</div>
    </Aux>
  )
};

export default Modal;