const { Schema, model } = require('mongoose');

const reservationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  appliances: {
    type: Array,
    required: true,
  },
  amounts: {
    type: Array,
    required: true,
  },
}, { timestamps: true });

const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;
