const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./src/routes');
const allowCors = require('./src/config/cors.config');
require('./src/database');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);
app.use(allowCors);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
