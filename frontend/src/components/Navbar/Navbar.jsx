import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile, logout } from "../../redux/features/auth/authSlice";
import "./Navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const { user, loading, error, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getUserProfile());
    }
  }, [dispatch, token]);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to={"/myProfile"} style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img src="https://tse2.mm.bing.net/th?id=OIP.UeROdVLkNInVDZy8EinKyAHaJQ&pid=Api&P=0&w=300&h=300" />
            {user && (
              <h1 style={{ color: "white" }}>
                {user.user.firstname + " " + user.user.lastname}
              </h1>
            )}
          </div>
        </Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to={"/allProducts"}>
            All Products
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to={"/newUserProducts"}>
            New Products
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to={"/myProductByUser"}>
            My Products
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        {token ? (
          <button
            onClick={handleLogout}
            style={{
              background: "red",
              color: "white",
              textShadow: "0 2px 5px #000",
              padding: "10px 20px",
            }}
          >
            Logout
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to={"/loginUser"}>
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
        )}
      </div>
    </div>
  );
}
