const { addPlot, allPlot } = require("../controllers/plotController");

const router = require("express").Router();

router.route("/addPlot").post(addPlot)
router.route("/getAllPlot").get(allPlot)

module.exports=router;  