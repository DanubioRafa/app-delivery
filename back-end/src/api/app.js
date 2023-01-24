const express = require('express');
const cors = require('cors');
const route = require('../api/routes/index');
const productRouter = require('./routes/productRouter');

const app = express();

app.use(cors());

app.use(productRouter);

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', route.loginRouter);

module.exports = app;
