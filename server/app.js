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

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OnlineShop</title>
  </head>
  <body>
    <a
      href="https://ko-mongodb-project.herokuapp.com/api/v1/products"
      rel="noopener noreferrer nofollow"
      target="_blank"
      >Get all products</a
    >
  </body>
</html>`);
});

app.use(products, productsRouter);

const main = async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log('MongoDB connected');

    app.listen(PORT);

    // console.log(`Endpoint: http://localhost:${PORT}${products}`);
    console.log(`Endpoint: http://localhost:${PORT}`);
  } catch (error) {
    console.log(error.message);
    process.exitCode = 1;
  }
};

module.exports = main;
