const { addPlot, getAllPlot, editPlot , editSinglePlot} = require("../controllers/plotController");

const router = require("express").Router();

router.route("/addPlot").post(addPlot)
// router.route("/editSinglePlot/:id").post(editSinglePlot)
router.route("/editPlot/:id").get(editPlot)
router.route("/getAllPlot").get(getAllPlot)

module.exports=router;  