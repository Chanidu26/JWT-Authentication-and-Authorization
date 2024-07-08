
const express = require('express');
const router = express.Router();
const { getUserbyid } = require('../controllers/Authentication');
const { authenticateToken } = require('../utils/authMiddleware');

router.get('/user', authenticateToken, getUserbyid);

module.exports = router