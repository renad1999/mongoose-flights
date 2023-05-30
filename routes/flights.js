const express = require('express');
const router = express.Router();

// /create controller moduls
const flightsCtrl = require('../controllers/flights');

//GET route for /flights index route 
router.get('/', flightsCtrl.index);


///GET  router for /flights/new
router.get('/new', flightsCtrl.new);


//POST ROUTE
router.post('/', flightsCtrl.create);


//show functionality HAS TO ALWAYS BE below NEW route 
router.get('/:id', flightsCtrl.show);


module.exports = router;
