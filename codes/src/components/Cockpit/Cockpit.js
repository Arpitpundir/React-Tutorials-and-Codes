import React, {useEffect, useState, memo, useRef} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from "./../../context/auth-context";
import { useContext } from 'react';

const Cockpit = ( props ) => {

  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);
  const toggleButRef = useRef(null);

  useEffect(() => {
    toggleButRef.current.click();
    console.log("this is cockpit useEffect");
    // setTimeout(() => {
    //   alert("useEffectCockPit")
    // }, 1000);
    return (() => {
      console.log("this is cleanup for cockpit");
    });
  }, []);

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
      btnClass = classes.red;
  }

  if ( props.personsLen <= 2 ) {
    assignedClasses.push( classes.red ); // classes = ['red']
  }
  if ( props.personsLen <= 1 ) {
    assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
  }

  return (
          <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}
                ref = {toggleButRef}>Toggle Persons
            </button>
            {/* <AuthContext.Consumer>{
              (context) => {
                return (<button className = {btnClass} onClick = {context.loginHandler}>Login</button>);
              }
            }
            </AuthContext.Consumer> */}
            <button className = {btnClass} onClick = {authContext.loginHandler}>Login</button>
            </div>
  );
};

export default React.memo(Cockpit);