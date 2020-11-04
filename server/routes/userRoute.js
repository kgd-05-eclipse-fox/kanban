const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/register', UserController.registerUser)

module.exports = router