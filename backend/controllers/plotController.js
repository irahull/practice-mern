const plotDetails = require("../models/plotSchema");

const addPlot = async (req, res) => {
  try {
    const { plotNumber, availability, location } = req.body;

    const checkPlotNumber = await plotDetails.findOne({ plotNumber });
  
    if (checkPlotNumber) {
      return res
        .status(300)
        .json({ success: false, msg: "Plot No. is already added" });
    }
  
    const addPlot = await plotDetails.create({
      plotNumber,
      availability,
      location,
    });
  
    if (addPlot) {
      res.status(201).json({
        success: true,
        msg: "Plot added Successfully",
      });
    }
  } catch (error) {
    console.log(error)
  }
};

const getAllPlot = async(req, res) => {
     
};

module.exports = { addPlot, getAllPlot };
