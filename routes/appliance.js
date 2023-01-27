const express = require('express');

const router = express.Router();
const applianceController = require('../controllers/appliance');

module.exports = (app) => {
  app.use('/appliance', router);
  router.get('/', async (req, res) => {
    try {
      const applianceRecords = await applianceController.getAllAppliances();
      return res.status(200).json(applianceRecords);
    } catch (error) {
      return error;
    }
  });
};
