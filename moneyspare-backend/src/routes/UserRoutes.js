const express = require('express');

const UserController = require('../app/controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.findAll);

routes.get('/users', UserController.findById);

routes.post('/users', UserController.save);

routes.put('/users/:user_id', UserController.update);

module.exports = routes;
