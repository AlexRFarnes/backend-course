const express = require('express');

const SessionsController = require('../controllers/sessions');

const router = express.Router();

router
  .route('/session')
  .get(SessionsController.new)
  .post(SessionsController.create)
  .delete(SessionsController.destroy);

module.exports = router;
