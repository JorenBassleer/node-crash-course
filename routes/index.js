const { Router } = require('express');

const appliance = require('./appliance');

module.exports = () => {
  const app = Router();
  appliance(app);

  return app;
};
