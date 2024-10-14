import React, { useState } from "react";

export default function Authform() {
  const [islogin, setIslogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={islogin ? "active" : " "}
            onClick={() => setIslogin(true)}
          >
            log in
          </button>
          <button
            className={!islogin ? "active" : " "}
            onClick={() => setIslogin(false)}
          >
            sign up
          </button>
        </div>
        {islogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              
              
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="password"></input>
              <a href="#">Forgot password?</a>
              <button>Login</button>
              <p>Not a Member? <a href='#' onClick={()=>setIslogin(false)}>signup now</a></p>
            </div>
          </>) : <>
          <div className="form"> 
              <h2>Signup Form</h2>
              <input placeholder="Name"></input>
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="Password"></input>
              <input type="password" placeholder="Confarm password"></input>
              <button>signup</button>
              </div>

          </>}
      </div>
    </div>
  );
}
