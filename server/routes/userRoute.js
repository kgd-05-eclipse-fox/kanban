const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/register', UserController.registerUser)
router.post('/login', UserController.loginUser)
router.post('/loginGoogle', UserController.loginGoogle)

module.exports = router