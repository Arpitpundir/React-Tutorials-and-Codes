import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

//we can specify the values that are going to remain for all axios requests
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
//with request interceptors it is possible to modify the request before they are sent, we can also
//deal with which happens before request is sent
axios.interceptors.request.use((req)=>{
  console.log(req)
  return req
}, (error) =>{
  console.log(error)
  return Promise.reject(error)
  //Promise.reject returns a rejected Promise object i.e Promise has been rejected i.e the rejected function 
  //would be called
}
)

//with res interceptors we it is possible to modify res object before being processed by any callback function
axios.interceptors.response.use((res)=>{
  console.log(res)
  return res
}, (error)=>{
  console.log(error)
  return Promise.reject(error)
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
