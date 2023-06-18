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
  type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const Appliance = model('Appliance', applianceSchema);

module.exports = Appliance;
