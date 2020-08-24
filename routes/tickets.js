var express = require("express");
var router = express.Router();
var ticketCtrl = require("../controllers/tickets");

router.get("/new/:id", ticketCtrl.new);
router.post("/:id", ticketCtrl.create);

module.exports = router;
