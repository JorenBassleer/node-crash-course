const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dbURI = 'mongodb+srv://JBassleerAdmin:7zMg2FaX0M9BdNA2@cluster0.9xeodoz.mongodb.net/ApplianceReservationTool?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((error) => console.log('err'));
// mongoose.set({ strictQuery: true });