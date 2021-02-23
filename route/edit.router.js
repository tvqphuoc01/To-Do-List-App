const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

const controller = require('../controller/edit.controller.js');

const authMiddleware = require('../middleware/login.middleware');

router.get('/', authMiddleware.authMiddleware, controller.editGet);

module.exports = router;
