
const express = require('express');
const bodyParser = require('body-parser');

require('dotenv-safe').config();

const app = express();

app.use(bodyParser.json());

app.use('/', express.static('build'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
