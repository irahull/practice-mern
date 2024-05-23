import React from "react";
import "./sidebar.scss";
import SBLogo from "../../imgs/wallfort-logo.png";
import { IoGrid } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { CiPower } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <div className="sidebar-main">
      <img src={SBLogo} alt="" className="sb-logo" />

      <div className="sb-dashboard" onClick={() => navigate("/")}>
        <IoGrid    style={{
            color: location.pathname === "/" ? "#00817f" : "",
          }}/>
      </div>

      <div className="sb-message" onClick={() => navigate("/messages")}>
        <AiFillMessage
          style={{
            color: location.pathname === "/messages" ? "#00817f" : "",
          }}
        />
      </div>

      <div className="sb-logout">
        <CiPower />
      </div>
    </div>
  );
};

export default Sidebar;
