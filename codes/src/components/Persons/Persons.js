import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component{
  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps Persons");
    return null;
};

shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate Persons");
    return true;
};

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate Persons");
    return null;
}

componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate Persons");
}
  render(){
    console.log("Persons.js render")
    const persons = this.props.persons.map((person, index) => {
      return <Person key = {index} age = {person.age} name = {person.name} click = {() => this.props.clicked(index)} changed = {(event) => this.props.changed(event, person.id)}></Person>
      }
    );
    return persons;
  }
};

export default Persons;