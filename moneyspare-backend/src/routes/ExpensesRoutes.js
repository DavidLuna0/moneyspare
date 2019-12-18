const express = require('express');

const ExpenseController = require('../app/controllers/ExpenseController');

const routes = express.Router();

routes.get('/users/expenses', ExpenseController.findAll);

routes.get('/users/:user_id/expenses', ExpenseController.findByUserId);

routes.post('/users/expenses', ExpenseController.save);

routes.put('/users/:user_id/expenses/:expense_id', ExpenseController.update);

module.exports = routes;
