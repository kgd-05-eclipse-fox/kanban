const router = require('express').Router()
const UserController = require('../controllers/userController')
const errorHandler = require('../middleware/errorHandler')

router.post('/register', UserController.registerUser, errorHandler)
router.post('/login', UserController.loginUser, errorHandler)
router.post('/loginGoogle', UserController.loginGoogle, errorHandler)

module.exports = router