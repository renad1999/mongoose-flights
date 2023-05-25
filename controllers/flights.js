const Flight = require ('../models/flight');

module.exports = {
    new: newFlight,
    create
};

function newFlight(req, res) {
res.render('flights/new', { errorMsg: ''} );
}

async function create(req, res){
    try {
        await Flight.create(req.body);
        // Always redirect after CUDing data
        // We'll refactor to redirect to the movies index after we implement it
        res.redirect('/flights/new');
      } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
      }}



// const Flight = require('../models/flight');