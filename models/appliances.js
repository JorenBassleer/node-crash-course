
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applianceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Appliance = mongoose.model('Appliance', applianceSchema);

module.exports = Appliance;