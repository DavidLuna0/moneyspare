const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Bem vindo a aplicação' });
});

routes.get('/home', (req, res) => {
  res.status(200).json({ message: 'connect' });
});

module.exports = routes;
