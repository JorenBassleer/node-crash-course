const express = require('express');

const router = express.Router();
const brandController = require('../controllers/brand');

module.exports = (app) => {
  app.use('/brand', router);
  router.get('/', async (req, res) => {
    try {
      const brandRecords = await brandController.getAllBrands();
      return res.status(200).json(brandRecords);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.get('/:id', async (req, res) => {
    try {
      const foundBrand = await brandController.findBrandById(req.params.id);
      return res.status(200).json(foundBrand);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.post('/', async (req, res) => {
    try {
      const createdBrand = await brandController.createBrand(req.body);
      return res.status(200).json(createdBrand);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.put('/:id', async (req, res) => {
    try {
      const updatedBrand = await brandController.updateBrandById(req.params.id, req.body);
      return res.status(200).json(updatedBrand);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.delete('/:id', async (req, res) => {
    try {
      const deletedBrand = await brandController.deleteBrandById(req.params.id);
      return res.status(200).json(deletedBrand);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};
