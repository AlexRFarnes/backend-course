const express = require('express');
const CategoriesController = require('../controllers/categories');

const router = express.Router();

router
  .route('/categories')
  .get(CategoriesController.index)
  .post(CategoriesController.create);

router.get('/categories/new', CategoriesController.new);
router.get('/categories/:id/edit', CategoriesController.edit);

router
  .route('/categories/:id')
  .get(CategoriesController.show)
  .put(CategoriesController.update)
  .delete(CategoriesController.destroy);

module.exports = router;
