const { Schema, model } = require('mongoose');
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
    user: { type: mongoose.Types.ObjectId, ref: 'User'},
}, { timestamps: true });

const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;
