import React from "react";
import BuildControl from "./BuildControl/buildControl";
import styles from "./buildControls.module.css";

const controls = [{label:"Cheese", type:"cheese"},
{label: "Bacon", type: "bacon"},
{label: "Meat", type: "meat"},
{label: "Salad", type: "salad"}];

const BuildControls = (props) =>{
  return (
    <div className = {styles.BuildControls}>
       <p><strong>Current Price: {props.price}</strong></p>
      {controls.map((control) => <BuildControl type = {control.type} key = {control.type} label = {control.label} addIngredient = {props.addIngredient} removeIngredient = {props.removeIngredient}/>)}
      <button className = {styles.OrderButton} disabled = {!props.purchasable} onClick = {props.purchaseBurger}>Checkout</button>
    </div>
  );
};

export default BuildControls;