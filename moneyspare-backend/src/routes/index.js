const express = require('express');

const UserRoutes = require('./UserRoutes');
const ExpensesRoutes = require('./ExpensesRoutes');
const AuthRoutes = require('./AuthRoutes');

const routes = express.Router();

routes.use(UserRoutes);
routes.use(ExpensesRoutes);
routes.use(AuthRoutes);

module.exports = routes;
