const express = require('express');
const router = express.Router();

// /create controller moduls
const flightsCtrl = require('../controllers/flights')

///GET  router for /flights/new
router.get('/new', flightsCtrl.new);

//POST ROUTE
router.post('/', flightsCtrl.create);


//GET route for /flights index route 
router.get('/', flightsCtrl.index);

//show functionality HAS TO ALWAYS BE below NEW route 
router.get('/:id', flightsCtrl.show);

module.exports = router;
