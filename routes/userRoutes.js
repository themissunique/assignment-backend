const express = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middleware/validatorMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/user', authMiddleware, userController.listUsers);
router.get('/worko/user/:userId', authMiddleware, userController.getUser);
router.post('/user', authMiddleware, validateUser, userController.createUser);
router.put('/user/:userId', authMiddleware, validateUser, userController.updateUser);
router.patch('/user/:userId', authMiddleware, validateUser, userController.updateUser);
router.delete('/user/:userId', authMiddleware, userController.deleteUser);

module.exports = router;
