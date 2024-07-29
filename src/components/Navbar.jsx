import React from "react";
import "../css/dashboard.scss";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  return (
    <div id="Navbar">
      <h1>Quiz Master</h1>
      <div className="options">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/test">
          <span>Test</span>
        </Link>
        <Link to="/history">
          <span>History</span>
        </Link>
        <div className="profile">
          <div className="image"></div>
          <p>
            <Link to="/profile">Profile</Link>
          </p>
        </div>
        <Link to="/signout"><span>Logout <TbLogout /></span></Link>
      </div>
    </div>
  );
};

export default Navbar;
