// mongoDB - database, mongoose - driver
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');
const productsRouter = require('./routes/api/products');
const {
  ROUTES: {products},
} = require('./common/common');

require('dotenv').config();
const {DB_HOST, PORT} = process.env;

// server app
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// router
app.use(products, productsRouter);

// connect to mongoDB with driver lib
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('MongoDB connected');

    // start server
    app.listen(PORT);
    return console.log(`Endpoint: http://localhost:${PORT}${products}`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exitCode = 1;
  });
