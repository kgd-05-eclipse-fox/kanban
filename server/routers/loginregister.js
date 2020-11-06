const router = require('express').Router()
const UserController = require('../controllers/usercontroller.js')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleSignIn', UserController.gLogin)

module.exports = router