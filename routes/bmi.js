'use strict'

const express = require('express');
const controller = require('../controller');

const router = express.Router();

router.post('/calculateBmi/', controller.bmi.calculateBmi);

module.exports = router;

