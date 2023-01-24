const mongoose = require('./DB/db');
require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

const PORT = process.env.PORT || 3000;
const applianceRouter = require('./controllers/appliance');

app.use('/appliance', applianceRouter);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
