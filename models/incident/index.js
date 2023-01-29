const { Schema, model } = require('mongoose');

const incidentSchema = new Schema({
  details: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  appliance: {
    type: String,
    required: true,
  },
  hasSolved: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Incident = model('Incident', incidentSchema);

module.exports = Incident;
