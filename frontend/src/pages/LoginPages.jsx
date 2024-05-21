import React from "react";
import "../pages/CSS/LoginPages.css";
import { Link } from "react-router-dom";

export default function LoginPages() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input name="email" type="email" placeholder="Email Address" />
          <input name="password" type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Created an account?{" "}
          <span>
            <Link to={"/registerUser"}>Click here</Link>
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}
