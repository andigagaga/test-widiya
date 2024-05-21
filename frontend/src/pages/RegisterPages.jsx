import React from "react";
import "../pages/CSS/LoginPages.css";
import { Link } from "react-router-dom";

export default function RegisterPages() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Register</h1>
        <div className="loginsignup-fields">
          <input name="email" type="email" placeholder="Email Address" />
          <input name="password" type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?{" "}
          <span>
            <Link to={"/loginUser"}>Login here</Link>
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
