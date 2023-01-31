const { Router } = require('express');

const appliance = require('./appliance');
const brand = require('./brand');
const type = require('./type');
const user = require('./user');
const reservation = require('./reservation');

module.exports = () => {
  const app = Router();
  appliance(app);
  brand(app);
  type(app);
  user(app);
  reservation(app);

  return app;
};
