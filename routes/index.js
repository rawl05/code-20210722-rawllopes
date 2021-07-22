'use strict'

const express = require('express');
const router = express.Router();

const bmi = require('./bmi');

router.use('/bmi', bmi);

module.exports = router;
