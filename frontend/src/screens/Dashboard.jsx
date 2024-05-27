import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuClipboardCopy } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import AddPlot from "../components/AddPlot/AddPlot";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [toggleAddPlot, setToggaleAddPlot] = useState(false);
  const [allData, setAllData] = useState([]);

  const getAllData = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/api/plot/getAllPlot");
      console.log(resp.data);
      setAllData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
 
  const deletePlot = async (id) => {
    try {

      return await axios.delete(`http://localhost:5000/api/plot/deletePlot/:${id}`)
      // console.log(resp)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllData();
  }, []);

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
            getAllData={getAllData}
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
              <div className="db-data" key={item._id}>
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
                    <span onClick={() => deletePlot(item._id)}>Delete</span>
                  </div>
                  <div className="a-copy">
                    <LuClipboardCopy />
                    <Link to={`/edit-plot/${item._id}`}>Update</Link>
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
