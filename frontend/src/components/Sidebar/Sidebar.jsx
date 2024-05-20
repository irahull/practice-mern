import React from "react";
import "./sidebar.scss";
import SBLogo from "../../imgs/wallfort-logo.png";
import { IoGrid } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { CiPower } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <img src={SBLogo} alt="" className="sb-logo" />

      <div className="sb-dashboard">
        <IoGrid />
      </div>

      <div className="sb-message">
        <AiFillMessage />
      </div>

      <div className="sb-logout">
        <CiPower />
      </div>
    </div>
  );
};

export default Sidebar;
