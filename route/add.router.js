const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

const controller = require('../controller/add.controller');

const authMiddleware = require('../middleware/login.middleware');

router.post('/', authMiddleware.authMiddleware, controller.add);

module.exports = router;
