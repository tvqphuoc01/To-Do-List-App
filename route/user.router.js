const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

const controller = require('../controller/user.controller.js');

router.get('/', controller.userGet);

router.post('/', controller.userPost);

module.exports = router;
