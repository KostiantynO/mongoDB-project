const {products: ctrl} = require('../../controllers');
const {ctrlWrapper} = require('../../middlewares');

const productsRouter = require('express').Router();

productsRouter
  .get('/', ctrlWrapper(ctrl.getAll))
  .post('/', ctrlWrapper(ctrl.add))
  .get('/:id', ctrlWrapper(ctrl.getById))
  .put('/:id', ctrlWrapper(ctrl.updateById))
  .delete('/:id', ctrlWrapper(ctrl.deleteById));

module.exports = productsRouter;
