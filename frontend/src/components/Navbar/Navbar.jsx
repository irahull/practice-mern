import React from "react";
import "./navbar.scss";
import ProfileImg from "../../imgs/profile.jpg";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="nav-main">
      <h2 className="welcome-text">
        Welcome <span>Admin</span>
      </h2>
      <div className="user-details">
        <span className="user-language">En</span>
        <IoIosNotificationsOutline />
        <div className="user-img">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="user-name">
          <span className="span1">Moni Roy</span>
          <span className="span2">Admin</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
