const express = require('express');

const router = express.Router();
const RegistrationsController = require('../controllers/registrations');

router.get('/signup', RegistrationsController.new);

router.route('/users').post(RegistrationsController.create);

module.exports = router;
