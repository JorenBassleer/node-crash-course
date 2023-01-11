const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Appliance = require('./models/appliances');

const dbURI = process.env.dburi;
console.log(dbURI);
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((error) => console.log('err'));

app.get('/add-appliance', (req, res) => {
    const appliance = new Appliance({
        name: 'Nieuw apparaat 325',
        details: 'xyz xyz xyz xyz xyz xyz xyz',
    });
    appliance.save()
    .then((result) => {
        res.send(result);
    })
    .catch((error) => console.log(error));
});

app.get('/all-appliances', (req, res) => {
    Appliance.find()

    .then((result) => {
        res.send(result);
    })
    .catch((error) => console.log(error))
});

app.get('/single-appliance', (req, res) => {
    Appliance.findById('63bdc9a193d6e1502256c040')
			.then((result) => {
				res.send(result);
			})
			.catch((error) => console.log(error));
});