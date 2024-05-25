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
    console.log(error);
  }
};

const getAllPlot = async (req, res) => {
  try {
    const allPlot = await plotDetails.find({});
    res.status(200).json(allPlot);
  } catch (error) {
    console.log(error);
  }
};

const editPlot = async (req, res) => {
  const id = req.params.id;
  try {
    const singlePlot = await plotDetails.find({ _id: id });
    res.status(200).json(singlePlot);
  } catch (error) {
    console.log(error);
  }
};

const editSinglePlot = async (req, res) => {
  const id = req.params.id;
  const { singlePlotData } = req.body;

  const editDetails = new plotDetails(singlePlotData);

  try {
    const resp = await plotDetails.updateOne({ id }, editDetails);
    console.log(resp)
    // if (resp) {
    //   res.status(201).json({
    //     success: true,
    //     msg: "Plot Updated Successfully",
    //   });
    // }


  } catch (error) {
    console.log("error while updating plot details", error)
  }

}

module.exports = { addPlot, getAllPlot, editPlot, editSinglePlot };
