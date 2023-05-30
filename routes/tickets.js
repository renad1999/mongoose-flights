const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'


router.get('/performers/new', ticketsCtrl.new);

router.post('/performers', ticketsCtrl.create);

module.exports = router;