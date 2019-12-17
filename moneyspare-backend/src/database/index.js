const Sequelize = require('sequelize');
const dbConfig = require('../config/database.config');

const User = require('../app/models/User');
const Expense = require('../app/models/Expenses');

const connection = new Sequelize(dbConfig);

User.init(connection);
Expense.init(connection);

Expense.associate(connection.models);

module.exports = connection;
