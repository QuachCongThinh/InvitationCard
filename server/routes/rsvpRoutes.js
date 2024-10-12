const express = require('express');
const router = express.Router();
const { createRSVP } = require('../components/rsvpController');

router.post('/', createRSVP);

module.exports = router;
