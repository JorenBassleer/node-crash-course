const { Router } = require('express');

const appliance = require('./appliance');
const brand = require('./brand');
const type = require('./type');
const user = require('./user');
const reservation = require('./reservation');
const incident = require('./incident');

module.exports = () => {
  const app = Router();
  appliance(app);
  brand(app);
  type(app);
  user(app);
  reservation(app);
  incident(app);

  return app;
};
