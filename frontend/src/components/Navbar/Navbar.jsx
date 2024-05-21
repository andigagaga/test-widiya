import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <p>LOGO</p>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/allProducts"}>All Products</Link>
        </li>
        <li>
          <Link to={"/myUserProducts"}>My Products</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to={"/loginUser"}>
          <button
            style={{
              background: "green",
              color: "white",
              textShadow: "0 2px 5px #000",
              padding: "10px 20px",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
