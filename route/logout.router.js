const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

const controller = require('../controller/logout.controller');

router.get('/', controller.logoutUser);

module.exports = router;
