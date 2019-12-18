import React, {Component} from 'react';
import Layout from "./components/layout/layout";
import BurgerBuilder from "./containers/BurgerBuilder/burgerBuilder";
import styles from "./App.module.css";

class App extends Component {
  render(){
    return(
      <div className = {styles.App}>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
    )
  }
};

export default App;
