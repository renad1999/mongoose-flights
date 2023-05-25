const express = require('express');
const router = express.Router();

// /create controller moduls
const flightsCtrl = require('../controllers/flights')

///GET  router for /flights/new
router.get('/new', flightsCtrl.new);

//POST ROUTE
router.post('/', flightsCtrl.create);




module.exports = router;
