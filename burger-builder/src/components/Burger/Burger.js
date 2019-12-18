import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import styles from "./Burger.module.css";

export default (props) => {
  console.log(props.ingredients)
  var transfIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, ind) => {
      return <BurgerIngredient type = {igKey} key = {igKey+ind}/>;
    })
  }).reduce((a, ele) => {
      a = a.concat(ele.map((item) => {
        console.log(item)
      return item;
    }));
    console.log(a);
    return a;
  }, []);

  if (transfIngredients.length == 0){
    transfIngredients = <p> Please add more ingredients</p>;
  }
  return(
    <div className = {styles.Burger}>
      <BurgerIngredient type = "breadTop"/>
      {transfIngredients}
      <BurgerIngredient type = "breadBottom"/>
    </div>
  )
};