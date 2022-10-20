const express = require('express');
const TasksController = require('../controllers/tasks');

const router = express.Router();

router.route('/tasks').get(TasksController.index).post(TasksController.create);

router.get('/tasks/new', TasksController.new);

router.get('/tasks/:id/edit', TasksController.edit);

router
  .route('/tasks/:id')
  .get(TasksController.show)
  .put(TasksController.update)
  .delete(TasksController.destroy);

module.exports = router;
