import React, {Component} from "react";
import classes from "./Person.module.css";
import Aux from "./../../../hoc/Aux";
import withClass from "./../../../hoc/withClass";
import AuthContext from "./../../../context/auth-context";

class Person extends  Component{

    static contextType = AuthContext;
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    
    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render(){
        console.log("render Person")
        return (
            // <AuthContext.Consumer>
            //     {
            //         (context) => {
            //             return (
            //                 <Aux>
            //                     <h1 onClick = {this.props.click}>I am {this.props.name} and I am {this.props.age}</h1>
            //                     { context.authenticated == true?"Authenticated" : "Please Login"}
            //                     <input className = "centeredText"
            //                     type = "text"
            //                     value = {
            //                         this.props.name
            //                     }
            //                     onChange = {
            //                         this.props.changed
            //                     }
            //                     ///ref = {(inputEl) => {
            //                     // this.inputElement = inputEl;
            //                     //}}
            //                     ref = {this.inputElementRef} 
            //                     >
            //                     </input>
            // </Aux>
            //             )
            //         }
            //     }
            // </AuthContext.Consumer>
            <Aux>
                <h1 onClick = {
                    this.props.click
                } > I am {
                    this.props.name
                }
            and I am {
                this.props.age
            } </h1>                     
            { this.context.authenticated == true?<p>Authenticated</p> : <p>Please Login</p>} 
            <input className = "centeredText"
            type = "text"
            value = {
                this.props.name
            }
            onChange = {
                this.props.changed
            }
            ref = {
                (inputEl) => {
                    this.inputElement = inputEl;
                }
            }
            ref = {
                    this.inputElementRef
                } >
                </input> 
            </Aux>
        );
    }
    
};

export default withClass(Person, classes.Person);

/*Above we have used two way binding i.e we have provided value as well as we are also changing the value*/
/*this section was used to know what is the flow in which react calls the lefeCycle methods 
static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps Person");
        return null;
    };

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate person");
        return true;
    };

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate Person");
        return null;
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate Person");
    }*/