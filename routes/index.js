const { Router } = require('express');

const appliance = require('./appliance');
const brand = require('./brand');
const type = require('./type');

module.exports = () => {
  const app = Router();
  appliance(app);
  brand(app);
  type(app);

  return app;
};
