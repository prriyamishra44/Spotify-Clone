import React from 'react';
import "./Login.css";
import {accessUrl} from "./spotify";

function Login() {
  return (
    <div className= "login">
        
        <img src ="https://i.hurimg.com/i/hdn/75/0x0/6227b6817152d8231871d812.jpg" alt=""/>
        
      {/* Sootify Logo*/}
      {/*login with spotify log */}
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
