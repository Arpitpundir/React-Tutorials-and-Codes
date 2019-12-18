import React, {Component} from "react";
import Aux from "./../../hocs/aux";
import Burger from "./../../components/Burger/Burger";
import styles from "./burgerBuilder.module.css";
import BuildControls from "./../../components/BuildControls/buildControls";
import Modal from "./../../components/UI/Modal/modal";
import OrderSummary from "./../../components/OrderSummary/orderSummary";

class BurgerBuilder extends Component{

  constructor(props){
    super(props);
    this.state = {
      ingredients:{
        cheese:0,
        salad: 0,
        meat: 0,
        bacon: 0
      },
      price: 0,
      purchasable:false,
      purchasing: false//when press the checkout button then show the order summary and backdrop
    };
    this.price = {
      cheese: 10,
      bacon: 12,
      salad: 8,
      meat: 13
    };
  }


  addIngredient = (type) => {
    const oldNum = this.state.ingredients[type];
    const newNum = oldNum+1;
    //console.log(oldNum, newNum);
    var newIngredients = {...this.state.ingredients};
    newIngredients[type] = newNum;
    var newPrice = this.state.price+this.price[type];
    var purchasable = (newNum>0)?true:false;
    //console.log(newIngredients);
    this.setState({
      ingredients: newIngredients,
      price: newPrice,
      purchasable: purchasable//if the burger has 1 or more ingredients except bread then show the checkout button and make burger purchasable
    });
    //console.log(this.state.ingredients);

  }
  removeIngredients = (type) => {
    const oldNum = this.state.ingredients[type];
    const newNum = (oldNum-1)<0?0:(oldNum-1);
    var newIngredients = {...this.state.ingredients};
    newIngredients[type] = newNum;
    var newPrice = oldNum != 0?this.state.price-this.price[type]:this.state.price;
    var purchasable = (newNum > 0)?true:false;
    this.setState({
      ingredients: newIngredients,
      price: newPrice,
      purchasable: purchasable
    });
  };

  purchaseBurger = () => {
    const updatedPurchasing = !this.state.purchasing;
    this.setState({
      purchasing: updatedPurchasing
    });
  };

  cancelPurchasehandler = () => {
    this.setState({
      purchasing: false
    })
  };

  contPurchaseHandler = ()=> {
    alert("You Cont!");
  };


  render(){
    return (
      <Aux>
        {
          this.state.purchasing?<Modal backDropClicked = {this.cancelPurchasehandler}
            showBackdrop = {this.state.purchasing}>
            <OrderSummary price = {this.state.price} contBtnClicked = {this.contPurchaseHandler}
            cancelBtnClicked = {this.cancelPurchasehandler} ingredients = {this.state.ingredients}/></Modal>:null
        }
        <div className = {styles.burgerBuilder}>
          <Burger ingredients = {this.state.ingredients}/>
          <BuildControls purchaseBurger = {this.purchaseBurger} purchasable = {this.state.purchasable} price = {this.state.price} addIngredient = {this.addIngredient} removeIngredient = {this.removeIngredients}/>
        </div>
      </Aux>
    );
  };
};

export default BurgerBuilder;