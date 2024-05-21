import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuClipboardCopy } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import AddPlot from "../components/AddPlot/AddPlot";
import axios from "axios";

const Dashboard = () => {
  const [toggleAddPlot, setToggaleAddPlot] = useState(false);
  const [allData, setAllData] = useState([]);
  const [editId, setEditId] = useState();
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

  const getAllData = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/api/plot/getAllPlot");
      console.log(resp.data);
      setAllData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  console.log(editId);

  return (
    <div className="dashboard-container">
      <h2 className="h2">Dashboard</h2>
      <div className="search-seciton">
        <div className="db-search">
          <IoSearchOutline />
          <input type="text" name="" id="" />
        </div>
        <div
          className="add-plot"
          onClick={() => setToggaleAddPlot(!toggleAddPlot)}
        >
          Add Plot
        </div>
      </div>

      {toggleAddPlot && (
        <div className="addPlot-wrapper">
          <AddPlot
            toggleAddPlot={toggleAddPlot}
            setToggaleAddPlot={setToggaleAddPlot}
          />
        </div>
      )}

      <div className="db-data-wrapper">
        <div className="data-heading">
          <p className="plot-number">Plot Number</p>
          <p className="location">Location</p>
          <p className="time">Date - Time</p>
          <p className="status">Status</p>
          <p className="activity">Activity</p>
        </div>

        <div className="db-datas">
          {allData.map((item) => {
            return (
              <div className="db-data">
                <div className="data-number">
                  <input type="checkbox" />
                  <p>{item.plotNumber}</p>
                </div>
                <div className="data-location">{item.location}</div>
                <div className="data-time">12.09.2019 - 12.53 PM</div>
                <div className="data-status">
                  <button
                    style={{
                      backgroundColor:
                        item.availability === "pending"
                          ? "#FCBE2D"
                          : item.availability === "sold"
                          ? "#FD5454"
                          : "",
                    }}
                  >
                    {item.availability}
                  </button>
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
                    <span onClick={() => setEditId(item._id)}>Update</span>
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
