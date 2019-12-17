const express = require('express');

const UserController = require('./app/controllers/UserController');
const ExpenseController = require('./app/controllers/ExpenseController');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Bem vindo a aplicação' });
});

routes.get('/users', UserController.index);

routes.post('/users', UserController.store);

routes.get('/expenses', ExpenseController.index);

routes.post('/users/:user_id/expenses', ExpenseController.store);

module.exports = routes;
