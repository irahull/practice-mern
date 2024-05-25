const { addPlot, getAllPlot, editPlot } = require("../controllers/plotController");

const router = require("express").Router();

router.route("/addPlot").post(addPlot)
router.route("/editPlot").get(editPlot)
router.route("/getAllPlot").get(getAllPlot)

module.exports=router;  