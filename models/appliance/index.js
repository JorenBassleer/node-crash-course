const { Schema, model } = require('mongoose');

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

const Appliance = model('Appliance', applianceSchema);

module.exports = Appliance;
