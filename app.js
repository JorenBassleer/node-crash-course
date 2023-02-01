const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
const dbURI = process.env.dburi;

const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use('/', routes());
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT);
  })
  .catch(() => console.log('err'));
