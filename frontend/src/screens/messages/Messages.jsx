import React, { useEffect, useState } from "react";
import "./messages.scss";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuClipboardCopy } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import axios from "axios";

const Messages = () => {
    // const [toggleAddPlot, setToggaleAddPlot] = useState(false);
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
  return (
    <div className="message-container">
      <h2 className="h2">Query</h2>
      <div className="message-section">
        <div className="m-search">
          <IoSearchOutline />
          <input type="text" name="" id="" />
        </div>
        {/* <div
      className="add-plot"
      onClick={() => setToggaleAddPlot(!toggleAddPlot)}
    >
      Add Plot
    </div> */}
      </div>

      <div className="message-data-wrapper">
        <div className="message-heading">
          <p className="sender-name">Name</p>
          <p className="sender-email">Email</p>
          <p className="sender-phone">Phone Number</p>
          <p className="sender-message">Messages</p>
          <p className="sender-status">Status</p>
          <p className="sender-activity">Activity</p>
        </div>

        <div className="message-datas">
          {allData.map((item) => {
            return (
              <div className="message-data">
                <div className="data-name">
                  <p>Rohan</p>
                </div>
                <div className="data-email">{item.location}</div>
                <div className="data-phone">+91 1234569870</div>
                <div className="data-message">messgage</div>
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
                <div className="message-activity">
                  <div className="a-view">
                    <MdOutlineRemoveRedEye />
                    <span>View</span>
                  </div>
                  <div className="a-delete">
                    <RiDeleteBinLine />
                    <span>Delete</span>
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

export default Messages;
