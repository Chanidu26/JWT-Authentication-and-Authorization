const express = require('express');
const router = express.Router();
const { Login , Refreshtoken } = require('../controllers/Login');


router.post('/login', Login);
router.post('/refreshtoken', Refreshtoken);

module.exports = router