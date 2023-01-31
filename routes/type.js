const express = require('express');

const router = express.Router();
const typeController = require('../controllers/type');

module.exports = (app) => {
  app.use('/type', router);
  router.get('/', async (req, res) => {
    try {
      const brandRecords = await typeController.getAllTypes();
      return res.status(200).json(brandRecords);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.get('/:id', async (req, res) => {
    try {
      const foundType = await typeController.findTypeById(req.params.id);
      return res.status(200).json(foundType);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.post('/', async (req, res) => {
    try {
      const createdType = await typeController.createType(req.body);
      return res.status(200).json(createdType);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.put('/:id', async (req, res) => {
    try {
      const updatedType = await typeController.updateTypeById(req.params.id, req.body);
      return res.status(200).json(updatedType);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.delete('/:id', async (req, res) => {
    try {
      const deletedType = await typeController.deleteTypeById(req.params.id);
      return res.status(200).json(deletedType);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  });
};
