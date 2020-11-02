const routers = require('express').Router()
const UserController = require('../controller/user-controller.js')
const authentication = require('../middlewares/authentication.js')

routers.use(authentication)
routers.post('/resgister', UserController.userRegister)
routers.post('/login', UserController.userLogin)


module.exports = routers