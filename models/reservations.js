const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./users');
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
    user: { type: mongoose.Types.ObjectId, ref: 'User'},
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
