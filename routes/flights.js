const express = require('express');
const router = express.Router();
const Flight = require('..models/Flight');

//Index route to see flights 
router.get('/flights', async (req, res) => {
    try {
        const flights = await Flight.find();
        res.render('fligh(ts/index', { flights });
    } catch (error) {
        console.error('Error retrieving flights:', error);
        res.status(500).send('Internal Server Error');

    }
    
});





module.exports = router;
