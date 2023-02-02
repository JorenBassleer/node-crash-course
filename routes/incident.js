const express = require('express');

const router = express.Router();
const incidentController = require('../controllers/incident');
const applianceController = require('../controllers/appliance');

module.exports = (app) => {
  app.use('/incident', router);
  router.get('/', async (req, res) => {
    try {
      const incidentRecords = await incidentController.getAllReservatuib();
      return res.status(200).json(incidentRecords);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.get('/:id', async (req, res) => {
    try {
      const foundIncident = await incidentController.findIncidentById(req.params.id);
      return res.status(200).json(foundIncident);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.post('/', async (req, res) => {
    try {
      const appliance = applianceController.findApplianceById(req.body.appliance);
      if (!appliance) return res.status(500).json({ error: 'No appliance with that ID found' });
      const createdIncident = await incidentController.createIncident(req.body);
      return res.status(200).json(createdIncident);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.put('/:id', async (req, res) => {
    try {
      const updatedIncident = await incidentController.updateIncidentById(
        req.params.id,
        req.body,
      );
      return res.status(200).json(updatedIncident);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.delete('/:id', async (req, res) => {
    try {
      const deletedIncident = await incidentController.deleteIncidentById(req.params.id);
      return res.status(200).json(deletedIncident);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};
