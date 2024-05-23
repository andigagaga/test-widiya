import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, logout } from "../redux/features/auth/authSlice";
import "./CSS/MyProfilePages.css";

const ProfileComponent = () => {
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

  console.log("data profile", user);
  if (user) {
    console.log("user.name", user.user.name);
    console.log("user.email", user.user.email);
  }

  return (
    <div className="profile">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div className="profile-container">
          <h1 className="profile-title">Profile</h1>
          <img src="https://tse2.mm.bing.net/th?id=OIP.UeROdVLkNInVDZy8EinKyAHaJQ&pid=Api&P=0&w=300&h=300" />
          <p>
            First Name: <span>{user.user.firstname}</span>
          </p>
          <p>
            Last Name: <span>{user.user.lastname}</span>
          </p>
          <p>
            User Name: <span>{user.user.username}</span>
          </p>
          <p>
            Hobby: <span>{user.user.Hobby}</span>
          </p>
          <p>
            Email: <span>{user.user.email}</span>
          </p>
          <p>
            Email: <span>{user.user.gender}</span>
          </p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
