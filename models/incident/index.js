const { Schema, model } = require('mongoose');

const incidentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Incident = model('Incident', incidentSchema);

module.exports = Incident;
