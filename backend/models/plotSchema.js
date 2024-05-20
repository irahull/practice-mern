const mongoose = require("mongoose");

const plotSchema = new mongoose.Schema({
  plotNumber: { type: String, required: true },
  availability: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now() },
} );

const plotDetails = mongoose.model("plotDetail", plotSchema);
module.exports = plotDetails;