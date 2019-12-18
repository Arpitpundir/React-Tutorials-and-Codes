import React from "react";
export default (WrappedComponent, classes) => {
  return (props ) => (<div className = {classes}>
    <WrappedComponent {...props}></WrappedComponent>
  </div>);
};