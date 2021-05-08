const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/create', userController.createUser);
router.get('/all', userController.getAllUsers);
router.get('/find/:userId', userController.getUserById)

module.exports = router;