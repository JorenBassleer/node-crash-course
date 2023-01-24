const { Schema, model, mongoose } = require('mongoose');
// eslint-disable-next-line no-unused-vars
const User = require('../user');

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
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;
