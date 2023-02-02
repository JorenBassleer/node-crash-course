const express = require('express');

const router = express.Router();
const reservationController = require('../controllers/reservation');

module.exports = (app) => {
  app.use('/reservation', router);
  router.get('/', async (req, res) => {
    try {
      const reservationRecords = await reservationController.getAllReservations();
      return res.status(200).json(reservationRecords);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.get('/:id', async (req, res) => {
    try {
      const foundReservation = await reservationController.findReservationById(req.params.id);
      return res.status(200).json(foundReservation);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.post('/', async (req, res) => {
    try {
      const createdReservation = await reservationController.createReservation(req.body);
      return res.status(200).json(createdReservation);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.put('/:id', async (req, res) => {
    try {
      const updatedReservation = await reservationController.updateReservationById(
        req.params.id,
        req.body,
      );
      return res.status(200).json(updatedReservation);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.delete('/:id', async (req, res) => {
    try {
      const deletedReservation = await reservationController.deleteReservationById(req.params.id);
      return res.status(200).json(deletedReservation);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};
