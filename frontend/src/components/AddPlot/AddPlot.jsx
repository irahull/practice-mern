import React, { useState } from "react";
import "./addPlot.scss";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import ApLMain from "../../imgs/ap-left-main.png";
import ApRight1 from "../../imgs/ap-right1.png";
import ApRight2 from "../../imgs/ap-right2.png";
import ApRight3 from "../../imgs/ap-right3.png";
import ApLogo from "../../imgs/wallfort-logo.png";

const AddPlot = ({ toggleAddPlot, setToggaleAddPlot }) => {
  const [plotData, setPlotData] = useState({
    plotNumber: "",
    availability: "available",
    location: "",
  });

  const data = [

    {
      id: 1,
      img:ApRight1
    },
    {
      id: 2,
      img:ApRight2
    },
    {
      id:34,
      img:ApRight3
    },
  ];

  const handleInput = (e) => {
    const { name, value } = e.target;

    setPlotData({
      ...plotData,
      [name]: value,
    });
  };

  const submitPlotDetails = async () => {
    const res = await axios.post("http://localhost:5000/api/plot/addPlot", {
      plotNumber: plotData.plotNumber,
      availability: plotData.availability,
      location: plotData.location,
    });
    if (res.data.success === true) {
      alert("Plot added successfully");
      setPlotData({ plotNumber: "", availability: "", location: "" });
    }
    return res;
  };

  console.log(plotData);

  return (
    <div className="addPlot-main">
      <div className="ap-upper-section">
        <div className="plot-number">
          <img src={ApLogo} alt="" />
          <h4>Plot no. 1</h4>
        </div>
        <div
          className="ap-close"
          onClick={() => setToggaleAddPlot(!toggleAddPlot)}
        >
          <RxCross2 />
        </div>
      </div>
      <div className="ap-bottom-section">
        <div className="ap-bottom-left">
          <div className="bl-left">
            <div className="bl-left-img">
              <img src={ApLMain} alt="" />
            </div>
          </div>
          <div className="bl-right">
            {
              data.map((item)=>{
                return  <div className="bl-right-img" key={item.idy}>
                <img src={item.img} alt="" />
              </div>
              })
            }
           
            {/* <div className="bl-right-img">
              <img src={ApRight2} alt="" />
            </div>
            <div className="bl-right-img">
              <img src={ApRight3} alt="" />
            </div> */}
          </div>
        </div>
        <div className="ap-bottom-right">
          <div className="ap-form">
            <div className="form-plot-number">
              <span>Plot Number</span>
              <input
                type="text"
                placeholder="Plot 44"
                name="plotNumber"
                value={plotData.plotNumber}
                onChange={handleInput}
              />
            </div>
            <div className="plot-availability">
              <span>Select Availability</span>
              <select
                name="availability"
                id="cars"
                value={plotData.availability}
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
                value={plotData.location}
                onChange={handleInput}
              ></textarea>
            </div>
            {/* <div className="plot-imgs">
              <input type="file" placeholder="File"  />
            </div> */}

            <div className="save-plot-details" onClick={submitPlotDetails}>
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlot;
