const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Types = mongoose.model('Types', typesSchema);

module.exports = Types;
