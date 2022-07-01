// mongoDB - database, mongoose -  driver
const mongoose = require('mongoose');
require('dotenv').config();
const {DB_HOST} = process.env;

const main = async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
};

(async () => await main())();
