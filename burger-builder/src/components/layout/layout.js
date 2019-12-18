import React, {Component} from "react";
import Aux from "./../../hocs/aux";
import styles from "./layout.module.css";
import BurgerBuilder from "./../../containers/BurgerBuilder/burgerBuilder";
import Toolbar from "./../Navigation/Toolbar/Toolbar";
import SideDrawer from "./../SideDrawer/SideDrawer";

//we can make sidebar as a classbased components to provide the handlers for backdrop but since we would also need to
//close and open sidedrawer from the toolbar too so we can make layout as a class based component
class Layout extends Component{

  constructor(props){
    super(props);
  };

  state = {
    showSideDrawer: false
  };
  
  closeSideDrawerHandler = ()=>{
    this.setState({
      showSideDrawer: false
    });
  };

  toggleSideDrawerHandler = ()=>{
    this.setState((prevState) => {return {
      showSideDrawer: !prevState.showSideDrawer
    }});
  };

  render(){
    return(
      <div className = {styles.layout}>
        <Toolbar toggleSideDrawerHandler = {this.toggleSideDrawerHandler}/>
        <SideDrawer showSideDrawer = {this.state.showSideDrawer} clickedForBackDrop = {this.closeSideDrawerHandler}/>
        <main className = {styles.main}>
          {this.props.children}
        </main>
      </div>
    );
  }
};

export default Layout;