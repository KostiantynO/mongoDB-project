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
  res.send(
    `<!DOCTYPE html>
      <html>
        <head>
          <title>OnlineShop<title>
        </head>
        <body>
          <a href="https://ko-mongodb-project.herokuapp.com/api/v1/products" rel="noopener noreferrer">Show products</a>
        <body>
      </html>
    `,
  );
});

app.use(products, productsRouter);

const main = async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log('MongoDB connected');

    app.listen(PORT);

    console.log(`Endpoint: http://localhost:${PORT}${products}`);
  } catch (error) {
    console.log(error.message);
    process.exitCode = 1;
  }
};

module.exports = main;
