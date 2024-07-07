
const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/Signup');

router.post('/register', signup);

module.exports = router

