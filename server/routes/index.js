const express = require('express')
const router = express.Router()
const Controller = require('../controllers')
const authentication = require('../middlewares/authentication.js')
const authorization = require('../middlewares/authorization.js')

router.post('/login', Controller.login)
router.post('/register', Controller.register)
// router.get('/category', Controller.showCategory)

router.use(authentication)
router.get('/', Controller.showTask)
router.post('/', Controller.createTask)

router.use('/:id', authorization)
router.patch('/:id', Controller.editTask)
router.delete('/:id', Controller.deleteTask)

module.exports = router
