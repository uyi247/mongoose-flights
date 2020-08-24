const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  new: newTicket,
  create,
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    res.render("tickets/new", { flight });
  });
}

function create(req, res) {
  req.body.flight = req.params.id;
  console.log(req.body);
  const newTicket = new Ticket(req.body);
  newTicket.save(function (err) {
    console.log(newTicket);
    res.redirect("/flights/" + req.params.id);
  });
}
