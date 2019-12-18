import React from "react";
import styles from "./SideDrawer.module.css";
import Logo from "./../Logo/Logo";
import NavigationItems from "./../Navigation/NavigationItems/NavigationItems";
import Backdrop from "./../UI/Backdrop/backDrop";
import Aux from "./../../hocs/aux";

//we can simply remove the sidedrawer on clicking the backdrop but instead we are using css animation to increase the 
//user experience

const SideDrawer  = (props) =>{
  let attachedClasses = [styles.SideDrawer];
  if(props.showSideDrawer){
    attachedClasses.push(styles.Open);
  }else{
    attachedClasses.push(styles.Close);
  }
  return(
    <Aux>
      <Backdrop className = {styles.Backdrop} clicked = {props.clickedForBackDrop} show = {props.showSideDrawer}/>
      <div className = {attachedClasses.join(" ")}>
        <div className = {styles.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </Aux>
  )
};

export default SideDrawer;
