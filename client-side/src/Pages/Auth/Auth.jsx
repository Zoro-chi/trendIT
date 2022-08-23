import React, { useState } from "react";
import { RiRedditFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { logIn, signUp } from "../../Actions/authAction.js";
import "./Auth.css";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmPassword
        ? dispatch(signUp(data))
        : setConfirmPassword(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPassword(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmPassword: "",
      username: "",
    });
  };

  return (
    <div className="auth">
      <div className="authLeft">
        <RiRedditFill />
        <div className="webName">
          <h1> trendIT </h1>
          <h6> Expand your coasts! </h6>
        </div>
      </div>

      <div className="authRight">
        <form action="" className="infoForm" onSubmit={handleSubmit}>
          <h3> {isSignUp ? "Sign Up" : "Log In"}</h3>

          {isSignUp && (
            <div id="nameDiv">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="infoInput"
                  name="firstname"
                  value={data.firstname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="infoInput"
                  name="lastname"
                  value={data.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <div className="username">
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              value={data.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          {isSignUp && (
            <div>
              <input
                type="password"
                className="infoInput"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}

          <span
            style={{
              display: confirmPassword ? "none" : "block",
              color: "red",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            * Password does not match
          </span>

          <div className="acc">
            <span
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
              style={{ cursor: "pointer" }}
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Sign Up "}
            </span>
            <button
              className="button infoButton"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
