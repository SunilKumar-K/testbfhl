const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhl');

const app = express();

app.use(bodyParser.json());

app.use('/api/bfhl', bfhlRoutes);

// For Vercel, we export the app instead of calling app.listen
module.exports = app;