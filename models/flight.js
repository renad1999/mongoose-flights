const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'N/A'
  },
  arrival: {
    type: Date,
    default: 'N/A'
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
       destinations: [destinationsSchema]
      }
    }
    // , { timestamps:
  });

//   the Flight model
const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
