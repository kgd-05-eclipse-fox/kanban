const express = require('express')
const router = express.Router()
const Controller = require('../controllers')
const authentication = require('../middlewares/authentication.js')
const authorization = require('../middlewares/authorization.js')

router.post('/googleLogin', Controller.googleSignIn);
router.post('/login', Controller.login)
router.post('/register', Controller.register)
// router.get('/category', Controller.showCategory)

router.use(authentication)
router.get('/tasks', Controller.showTask)
router.post('/tasks', Controller.createTask)

router.use('/tasks/:id', authorization)
router.put('/tasks/:id', Controller.editTask)
router.delete('/tasks/:id', Controller.deleteTask)

module.exports = router
