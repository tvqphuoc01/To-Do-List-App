const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

const controller = require('../controller/login.controller');

const validate = require('../validate/login.validate');

router.get('/', controller.loginGet);

router.post('/', validate.loginValidate, controller.loginPost);

module.exports = router;
