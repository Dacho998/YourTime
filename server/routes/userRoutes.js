const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/sign_up', userController.signup);
router.post('/log_in', userController.login);
router.get('/users', userController.getUsers);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
