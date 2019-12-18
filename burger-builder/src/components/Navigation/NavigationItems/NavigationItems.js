import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return(
    <div className = {styles.NavigationItems}>
      <NavigationItem link = "/" active>Burger Builder</NavigationItem>
      <NavigationItem link = "/">Checkout</NavigationItem>
    </div>
  );
};

export default NavigationItems;