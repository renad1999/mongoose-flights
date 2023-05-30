const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations');

//all routes in this file will start with /

//POST 
router.post('/flights/:id/destinations', destinationsCtrl.create);


module.exports = router;