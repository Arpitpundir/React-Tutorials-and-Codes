import React from "react";
import styles from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

//In this file we will receive the ingredient needed as props and then we would return that component
//as a component.
const BurgerIngredient = (props) => {
  var ingredient = null;
  console.log(props.type)
  console.log(styles.BreadBottom)
  switch(props.type){
    case("breadBottom"):
    console.log("kl")
      ingredient = <div className = {styles.BreadBottom}></div>;
      break;
    case("breadTop"):
      ingredient = <div className = {styles.BreadTop}>
        <div className = {styles.Seeds1}></div>
        <div className = {styles.Seeds2}></div>
      </div>;
      break;
    case("meat"):
      ingredient = <div className = {styles.Meat}></div>;
      break;
    case("cheese"):
      ingredient = <div className = {styles.Cheese}></div>
      break;
    case("salad"):
      ingredient = <div className = {styles.Salad}></div>
      break;
    case("bacon"):
      ingredient = <div className = {styles.Bacon}></div>
      break;
    default:
      ingredient = null;
  };
  return ingredient;
};

BurgerIngredient.propType = {
  type: PropTypes.string.required
};

export default BurgerIngredient;