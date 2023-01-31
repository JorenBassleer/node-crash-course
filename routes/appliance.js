const express = require('express');

const router = express.Router();
const applianceController = require('../controllers/appliance');

module.exports = (app) => {
  app.use('/appliance', router);
  // Get all
  router.get('/', async (req, res) => {
    try {
      const applianceRecords = await applianceController.getAllAppliances();
      return res.status(200).json(applianceRecords);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  // Create
  router.post('/', async (req, res) => {
    try {
      const createdAppliance = await applianceController.createAppliance(req.body);
      return res.status(200).json(createdAppliance);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  // Find by id
  router.get('/:id', async (req, res) => {
    try {
      const foundAppliance = await applianceController.findApplianceById(req.params.id);
      return res.status(200).json(foundAppliance);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  // Update
  router.put('/:id', async (req, res) => {
    try {
      console.log('body: ', req.body);
      const updatedAppliance = await applianceController.updateAppliance(req.params.id, req.body);
      return res.status(200).json(updatedAppliance);
    } catch (error) {
      console.log('errr: ', error);
      return res.status(500).json(error);
    }
  });
  // TODO: Add soft delete
  router.delete('/:id', async (req, res) => {
    try {
      const deletedAppliance = await applianceController.deleteApplianceById(req.params.id);
      return res.status(200).json(deletedAppliance);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};
