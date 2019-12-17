const express = require('express');
const UserController = require('./app/controllers/UserController');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Bem vindo a aplicação' });
});

routes.get('/users', UserController.index);

routes.post('/users', UserController.store);

module.exports = routes;
