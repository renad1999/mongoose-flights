const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  ticket,
  create,
  show
};

async function ticket(req, res) {
  try {
    const tickets = await Ticket.find({}).sort('name');
    res.render('tickets/new', { title: 'Add Ticket', tickets });
  } catch (err) {
    console.log(err);
    res.redirect('/'); y
  }
}

async function create(req, res) {
  try {
    await Ticket.create(req.body);
    res.redirect('/'); 
  } catch (err) {
    console.log(err);
    res.redirect('/'); 
  }
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  const tickets = await Ticket.find({ flight: flight._id });

  res.render('flights/show', { title: 'Flight Details', flight, tickets });
}