const {OK, SUCCESS} = require('../../common/http-codes');
const {Product} = require('../../models');

const getAll = async (req, res) => {
  const result = await Product.find({}); // empty obj -> will find and return all products

  res.json({
    status: SUCCESS,
    code: OK,
    data: {result},
  });
};

module.exports = getAll;
