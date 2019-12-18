import React from "react";
import Aux from "./../../hocs/aux";
import Button from "./../UI/Buttons/Button";
const OrderSummary = (props) => {
  const ingredients = props.ingredients;
  const itemList = Object.keys(props.ingredients).map(item => {
    return <li key = "item"><span style = {{textTransform: "capitalize"}}>{item}:</span> {ingredients[item]}</li>
  });
  return(
    <Aux>
      <h3>Your Order Summary</h3>
      <p>A delecious Burger with following ingredients</p>
      <ul>
        {itemList}
      </ul>
  <h3><strong>Total Price: {props.price}</strong></h3>
      <p>
        Continue to checkout!
      </p>
      <Button clicked = {props.contBtnClicked} btnType = "Success">Continue</Button>
      <Button clicked = {props.cancelBtnClicked} btnType = "Danger">Cancel</Button>

    </Aux>
  )
};

export default OrderSummary;