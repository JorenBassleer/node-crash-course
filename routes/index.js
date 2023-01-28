const { Router } = require('express');

const appliance = require('./appliance');
const brand = require('./brand');

module.exports = () => {
  const app = Router();
  appliance(app);
  brand(app);

  return app;
};
