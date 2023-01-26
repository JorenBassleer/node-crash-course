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
      return error;
    }
  });
};
