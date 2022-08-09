import React from "react";
import { RiRedditFill } from "react-icons/ri";

import "./Auth.css";

function Auth() {
  return (
    <div className="auth">
      <div className="authLeft">
        <RiRedditFill />
        <div className="webName">
          <h1> trendIT </h1>
          <h6> Expand your coasts! </h6>
        </div>
      </div>

      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
}

const LogIn = () => {
  return (
    <div className="authRight">
      <form action="" className="infoForm authForm">
        <h3> Log In </h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
        </div>
        <div>
          <span> Don't have an account? Sign Up </span>
          <button className="button infoButton" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="authRight">
      <form action="" className="infoForm">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="firstName"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="lastName"
            className="infoInput"
            name="lastName"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Username"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <span> Already have an account? Login </span>
          <button className="button infoButton" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
