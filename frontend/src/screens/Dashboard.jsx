import React from "react";
import "./dashboard.scss";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuClipboardCopy } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";

const Dashboard = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ];
  return (
    <div className="dashboard-container">
      <h2 className="h2">Dashboard</h2>
      <div className="search-seciton">
        <div className="db-search">
          <IoSearchOutline />
          <input type="text" name="" id="" />
        </div>
        <div className="add-plot">Add Plot</div>
      </div>

      <div className="db-data-wrapper">
        <div className="data-heading">
          <p className="plot-number">Plot Number</p>
          <p className="location">Location</p>
          <p className="time">Date - Time</p>
          <p className="status">Status</p>
          <p className="activity">Activity</p>
        </div>

        <div className="db-datas">
          {data.map((item) => {
            return (
              <div className="db-data">
                <div className="data-number">
                  <input type="checkbox" />
                  <p>Plot_01</p>
                </div>
                <div className="data-location">6096 Marjolaine Landing</div>
                <div className="data-time">12.09.2019 - 12.53 PM</div>
                <div className="data-status">
                  <button style={{
                    backgroundColor:item.id === 2 ? "#FCBE2D": item.id===3 ? "#FD5454":""
                  }}>Available</button>
                </div>
                <div className="data-activity">
                  <div className="a-view">
                    <MdOutlineRemoveRedEye />
                    <span>View</span>
                  </div>
                  <div className="a-delete">
                    <RiDeleteBinLine />
                    <span>Delete</span>
                  </div>
                  <div className="a-copy">
                    <LuClipboardCopy />
                    <span>Copy</span>
                  </div>
                  <div className="a-download">
                    <MdOutlineFileDownload />
                    <span>Download</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
