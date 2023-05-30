const Flight = require ('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
  index,
  show,
  new: newFlight,
  create,
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render('flights/index', { title: 'All Flights', flights});
}

async function show(req, res){
  const flight = await Flight.findById(req.params.id);
  const tickets = await Ticket.find({flight: flight._id});
  
  res.render('flights/show', { title: 'Mongoose Flights', flight});
}

function newFlight(req, res) {
res.render('flights/new', { title:'Mongoose Flights', errorMsg: ''} );
}

async function create(req, res){
    try {
        await Flight.create(req.body);
        
        res.redirect('/flights');
      } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
      }}
