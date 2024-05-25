import React, { useEffect, useState } from "react";
import "./editPlot.scss";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import ApLMain from "../../imgs/ap-left-main.png";
import ApRight1 from "../../imgs/ap-right1.png";
import ApRight2 from "../../imgs/ap-right2.png";
import ApRight3 from "../../imgs/ap-right3.png";
import ApLogo from "../../imgs/wallfort-logo.png";
import { useParams } from "react-router-dom";

const EditPlot = () => {
  const [singlePlotData, setSinglePlotData] = useState({
    plotNumber: "",
    availability: "available",
    location: "",

  });

  const { id } = useParams()

  const handleInput = (e) => {
    const { name, value } = e.target;

    setSinglePlotData({
      ...singlePlotData,
      [name]: value,
    });
  };

  console.log(singlePlotData)

  const getSinglePlotData = async () => {
    try {
      const resp = await axios.get(`http://localhost:5000/api/plot/editPlot/${id}`);
      console.log(resp.data);
      setSinglePlotData(resp.data[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinglePlotData()
  }, []);


  const submitEditPlotDetails = async () => {
    const res = await axios.post(`http://localhost:5000/api/plot/editSinglePlot/${id}`, {
      plotNumber: singlePlotData.plotNumber,
      availability: singlePlotData.availability,
      location: singlePlotData.location,
    });
    if (res.data.success === true) {
      alert("Plot added successfully");
      setSinglePlotData({ plotNumber: "", availability: "", location: "" });
    }
    return res;
  };


  return (
    <div className="editPlot-main">
      <div className="ed-upper-section">
        <div className="ed-plot-number">
          <img src={ApLogo} alt="" />
          <h4>Plot no. 1</h4>
        </div>
        <div
          className="ap-close"
        // onClick={() => setToggaleeditPlot(!toggleeditPlot)}
        >
          <RxCross2 />
        </div>
      </div>
      <div className="ed-bottom-section">
        <div className="ed-bottom-left">
          <div className="bl-left">
            <div className="bl-left-img">
              <img src={ApLMain} alt="" />
            </div>
          </div>
          <div className="bl-right">
            <div className="bl-right-img">
              <img src={ApRight1} alt="" />
            </div>
            <div className="bl-right-img">
              <img src={ApRight2} alt="" />
            </div>
            <div className="bl-right-img">
              <img src={ApRight3} alt="" />
            </div>
          </div>
        </div>
        <div className="ed-bottom-right">
          <div className="ed-form">
            <div className="form-plot-number">
              <span>Plot Number</span>
              <input
                type="text"
                placeholder="Plot 44"
                name="plotNumber"
                value={singlePlotData.plotNumber}
                onChange={handleInput}
              />
            </div>
            <div className="plot-availability">
              <span>Select Availability</span>
              <select
                name="availability"
                id="cars"
                value={singlePlotData.availability}
                onChange={handleInput}
              >
                <option value="available">Available</option>
                <option value="sold">Sold</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className="plot-address">
              <span>Full Address</span>
              <textarea
                name="location"
                id=""
                value={singlePlotData.location}
                onChange={handleInput}
              ></textarea>
            </div>
            {/* <div className="plot-imgs">
              <input type="file" placeholder="File"  />
            </div> */}

            <div className="save-edit-plot-details" onClick={submitEditPlotDetails}>
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPlot;
