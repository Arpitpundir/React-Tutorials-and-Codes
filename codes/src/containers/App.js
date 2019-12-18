import React, {Component} from 'react';
import Persons from "../components/Persons/Persons";
import classes from './App.module.css';
import {useState, useEffect} from "react";
import Cockpit from "./../components/Cockpit/Cockpit";
import withClass from "./../hoc/withClass";
import Aux from "./../hoc/Aux";
import AuthContext from "./../context/auth-context";

class  App extends Component {

  constructor(props){
    super(props);
    console.log("App.js constructor");
  };

  state = {
    persons:[
      {name: "Arpit", id:"asdf1", age: "19"},
      {name: "Jai", id: "asdf2", age: "23"},
      {name: "Piyush", id : "asdf3", age: "20"}
    ],
    showPersons: false,
    showCockPit: true,
    changedCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state){
    console.log("App.js getDerivedStateFromProps", props);
    return state
  };

  componentWillMount(){
    console.log("App.js componentWillMount");
  };

  componentDidMount(){
    console.log("App.js componentDidMount");
  };

  shouldComponentUpdate(nextProps, nextState){
      console.log("shouldComponentUpdate App");
      return true;
  };

  getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("getSnapshotBeforeUpdate App");
      return null;
  };

  componentDidUpdate(prevProps, prevState){
      console.log("componentDidUpdate App");
  };

  componentWillUnmount(){
    console.log("componentWillUnmount App.js");
  };

  switchPersons = (newName) => {
    this.setState({
      persons:[
        {name: newName, age: "19"},
        {name: "Jai", age: "22"},
        {name: "Piyush", age: "20"}
      ]
    })
  };
  
  clicked = () => {
    this.setState({showCockPit:false});
  };
  nameChangeHandler = (e, id) =>{
    console.log(id);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = e.target.value;
    const persons = this.state.persons;
    persons[personIndex] = person;

    this.setState((prevState, props) => ({
      persons: persons,
      changedCounter: prevState.changedCounter+1
    }))
  };

  togglePersons = ()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  deletePerson = (index) => {
    console.log(index);
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons})
  };

  loginHandler = ()=> {
    this.setState({authenticated: true});
  };

  render(){
    console.log("App.js render function")
    const style = {
      backgroundColor: "White",
      cursor: "pointer",
      border:"1px solid black"
    }

    //above we are using inline styling we create a js object and then we use this object in component 
    //we want to by using style property

    var persons = null;
    if(this.state.showPersons){
      persons = <Persons persons = {this.state.persons} changed = {this.nameChangeHandler} clicked = {this.deletePerson}></Persons>
    }
    return (
      <Aux>
        <button onClick = {this.clicked}>Remove Cockpit</button>
        <AuthContext.Provider value = {
          {authenticated : this.state.authenticated,
          loginHandler : this.loginHandler}
        } >
          {
            this.state.showCockPit ? <Cockpit title = {this.props.title} showPersons = {this.state.showPersons} personsLen = {this.state.persons.length} clicked = {this.togglePersons}></Cockpit>
          : null
          }
          {persons}
        </AuthContext.Provider>
      </Aux>
  );
  }
};

export default withClass(App, classes.App);

//Important
//render
//only required method in react, can returns a no of things, react will call this method to
//render some html codes, every react component must render some code to the webpage

 //this.state.person[0].name = "Prachi"
//we should not change the state directly react will not recognize that
//we will use setState method for this 
//React will only overwrite the content of the state which was change but will not change
//the properties which were same i.e it merges them



//Two way binding
/*now when we want to pass some value also to the switchPerson handler then either we 
        can use wrapping or we can use bind:: bind calls the function on which it is specified as this 
        value is set to the given value and second value is a list of arguments.*/

  /*{this.state.showPersons === true ?
        <div>
        <Person name = {this.state.person[0].name} age = {this.state.person[0].age} click = {this.switchPersons}
        changed = {this.changeName}/>
        <Person name = {this.state.person[1].name} age = {this.state.person[1].age}/>
        <Person name = {this.state.person[2].name} age = {this.state.person[2].age}/>
        </div>
        : null}*/


//now we will do the same above thing with the help of functional components by using hooks
/*const App = props => {
  //useState is a hook which takes a state object as an input and returns an array having two object 
  //first is the state object and second is the handler which can be used to edit this state object
  const [personState, setPersonState] = useState({
    persons: [{
        name: "Max",
        age: 28
      },
      {
        name: "jai",
        age: "23"
      },
      {
        name: "piyush",
        age: "20"
      }
    ]
  });
  //Diffrence in merging
  //when we use functional components react do not merge states properties byitself, either we create
  //an individual state object for every state property or we pass all states manually when we update
  //any state
  const [otherState, setOtherState] = useState("I am fine by this");
  //lets define a function which can be used to update the name on the page on button click
  //in this handler we will use the function which is provided by use State to change the per
  //-son state
  const switchNameHandler = () => {
    setPersonState({
      persons: [{
          name: "Arpit",
          age: 19
        },
        {
          name: "jai",
          age: "23"
        },
        {
          name: "piyush",
          age: "20"
        }
      ]
    });
  }
  return (
    <div className="App">
        <h1>Hi I am react app</h1>
        <p>This is really working</p>
        {//as we are not using class component in this component so we can not use this keyword
        }
        <button onClick = {switchNameHandler}>Switch</button>
        {/* <Person name  = "Mike" age = "25"/>
        <Person name = "Maria" age = "24"/>
        <Person name = "John" age = "26"/> }
        <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
        <Person name = {personState.persons[1].name} age = {personState.persons[1].age}/>
        <Person name = {personState.persons[2].name} age = {personState.persons[2].age}/>
    </div>
  );
}
*/