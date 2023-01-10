const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typesSchema = new Schema({
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
}, { timestamps: true });

const Types = mongoose.model('Types', typesSchema);

module.exports = Types;
