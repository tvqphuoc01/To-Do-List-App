const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

const controller = require('../controller/user.controller.js');

const authMiddleware = require('../middleware/login.middleware');

router.get('/', authMiddleware.authMiddleware, controller.userGet);

module.exports = router;
