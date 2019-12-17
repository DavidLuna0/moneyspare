const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./src/routes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
