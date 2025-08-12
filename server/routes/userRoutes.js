const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/sing_up', userController.singup);
router.post('/log_in', userController.login);
router.get('/users', userController.getUsers);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
