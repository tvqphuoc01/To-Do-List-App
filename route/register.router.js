const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

const controller = require('../controller/register.controller');

const validate = require('../validate/register.validate');

router.get('/', controller.registerGet);

router.post('/', validate.validateNewUser, controller.registerPost);

module.exports = router;
