const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/create', userController.createUser);
router.get('/all', userController.getAllUsers);
router.get('/find/:userId', userController.getUserById);
router.put('/edit/:userId', userController.updateUser);
router.delete('/delete/:userId', userController.deleteUser)

module.exports = router;