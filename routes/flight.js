var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");

router.get("/", flightsCtrl.flightsIndex);
router.get("/new", flightsCtrl.new);
router.post("/", flightsCtrl.createFlight);
router.get("/:id", flightsCtrl.show);

module.exports = router;
