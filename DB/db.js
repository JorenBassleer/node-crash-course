const mongoose = require('mongoose');
require('dotenv').config();

const { MONGODB_URI } = process.env;
const configObject = { useUnifiedTopology: true };

mongoose.connect(MONGODB_URI, configObject);

mongoose.connection
.on('open', () => {
    console.log('connected to mongode');
}).
on('closed', () => {
    console.log('connection is closed');
})
.on('error', (error) => {
    console.log(error);
});

module.exports = mongoose;
