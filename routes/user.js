const express = require('express');

const router = express.Router();
const userController = require('../controllers/user');

module.exports = (app) => {
  app.use('/user', router);
  router.get('/', async (req, res) => {
    try {
      const userRecords = await userController.getAllUsers();
      return res.status(200).json(userRecords);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.get('/:id', async (req, res) => {
    try {
      const foundUser = await userController.findUserById(req.params.id);
      return res.status(200).json(foundUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.post('/', async (req, res) => {
    try {
      const createdUser = await userController.createUser(req.body);
      return res.status(200).json(createdUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.put('/:id', async (req, res) => {
    try {
      const updatedUser = await userController.updateUserById(req.params.id, req.body);
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
  router.delete('/:id', async (req, res) => {
    try {
      const deletedUser = await userController.deleteUserById(req.params.id);
      return res.status(200).json(deletedUser);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};
