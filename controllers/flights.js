const Flight = require ('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show
};


async function show(req, res){
  const flight = await Flight.findById(req.params.id);
  res.render('flights/show', { title: 'Mongoose Flights', flight});
}

function newFlight(req, res) {
res.render('flights/new', { title:'Mongoose Movies', errorMsg: ''} );
}

async function create(req, res){
    try {
        await Flight.create(req.body);
        // Always redirect after CUDing data
        // We'll refactor to redirect to the movies index after we implement it
        res.redirect('/flights');
      } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
      }}

      async function index(req, res) {
        try {
            // Fetch all flights from the database
            const flights = await Flight.find({});
    
            // Render the index view and pass the flights data
            res.render('flights/index', {
                flights: flights
            });
        } catch (error) {
            // Handle any errors that occur during the fetch
            res.status(500).send('Failed to fetch flights: ' + error.message);
        }
    }





// const Flight = require('../models/flight');