const { addPlot, getAllPlot } = require("../controllers/plotController");

const router = require("express").Router();

router.route("/addPlot").post(addPlot)
router.route("/getAllPlot").get(getAllPlot)

module.exports=router;  