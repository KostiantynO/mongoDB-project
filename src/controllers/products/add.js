const {SUCCESS, CREATED} = require('../../common/http-codes');
const {Product} = require('../../models');

const add = async (req, res) => {
  const result = await Product.create(req.body);

  res.status(201).json({
    status: SUCCESS,
    code: CREATED,
    data: {result},
  });
};

module.exports = add;
