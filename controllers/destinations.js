const Flight = require('../models/flight');


 async function create(req, res, next){
    const { id } = req.params

   
    try{ 
        const flight = await Flight.findById(id);
        flight.destinations.push(req.body);
await flight.save()
    } catch (err){

        console.log(err)
    }
    //redirect and repsond to request
    res.redirect(`/flights/${id}`);
 }

 module.exports = {
    create
 };