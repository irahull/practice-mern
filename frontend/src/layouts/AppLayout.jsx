import React from "react";
import "./appLayout.scss"
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="app-dashboard">
        <div className="nav-wrapper">
          <Navbar />
        </div>
       <div className="app-main">
       <Outlet />
       </div>
      </div>
    </div>
  );
};

export default AppLayout;
