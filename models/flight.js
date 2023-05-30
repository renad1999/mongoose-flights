const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ticket = require('./ticket');



const destinationSchema = new Schema({
destination: {
  type: String,
  required: true
 },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'LAX'
  },

  arrival: {
    type: Date,
    // default: 'N/A'
  }
})

     const flightSchema = new Schema({
    airline: {
      type: String,
      enum: ['American', 'Southwest', 'United'],
      required: true
    },
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
      default: 'DEN'
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999
    },
    departs: {
      type: Date,
      default: () => {
        const oneYearFromNow = new Date();
        oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
        return oneYearFromNow;
      }
    },
    destinations: [destinationSchema],
    tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }],
  });

//   the Flight model
module.exports = mongoose.model('Flight', flightSchema);




