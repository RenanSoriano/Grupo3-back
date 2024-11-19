const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser); // Rota para criar usuário
router.post('/login', loginUser);       // Rota para login

module.exports = router;
