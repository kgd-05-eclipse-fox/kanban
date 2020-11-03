const route = require('express').Router()
const taskRoute = require('./taskRoute')
const UserController = require('../controllers/userController')

route.post('/register', UserController.register)
route.post('/login', UserController.login)
route.post('/googleLogin', UserController.googleLogin)

route.use('/tasks', taskRoute)

module.exports = route